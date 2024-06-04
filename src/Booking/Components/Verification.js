import React, { useRef, useState, useEffect } from 'react';


const Verification = () => {
    
    const initialState = {
        otp: '',
    }
    const [formState, setFormState] = useState(initialState)
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    const initialTime = 60; // 15 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        let timer;

        // Update the timer every second
        if (timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        // Clean up the interval when the component unmounts
        return () => clearInterval(timer);

    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="w-full p-8">
            <h2 className="w-fit text-stone-200 text-left text-xl border-b-2 ">Verify your identity</h2>


            <div className="flex flex-row items-center gap-8 px-8 py-40">
                <div className="ml-12 flex flex-row items-center gap-8">
                    <svg width="56" height="90" viewBox="0 0 56 90" fill="silver" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.847 52.981L24.436 53.654L24.701 51.275H23.008L23.273 53.654L20.914 52.981L20.662 54.597L22.847 54.765L21.419 56.685L22.944 57.455L23.83 55.444L24.838 57.467L26.305 56.685L24.864 54.765L27.061 54.611L26.847 52.981ZM50.743 0H4.413C1.976 0 0 1.976 0 4.413V85.588C0 88.025 1.976 90 4.413 90H50.743C53.181 90 55.156 88.024 55.156 85.588V4.413C55.156 1.976 53.181 0 50.743 0ZM20.739 3.53C20.739 3.043 21.135 2.648 21.621 2.648H33.094C33.581 2.648 33.977 3.043 33.977 3.53V5.295C33.977 5.782 33.581 6.177 33.094 6.177H21.621C21.134 6.177 20.739 5.782 20.739 5.295V3.53ZM16.516 2.647C17.491 2.647 18.281 3.437 18.281 4.412C18.281 5.387 17.491 6.177 16.516 6.177C15.541 6.177 14.751 5.387 14.751 4.412C14.75 3.438 15.54 2.647 16.516 2.647ZM27.357 84.691C25.407 84.691 23.827 83.111 23.827 81.161C23.827 79.212 25.407 77.631 27.357 77.631C29.306 77.631 30.887 79.212 30.887 81.161C30.888 83.111 29.307 84.691 27.357 84.691ZM49.861 71.923H5.295V8.815H49.861V71.923ZM37.168 56.686L38.693 57.456L39.579 55.445L40.588 57.468L42.055 56.686L40.614 54.766L42.812 54.612L42.598 52.982L40.187 53.655L40.453 51.276H38.758L39.024 53.655L36.665 52.982L36.413 54.598L38.598 54.766L37.168 56.686ZM13.542 56.686L15.068 57.456L15.953 55.445L16.961 57.468L18.428 56.686L16.987 54.766L19.185 54.612L18.972 52.982L16.561 53.655L16.826 51.276H15.133L15.398 53.655L13.039 52.982L12.787 54.598L14.972 54.766L13.542 56.686ZM32.576 51.275H30.883L31.149 53.654L28.79 52.981L28.538 54.597L30.723 54.765L29.294 56.685L30.819 57.455L31.705 55.444L32.714 57.467L34.181 56.685L32.74 54.765L34.937 54.611L34.724 52.981L32.313 53.654L32.576 51.275ZM21.498 41.95H33.216C33.541 41.95 33.818 41.836 34.046 41.608C34.274 41.38 34.388 41.104 34.388 40.778V33.747C34.388 33.422 34.274 33.144 34.046 32.917C33.817 32.689 33.541 32.575 33.216 32.575H24.232V28.67C24.232 27.807 24.537 27.071 25.148 26.461C25.758 25.851 26.495 25.545 27.357 25.545C28.22 25.545 28.956 25.85 29.566 26.461C30.177 27.071 30.482 27.808 30.482 28.67C30.482 28.881 30.559 29.065 30.713 29.219C30.868 29.374 31.051 29.451 31.263 29.451H32.044C32.256 29.451 32.438 29.373 32.593 29.219C32.747 29.065 32.825 28.882 32.825 28.67C32.825 27.164 32.29 25.877 31.22 24.807C30.15 23.737 28.863 23.202 27.357 23.202C25.852 23.202 24.564 23.737 23.494 24.807C22.424 25.877 21.889 27.164 21.889 28.67V32.576H21.498C21.172 32.576 20.896 32.69 20.668 32.918C20.44 33.146 20.326 33.423 20.326 33.748V40.779C20.326 41.105 20.44 41.381 20.668 41.609C20.896 41.836 21.173 41.95 21.498 41.95Z" />
                    </svg>

                    <h4 className="w-[60%] text-white text-base text-left">A one time password has been sent to your number. Please enter it below to proceed with your booking. Codes are valid for 15 minutes.
                    </h4>
                </div>

                <div className="w-full flex flex-col w-full  items-center">
                    <div className="w-full flex flex-col items-center">
                        <label htmlFor="otp" className="w-full text-left font-medium text-base text-stone-200 mb-2">One Time Password </label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            className="block py-2.5 px-4 w-full text-base text-gray-900 border-2 border-gray-300 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder=""
                            required
                            value={formState.otp}
                            onChange={event => setInput('otp', event.target.value)}
                        />
                    </div>

                    <div className='mt-4 w-fit h-8'>
                        {timeLeft > 0 ? (
                            <p className="text-stone-200 text-left"> Need a new code? You can request a new OTP in
                                : {formatTime(timeLeft)}</p>
                        ) : (
                            <button 
                            className="bg-orange-400 text-white py-2 px-4 rounded-2xl" 
                            onClick={() => setTimeLeft(initialTime)}>Request new OTP</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verification;