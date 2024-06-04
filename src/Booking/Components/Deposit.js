import React, { useRef, useState, useEffect } from 'react';

const Deposit = () => {

    const initialState = {
        cardNum: '',
        cardName: '',
        cardExp: '',
        cardCVV: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
    }

    useEffect(() => {
        // Retrieve form state from local storage
        const storedFormState = JSON.parse(localStorage.getItem('formState'));
        setCardholder(storedFormState);

        // If form state exists in local storage, set the component state

    }, []);

    const [cardholder, setCardholder] = useState(null)

    const [formState, setFormState] = useState(initialState)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    const handleCheckboxChange = (e) => {
        setSame(e.target.checked);
        console.log({ same })
    };

    const [same, setSame] = useState(false);

    useEffect(() => {
        if (same && cardholder) {
            // Update form state with cardholder's information
            setFormState({
                ...formState,
                cardName: cardholder.firstName,
                streetAddress: cardholder.streetAddress,
                city: cardholder.city,
                state: cardholder.state,
                zip: cardholder.zip,
            });
        } else {
            // Set default values or clear the fields
            setFormState({
                ...formState,
                cardName: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
            });
        }
    }, [same]); // Add 'same' as a dependency to avoid infinite loop


    return (
        <div className="w-full p-6 flex flex-col">
            <h2 className="w-fit text-stone-200 text-left text-xl border-b-2">Secure your booking with a card on file</h2>



            {/* <div className="w-1/2 mt-4">
                    <h3 className="w-[80%] font-medium text-base text-stone-200">To secure your booking and guarantee your spot, we require a deposit. This deposit will be used towards your final payment, which will be settled after your insurance is verified</h3>

                    <h1 className="mt-12 font-medium text-2xl text-stone-200">Amount due today: $15</h1>
                </div> */}
            <div className="w-[60%] mx-auto ">

                <div className="mt-6">
                    {/* <h3 className="text-left font-medium text-base text-stone-200">Card Information</h3> */}
                    <div className="flex md:flex-row justify-between w-full mb-2">
                        <div className="w-full mx-auto flex flex-col items-center">
                            <label htmlFor="cardNum" className="w-full text-left font-medium text-base text-stone-200 mb-2">Card Number</label>
                            <input
                                type="number"
                                id="cardNum"
                                name="cardNum"
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none  bg-neutral-600 focus:ring-0 focus:border-blue-600"
                                placeholder=""
                                required
                                value={formState.cardNum}
                                onChange={event => setInput('cardNum', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row justify-between gap-6 w-full mb-2">
                        <div className="w-[50%] mx-auto flex flex-col">
                            <label htmlFor="cardExp" className="text-left text-base text-stone-200 mb-2">Expiration date </label>
                            <input
                                type="text"
                                id="cardExp"
                                name="cardExp"
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
                                placeholder="MM/YY"
                                required
                                value={formState.cardExp}
                                onChange={event => setInput('cardExp', event.target.value)}
                                />
                        </div>
                        <div className="w-[50%] mx-auto flex flex-col">
                            <label htmlFor="cardCVV" className="text-left text-base text-stone-200 mb-2"> Security Code </label>
                            <input
                                type="text"
                                id="cardCVV"
                                name="cardCVV"
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
                                placeholder=""
                                required
                                value={formState.cardCVV}
                                onChange={event => setInput('cardCVV', event.target.value)}
/>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex md:flex-row justify-between w-full mb-2">
                        <div className="w-full mx-auto flex flex-col items-center">
                            <label htmlFor="cardName" className="w-full text-left font-medium text-base text-stone-200 mb-2">Cardholder's Name</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none  bg-neutral-600 focus:ring-0 focus:border-blue-600"
                                placeholder=""
                                required
                                value={formState.cardName}
                                onChange={event => setInput('cardName', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row justify-between w-full mb-2">
                        <div className="w-full mx-auto flex flex-col items-center">
                            <label htmlFor="streetAddress" className="w-full text-left font-medium text-base text-stone-200 mb-2">Billing Address</label>
                            <input
                                type="text"
                                id="streetAddress"
                                name="streetAddress"
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none  bg-neutral-600 focus:ring-0 focus:border-blue-600"
                                placeholder=""
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
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
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
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-blue-600  bg-neutral-600 "
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
                                className="block py-2.5 px-4 w-full text-base text-stone-200 border-2 border-[#545454] rounded-2xl appearance-none  bg-neutral-600  focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your zip"
                                required
                                value={formState.zip}
                                onChange={event => setInput('zip', event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="flex flex-row justify-between w-full items-center">
                        <input
                            type="checkbox"
                            name="consent3"
                            checked={same}
                            onChange={handleCheckboxChange}
                            className="form-checkbox flex h-6 w-6 min-w-6 mr-2 mt-1"
                        />
                        <label className="block font-medium flex-1 text-base text-stone-200">
                            Cardholder is the same as patient
                        </label>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Deposit;