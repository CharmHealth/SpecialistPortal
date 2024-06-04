import React from "react";
import Navbar from "../Elements/Navbar.js";
import LocationCapsule from "../Elements/LocationCapsule.js";
import DoctorSearch from '../Elements/DoctorSearch.js';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Header() {

  const [textColor, setTextColor] = useState('hsl(280,50%,95%)');
  // const [textSize, setTextSize] = useState('1.5rem')

    return (
  <>
  <section class="bg-transparent mb-30">

    <div class="px-6 py-12 text-center md:px-12 lg:text-left">
      <div class="container mx-auto">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0">
            {/* <h1 class="mb-12 text-5xl font-bold tracking-tight text-[hsl(280,50%,95%)] md:text-6xl xl:text-7xl 2xl:text-8xl">
              Coordinated Care. <br /><span class="text-[hsl(280,100%,81%)]">Specialized Excellence.</span>
            </h1> */}
            <h1 class="text-2xl font-bold tracking-tight text-[hsl(280,50%,95%)] md:text-3xl xl:text-4xl 2xl:text-5xl" style={{color: textColor, padding: '0px'}}>
              <TypeAnimation
                  sequence={[
                    "Coordinated Care",
                    1000,
                    () => setTextColor('hsl(280,100%,81%)'),
                    "Specialized Excellence",
                    1000,
                    () => setTextColor('hsl(280,50%,95%)'),
                  ]}
                  speed={20}
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1.65em' }}
        />
      </h1>
      
      <br></br>
      <p class="text-2xl text-[hsl(218,81%,95%)]">for neuropsychiatric conditions</p>
      <br></br>

            <p class="text-lg text-[#e8effd9f]">
            SpeciaList is a cutting edge platform dedicated to revolutionizing specialist accessibility, ensuring patients receive the highest quality of medical attention and care.
            </p>
            <br></br>
            <DoctorSearch/>
          </div>
          {/* <img
                  src="/uyffty.png"
                  class="hero-mg max-w-screen-md"
                  alt="" /> */}
            <br></br>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1440 229" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-2 11.8275L28.1042 16.9619C58.2083 22.4838 118.417 32.1713 178.625 42.8275C238.833 53.4838 299.042 63.1713 359.25 58.3275C419.458 53.4838 479.667 32.1713 539.875 16.9619C600.083 1.1713 660.292 -8.5162 720.5 11.8275C780.708 32.1713 840.917 84.4838 901.125 104.828C961.333 125.171 1021.54 115.484 1081.75 94.4619C1141.96 73.8276 1202.17 42.8275 1262.38 27.3275C1322.58 11.8275 1382.79 11.8275 1412.9 11.8275H1443V228.828H1412.9C1382.79 228.828 1322.58 228.828 1262.38 228.828C1202.17 228.828 1141.96 228.828 1081.75 228.828C1021.54 228.828 961.333 228.828 901.125 228.828C840.917 228.828 780.708 228.828 720.5 228.828C660.292 228.828 600.083 228.828 539.875 228.828C479.667 228.828 419.458 228.828 359.25 228.828C299.042 228.828 238.833 228.828 178.625 228.828C118.417 228.828 58.2083 228.828 28.1042 228.828H-2V11.8275Z" fill="#333237"/>
    </svg>
  </section>
  </>
  

    );
}