import React, { useRef, useState, useLayoutEffect } from 'react';
import PhoneInput from 'react-phone-input-2'
import './Style.css'
const Information = ({ setInput, setPhoneNumber }) => {

    const initialState = {
        firstName: '',
        lastName: '',
        midName: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        primaryDiagnosis: '',
    }

    const [formState, setFormState] = useState(initialState)
    function setInput(key, value) {
        // Update the component state
        setFormState((prevFormState) => ({ ...prevFormState, [key]: value }));
    
        // Save the updated form state to local storage
        localStorage.setItem('formState', JSON.stringify({ ...formState, [key]: value }));
    }
    
    function setPhoneNumber(key, value) {
        // Update the component state
        setFormState((prevFormState) => ({ ...prevFormState, [key]: value.toString() }));
    
        // Save the updated form state to local storage
        localStorage.setItem('formState', JSON.stringify({ ...formState, [key]: value.toString() }));
    }
    

    return (
        <div className="w-full p-8">
            <h2 className="w-fit text-stone-200 text-left text-xl border-b-2">Tell us a bit more about yourself</h2>

            <div className="mt-5">

                <div className="flex md:flex-row justify-between gap-6 w-full mb-2">
                    <div className="w-[40%] mx-auto flex flex-col">
                        <label htmlFor="firstName" className="text-left text-base text-stone-200 mb-2">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
                            placeholder="Your first name"
                            required
                            value={formState.firstName}
                            onChange={event => {
                                const inputFN = event.target.value;
                                const lettersFN = inputFN.replace(/[^a-zA-Z]/g, '');
                                setInput('firstName', lettersFN);
                            }} />
                    </div>

                    <div className="w-[20%] mx-auto flex flex-col">
                        <label htmlFor="midName" className="text-left font-medium text-base text-stone-200 mb-2">M.I.</label>
                        <input
                            type="text"
                            id="midName"
                            name="midName"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
                            placeholder="M.I."
                            required
                            value={formState.midName}
                            onChange={event => {
                                const inputMN = event.target.value;
                                const lettersMN = inputMN.replace(/[^a-zA-Z]/g, '');
                                setInput('midName', lettersMN);
                            }} />
                    </div>

                    <div className="w-[40%] mx-auto flex flex-col">
                        <label htmlFor="lastName" className="text-left font-medium text-base text-stone-200 mb-2">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600  "
                            placeholder="Your last name"
                            required
                            value={formState.lastName}
                            onChange={event => {
                                const inputLN = event.target.value;
                                const lettersLN = inputLN.replace(/[^a-zA-Z]/g, '');
                                setInput('lastName', lettersLN);
                            }} />
                    </div>
                </div>

                <div className="flex md:flex-row justify-between w-full mb-2">
                    <div className="w-full mx-auto flex flex-col items-center">
                        <label htmlFor="streetAddress" className="w-full text-left font-medium text-base text-stone-200 mb-2">Street Address</label>
                        <input
                            type="text"
                            id="streetAddress"
                            name="streetAddress"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none  bg-neutral-600  focus:ring-0 focus:border-blue-600"
                            placeholder="Your street address"
                            required
                            value={formState.streetAddress}
                            onChange={event => setInput('streetAddress', event.target.value)}
                        />
                    </div>
                </div>

                <div className="flex md:flex-row gap-6 justify-between w-full mb-2">
                    <div className="w-[40%] mx-auto flex flex-col items-center">
                        <label htmlFor="city" className="w-full text-left font-medium text-base text-stone-200 mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600  "
                            placeholder="Your city"
                            required
                            value={formState.city}
                            onChange={event => setInput('city', event.target.value)}
                        />
                    </div>

                    <div className="w-[40%] mx-auto flex flex-col items-center">
                        <label htmlFor="state" className="w-full text-left font-medium text-base text-stone-200 mb-2">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600  "
                            placeholder="Your state"
                            required
                            value={formState.state}
                            onChange={event => setInput('state', event.target.value)}
                        />
                    </div>

                    <div className="w-[20%] mx-auto flex flex-col items-center">
                        <label htmlFor="zip" className="w-full text-left font-medium text-base text-stone-200 mb-2">Zip</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none  bg-neutral-600   focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Your zip"
                            required
                            value={formState.zip}
                            onChange={event => setInput('zip', event.target.value)}
                        />
                    </div>
                </div>

                <div className="flex md:flex-row justify-between gap-6 w-full mb-2">
                    <div className="w-[50%] mx-auto flex flex-col items-center">
                        <label htmlFor="email" className="w-full text-left font-medium text-base text-stone-200 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block py-2.5 px-4 w-full text-base  bg-neutral-600  text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Your email"
                            required
                            value={formState.email}
                            onChange={event => setInput('email', event.target.value)}
                        />
                    </div>

                    <div className="w-[50%] mx-auto flex flex-col items-center">
                        <label htmlFor="number" className="w-full text-left font-medium text-base text-stone-200 mb-2">Phone number</label>
                        <PhoneInput
                            country={'us'}
                            value={formState.phoneNumber}
                            onChange={event => setPhoneNumber('phoneNumber', event)}

                            inputProps={{
                                name: 'number',
                                required: true,
                                placeholder: 'Your phone number',
                            }}
                        />
                    </div>
                </div>

                <div className="flex md:flex-row justify-between w-full">
                    <div className="w-full mx-auto h-[8.5rem] flex flex-col items-center">
                        <label htmlFor="interests" className="w-full text-left font-medium text-base text-stone-200 mb-2">Please breifly describe why you're visiting</label>
                        <textarea
                            type="text"
                            id="interests"
                            name="interests"
                            className="block py-2.5 px-4 w-full h-full text-base bg-neutral-600  text-stone-200 border-2 border-[#353434] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder=""
                            required
                            value={formState.interests}
                            onChange={event => setInput('interests', event.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;