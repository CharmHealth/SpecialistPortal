import React, { useEffect, useState } from 'react';
import Available from './assets/Available.png';
import FemaleDoctor from './assets/FemaleDoctor.jpg';
import User from './assets/user.png';
import VideoWhite from './assets/noun-video-6114319 1.png';
import VideoBlack from './assets/VideoBlack.png'
import UserWhite from './assets/UserWhite.png'
import { useDoctor } from './DoctorContext';
import { useSpecialty } from '../Elements/SpecialtyContext';
import { useInsurance } from '../Elements/InsuranceContext';


function DoctorList() {

  const availableTimes = {
    '2023-10-05': ['11:45 PM'],
    '2023-10-06': ['10:30 AM', '07:30 PM', '09:00 PM', '10:30 PM', '11:45 PM'],
    '2023-10-08': ['07:30 PM', '09:00 PM', '10:30 PM', '11:45 PM'],
    '2023-10-10': ['10:30 AM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM', '10:30 PM', '11:45 PM'],
    '2023-10-11': ['10:00 AM', '01:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '08:00 PM', '09:30 PM', '11:00 PM'],
    '2023-10-13': ['10:30 AM', '03:00 PM', '07:45 PM', '09:15 PM', '10:45 PM'],
    '2023-10-15': ['10:30 AM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM', '10:30 PM', '11:45 PM'],
    '2023-10-16': ['11:00 AM', '02:00 PM', '04:30 PM', '06:15 PM', '08:00 PM', '09:30 PM', '11:00 PM'],
    '2023-10-19': ['09:30 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:15 PM', '09:00 PM', '10:30 PM'],
    '2023-10-22': ['10:45 AM', '02:15 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '09:45 PM', '11:00 PM'],
    '2023-10-24': ['11:30 AM', '03:30 PM', '06:00 PM', '08:15 PM', '09:45 PM', '11:00 PM'],
    '2023-10-26': ['10:30 AM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM', '10:30 PM', '11:45 PM'],
    '2023-10-27': ['10:15 AM', '11:30 AM', '12:45 PM'],
    '2023-10-29': ['02:30 PM', '05:15 PM', '07:45 PM', '09:00 PM', '10:15 PM'],
    '2023-11-01': ['01:00 PM', '04:30 PM', '07:00 PM', '09:30 PM', '10:45 PM', '12:00 AM', '01:15 AM'],
    '2023-11-04': ['03:15 PM', '06:15 PM', '07:45 PM'],
    '2023-11-06': ['11:45 AM', '04:00 PM', '06:30 PM', '09:00 PM', '10:15 PM', '11:30 PM'],
    '2023-11-09': ['10:00 AM', '01:15 PM', '04:45 PM', '07:30 PM', '09:00 PM'],
    '2023-11-12': ['02:30 PM', '06:00 PM', '08:30 PM', '10:00 PM', '11:15 PM'],
    '2023-11-14': ['10:30 AM', '03:15 PM', '05:45 PM', '09:15 PM', '10:30 PM'],
    '2023-11-17': ['01:00 PM', '03:45 PM', '07:00 PM', '09:30 PM', '11:00 PM', '12:15 AM'],
    '2023-11-20': ['11:15 AM', '03:00 PM', '06:15 PM', '07:45 PM', '09:00 PM'],
    '2023-11-23': ['10:45 AM', '02:45 PM', '05:30 PM', '08:00 PM', '09:15 PM', '10:30 PM'],
    '2023-11-26': ['12:30 PM', '04:00 PM', '06:45 PM', '09:15 PM', '10:30 PM'],
    '2023-11-29': ['10:15 AM', '01:30 PM', '04:45 PM', '07:15 PM', '08:30 PM', '09:45 PM', '11:00 PM', '12:15 AM', '01:30 AM', '02:45 AM'],
    '2023-12-02': ['02:00 PM', '05:00 PM', '08:00 PM', '09:30 PM'],
    '2023-12-05': ['11:45 AM', '03:15 PM', '06:30 PM', '09:00 PM', '10:15 PM'],
    '2023-12-08': ['01:30 PM', '04:45 PM', '07:15 PM', '09:30 PM', '10:45 PM', '12:00 AM'],
    '2023-12-11': ['10:30 AM', '02:00 PM', '05:00 PM', '07:45 PM', '09:00 PM'],
    '2023-12-14': ['11:15 AM', '03:30 PM', '06:15 PM', '07:45 PM', '09:00 PM'],
    '2023-12-17': ['10:00 AM', '01:15 PM', '04:30 PM', '07:00 PM', '08:15 PM'],
    '2023-12-20': ['12:00 PM', '03:45 PM', '07:00 PM', '09:30 PM', '10:45 PM', '12:00 AM'],
    '2023-12-23': ['11:15 AM', '03:00 PM', '06:15 PM', '09:00 PM', '10:15 PM', '11:30 PM'],
    '2023-12-26': ['01:30 PM', '04:45 PM', '08:00 PM', '09:15 PM', '10:30 PM', '11:45 PM'],
    '2023-12-29': ['10:30 AM', '02:00 PM', '05:00 PM', '07:45 PM', '09:00 PM', '10:15 PM', '11:30 PM', '12:45 AM', '01:15 AM', '02:30 AM'],
    '2023-12-31': ['11:15 AM', '03:30 PM', '06:15 PM', '07:45 PM', '09:00 PM'],
    '2023-12-03': ['10:00 AM', '01:15 PM', '04:30 PM', '07:00 PM', '08:15 PM', '09:30 PM', '10:45 PM', '12:00 AM', '01:15 AM'],
  }
    

  const doctors = [
    { id: 1, availability: {'2024-01-29': ['11:45 PM'],}, firstname: 'Emily', lastname: 'Harris', degree: 'MD, FAAN', meetingOptions: ["TeleVisit", "In Person"], avatar: FemaleDoctor, insurance: ['Aetna'], speciality: 'Neurology', bio: "Dr. Emily Harris is an accomplished neurologist with over two decades of expertise in diagnosing and treating neurological disorders. She earned her MD with top honors and completed a rigorous residency program in Neurology, followed by a specialized fellowship in Neurophysiology. As a Fellow of the American Academy of Neurology (FAAN) and an active member of leading professional organizations, Dr. Harris remains at the forefront of neurological research. Her research interests include genetics in neurological disorders and innovative treatment approaches. Currently serving as a Senior Neurologist at [Name of Prestigious Hospital], Dr. Harris is known for her compassionate, patient-centric care. She empowers her patients by involving them in their treatment decisions, instilling hope in the face of neurological challenges. Outside of her medical practice, Dr. Harris is an inspiring mentor and a dedicated volunteer in community health clinics. Her dedication to improving the lives of those with neurological disorders leaves a lasting impact on both patients and aspiring neurologists." },
    { id: 2, availability: {'2023-10-06': ['11:45 PM'],}, firstname: 'Yusra', lastname: 'Dunlap', degree: 'MD, PhD', meetingOptions: ["TeleVisit", "In Person"], avatar: FemaleDoctor, insurance: ['Blue Cross'], speciality: 'Immunology', bio: "Dr. Yusra Dunlap is a renowned immunologist with expertise in diagnosing and treating complex immunological conditions. She holds both an MD and a PhD, and her career spans decades of dedicated research and clinical practice. As an active member of prestigious organizations like the American Association of Immunologists, Dr. Dunlap stays at the forefront of immunology research. Her work, published in top scientific journals, encompasses areas such as immunotherapy, immunogenetics, and microbiome-related immune function. Currently a Senior Immunologist at [Name of Prestigious Medical Center], Dr. Dunlap's patient-centric approach involves tailoring treatment plans to individual immunological needs, providing hope and empowerment to her patients. Outside her practice, she's a committed mentor and contributor to community health initiatives. Dr. Dunlap's dedication to advancing immunology and improving patients' lives solidifies her reputation as a respected leader in the field."},
    { id: 3, availability: {'2023-10-15': ['11:45 PM'],}, firstname: 'Abbey', lastname: 'Manning', degree: 'MD', meetingOptions: ["TeleVisit"], avatar: FemaleDoctor, insurance: ['Cigna'], speciality: 'Rheumatology', bio: "Dr. Abbey Manning is a highly regarded rheumatologist, known for her expertise in the diagnosis and treatment of complex rheumatological conditions. With a career dedicated to advancing our understanding of these conditions, she has become a trusted specialist in the field. Dr. Manning earned her MD with distinction, followed by specialized training in Rheumatology. Her passion for the intricate interplay of the immune system and musculoskeletal health led her to focus her career on the diagnosis and management of rheumatic diseases. As an active member of professional organizations like the American College of Rheumatology, Dr. Manning stays up-to-date with the latest research and treatments. Her contributions to the field include research on novel therapies, autoimmune disorders, and musculoskeletal disorders, published in respected medical journals. In her current role as a Rheumatologist at [Name of Prominent Medical Center], Dr. Manning is known for her patient-centered approach. She works closely with her patients to create tailored treatment plans, offering hope and improved quality of life to those facing rheumatological challenges. Beyond her clinical work, Dr. Manning is a committed mentor and contributor to community health initiatives. Her dedication to advancing rheumatology and improving the lives of patients solidifies her reputation as a respected leader in the field." },
    { id: 4, availability: {'2023-10-08': ['11:45 PM'],}, firstname: 'Kane',lastname: 'Proctor', degree: 'MD, MS', meetingOptions: ["In Person"], avatar: FemaleDoctor, insurance: ['UnitedHealthcare'], speciality: 'Gastroenterology', bio: "Dr. Kane Proctor is a distinguished gastroenterologist, known for his expertise in the diagnosis and treatment of complex gastrointestinal disorders. With a career devoted to enhancing our understanding of digestive health, he has become a trusted authority in the field. Dr. Proctor earned his MD with distinction, followed by advanced training in Gastroenterology. His profound interest in digestive health led him to specialize in the diagnosis and management of a wide range of gastrointestinal conditions. He also holds a Master of Science (MS) degree, which further underscores his commitment to advancing the field. As an active member of professional organizations such as the American Gastroenterological Association, Dr. Proctor remains at the forefront of gastroenterology research. His contributions to the field include research on innovative treatments, gastrointestinal diseases, and endoscopic procedures, published in reputable medical journals. In his current role as a Gastroenterologist at [Name of Prominent Medical Center], Dr. Proctor is renowned for his patient-centric approach. He collaborates closely with his patients to develop customized treatment plans, providing hope and improved quality of life to those facing gastrointestinal challenges. Beyond his clinical work, Dr. Proctor is a dedicated mentor and contributor to community health initiatives. His unwavering commitment to advancing gastroenterology and improving the lives of patients underscores his reputation as a respected leader in the field." },
    { id: 5, availability: {'2023-10-09': ['11:45 PM'],}, firstname: 'Kavya', lastname: 'Sriram', degree: 'MD, PhD', meetingOptions: ["TeleVisit"], avatar: FemaleDoctor, insurance: ['Cash only'], speciality: 'Somnology', bio: "Dr. Kavya Sriram is a distinguished somnologist, renowned for her expertise in the field of somnology, which encompasses the diagnosis and treatment of sleep disorders. With an impressive career focused on understanding the intricacies of sleep health, she has become a respected authority in this specialized area of medicine. Dr. Sriram completed her medical degree with distinction, followed by extensive training in Somnology. Her unwavering fascination with the science of sleep led her to specialize in the diagnosis and management of various sleep disorders, including sleep apnea, insomnia, and narcolepsy. Notably, she also holds a Doctor of Philosophy (PhD) degree, which signifies her dedication to advancing sleep-related research. As an active member of professional organizations such as the American Academy of Sleep Medicine, Dr. Sriram remains at the forefront of somnology research. Her contributions to the field include cutting-edge research on novel treatment approaches, circadian rhythms, and sleep architecture, published in esteemed medical journals. In her current role as a Somnologist at [Name of Prominent Sleep Center], Dr. Sriram is celebrated for her patient-centered approach. She works closely with her patients to develop personalized treatment plans, offering hope and improved sleep quality to those facing sleep-related challenges. Beyond her clinical work, Dr. Sriram is a dedicated mentor and advocate for sleep health education. Her unwavering commitment to advancing the field of somnology and improving the quality of life for her patients solidifies her reputation as a respected leader in the field." },
    { id: 6, availability: {'2023-10-10': ['11:45 PM'],}, firstname: 'Austin', lastname: 'Meyer', degree: 'MD, MA', meetingOptions: [], avatar: FemaleDoctor, insurance: ['Cash only'], speciality: 'Psychiatry', bio: "Dr. Austin Meyer is a highly regarded psychiatrist, recognized for his exceptional expertise in the field of psychiatry. With a career dedicated to understanding and addressing mental health challenges, he has become a trusted authority in this specialized area of medicine.Dr. Meyer holds an MD degree and a Master of Arts (MA) in Psychology, highlighting his comprehensive approach to mental health. He completed specialized training in Psychiatry, where he developed expertise in the diagnosis and treatment of a wide range of psychiatric disorders, including mood disorders, anxiety disorders, and schizophrenia. As an active member of professional organizations such as the American Psychiatric Association, Dr. Meyer stays at the forefront of psychiatric research and advancements. His contributions to the field include research on innovative therapies, neurobiology of mental illness, and the social determinants of mental health, published in prestigious psychiatric journals. In his current role as a Psychiatrist at [Name of Prominent Mental Health Clinic], Dr. Meyer is known for his compassionate, patient-centric approach. He collaborates closely with his patients to develop individualized treatment plans, providing hope and improved mental well-being to those facing mental health challenges. Beyond his clinical work, Dr. Meyer is a dedicated mentor and advocate for mental health awareness. His unwavering commitment to advancing the field of psychiatry and improving the lives of his patients underscores his reputation as a respected leader in the field." },
    { id: 7, availability: {'2023-10-11': ['11:45 PM'],}, firstname: 'Claudia', lastname: 'Yang', degree: 'MD', meetingOptions: ["In Person"], avatar: FemaleDoctor, insurance: ['UnitedHealthcare'], speciality: 'Neurology', bio: "Dr. Claudia Yang is an accomplished neurologist, well-recognized for her expertise in the field of neurology. With a career dedicated to understanding and addressing neurological disorders, she has established herself as a trusted authority in this specialized area of medicine. Dr. Yang earned her MD degree with distinction and completed specialized training in Neurology, where she developed a deep understanding of the diagnosis and treatment of a broad spectrum of neurological conditions, including epilepsy, stroke, movement disorders, and neurodegenerative diseases. As an active member of professional organizations such as the American Academy of Neurology, Dr. Yang remains at the forefront of neurological research and advancements. Her contributions to the field include research on innovative treatment approaches, genetic factors in neurological disorders, and neuroimaging techniques, published in prestigious medical journals. In her current role as a Neurologist at [Name of Prominent Medical Center], Dr. Yang is known for her patient-centered approach. She collaborates closely with her patients to develop individualized treatment plans, providing hope and improved neurological well-being to those facing neurological challenges. Beyond her clinical work, Dr. Yang is a dedicated mentor and advocate for neurological health awareness. Her unwavering commitment to advancing the field of neurology and improving the lives of her patients underscores her reputation as a respected leader in the field." },
    { id: 8, availability: {'2023-10-13': ['11:45 PM'],}, firstname: 'Maliha', lastname: 'Trujillo', degree: 'MD', meetingOptions: ["TeleVisit", "In Person"],avatar: FemaleDoctor, insurance: ['Cigna'], speciality: 'Psychiatry', bio: "Dr. Maliha Trujillo is a distinguished psychiatrist, renowned for her exceptional expertise in the field of psychiatry. With a career dedicated to understanding and addressing mental health challenges, she has become a trusted authority in this specialized area of medicine. Dr. Trujillo holds an MD degree and brings a wealth of experience from specialized training in Psychiatry. Her practice focuses on the diagnosis and treatment of a wide range of psychiatric disorders, including mood disorders, anxiety disorders, and personality disorders. As an active member of professional organizations such as the American Psychiatric Association, Dr. Trujillo stays at the forefront of psychiatric research and advancements. Her contributions to the field include research on innovative therapies, the impact of cultural factors on mental health, and the neuroscience of mental illness, published in reputable psychiatric journals. In her current role as a Psychiatrist at [Name of Prominent Mental Health Clinic], Dr. Trujillo is known for her compassionate, patient-centered approach. She collaborates closely with her patients to develop individualized treatment plans, offering hope and improved mental well-being to those facing mental health challenges. Beyond her clinical work, Dr. Trujillo is a dedicated mentor and advocate for mental health awareness. Her unwavering commitment to advancing the field of psychiatry and improving the lives of her patients underscores her reputation as a respected leader in the field." }
  ]

  const {isClicked, setIsClicked} = useSpecialty();
  const {setSelectedDoctor} = useDoctor();
  const {specialty, setSpecialty} = useSpecialty();
  const {insurance, setInsurance} = useInsurance();


  const filteredDoctors = specialty && insurance
  ? doctors.filter(doctor => doctor.speciality === specialty && doctor.insurance === insurance)
  : (specialty
    ? doctors.filter(doctor => doctor.speciality === specialty)
    : (insurance
      ? doctors.filter(doctor => doctor.insurance === insurance)
      : doctors));

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const sortByEarliestAvailability = (data) => {
    const sorted = [...data];
    sorted.sort((a, b) => {
      const aDates = a.availability ? Object.keys(a.availability) : [];
      const bDates = b.availability ? Object.keys(b.availability) : [];
      const aEarliestDate = aDates.length > 0 ? Math.min(...aDates.map(date => new Date(date))) : null;
      const bEarliestDate = bDates.length > 0 ? Math.min(...bDates.map(date => new Date(date))) : null;
  
      if (aEarliestDate && bEarliestDate) {
        return aEarliestDate - bEarliestDate;
      } else if (aEarliestDate) {
        return -1;
      } else if (bEarliestDate) {
        return 1;
      }
      return 0;
    });

    return sorted;
  };

  useEffect(() => {
    console.log("SELECTED DOCTOR --->", filteredDoctors)
  })
  

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  return (

    <div className="bg-domino-gray rounded-tr-[4rem] w-auto sm:w-42 md:w-max lg:w-max h-4/5 overflow-y-auto">
      {/* Header */}
      <div
        className="flex items-center bg-domino-gray text-white p-4 rounded-tr-[4rem] cursor-pointer"
        onClick={toggleDropdown}
      >
        <img src={Available} alt="Available" />
        <p className='invisible sm:invisible md:visible lg:visible'>Availability</p>
      </div>
      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div className="absolute top-12 left-0 mt-2 bg-white p-2 rounded shadow-md">
          <ul>
            <li onClick={sortByEarliestAvailability}>Language</li>
            <li onClick={sortByEarliestAvailability}>Distance</li>
            {/* Add more sorting options here */}
          </ul>
        </div>
      )}
      {/* Doctor List */}
      <div className="sm:w-full sm:ml-2 md:flex-shrink-0 p-10 mt-[-2rem] text-white md:p-12">
        {sortByEarliestAvailability(filteredDoctors).map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => setSelectedDoctor(doctor)}s
            className={`ml-[-2rem] md:w-[21rem] mr-2 flex items-center space-x-4 p-2 mb-2 hover:bg-slate-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-fuchsia-300 ${
              'md:bg-zinc-800 md:hover:bg-slate-600 md:transition-none' /* Background color for larger screens */
            } rounded-full`}
          >
            {/* Show the profile picture */}
            <div className="md:flex-shrink-0">
              <img
                src={doctor.avatar}
                alt={doctor.firstname}
                className="w-[8rem] h-[5rem] md:w-[5rem] md:h-[5rem] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col flex-1">
              {/* Show name and speciality on larger screens */}
              <div className="hidden md:flex md:flex-col md:space-y-2">
                <p>{"Dr. " + doctor.firstname + " " + doctor.lastname + ", " + doctor.degree}</p>
                <p>{doctor.speciality}</p>
              </div>
              {/* Show user and video icons on larger screens */}
              <div className="hidden md:flex justify-end mr-10 space-x-2 md:items-center">
                <button>
                  <img src={doctor.meetingOptions.some(option => option === "In Person") ? UserWhite : User } alt="User" className="w-8 h-8 rounded-full object-cover" />
                </button>
                <button>
                  <img src={doctor.meetingOptions.some(option => option === "TeleVisit") ? VideoWhite : VideoBlack } alt="VideoWhite" className="w-8 h-8 rounded-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
