import Head from "./Assets/Vector.svg";
import Doctor from "./Components/BetterDoctor";
import BetterCalendar from "./Components/BetterCalendar";

import React, { useState } from 'react';

const Booking2 = () => {
    const [selectedDate, setSelectedDate] = useState(null); // New state for selected date
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateTimeSelect = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
    };

    return (
        <div className="grid grid-cols-1 justify-items-center">
            <div className="background-radial-gradient w-full relative">
                <div className="">
                    <img src={Head} alt="t1" className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 md:w-96 md:top-20 lg:top-16 xl:left-1/4" />
                </div>
            </div>
            <div className="bg-domino-gray flex flex-col mt-44 w-full md:mt-60 align-center items-center xl:grid xl:grid-cols-2 ">
                <div className="mt-32 p-4 md:mt-52 lg:mt-52 xl:mt-12 2xl:w-full flex justify-center items-center">

                <Doctor selectedDate={selectedDate} selectedTime={selectedTime}/>
                </div>
                <div className="mt-12 p-4 pb-8 2xl:w-[43rem] flex justify-center items-center">
                <BetterCalendar onDateTimeSelect={handleDateTimeSelect} />
                </div>
            </div>
        </div>
    );
}

export default Booking2;