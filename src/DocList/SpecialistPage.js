import React, { useEffect } from 'react';
import DoctorDescription from './DoctorDescription';
import DoctorList from './DoctorList';
import Navbar from '../Elements/Navbar';
import LocationCapsule from '../Elements/LocationCapsule';
import DoctorSearch from '../Elements/DoctorSearch';
import { useState } from 'react';
import FooterPlain from '../Elements/Footerplain';

function SpecialistPage() {
  
  const [selectedDoctor, setSelectedDoctor] = useState();



  return (
    <div className="h-screen bg-transparent mb-64">
      <div className="mb-1 mt-20">
        <DoctorSearch className="z-0"/>
      </div>
      <div className="h-[2/3]">
        <div className="flex flex-row">
          <div className="mt-[3rem] flex-auto z-10"><DoctorList setSelectedDoctor={setSelectedDoctor}/></div>
          <div className="mt-[6rem] flex-auto w-full z-10"><DoctorDescription selectedDoctor={selectedDoctor}/></div>
        </div>
      </div>
      <footer class="h-3">
          <FooterPlain/>
      </footer>
    </div>
  );
}

export default SpecialistPage;
