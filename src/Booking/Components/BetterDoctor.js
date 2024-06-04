import Headshot from '../Assets/Vector.svg'
import Duration from '../Assets/time.svg'
import Method from '../Assets/videocam.svg'
import InPerson from '../Assets/person.svg'
import Virtual from '../Assets/video.svg'
import Calen from '../Assets/Cal.svg'
import { useDoctor } from '../../DocList/DoctorContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const docName = 'Abigail Alvarez';
const specialty = 'Cardiovascular';
const duration = '1 h 30 min';
const noAvail = 'Not available';
const schedule = 'Schedule'

const Doctor = ({ selectedDate, selectedTime }) => {

  const {selectedDoctor} = useDoctor();
  

  const meetingOptions = selectedDoctor ? selectedDoctor.meetingOptions : [];
  const meetingOptionsFormatted = meetingOptions.join(', ');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  
  

  return (
    <div className="bg-domino-gray w-full grid grid-cols-1 justify-items-center">
      <div className='grid grid-cols-1 xl:pt-20'>
        <p className="text-5xl text-bright-purple font-bold text-left pb-6">Dr. {selectedDoctor && selectedDoctor.firstname} {selectedDoctor && selectedDoctor.lastname} </p>
        <p className="text-2xl text-white font-bold text-left pb-4">{selectedDoctor && selectedDoctor.specialty}</p>

        <div className="flex pt-4 flex-row">
          <img className='pr-4' src={Calen} alt="Calendar" />
          {selectedDate && <p className="text-xl text-white font-medium flex flex-none">
          {days[selectedDate.getDay()]} {months[selectedDate.getMonth()]} {selectedDate.getDate().toString()}, {selectedDate.getFullYear().toString()} 
          </p>}
      {selectedTime && <p className="text-xl text-white font-medium flex flex-none pl-2 "> at {selectedTime.toString()}</p>}
        </div>
        <div className="flex flex-row pt-4">
          <img className='pr-4' src={Duration} alt="Duration" />
          <p className="text-xl text-white font-medium flex flex-none">{duration}</p>
        </div>
        <div className="flex pt-4 flex-row">
          <img className='pr-4' src={Method} alt="Method" />
          <p className="text-xl text-white font-medium">{meetingOptionsFormatted}</p>
        </div>
        <div className='grid grid-cols-1 pt-8 gap-4 justify-items-center md:grid-cols-2 md:justify-normal'>
          <button className='w-72 h-20 flex flex-none flex-row bg-faded-gray rounded-full text-white items-center justify-center text-2xl'>
            <p className='w-1/2'>{noAvail}</p>
            <img src={InPerson} alt="InPerson" />
          </button>
          <Link to = "/login">
            <button className='w-72 h-20 flex flex-none flex-row bg-bright-purple rounded-full text-white items-center justify-center text-2xl'>
              <p className='w-1/2'>{schedule}</p>
              <img src={Virtual} alt="Virtual" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doctor;