import React from 'react';

const appointmentsData = [
  {
    id: 1,
    date: '2023-10-10',
    time: '10:00 AM',
    doctor: 'Dr. Smith',
  },
  {
    id: 2,
    date: '2023-10-15',
    time: '2:30 PM',
    doctor: 'Dr. Johnson',
  },
  {
    id: 3,
    date: '2023-10-20',
    time: '4:00 PM',
    doctor: 'Dr. Brown',
  },
  // Add more appointment objects here
];

const DashboardAppointments = () => {
  const handleModifyAppointment = (appointment) => {
    // Add logic to modify the appointment here
    alert(`Modify Appointment ID: ${appointment.id}`);
  };

  const handleAccessQuestionnaires = (appointment) => {
    // Add logic to access questionnaires for the appointment here
    alert(`Access Questionnaires for Appointment ID: ${appointment.id}`);
  };

  return (
    <div className="bg-domino-gray rounded-2xl p-4 shadow-xl">
      <h1 className="text-2xl text-dark-purple font-semibold mb-2">Appointments</h1>
      <ul className="space-y-4">
        {appointmentsData.map((appointment) => (
          <li key={appointment.id} className="flex justify-between items-center rounded-2xl p-4">
            <div>
            <p className="text-purple-300 font-bold">
                {appointment.date}
              </p>
              <p className="text-purple-300 font-bold">
                {appointment.time}
              </p>
              <p className="text-white font-semibold text-xl">
                {appointment.doctor}
              </p>
              {/* Add more appointment details here if needed */}
            </div>
            <div>
              <button
                onClick={() => handleModifyAppointment(appointment)}
                className="bg-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-300 shadow-2xl"
              >
                Modify
              </button>
              <button
                onClick={() => handleAccessQuestionnaires(appointment)}
                className="bg-dark-purple text-black px-4 py-2 rounded-3xl hover:bg-purple-300 ml-2 shadow-2xl"
              >
                Questionnaires
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardAppointments;
