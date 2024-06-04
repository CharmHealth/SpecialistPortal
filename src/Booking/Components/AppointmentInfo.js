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

const AppointmentInfo = ({ selectedDate, selectedTime }) => {

  const {selectedDoctor} = useDoctor();

  useEffect(()=>{console.log('selected doc: ', selectedDoctor)});
  

  const meetingOptions = selectedDoctor ? selectedDoctor.meetingOptions : [];
  const meetingOptionsFormatted = meetingOptions.join(', ');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  
  

  return (
    <div className="bg-transparent w-full grid grid-cols-1 px-7">
      <div className='grid grid-cols-1 xl:pt-20'>
        {/* <p className="text-5xl text-bright-purple font-bold text-left pb-6">Dr. {selectedDoctor && selectedDoctor.firstname} {selectedDoctor && selectedDoctor.lastname} </p>
        <p className="text-2xl text-white font-bold text-left pb-4">{selectedDoctor && selectedDoctor.specialty}</p> */}
        <p className='text-2xl text-[hsl(280,100%,81%)]  font-bold px-7'>Appointment Details</p>
        <br></br>
        <div className="flex flex-row">
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
        </div>
      </div>
  );
}

export default AppointmentInfo;