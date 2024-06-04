import { useState, useEffect } from 'react';
import { add, eachDayOfInterval, endOfMonth, format, getDay, parse, startOfToday } from 'date-fns';
import nButt from '../Assets/Next.svg';
import pButt from '../Assets/Prev.svg';
// import { useDoctor } from '../../DocList/DoctorContext';

const BetterCalendar2 = ({ availability, onDateClick }) => {
  // useEffect(() => {
  //   // This block of code will run whenever the 'availability' prop changes
  //   console.log('Availability changed:', availability);
  // }, [availability]);

  // const { selectedDoctor } = useDoctor();

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const offset = getDay(firstDayCurrentMonth);

  const emptyDaysFromPreviousMonth = Array.from({ length: offset }, (_, index) => {
    const day = add(firstDayCurrentMonth, { days: -offset + index });
    return day;
  });

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const lastDay = endOfMonth(firstDayCurrentMonth);

  const remainingEmptyDays = 6 * 7 - offset - days.length;

  const daysInNextMonth = Array.from({ length: remainingEmptyDays }, (_, index) => {
    const day = add(lastDay, { days: index + 1 });
    return day;
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  const allDays = [...emptyDaysFromPreviousMonth, ...days, ...daysInNextMonth];

  const isSameMonth = (date1, date2) => {
    return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedTime, setSelectedTime] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [availableTimesForSelectedDate, setAvailableTimesForSelectedDate] = useState([]);

  function onDateTimeSelect(date, time) {
    setSelectedDate(date);
    setSelectedTime(time);
  }

  const handleDateClick = (clickedDate) => {
    if (!isSameMonth(clickedDate, firstDayCurrentMonth)) {
      setCurrentMonth(format(clickedDate, 'MMM-yyyy'));
    } else {
      setSelectedDate(clickedDate);
      const formattedDate = format(clickedDate, 'yyyy-MM-dd');
      const times = availability[formattedDate] || [];
      setAvailableTimesForSelectedDate(times);
      setShowModal(true);
    }
  };

  function countAvailableTimes(date) {
    const dateString = format(date, 'yyyy-MM-dd');
    const availableTimesForDate = availability[dateString] || [];
    return availableTimesForDate.length;
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  
  const handleButtonClick = (time) => {
    setSelectedTime(time);
  };
  return (
    <div className="w-full bg-stone-100 rounded-3xl">
      <div className=" flex items-center justify-evenly">
        <button className="flex flex-1 justify-center" onClick={previousMonth}>
          <img src={pButt} alt="Previous Month" className=" text-white hover:text-gray-400 w-10" />
        </button>
        <div className="mx-8 rounded-3xl flex items-center justify-center">
          <h2 className="font-semibold p-4 text-xl text-gray-600 text-center w-48 ">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </h2>
        </div>
        <button className="flex flex-1 justify-center" onClick={nextMonth}>
          <img src={nButt} alt="Next Month" className="text-white hover:text-gray-400 w-10" />
        </button>
      </div>
      <div className="grid min-w-sm grid-cols-7">
        {dayNames.map((day, index) => (
          <h3
            key={index}
            className="my-2 text-xl text-gray-600 text-center md:m-4"
          >
            {day}
          </h3>
        ))}
        {allDays.map((day, index) => {
          if (!isSameMonth(day, firstDayCurrentMonth)) {
            return (
              <button
                key={index}
                className="text-xl text-gray-400 m-2"
              >
                {format(day, 'd')}
              </button>
            );
          }
          const availabilityCount = countAvailableTimes(day);

          const getButtonStyle = () => {
            if (availabilityCount > 0 && availabilityCount <= 3) {
              return { backgroundColor: '#ffefdc' };
            } else if (availabilityCount >= 4 && availabilityCount <= 6) {
              return { backgroundColor: '#fed7aa' };
            } else if (availabilityCount >= 6 && availabilityCount <= 9) {
              return { backgroundColor: '#fdbf78' };
            } else if (availabilityCount > 10) {
              return { backgroundColor: '#fdb35e' };
            } else {
              return {};
            }
          };
          
          return (
            <button
              key={index}
              style={getButtonStyle()}
              className={`rounded-full hover:bg-gray-400  text-xl text-gray-700 m-2 `}
              onClick={() => handleDateClick(day)}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Currently viewing available timeslots for:{' '}
              {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'No date selected'}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              {availableTimesForSelectedDate.length !== 0
                ? 'Please select a time to continue with booking'
                : 'No Available times, please select another day'}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {availableTimesForSelectedDate.map((time, index) => (
        <button
        key={index}
        className={`rounded-3xl px-4 py-2 text-white ${selectedTime === time ? 'bg-[#FFA400]' : 'bg-zinc-500'} hover:bg-[#FFA400]`}
        onClick={() => handleButtonClick(time)}
      >
        {time}
      </button>
              ))}
            </div>
            <button
              className="mt-4 bg-zinc-500 text-white rounded-3xl px-4 py-2 hover:bg-zinc-600"
              onClick={() => {
                setSelectedTime(null);
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button
              className=" ml-8 mt-4 bg-zinc-500 text-white rounded-3xl px-4 py-2 hover:bg-zinc-600"
              onClick={() => {
                onDateClick(selectedDate, selectedTime); // Call the callback function with selected date and time
                setShowModal(false); // Close the modal
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <p className="text-center text-gray-600">A darker color means greater availability</p>
    </div>
  );
};
export default BetterCalendar2;











