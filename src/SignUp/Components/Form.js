import { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [sex, setSex] = useState('');
    const [gender, setGender] = useState('');
    const [insurance, setInsurance] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
    };

    const handleSexChange = (event) => {
        setSex(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const insuranceList = [
        'No Insurance - Cash Payment', 'Insurance 1', 'Insurance 2', 'Insurance 3', 'Insurance 4', 'Insurance 5', 'Insurance 6'
    ];

    const genderOptions = ["Select", "Male", "Female", "Nonbinary", "Prefer not to identify"];

    const handleInsuranceChange = (event) => {
        setInsurance(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <form className="w-full bg-domino-gray h-full rounded-test shadow-md mt-24 p-4">
            <div class="flex flex-wrap p-8 justify-center">
                <h3 className="text-white text-center text-3xl">Sign up for a free SpeciaList account!</h3>
            </div>
            <div class="flex flex-wrap p-4 md:p-8 lg:p-12">
                <div class="relative z-0 w-1/2 p-4 mt-6 group">
                    <input type="text" name="firstName" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label for="firstName" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div class="relative z-0 w-1/2 p-4 mt-6 group">
                    <input type="text" name="lastName" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                    <label for="lastName" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>

                </div>
            </div>

            <div className="flex flex-wrap p-4 md:p-8">
                <div class="relative z-0 w-1/3 p-4">
                    <input type="date" name="dob" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)} />
                    <label for="dob" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth</label>
                </div>


                <div className="w-1/3 flex flex-wrap p-4">
                    <fieldset>
                        <label class="block mb-2 text-sm lg:text-2xl font-medium text-gray-900 dark:text-white">
                            Sex
                        </label>

                        <div className="flex flex-row">
                            <div class="flex items-center mb-4 mr-8 ">
                                <input id="sex-option1" type="radio" value="male" checked={sex === 'female'}
                                    onChange={() => setSex('female')} class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="sex-option-1" class="block ml-2 text-sm lg:text-2xl font-medium text-gray-900 dark:text-gray-300">
                                    Male
                                </label>

                            </div>

                            <div class="flex items-center mb-4">
                                <input id="sex-option2" type="radio" value="female" checked={sex === 'female'}
                                    onChange={() => setSex('female')} class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="sex-option2" class="block ml-2 text-sm lg:text-2xl font-medium text-gray-900 dark:text-gray-300">
                                    Female
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className=" w-1/3 flex flex-wrap p-4">
                    <label htmlFor="Gender" className="block mb-2 text-sm lg:text-2xl font-medium text-gray-900 dark:text-white">Gender</label>
                    <select
                        id="Gender"
                        className="bg-transparent border border-gray-300 text-gray-900 text-sm lg:text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        {genderOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="flex flex-wrap mb-6 p-4 md:p-8 lg:p-12 w-1/2">
                <label htmlFor="insurance" className="block mb-2 text-sm lg:text-2xl font-medium text-gray-900 dark:text-white">Insurance Preference</label>
                <select
                    id="insurance"
                    className="bg-transparent border border-gray-300 text-gray-900 text-sm lg:text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                >
                    {insuranceList.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap p-4 md:p-8 lg:p-12">
                <div class="relative z-0 w-full mb-6">
                    <input type="email" name="email" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label for="email" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
            </div>

            <div class="flex flex-wrap p-4 md:p-8 lg:p-12">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="tel" name="phone" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <label for="phone" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
            </div>

            <div class="flex flex-wrap p-4 md:p-8 lg:p-12">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="password" name="password" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="password" name="repeat_password" class="block py-2.5 px-0 w-full text-sm lg:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="repeat_password" class="peer-focus:font-medium absolute text-sm lg:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
            </div>

            <div className="flex flex-wrap justify-center pb-6">
                <button className="bg-bright-purple text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </div>

        </form>
    );
}

