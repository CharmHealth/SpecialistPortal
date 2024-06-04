import React from 'react';
// import { Link } from 'react-router-dom';

const AppointmentConfirmationSuccess = ({ doctor, date, time, virtual, address }) => {
  const confirmationText = virtual
    ? `TeleHealth Appointment with Dr. ${doctor}`
    : `In-Person Appointment with Dr. ${doctor}`;
  const dateText = `${date}, ${time}`;
  const locationText = virtual ? 'Virtual' : `In-Person at ${address}`;
  const navigateToUserProfile = () => {
    // Replace '/user-profile' with the actual URL of the user profile page
    window.location.href = '/user-profile';
  };
  const navigateToModifyAppointment = () => {
    // Replace '/modify-appointment' with the actual URL of the modify appointment page
    window.location.href = '/modify-appointment';
  };

  return (
    <div className="bg-domino-gray flex flex-col w-1/2 mx-auto p-4 rounded-2xl shadow-2xl justify-center items-center">
      <h2 className="text-2xl text-white object-top">Confirmation</h2>
      <h2 className="mt-2 ml-8 text-xl text-white">{confirmationText}</h2>
      <h2 className="mt-2 ml-8 text-xl text-white">{dateText}</h2>
      {virtual || (
        <h2 className="mt-4 ml-8 text-xl text-white">Location: {locationText}</h2>
      )}
      <div className="mx-auto mt-6">
        <h2 className="mb-4 text-xl text-white">Your appointment has been scheduled!</h2>
      </div>
      <div className="flex">
        <button
          className="p-4 bg-dark-purple text-black shadow-xl mr-4 rounded-xl"
          onClick={navigateToModifyAppointment}
        >
          Modify Appointment
        </button>
        <button
          className="p-4 bg-dark-purple text-black shadow-xl rounded-xl"
          onClick={navigateToUserProfile}
        >
          Confirm & Go to User Profile
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmationSuccess;
