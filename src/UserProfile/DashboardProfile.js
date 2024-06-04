import SampleProfilePic from './SampleProfilePic.svg' 
import React, { useEffect, useState } from 'react';

const patientName = 'Cathyn';

const Testimonial3 = () => {
  const [password, setPassword] = useState('');
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePasswordChange = () => {
    // Implement password change logic here
    alert('Password updated successfully');
    setIsEditingPassword(false);
  };

  useEffect(() => {
    console.log("SHOW =>", showModal);
  }, [showModal]); // Add dependencies if needed
  
    return (
    <>
        <div className="relative bg-domino-gray w-full h-full flex justify-center items-center rounded-2xl shadow-2xl">
            <img src={SampleProfilePic} alt="t1" className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-2/5" />
            <div className="text-dark-purple text-6xl font-semibold">
                <p>{patientName}</p>
            </div>
            {/* <div style={{left: 1/2, top: 507, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontWeight: '700', wordWrap: 'break-word'}} className='ml-20'>Patient</div> */}
        </div>
    </>
    );
};

export default Testimonial3; 