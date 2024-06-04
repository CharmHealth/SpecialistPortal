import React, { useState, useEffect } from 'react';

const LocationCapsule = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      // Fetch location suggestions from Mapbox Places API
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=pk.eyJ1IjoidmliaHVjIiwiYSI6ImNsbjU4MHZiNzA0eXEycm4xZWxsNHdhNGUifQ.i1fRI-XmWqD5Xk1Kra0lfw`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.features) {
            const suggestionsData = data.features.map((feature) => ({
              placeName: feature.place_name,
            }));
            setSuggestions(suggestionsData);
          }
        })
        .catch((error) => {
          console.error('Error fetching location suggestions:', error);
        });
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.placeName);
    setIsDropdownOpen(false);
    setInputValue('');
  };

// API Key = pk.eyJ1IjoidmliaHVjIiwiYSI6ImNsbjU4MHZiNzA0eXEycm4xZWxsNHdhNGUifQ.i1fRI-XmWqD5Xk1Kra0lfw
const getLocation = () => {
  setIsLoading(true);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoidmliaHVjIiwiYSI6ImNsbjU4MHZiNzA0eXEycm4xZWxsNHdhNGUifQ.i1fRI-XmWqD5Xk1Kra0lfw`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch location data.');
        }

        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const placeData = data.features[0];
          const town = placeData.text; // Get the town
          const stateProvinceRegion = placeData.context
            .filter((context) => context.id.startsWith('place') || context.id.startsWith('region'))
            .map((context) => context.text)
            .join(', '); // Get state/province/region

          setLocation(`${town}, ${stateProvinceRegion}`);
          setIsDropdownOpen(false);
        } else {
          setLocation('Location not found');
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
        setLocation('Location not found');
      } finally {
        setIsLoading(false);
      }
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
};


return (
  <div className="relative inline-block">
    <button
      className={`bg-domino-gray text-white py-4 px-6 rounded-full focus:outline-none shadow-xl ${
        location ? 'hover:bg-zinc-600' : ''
      }`}
      onClick={toggleDropdown}
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 inline-block mr-2" // Adjusted the width and height
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 22s-8-4.5-8-11a8 8 0 018-8 8 8 0 018 8c0 6.5-8 11-8 11z"
          />
          <circle strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" cx="12" cy="10" r="3" />
        </svg>
        {isLoading ? 'Loading...' : location || 'Location'}
    </button>
    {isDropdownOpen && (
      <div className="absolute mt-2 bg-domino-gray text-white px-6 rounded-lg shadow-2xl top-14 right-11">
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:rounded-lg focus:outline-none"
          onClick={getLocation}
        >
          Use My Location
        </button>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full border-t border-gray-300 px-2 py-2 focus:outline-none bg-domino-gray text-white"
          value={inputValue}
          onChange={handleLocationInput}
        />
        <ul className="mt-2">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-700 hover:rounded-lg"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.placeName}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default LocationCapsule;