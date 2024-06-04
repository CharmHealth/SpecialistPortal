//check whether the API handles this

import { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export function AppointmentDetails({ children }) {
  const [selectedAppointment, setSelectedAppointment] = useState(null);


  return (
    <AppointmentContext.Provider value={{ selectedAppointment, setSelectedAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}
