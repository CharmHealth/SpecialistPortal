import React  from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import AboutUs from './AboutUs/FinalAbout';
import HomePage from './HomePage/Fullpage';
import NoPage from './ErrorPage/Error';
import Booking2 from './Booking/Booking';
import Layout from './Elements/Header';
import ProfilePage from './UserProfile/ProfilePage';
import SpecialistPage from './DocList/SpecialistPage';
import { DoctorProvider } from './DocList/DoctorContext';
import Footer from './Elements/Footer';
import SignUp from './SignUp/SignUp';
import { SpecialtyProvider } from './Elements/SpecialtyContext';
import { InsuranceProvider } from './Elements/InsuranceContext';
import CustomCalendar from './UserProfile/MyCalendar';
import DisplaySpecialists from './DisplaySpecialists/Disp2';
import Booking3 from './Booking/Process'
import BetterCalendar from './Booking/Components/BetterCalendar2';
import BetterCalendar2 from './Booking/Components/BetterCalendar';
import Confirmation from './Confirmation/Confirmation'

function App() { 

  return ( 
    <>
    <DoctorProvider>
      <SpecialtyProvider>
        <InsuranceProvider>
        <div class="background-radial-gradient">
          <Layout/>
            <Routes>
              <Route>
                <Route index element={<HomePage />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/specialists" element={<DisplaySpecialists />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/customCalendar" element={<CustomCalendar />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/booking" element={<Booking3 />} />
                <Route path="/confirmation" element={<Confirmation />} />
              </Route>
            </Routes>
          </div>
          </InsuranceProvider>
        </SpecialtyProvider>
      </DoctorProvider>
   
     </>
  );
}

export default App;
