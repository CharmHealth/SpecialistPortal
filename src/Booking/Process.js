// import Navbar from '../Common/Header'
import React, { useState, useEffect } from 'react';
import Default from '../DisplaySpecialists/Assets/Chad.png'
import Information from './Components/Information';
import Verification from './Components/Verification';
import Insurance from './Components/Insurance';
import Deposit from './Components/Deposit';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import John from '../DisplaySpecialists/Assets/john-gaitanis.jpeg';
import Emily from '../DisplaySpecialists/Assets/EmilyHarris.jpeg';
import Abbey from '../DisplaySpecialists/Assets/abbeymanning.jpeg';
import Claudia from '../DisplaySpecialists/Assets/claudiayang.jpeg';
import Kane from '../DisplaySpecialists/Assets/kaneproctor.jpeg';
import Kavya from '../DisplaySpecialists/Assets/kavyasrim.jpeg';
import Mahila from '../DisplaySpecialists/Assets/mahila.jpeg';
import Yusra from '../DisplaySpecialists/Assets/yusradunlap.jpeg';
import Austim from '../DisplaySpecialists/Assets/AustimMeyer.jpeg';

const profileImages = {
    John,
    Emily,
    Abbey,
    Claudia,
    Kane,
    Kavya,
    Mahila,
    Yusra,
    Austim
};


