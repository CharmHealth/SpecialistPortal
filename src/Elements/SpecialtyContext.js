import React, { createContext, useContext, useState } from 'react';

const SpecialtyContext = createContext();

export const useSpecialty = () => {
  return useContext(SpecialtyContext);
};

export function SpecialtyProvider({ children }) {
  const [specialty, setSpecialty] = useState();
  const [isClicked, setIsClicked] = useState();
  
  return (
    <SpecialtyContext.Provider value={{ specialty, setSpecialty, isClicked, setIsClicked }}>
      {children}
    </SpecialtyContext.Provider>
  );
}
