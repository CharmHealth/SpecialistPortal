import Default from '../Assets/Default.png'
const Individual = ({ doctor }) => {
    // const moreInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek[date.getDay()];
    };

    const getMonthName = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[date.getMonth()];
    };

    const extract = new Date(doctor.next_availability);
    const day = extract.getDay();
    const date = extract.getDate();
    const month = getMonthName(extract)
    const dayOfWeek = getDayOfWeek(extract);



    // {doctor.}
    return (
        <div className="w-full flex flex-col rounded-3xl bg-domino-gray ">

            <div className="w-full h-[8rem] flex flex-row items-center">
                <div className="w-[4.5rem] h-[8rem] flex items-center justify-center mr-4 ">
                    <img src={doctor.avatar} alt="Profile Image" className="w-full h-full object-cover rounded-l-3xl" />
                </div>
                <div className="">
                    <p className="text-left text-basw text-stone-200 font-bold">Dr. {doctor.firstname} {doctor.lastname}, {doctor.degree}</p>
                    <p className="text-left text-sm text-[#999999] ">{doctor.speciality}</p>
                    <br />
                    <p className="text-left text-sm text-[#999999] ">Soonest Available: {doctor.soonest}</p>

                </div>
            </div>
        </div>
    );
}

export default Individual;