const Process = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get the JSON string from the query parameter
    const bookingDataString = urlParams.get('bookingData');

    // Parse the JSON string back into an object
    const bookingData = JSON.parse(decodeURIComponent(bookingDataString));


    const [activeTab, setActiveTab] = useState('Information');
    const [infoComplete, setInfoComplete] = useState(false);
    const [veriComplete, setVeriComplete] = useState(false);
    const [insurComplete, setInsuromplete] = useState(false);
    const [depoComplete, setDepoComplete] = useState(false);

    const handleTabChange = () => {
        if (activeTab == 'Information') {
            setInfoComplete(true);
            setActiveTab('Verification');
        } else if (activeTab == 'Verification') {
            setVeriComplete(true);
            setActiveTab('Insurance');
        } else if (activeTab == 'Insurance') {
            setInsuromplete(true);
            setActiveTab("Deposit");
        } else {
            navigate(`/confirmation?bookingData=${bookingDataString}`)
        }
    };


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

        setFormState({ ...formState, [key]: value })
    }

    function setPhoneNumber(key, value) {

        setFormState({ ...formState, [key]: value.toString() })
    }

    const TabComponent = ({ activeTab }) => {
        switch (activeTab) {
            case 'Information':
                return <Information />;
            case 'Verification':
                return <Verification />;
            case 'Insurance':
                return <Insurance />;
            case 'Deposit':
                return <Deposit />;
            default:
                return null;
        }
    };
    // bg-[#1e0227]
    return (
        <div className="w-full h-dvh bg-transparent ">
            {/* <Navbar /> */}
            <div className="w-full flex flex-row">
                <div className="bg-domino-gray mt-14 w-[22rem] h-[37rem] rounded-r-2xl">
                    <div className="w-full flex flex-row mt-8 ml-4">
                        <div className="h-24 w-24 bg-transparent rounded-2xl">
                            <img src={profileImages[bookingData.fName]} alt="Profile" />
                        </div>
                        <div className="mt-2 ml-4 flex flex-col">
                            <h3 className="text-stone-200 text-xl text-left ">Dr. {bookingData.fName} {bookingData.lName} {bookingData.deg}</h3>

                            {/* <p>Selected start time: {startTime}</p> */}

                            <div className="mt-2 flex flex-col ">
                                <div className="flex flex-row items-center mb-2">
                                    <svg className="mr-4" width="30" height="18" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 0H4C2.5 0 1.3125 1.23446 1.3125 2.79379V18.2571H0.625C0.25 18.2571 0 18.5169 0 18.9068V19.4266C0 21.3757 1.5625 23 3.4375 23H26.5625C28.4375 23 30 21.3757 30 19.4266V18.9068C30 18.5169 29.75 18.2571 29.375 18.2571H28.6875V2.79379C28.6875 1.29944 27.5 0 26 0ZM2.5625 2.79379C2.5625 1.94915 3.1875 1.29943 4 1.29943H26C26.8125 1.29943 27.4375 1.94915 27.4375 2.79379V18.2571H22.125C21.0625 15.9181 18.75 14.2938 16.1875 14.2938H13.8125C11.25 14.2938 8.9375 15.8531 7.875 18.2571H2.5625V2.79379ZM20.75 18.2571H9.25C10.25 16.6328 11.9375 15.5932 13.8125 15.5932H16.1875C18.0625 15.6582 19.8125 16.6328 20.75 18.2571ZM28.75 19.5565C28.6875 20.726 27.75 21.6356 26.5625 21.6356H3.4375C2.3125 21.6356 1.375 20.726 1.25 19.5565H28.75Z" fill="white" />
                                        <path d="M15.1251 13.6441C17.6876 13.6441 19.8126 10.3305 19.8126 7.66667C19.8126 5.00283 17.7501 2.85876 15.1251 2.85876C12.5626 2.85876 10.4376 5.00283 10.4376 7.66667C10.4376 10.3955 12.5626 13.6441 15.1251 13.6441ZM15.1251 4.1582C17.0001 4.1582 18.5626 5.71752 18.5626 7.66667C18.5626 9.74577 16.9376 12.3446 15.1251 12.3446C13.3751 12.3446 11.6876 9.6808 11.6876 7.66667C11.6876 5.71752 13.2501 4.1582 15.1251 4.1582Z" fill="white" />
                                    </svg>
                                    <h4 className="text-stone-200 text-left text-sm">Online Video Call</h4>
                                </div>

                                <div className="flex flex-row items-center">
                                    <svg className="-mt-1 mr-4" width="30" height="20" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.85193 1.28572C6.85193 0.575629 7.59811 0 8.5186 0C9.43908 0 10.1853 0.575629 10.1853 1.28572V4.14286C10.1853 4.85295 9.43908 5.42858 8.5186 5.42858C7.59811 5.42858 6.85193 4.85295 6.85193 4.14286V1.28572Z" fill="white" />
                                        <path d="M19.8149 1.28572C19.8149 0.575629 20.5611 0 21.4815 0C22.402 0 23.1482 0.575629 23.1482 1.28572V4.14286C23.1482 4.85295 22.402 5.42858 21.4815 5.42858C20.5611 5.42858 19.8149 4.85295 19.8149 4.14286V1.28572Z" fill="white" />
                                        <path d="M7.22227 11.1429C6.40408 11.1429 5.74078 11.6545 5.74078 12.2857V13.4286C5.74078 14.0597 6.40408 14.5714 7.22227 14.5714H8.70375C9.52193 14.5714 10.1852 14.0597 10.1852 13.4286V12.2857C10.1852 11.6545 9.52193 11.1429 8.70375 11.1429H7.22227Z" fill="white" />
                                        <path d="M7.22227 16C6.40408 16 5.74078 16.5117 5.74078 17.1429V18.2857C5.74078 18.9169 6.40408 19.4286 7.22227 19.4286H8.70375C9.52193 19.4286 10.1852 18.9169 10.1852 18.2857V17.1429C10.1852 16.5117 9.52193 16 8.70375 16H7.22227Z" fill="white" />
                                        <path d="M12.7778 17.1429C12.7778 16.5117 13.4411 16 14.2593 16H15.7408C16.559 16 17.2223 16.5117 17.2223 17.1429V18.2857C17.2223 18.9169 16.559 19.4286 15.7408 19.4286H14.2593C13.4411 19.4286 12.7778 18.9169 12.7778 18.2857V17.1429Z" fill="white" />
                                        <path d="M14.2593 11.1429C13.4411 11.1429 12.7778 11.6545 12.7778 12.2857V13.4286C12.7778 14.0597 13.4411 14.5714 14.2593 14.5714H15.7408C16.559 14.5714 17.2223 14.0597 17.2223 13.4286V12.2857C17.2223 11.6545 16.559 11.1429 15.7408 11.1429H14.2593Z" fill="white" />
                                        <path d="M19.8149 12.2857C19.8149 11.6545 20.4782 11.1429 21.2964 11.1429H22.7778C23.596 11.1429 24.2593 11.6545 24.2593 12.2857V13.4286C24.2593 14.0597 23.596 14.5714 22.7778 14.5714H21.2964C20.4782 14.5714 19.8149 14.0597 19.8149 13.4286V12.2857Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7037 2.71426H11.2963V4.14284C11.2963 5.32629 10.0526 6.28569 8.51852 6.28569C6.98441 6.28569 5.74074 5.32629 5.74074 4.14284V2.71426H3.51852C1.5753 2.71426 0 3.92949 0 5.42855V20.2857C0 21.7848 1.5753 23 3.51852 23H26.4815C28.4247 23 30 21.7848 30 20.2857V5.42855C30 3.92949 28.4247 2.71426 26.4815 2.71426H24.2593V4.14284C24.2593 5.32629 23.0156 6.28569 21.4815 6.28569C19.9474 6.28569 18.7037 5.32629 18.7037 4.14284V2.71426ZM27.4074 9.85713H2.59259V20.2857C2.59259 20.6802 3.00715 21 3.51852 21H26.4815C26.9929 21 27.4074 20.6802 27.4074 20.2857V9.85713Z" fill="white" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <h4 className="text-stone-200 text-left text-sm">{bookingData.day}</h4>
                                        <h4 className="text-stone-200 text-left text-sm">{bookingData.time}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 ml-8">
                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex items-center justify-center">

                                {/* <div className="bg-white w-6 h-6 rounded-full"></div> */}
                                {/* <div className={` ${activeTab === 'Information' ? 'w-8 h-8' : 'w-6 h-6'} bg-orange-500 rounded-full`}></div> */}
                                <div className='w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full'>

                                    <svg width="14" height="14" viewBox="0 0 95 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.5939 75.1257L1.11008 45.6462C0.399369 44.9355 0 43.9709 0 42.9658C0 41.9606 0.399369 40.996 1.11008 40.2853L6.47011 34.9253C7.18082 34.2146 8.14455 33.8152 9.15056 33.8152C10.1557 33.8152 11.1194 34.2146 11.8301 34.9253L30.5941 53.6858L83.1699 1.11008C83.8814 0.399371 84.8443 0 85.8494 0C86.8546 0 87.8192 0.399371 88.5299 1.11008L93.8899 6.47011C94.6006 7.18082 95 8.14539 95 9.15055C95 10.1557 94.6006 11.1203 93.8899 11.831L30.5939 75.1257Z" fill="white" />
                                    </svg>

                                </div>

                            </div>
                            <div className="ml-4 flex flex-row items-center">
                                <div className="w-8 h-8 flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 90 90" fill="#C05AE1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M89.9659 44.2459C89.1049 19.7639 69.5929 0.481876 45.0029 0.0078758C20.1599 -0.470124 0.47294 20.8799 
                                    0.00794013 45.0009C-0.47206 69.8419 20.8809 89.5269 45.0029 89.9919C69.5829 90.4659 89.1059 69.5659 89.9649 
                                    45.7609C89.9889 45.5159 90.0029 45.2649 89.9979 45.0009C90.0029 44.7389 89.9889 44.4889 89.9659 44.2459ZM44.3979 
                                    67.6909C44.6309 67.9599 44.8809 68.0909 45.1479 68.0909C45.6149 68.0909 46.0639 67.8909 46.4979 67.4899C47.7309 
                                    66.4909 49.1809 64.6919 50.8479 62.0929L52.2469 62.8929C48.1819 69.9569 43.8649 73.4899 39.3009 73.4899C37.5669 
                                    73.4899 36.1839 72.9969 35.1529 72.0149C34.1189 71.0329 33.6029 69.7889 33.6029 68.2889C33.6029 67.2909 33.8349 
                                    66.0239 34.3029 64.4909L39.9009 45.2489C40.4339 43.4169 40.7019 42.0339 40.7019 41.1009C40.7019 40.4999 40.4419 
                                    39.9699 39.9269 39.4999C39.4089 39.0339 38.7179 38.8019 37.8529 38.8019C37.4189 38.8019 36.9349 38.8189 36.4019 
                                    38.8509L36.9029 37.2519L50.5489 35.0519H52.9479L44.6989 63.6439C44.2649 65.2779 44.0499 66.3589 44.0499 
                                    66.8919C44.0499 67.1599 44.1649 67.4259 44.3979 67.6909ZM54.6459 26.6329C53.4799 27.7819 52.0799 28.3549 50.4469 
                                    28.3549C48.8479 28.3549 47.4729 27.7819 46.3229 26.6329C45.1739 25.4829 44.5989 24.0919 44.5989 22.4589C44.5989 
                                    20.8279 45.1639 19.4269 46.2969 18.2589C47.4309 17.0949 48.8139 16.5109 50.4459 16.5109C52.1119 16.5109 53.5199 
                                    17.0949 54.6709 18.2589C55.8189 19.4269 56.3959 20.8269 56.3959 22.4589C56.3959 24.0919 55.8119 25.4819 54.6459 
                                    26.6329Z" />
                                    </svg>
                                </div>
                                <h3 className="ml-2 text-stone-200 text-sm">Information</h3>
                            </div>
                        </div>
                        <div className={` ${infoComplete ? 'bg-orange-500' : 'bg-white'} -mt-4  -mb-4 w-2 h-20 ml-3`}></div>


                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className={` ${infoComplete ? 'w-8 h-8 bg-orange-500' : 'w-6 h-6 bg-white'}  flex items-center justify-center rounded-full`}>
                                    {infoComplete && (
                                        <svg width="14" height="14" viewBox="0 0 95 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5939 75.1257L1.11008 45.6462C0.399369 44.9355 0 43.9709 0 42.9658C0 41.9606 0.399369 40.996 1.11008 40.2853L6.47011 34.9253C7.18082 34.2146 8.14455 33.8152 9.15056 33.8152C10.1557 33.8152 11.1194 34.2146 11.8301 34.9253L30.5941 53.6858L83.1699 1.11008C83.8814 0.399371 84.8443 0 85.8494 0C86.8546 0 87.8192 0.399371 88.5299 1.11008L93.8899 6.47011C94.6006 7.18082 95 8.14539 95 9.15055C95 10.1557 94.6006 11.1203 93.8899 11.831L30.5939 75.1257Z" fill="white" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="ml-4 flex flex-row items-center">
                                <div className="w-8 h-8 flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 28 32" fill="#C05AE1" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H25C26.6569 0 28 1.34315 28 3V14.3389C28 16.2592 27.9699 18.5203 26.9703 20.4738C26.0815 22.211 24.6853 23.7793 22.6906 25.5297C20.6992 27.2772 18.046 29.2609 14.5932 31.8051C14.2404 32.065 13.7596 32.065 13.4068 31.8051C9.95401 29.2609 7.30078 27.2772 5.30939 25.5297C3.31466 23.7793 1.91854 22.211 1.02969 20.4738C0.030097 18.5203 0 16.2592 0 14.3389V3ZM19.669 10.7433C20.0795 10.3738 20.1128 9.74155 19.7433 9.33104C19.3738 8.92053 18.7415 8.88725 18.331 9.25671L12.3333 14.6546L9.66896 12.2567C9.25845 11.8872 8.62616 11.9205 8.25671 12.331C7.88725 12.7415 7.92053 13.3738 8.33104 13.7433L11.6644 16.7433C12.0447 17.0856 12.622 17.0856 13.0023 16.7433L19.669 10.7433Z" />
                                    </svg>
                                </div>
                                <h3 className="ml-2 text-stone-200 text-sm">Verification</h3>
                            </div>
                        </div>
                        <div className={` ${veriComplete ? 'bg-orange-500' : 'bg-white'} -mt-4  -mb-4 w-2 h-20 ml-3`}></div>


                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className={` ${veriComplete ? 'w-8 h-8 bg-orange-500' : 'w-6 h-6 bg-white'}  flex items-center justify-center rounded-full`}>
                                    {veriComplete && (
                                        <svg width="14" height="14" viewBox="0 0 95 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5939 75.1257L1.11008 45.6462C0.399369 44.9355 0 43.9709 0 42.9658C0 41.9606 0.399369 40.996 1.11008 40.2853L6.47011 34.9253C7.18082 34.2146 8.14455 33.8152 9.15056 33.8152C10.1557 33.8152 11.1194 34.2146 11.8301 34.9253L30.5941 53.6858L83.1699 1.11008C83.8814 0.399371 84.8443 0 85.8494 0C86.8546 0 87.8192 0.399371 88.5299 1.11008L93.8899 6.47011C94.6006 7.18082 95 8.14539 95 9.15055C95 10.1557 94.6006 11.1203 93.8899 11.831L30.5939 75.1257Z" fill="white" />
                                        </svg>
                                    )}
                                </div>

                            </div>
                            <div className="ml-4 flex flex-row items-center">
                                <div className="w-8 h-8 flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 91 93" fill="#C05AE1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.4 39.43H25.29C27.44 39.43 29.19 37.68 29.19 35.53V34.65C29.19 30.38 26.46 26.74 22.65 25.38C24.51 24.26 25.76 22.22 25.76 19.89C25.76 16.36 22.88 13.48 19.35 13.48C15.82 13.48 12.94 16.36 12.94 19.89C12.94 22.22 14.19 24.26 16.05 25.38C12.24 26.74 9.51 30.38 9.51 34.65V35.53C9.5 37.68 11.25 39.43 13.4 39.43ZM19.35 16.18C21.4 16.18 23.06 17.84 23.06 19.89C23.06 21.94 21.4 23.6 19.35 23.6C17.3 23.6 15.64 21.94 15.64 19.89C15.64 17.84 17.3 16.18 19.35 16.18ZM12.2 34.65C12.2 30.71 15.41 27.5 19.35 27.5C23.29 27.5 26.5 30.71 26.5 34.65V35.53C26.5 36.19 25.96 36.73 25.3 36.73H13.4C12.74 36.73 12.2 36.19 12.2 35.53V34.65ZM11.71 44.67H39.29C40.04 44.67 40.64 45.27 40.64 46.02C40.64 46.77 40.04 47.37 39.29 47.37H11.71C10.96 47.37 10.36 46.77 10.36 46.02C10.36 45.27 10.97 44.67 11.71 44.67ZM55.53 57.64C55.53 58.39 54.93 58.99 54.18 58.99H11.71C10.96 58.99 10.36 58.39 10.36 57.64C10.36 56.89 10.96 56.29 11.71 56.29H54.18C54.93 56.29 55.53 56.89 55.53 57.64ZM55.53 69.26C55.53 70.01 54.93 70.61 54.18 70.61H11.71C10.96 70.61 10.36 70.01 10.36 69.26C10.36 68.51 10.96 67.91 11.71 67.91H54.18C54.93 67.91 55.53 68.51 55.53 69.26ZM55.53 80.88C55.53 81.63 54.93 82.23 54.18 82.23H11.71C10.96 82.23 10.36 81.63 10.36 80.88C10.36 80.13 10.96 79.53 11.71 79.53H54.18C54.93 79.53 55.53 80.14 55.53 80.88ZM89.41 10.86C80.55 9.41 73.28 5.89 67.78 0.4C67.53 0.15 67.18 0 66.83 0C66.48 0 66.13 0.14 65.88 0.4C64.69 1.59 63.41 2.69 62.05 3.7H5.6C2.51 3.7 0 6.21 0 9.3V87.39C0 90.48 2.51 92.99 5.6 92.99H62.58C65.67 92.99 68.18 90.48 68.18 87.39V54.32C75.56 49.84 81.18 43.99 84.87 36.93C88.48 30.03 90.39 21.72 90.54 12.21C90.55 11.54 90.07 10.97 89.41 10.86ZM62.58 90.28H5.6C4 90.28 2.7 88.98 2.7 87.38V9.29C2.7 7.69 4 6.39 5.6 6.39H57.79C53.81 8.54 49.28 10.03 44.24 10.86C43.58 10.97 43.1 11.54 43.11 12.21C43.26 21.72 45.17 30.03 48.78 36.93C52.48 43.99 58.09 49.83 65.47 54.32V87.38C65.47 88.98 64.17 90.28 62.58 90.28ZM66.82 51.98C53.27 43.74 46.4 31.08 45.83 13.32C54.24 11.76 61.29 8.37 66.82 3.23C72.35 8.37 79.4 11.76 87.81 13.32C87.25 31.08 80.38 43.74 66.82 51.98ZM61.25 15.06V20.44H55.87V31.58H61.25V36.96H72.39V31.58H77.77V20.44H72.39V15.06H61.25ZM75.08 23.14V28.88H69.7V34.26H63.96V28.88H58.57V23.14H63.95V17.76H69.69V23.14H75.08Z" />
                                    </svg>
                                </div>
                                <h3 className="ml-2 text-stone-200 text-sm">Insurance</h3>
                            </div>
                        </div>

                        <div className={` ${insurComplete ? 'bg-orange-500' : 'bg-white'} -mt-4  -mb-4 w-2 h-20 ml-3`}></div>

                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className="bg-white w-6 h-6 rounded-full"></div>

                            </div>
                            <div className="ml-4 flex flex-row items-center">
                                <div className="w-8 h-8 flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 30 20" fill="#C05AE1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.02048 0C0.908254 0 0 0.91674 0 2.03064V8.276H22.7586V2.03064C22.7586 0.91674 21.8504 0 20.7381 0H2.02048ZM22.7586 8.276V10.3448H26.1752C26.5442 11.1669 27.1498 11.8166 27.931 12.2158V15.7174C27.1506 16.1162 26.5464 16.7655 26.1772 17.5863H21.019H18.1398C20.1169 17.5633 21.7241 15.9479 21.7241 13.9656C21.7241 13.7109 21.6897 13.4642 21.6393 13.224C22.2988 12.8887 22.7586 12.2076 22.7586 11.4198L22.7586 10.3448H2.80142e-05V11.4198C2.80142e-05 12.5337 0.908282 13.4484 2.02051 13.4484H6.20692V17.6388C6.20692 18.7479 7.11756 19.6552 8.2274 19.6553H27.9795C29.0894 19.6552 30 18.7479 30 17.6388V10.2944C30 9.18523 29.0894 8.2762 27.9795 8.276H22.7586ZM3.10345 2.06909H14.4827V3.10352H3.10345V2.06909ZM15.5172 2.06909H17.5862V3.10352H15.5172V2.06909ZM18.6207 2.06909H20.6896V3.10352H18.6207V2.06909ZM3.10345 4.13806H6.20689V7.2677H3.10345V4.13806ZM8.27585 13.4484H14.5131C14.4886 13.6175 14.4726 13.7901 14.4726 13.9656C14.4726 15.9479 16.0818 17.564 18.0589 17.5863H15.1879H10.0316C9.66249 16.7653 9.05632 16.1163 8.27581 15.7174L8.27585 13.4484Z" />
                                    </svg>
                                </div>
                                <h3 className="ml-2 text-stone-200 text-sm">Deposit</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col">
                    <div className="ml-[5rem] bg-domino-gray mt-14 w-[60rem] h-[37rem] rounded-2xl">
                        <TabComponent activeTab={activeTab} />
                    </div>

                    <button
                        type="submit"
                        className="flex mt-4 ml-[58rem] w-[7rem] items-center justify-center h-[2rem] bg-orange-500 text-white p-6 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mb-8"
                        onClick={() => handleTabChange()}
                    >
                        Submit
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Process;
