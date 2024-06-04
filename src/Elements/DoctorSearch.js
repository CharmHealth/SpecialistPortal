import React, { useEffect, useState, formState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpecialistPage from '../DocList/SpecialistPage';
import { useDoctor } from '../DocList/DoctorContext';
import { useSpecialty } from './SpecialtyContext';
import { useInsurance } from './InsuranceContext';


const DoctorSearch = () => {

  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const { isClicked, setIsClicked } = useSpecialty();
  const { specialty, setSpecialty } = useSpecialty();
  const { insurance, setInsurance } = useInsurance();
  const [specialtyOpen, setSpecialtyOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [specialtyOptions, setSpecialtyOptions] = useState([
    'All Specialists', 'Neurology', 'Immunology', 'Rheumatology', 'Gastroenterology', 'Somnology', 'Psychiatry'
  ]);
  const [insuranceOptions, setInsuranceOptions] = useState([
    'Skip for now', 'Aetna', 'Blue Cross', 'Cigna', 'UnitedHealthcare', 'Cash only'
  ]);

  const [byName, setByName] = useState(false);

  const handleByNameToggle = () => {
    setByName(!byName);
  };

  const handleSearch = () => {
    let specialtyPass
    if (specialty != null) {
      specialtyPass = specialty
    }
    else { specialtyPass = "All Specialists" }

    let insurancePass
    if (insurance != null) {
      insurancePass = insurance
    }
    else { insurancePass = "Skip for now" }

    const queryParams = `?specialty=${specialtyPass}&insurance=${insurancePass}`;
    navigate(`/specialists${queryParams}`);
  };



  // Function to filter options based on search text
  const filterOptions = (options, searchText) => {
    return options.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  // Handle search button click event
  // const handleSearch = () => {
  //   // I still have to implement doctor search logic
  //   console.log(`Searching for doctors with specialty: ${specialty} and insurance: ${insurance}`);
  //   navigate('/specialists');
  // };
  return (
    <div className="items-center w-fit">
      <div className="flex flex-row items-center">
        <div>
          {byName ? (
            <input
              type="text"
              placeholder="Enter specialist's name"
              className="w-[26rem] h-14 pl-8 p-2 text-dark-purple bg-domino-gray rounded-full shadow-xl focus:outline-none"
            />
          ) : (
            <div className={`h-14 w-[26rem] flex space-x-4 bg-domino-gray p-2 rounded-full shadow-xl z-50 
                  ${pathname === '/specialists' ? 'rounded-s-lg' : 'rounded-full'}`}>

              <div className="w-1/2 relative">
                <button
                  onClick={() => setSpecialtyOpen(!specialtyOpen)}
                  className="text-dark-purple px-2 py-2 focus:outline-none w-full flex flex-row items-center justify-center"
                >
                  {specialty ? specialty : "Select Specialty"}

                  {!specialty && (
                    <svg className="ml-2" width="11" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 15L0.339745 0L17.6603 0L9 15Z" fill="#DF9EFF" />
                    </svg>
                  )}
                </button>
                {specialtyOpen && (
                  <div className="w-52 absolute bg-domino-gray text-white  shadow-2xl pt-2 top-8 -left-2">
                    <input
                      type="text"
                      placeholder="Search Specialty"
                      className="w-full p-2 border-b bg-domino-gray text-white focus:outline-none"
                      onChange={(e) => setSpecialtyOptions(filterOptions(specialtyOptions, e.target.value))}
                    />
                    {specialtyOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSpecialtyOpen(false);
                          setSpecialty(option);
                          setIsClicked(false);
                        }}
                        className="cursor-pointer px-2 py-3 hover:bg-dark-purple hover:text-black"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Vertical Divider */}
              <div className="bg-gray-500 w-0.5 h-10 "></div>
              {/* Insurance Dropdown */}
              <div className="w-1/2 relative">
                <button
                  onClick={() => setInsuranceOpen(!insuranceOpen)}
                  className="text-dark-purple px-2 py-2 focus:outline-none w-40"

                >
                  {insurance || 'Insurance/Cash ▼'}
                </button>
                {insuranceOpen && (
                  <div className="w-52 absolute  bg-domino-gray text-white  shadow-2xl pt-2 top-8  -left-4">
                    <input
                      type="text"
                      placeholder="Search Insurance"
                      className="w-full p-2 border-b bg-domino-gray text-white focus:outline-none"
                      onChange={(e) => setInsuranceOptions(filterOptions(insuranceOptions, e.target.value))}
                    />
                    {insuranceOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setInsurance(option);
                          setInsuranceOpen(false);
                        }}
                        className="cursor-pointer px-2 py-3 hover:bg-dark-purple hover:text-black"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Search Button */}
        <button
          className="ml-2 w-12 h-12 bg-dark-purple hover:bg-purple-200 text-white rounded-full px-3 py-3 focus:outline-none shadow-xl"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {byName ? (
        <button className="w-full mt-4 text-dark-purple text-center"
          onClick={handleByNameToggle}
        >
          Want to search for specialists by speciality and insurance?
        </button>
      ) : (
        <button className="w-full mt-4 text-dark-purple text-center"
          onClick={handleByNameToggle}
        >

          Want to search for specialists by name?
        </button>
      )}

    </div>
  );
};
export default DoctorSearch;