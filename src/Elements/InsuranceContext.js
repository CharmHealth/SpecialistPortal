import React, { createContext, useContext, useState } from 'react';
const InsuranceContext = createContext();
export const useInsurance = () => {
  return useContext(InsuranceContext);
};
export function InsuranceProvider({ children }) {
  const [insurance, setInsurance] = useState(null);
  return (
    <InsuranceContext.Provider value={{ insurance, setInsurance }}>
      {children}
    </InsuranceContext.Provider>
  );
}