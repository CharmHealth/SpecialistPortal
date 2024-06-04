import React, { useEffect } from 'react';
import { useState } from 'react';
import Alzeimers from './assets/Alzeimers.png';
import Video from './assets/noun-video-6114319 1.png';
import Person from './assets/Vector.png';
import Arrow from './assets/Arrow.png';
import arrowUp from './assets/arrowUp.png';
import FemaleDoc2 from './assets/FemaleDoc2.jpg'
import FemaleDoctor from './assets/FemaleDoctor.jpg';
import Availability from './DoctorList';
import doctors from './DoctorList'
import currentDoctor from './DoctorList'
import { Outlet, Link } from "react-router-dom";
import { useDoctor } from './DoctorContext';
import Doctor from '../Booking/Components/BetterDoctor';
import BetterCalendar from '../Booking/Components/BetterCalendar';
import AppointmentInfo from '../Booking/Components/AppointmentInfo';


function DoctorDescription() {
  const {selectedDoctor} = useDoctor();

  const [selectedDate, setSelectedDate] = useState(null); // New state for selected date
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateTimeSelect = (date, time) => {
      setSelectedDate(date);
      setSelectedTime(time);
  };

  const [expanded, setExpanded] = useState(false);
  const handleToggleBio = () => {
    setExpanded(!expanded);
  };
  const bioText = selectedDoctor && selectedDoctor.bio;
  const displayBio = expanded ? bioText : bioText && bioText.slice(0, 300);


  return (
    <div className="bg-zinc-600 w-full h-full">
      <div className="flex place-items-center justify-center items-center">
        <div
          className="w-48 h-48 rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${FemaleDoc2})`,
            backgroundSize: 'cover',
            marginTop: '-5rem', // Adjust this value to move the circle up
          }}
        >
        </div>
      </div>
      <br></br>
      <div className="place-items-center">
        <div className="text-center text-white">
          <div>
            <p className="text-6xl text-[hsl(280,100%,81%)]">{"Dr. " +  selectedDoctor.firstname + " " + selectedDoctor.lastname}</p>
            <p className='text-2xl'>{selectedDoctor.speciality + " (" + selectedDoctor.degree + ")"}</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <div className="grid grid-cols-2 place-items-center gap-4">
            <div className="flex items-center p-2 rounded-full">
              <svg
                width="52"
                height="66"
                viewBox="0 0 52 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg width="52" height="66" viewBox="0 0 52 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.4636 42.0619C44.8037 42.0619 44.2686 41.5186 44.2686 40.8486C44.2686 40.1786 44.8037 39.6352 45.4636 39.6352H46.9191V8.16559H46.707C46.0471 8.16559 45.5135 7.62228 45.5135 6.95224C45.5135 6.2822 46.0486 5.74046 46.707 5.74046H48.1141C48.774 5.74046 49.3091 6.28378 49.3091 6.95224V40.847C49.3091 41.517 48.774 42.0604 48.1141 42.0604H45.4636V42.0619ZM7.99516 18.392C7.33528 18.392 6.80175 17.8487 6.80175 17.1786C6.80175 16.5086 7.33684 15.9653 7.99516 15.9653H44.0034C44.6633 15.9653 45.1984 16.5086 45.1984 17.1786C45.1984 17.8487 44.6633 18.392 44.0034 18.392H7.99516ZM34.2611 10.4561V1.74241C34.2611 1.07237 34.7962 0.529053 35.4561 0.529053H42.2375C42.8974 0.529053 43.4325 1.07237 43.4325 1.74241V10.4561C43.4325 11.1261 42.8974 11.6694 42.2375 11.6694H35.4561C34.7962 11.6694 34.2611 11.1261 34.2611 10.4561ZM36.6495 2.95576V9.24431H41.041V2.95576H36.6495ZM8.56613 10.4561V1.74241C8.56613 1.07237 9.10121 0.529053 9.7611 0.529053H16.5425C17.2024 0.529053 17.7359 1.07237 17.7359 1.74241V10.4561C17.7359 11.1261 17.2008 11.6694 16.5425 11.6694H9.7611C9.10121 11.6694 8.56613 11.1261 8.56613 10.4561ZM10.9545 2.95576V9.24431H15.346V2.95576H10.9545ZM24.8028 28.7689C24.8028 28.0988 25.3379 27.5555 25.9977 27.5555C26.6576 27.5555 27.1927 28.0988 27.1927 28.7689V36.5923L33.6434 38.612C34.2721 38.8084 34.6246 39.4848 34.4328 40.1231C34.2393 40.7615 33.5732 41.121 32.9445 40.9246L25.7372 38.6674C25.2021 38.547 24.8043 38.0623 24.8043 37.4841V28.7705L24.8028 28.7689ZM25.9977 49.849C29.3611 49.849 32.4063 48.4645 34.609 46.2279C36.8133 43.9897 38.1768 40.8977 38.1768 37.4826C38.1768 34.0674 36.8133 30.9754 34.609 28.7388C32.4047 26.5006 29.3596 25.1161 25.9977 25.1161C22.6343 25.1161 19.5892 26.5006 17.3849 28.7388C15.1806 30.977 13.8187 34.069 13.8187 37.4826C13.8187 40.8977 15.1822 43.9897 17.3849 46.2279C19.5892 48.4661 22.6343 49.849 25.9977 49.849ZM36.2985 47.9418C33.6621 50.6188 30.0195 52.2741 25.9977 52.2741C21.9745 52.2741 18.3334 50.6188 15.697 47.9418C13.0605 45.2648 11.4303 41.5677 11.4303 37.4826C11.4303 33.399 13.0605 29.7003 15.697 27.0233C18.3334 24.3463 21.9745 22.691 25.9977 22.691C30.021 22.691 33.6621 24.3479 36.2985 27.0233C38.935 29.7003 40.5652 33.399 40.5652 37.4826C40.5652 41.5677 38.9334 45.2648 36.2985 47.9418ZM30.9836 5.74205C31.6434 5.74205 32.177 6.28537 32.177 6.95382C32.177 7.62386 31.6419 8.16718 30.9836 8.16718H21.0104C20.3505 8.16718 19.8154 7.62386 19.8154 6.95382C19.8154 6.28378 20.3505 5.74205 21.0104 5.74205H30.9836ZM5.29009 5.74205C5.94998 5.74205 6.48351 6.28537 6.48351 6.95382C6.48351 7.62386 5.94842 8.16718 5.29009 8.16718H5.07793V39.6368H6.53499C7.19487 39.6368 7.72996 40.1801 7.72996 40.8502C7.72996 41.5202 7.19487 42.0635 6.53499 42.0635H3.88296C3.22307 42.0635 2.68799 41.5202 2.68799 40.8502V6.9554C2.68799 6.28537 3.22307 5.74363 3.88296 5.74363H5.29009V5.74205Z" fill="white"/>
                </svg>
              </svg>
              <span className="ml-2" style={{ color: 'white' }}>
                Available By Sept 5
              </span>
            </div>

            <div className="flex items-center p-2 rounded-full">
              <svg
                width="54"
                height="55"
                viewBox="0 0 54 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: '-1.5rem' }} // Adjust this value to move the circle up
              >
                <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0953 54.061C11.5208 54.513 10.7145 54.513 10.14 54.061C10.0515 53.9913 9.89768 53.8661 9.68782 53.6889C9.34505 53.3994 8.96494 53.0649 8.55668 52.6886C7.39288 51.6161 6.22965 50.4188 5.14035 49.1215C1.94251 45.3131 0 41.4297 0 37.6C0 31.4144 4.97754 26.4 11.1176 26.4C17.2578 26.4 22.2353 31.4144 22.2353 37.6C22.2353 41.4297 20.2928 45.3131 17.0949 49.1215C16.0056 50.4188 14.8424 51.6161 13.6786 52.6886C13.2704 53.0649 12.8902 53.3994 12.5475 53.6889C12.3376 53.8661 12.1838 53.9913 12.0953 54.061ZM11.1176 43.2C14.1877 43.2 16.6765 40.6928 16.6765 37.6C16.6765 34.5072 14.1877 32 11.1176 32C8.0476 32 5.55882 34.5072 5.55882 37.6C5.55882 40.6928 8.0476 43.2 11.1176 43.2ZM11.1176 40C9.80191 40 8.7353 38.9255 8.7353 37.6C8.7353 36.2745 9.80191 35.2 11.1176 35.2C12.4334 35.2 13.5 36.2745 13.5 37.6C13.5 38.9255 12.4334 40 11.1176 40ZM32.9512 23.2C29.6643 23.2 27 25.8855 27 29.2C27 32.514 29.6655 35.2 32.9541 35.2H42.8967C48.1594 35.2 52.425 39.4974 52.425 44.8C52.425 50.1032 48.1608 54.4 42.8949 54.4H19.8529C19.4144 54.4 19.0588 54.0418 19.0588 53.6V52C19.0588 51.5582 19.4144 51.2 19.8529 51.2H42.8949C46.4063 51.2 49.2485 48.336 49.2485 44.8C49.2485 41.2647 46.405 38.4 42.8967 38.4H32.9541C27.9109 38.4 23.8235 34.2811 23.8235 29.2C23.8235 24.1186 27.9096 20 32.9512 20H34.9412V11.1621L34.2196 11.8331C33.8973 12.1327 33.3949 12.1125 33.0975 11.7878L32.0202 10.6122C31.7227 10.2875 31.7428 9.78137 32.0651 9.48169L35.7353 6.0687V0.8C35.7353 0.358172 36.0908 0 36.5294 0H38.1177C38.5562 0 38.9118 0.358172 38.9118 0.8V3.11486L41.8051 0.424316C42.4135 -0.141436 43.3512 -0.141436 43.9596 0.424316L53.6996 9.48169C54.0219 9.78137 54.042 10.2875 53.7445 10.6122L52.6673 11.7878C52.3698 12.1125 51.8674 12.1327 51.5451 11.8331L50.8235 11.1621V21.6C50.8235 22.4837 50.1125 23.2 49.2353 23.2H32.9512Z" fill="#E0DBDD"/>
                </svg>
              </svg>
              <span className="ml-2" style={{ color: 'white' }}>
                ~20min Away
              </span>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="flex">
          <div className='flex-1'>
          <p className="px-5 mb-3 text-lg dark:text-gray-400" style={{ color: 'white' }}>
            {displayBio}
          </p>
          {bioText && bioText.length > 100 && (
          <img
            src={expanded ? arrowUp : Arrow}
            alt="Arrow"
            className='px-48'
            style={{ marginTop: '8px', cursor: 'pointer' }}
            onClick={handleToggleBio}
          />
          )}
          <br></br>
          <div className="grid grid-cols-2 gap-4 px-7">
          <button className="bg-slate-600 hover:bg-fuchsia-400 text-white font-bold py-4 px-6 rounded-full w-62 h-16 flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
            <span className="ml-2">not available</span>
            <img src={Person} alt="Person" style={{ display: 'flex' }} />
          </button>
          <Link to="/login">
            <button className="bg-slate-600 hover:bg-fuchsia-400 text-white font-bold py-4 px-6 rounded-full w-62 h-16 flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-fuchsia-300">
              <span className="ml-2">schedule</span>
              <img src={Video} alt="Video" style={{ display: 'flex', marginTop: '8px' }} />
            </button>
          </Link>
        </div> 
        <div className="doc">
                <div className="w-full">
                <AppointmentInfo selectedDate={selectedDate} selectedTime={selectedTime}/>
                </div>
          </div>
          </div>
          <div className="flex-1 px-7">
                <BetterCalendar onDateTimeSelect={handleDateTimeSelect} />
        </div>   
        </div>
        <br></br>
      </div>
      
    </div>
  );
}

export default DoctorDescription;
