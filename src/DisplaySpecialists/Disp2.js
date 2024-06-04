import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { useDoctor } from '../DocList/DoctorContext';

// import axios from 'axios';
import { addDays, addYears } from 'date-fns';
// import Nav from '../Common/Header'
import Individual from './Components/Individual';

import BetterCalendar2 from '../Booking/Components/BetterCalendar';
import Dawg from './Assets/Dawg.jpeg';

import genericDoctor from './Assets/Chad.png'
import gaitanis from './Assets/john-gaitanis.jpeg';
import emilyharris from './Assets/EmilyHarris.jpeg';
import abbeymanning from './Assets/abbeymanning.jpeg';
import claudiayang from './Assets/claudiayang.jpeg';
import kaneproctor from './Assets/kaneproctor.jpeg';
import kavyasrim from './Assets/kavyasrim.jpeg';
import mahila from './Assets/mahila.jpeg';
import yusra from './Assets/yusradunlap.jpeg';
import AustimMeyer from './Assets/AustimMeyer.jpeg';
import { useSpecialty } from '../Elements/SpecialtyContext';
import { useInsurance } from '../Elements/InsuranceContext';



const DisplaySpecialists = () => {
    const navigate = useNavigate();

    const { setSelectedDoctor } = useDoctor();
    const { specialty, setSpecialty } = useSpecialty();
    const { insurance, setInsurance } = useInsurance();
    const [visitType, setVisitType] = useState();
    const [visitOptions, setVisitOptions] = useState([
        'In-person', 'Zoom'
    ]);
    const [language, setLanguage] = useState();
    const [languageOptions, setLanguageOptions] = useState([
        'English', 'Spanish'
    ]);
    const [availablity, setAvailablity] = useState();
    const [availabilityOptions, setAvailabilityOptions] = useState([
        'Morning', 'Afternoon', 'Evening', 'No preference'
    ]);

    const [doctorsData, setDoctorsData] = useState([
        {
            id: 1,
            firstname: 'John',
            lastname: 'Gaitanis',
            degree: 'MD',
            meetingOptions: ["TeleVisit", "In Person"],
            avatar: gaitanis,
            insurance: ['Aetna', 'Medicare', 'Blue Cross', 'United Healthcare'],
            speciality: 'Neurology',
            bio: "Dr. John N. Gaitanis is a pediatric neurologist in Providence, Rhode Island and is affiliated with multiple hospitals in the area, including Tufts Medical Center and Signature Healthcare Brockton Hospital. He received his medical degree from The Warren Alpert Medical School of Brown University and has been in practice for more than 20 years. Dr. John N. Gaitanis accepts Medicare, Aetna, Blue Cross, United Healthcare - see other insurance plans accepted. Dr. John N. Gaitanis is highly recommended by patients.",
            soonest: "Feb 14th",
            pronouns: 'He/Him',
            YOE: 20,
            location: 'Providence, RI',
            languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-10': ['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM', '06:45 PM', '09:00 PM'],
                '2024-04-13': ['10:15 AM', '12:30 PM', '02:45 PM', '05:00 PM', '11:45 PM'],
                '2024-04-18': ['09:00 AM', '11:15 AM', '01:30 PM', '03:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '01:00 AM'],
                '2024-04-20': ['11:45 AM', '04:15 PM'],
                '2024-04-25': ['09:15 AM', '11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM'],
                '2024-04-28': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '07:00 PM', '09:15 PM', '11:30 PM'],
                '2024-05-02': ['12:45 PM', '03:00 PM', '02:15 AM'],
                '2024-05-05': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM'],
                '2024-05-08': ['09:15 AM', '11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM', '10:45 PM'],
            },
            awards: {
                award1: [
                    'American Board of Psychiatry and Neurology',
                    'Certified in Clinical Neurophysiology'

                ],
                award2: [
                    'Regional Top Doctor',
                    '2014'
                ],

            },
            education: {
                edu1: [
                    "Children's Hospital/Beth Israel Deaconess Medical Center/Harvard Medical School",
                    "(Fellowship, Child Neurology, 1998-2001)"
                ],
                edu2: [
                    "The Warren Alpert Medical School of Brown Univerity",
                    "(Medical School)"
                ],
                edu3: [
                    "University of Rochester",
                    "(Resdidency,Pediatrics,1996-1998)",
                ],
            },

        },
        {
            id: 2,
            firstname: 'Emily',
            lastname: 'Harris',
            degree: 'MD, FAAN',
            meetingOptions: ["TeleVisit", "In Person"],
            avatar: emilyharris,
            insurance: ['Aetna'],
            speciality: 'Neurology',
            bio: "Dr. Emily Harris, a seasoned neurologist with 20+ years' experience, holds an MD with top honors. As a Fellow of the American Academy of Neurology (FAAN), she actively engages in cutting-edge research, specializing in genetics and innovative treatments.",
            soonest: "Feb 14th",
            pronouns: "She/Her",
            YOE: 9,
            location: "Denver, Colorado",
            languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-10': ['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM', '06:45 PM', '09:00 PM', '11:15 PM'],
                '2024-04-13': ['10:15 AM', '12:30 PM', '02:45 PM', '05:00 PM', '07:15 PM', '09:30 PM', '11:45 PM'],
                '2024-04-15': ['11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM', '10:45 PM'],
                '2024-04-18': ['09:00 AM', '11:15 AM', '01:30 PM', '03:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '01:00 AM', '03:15 AM'],
                '2024-04-20': ['11:45 AM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM'],
                '2024-04-22': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM'],
                '2024-04-25': ['09:15 AM', '11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM'],
                '2024-04-28': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '07:00 PM', '09:15 PM', '11:30 PM', '01:45 AM'],
                '2024-05-02': ['12:45 PM', '03:00 PM', '05:15 PM', '07:30 PM', '09:45 PM', '12:00 AM', '02:15 AM'],
                '2024-05-05': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM'],
                '2024-05-08': ['09:15 AM', '11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM', '10:45 PM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {
            id: 3,
            availability: { '2023-10-06': ['11:45 PM'] },
            firstname: 'Yusra',
            lastname: 'Dunlap',
            degree: 'MD, PhD',
            meetingOptions: ["TeleVisit", "In Person"],
            avatar: yusra,
            insurance: ['Blue Cross'],
            speciality: 'Immunology',
            bio: "Dr. Yusra Dunlap, a renowned immunologist with an MD and PhD, brings decades of expertise in diagnosing and treating complex immunological conditions. Actively engaged in cutting-edge research, she is a member of prestigious organizations like the American Association of Immunologists. Dr. Dunlap's work, published in top scientific journals, covers areas such as immunotherapy, immunogenetics, and microbiome-related immune function. As a Senior Immunologist at [Prestigious Medical Center], she tailors treatment plans, providing hope to patients. A committed mentor and contributor to community health initiatives, Dr. Dunlap's dedication solidifies her reputation as a respected leader in immunology.",
            pronouns: "She/Her",
            YOE: 4,
            location: "Atlanta, Georgia",
            languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-06': ['10:30 AM', '12:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM'],
                '2024-04-08': ['11:15 AM', '01:30 PM', '03:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM'],
                '2024-04-9': ['12:30 PM', '02:45 PM', '05:00 PM', '07:15 PM', '09:30 PM', '11:45 PM'],
                '2024-04-19': ['09:15 AM', '11:30 AM', '01:45 PM', '04:00 PM', '06:15 PM', '08:30 PM', '10:45 PM'],
                '2024-04-21': ['11:00 AM', '01:15 PM', '03:30 PM', '05:45 PM', '08:00 PM', '10:15 PM', '12:30 AM', '02:45 AM'],
                '2024-04-23': ['08:45 AM', '11:00 AM', '01:15 PM', '03:30 PM', '05:45 PM', '08:00 PM', '10:15 PM'],
                '2024-04-26': ['09:30 AM', '11:45 AM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM'],
                '2024-04-29': ['10:15 AM', '12:30 PM', '02:45 PM', '05:00 PM', '07:15 PM', '09:30 PM', '11:45 PM', '02:00 AM'],
                '2024-05-03': ['01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM'],
                '2024-05-06': ['10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM'],
                '2024-05-09': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },

        },
        {
            id: 4, availability: { '2023-10-15': ['11:45 PM'], }, firstname: 'Abbey', lastname: 'Manning', degree: 'MD', meetingOptions: ["TeleVisit"], avatar: abbeymanning, insurance: ['Cigna'], speciality: 'Rheumatology', bio: "Dr. Abbey Manning is a highly regarded rheumatologist, known for her expertise in the diagnosis and treatment of complex rheumatological conditions. With a career dedicated to advancing our understanding of these conditions, she has become a trusted specialist in the field. Dr. Manning earned her MD with distinction, followed by specialized training in Rheumatology. Her passion for the intricate interplay of the immune system and musculoskeletal health led her to focus her career on the diagnosis and management of rheumatic diseases. As an active member of professional organizations like the American College of Rheumatology, Dr. Manning stays up-to-date with the latest research and treatments.", pronouns: "She/Her", YOE: 6, location: "Seattle, Washington", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-07': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-12': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-21': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-22': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-04-28': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },

            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {



            id: 5, availability: { '2023-10-08': ['11:45 PM'], }, firstname: 'Kane', lastname: 'Proctor', degree: 'MD, MS', meetingOptions: ["In Person"], avatar: kaneproctor, insurance: ['UnitedHealthcare'], speciality: 'Gastroenterology',
            bio: "Dr. Kane Proctor is a distinguished gastroenterologist, known for his expertise in the diagnosis and treatment of complex gastrointestinal disorders. With a career devoted to enhancing our understanding of digestive health, he has become a trusted authority in the field. Dr. Proctor earned his MD with distinction, followed by advanced training in Gastroenterology. His profound interest in digestive health led him to specialize in the diagnosis and management of a wide range of gastrointestinal conditions.",


            pronouns: "He/Him", YOE: 13, location: "Austin, Texas", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-27': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-28': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-29': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-30': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-05-05': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {

            id: 6, availability: { '2023-10-09': ['11:45 PM'], }, firstname: 'Kavya', lastname: 'Sriram', degree: 'MD, PhD', meetingOptions: ["TeleVisit"], avatar: kavyasrim, insurance: ['Cash only'], speciality: 'Somnology',
            bio: "Dr. Kavya Sriram is a distinguished somnologist, renowned for her expertise in the field of somnology, which encompasses the diagnosis and treatment of sleep disorders. With an impressive career focused on understanding the intricacies of sleep health, she has become a respected authority in this specialized area of medicine. Dr. Sriram completed her medical degree with distinction, followed by extensive training in Somnology.",


            pronouns: "Them/Them", YOE: 11, location: "Boston, Massachusetts", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-17': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-22': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-24': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-28': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-04-29': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {


            id: 7, availability: { '2023-10-10': ['11:45 PM'], }, firstname: 'Austin', lastname: 'Meyer', degree: 'MD, MA', meetingOptions: [], avatar: AustimMeyer, insurance: ['Cash only'], speciality: 'Psychiatry',
            bio: "Dr. Austin Meyer is a highly regarded psychiatrist, recognized for his exceptional expertise in the field of psychiatry. With a career dedicated to understanding and addressing mental health challenges, he has become a trusted authority in this specialized area of medicine.Dr. Meyer holds an MD degree and a Master of Arts (MA) in Psychology, highlighting his comprehensive approach to mental health. He completed specialized training in Psychiatry, where he developed expertise in the diagnosis and treatment of a wide range of psychiatric disorders, including mood disorders, anxiety disorders, and schizophrenia.",


            pronouns: "He/Them", YOE: 7, location: "Phoenix, Arizona", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-12': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-17': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-18': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-20': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-04-21': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {


            id: 8, availability: { '2023-10-11': ['11:45 PM'], }, firstname: 'Claudia', lastname: 'Yang', degree: 'MD', meetingOptions: ["In Person"], avatar: claudiayang, insurance: ['UnitedHealthcare'], speciality: 'Neurology',
            bio: "Dr. Claudia Yang is an accomplished neurologist, well-recognized for her expertise in the field of neurology. With a career dedicated to understanding and addressing neurological disorders, she has established herself as a trusted authority in this specialized area of medicine. Dr. Yang earned her MD degree with distinction and completed specialized training in Neurology, where she developed a deep understanding of the diagnosis and treatment of a broad spectrum of neurological conditions, including epilepsy, stroke, movement disorders, and neurodegenerative diseases.",


            pronouns: "She/Her", YOE: 2, location: "Nashville, Tennessee", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-06': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-08': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-10': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-11': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-04-12': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        },
        {

            id: 9, availability: { '2023-10-13': ['11:45 PM'], }, firstname: 'Maliha', lastname: 'Trujillo', degree: 'MD', meetingOptions: ["TeleVisit", "In Person"], avatar: mahila, insurance: ['Cigna'], speciality: 'Psychiatry',
            bio: "Dr. Maliha Trujillo is a distinguished psychiatrist, renowned for her exceptional expertise in the field of psychiatry. With a career dedicated to understanding and addressing mental health challenges, she has become a trusted authority in this specialized area of medicine. Dr. Trujillo holds an MD degree and brings a wealth of experience from specialized training in Psychiatry. Her practice focuses on the diagnosis and treatment of a wide range of psychiatric disorders, including mood disorders, anxiety disorders, and personality disorders.",


            pronouns: "They/Them", YOE: 4, location: "Miami, Florida", languagesSpoken: ["English", "Spanish", "French"],
            availability: {
                '2024-04-09': ['09:00 AM', '11:30 AM', '02:30 PM', '04:45 PM', '06:15 PM', '08:30 PM', '10:45 PM', '01:00 AM', '03:15 AM', '05:30 AM', '07:45 AM', '09:30 AM'],
                '2024-04-13': ['11:15 AM', '01:30 PM', '03:45 PM', '05:30 PM', '07:30 PM', '09:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM'],
                '2024-04-20': ['10:00 AM', '12:15 PM', '02:30 PM', '04:45 PM', '06:00 PM', '08:15 PM', '10:30 PM', '12:45 AM', '03:00 AM', '05:15 AM', '07:30 AM', '09:45 AM'],
                '2024-04-21': ['12:45 PM', '02:00 PM', '04:15 PM', '06:30 PM', '08:45 PM', '11:00 PM', '01:15 AM', '03:30 AM', '05:45 AM', '08:00 AM', '10:15 AM', '12:30 PM'],
                '2024-04-22': ['08:30 AM', '10:45 AM', '01:00 PM', '03:15 PM', '05:30 PM', '07:45 PM', '10:00 PM', '12:15 AM', '02:30 AM', '04:45 AM', '07:00 AM', '09:15 AM'],
            },
            awards: {
                award1: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],
                award2: [
                    'Department of Osteopathic Manipulative Medicine Recognition Award',
                    'In recognition of exceptional contributions to the field of Osteopathic Manipulative Medicine.',
                    '2006',
                ],

            },
            education: {
                edu1: [
                    'University of California, Santa Cruz',
                    'Doctor of Medicine',
                ],
            },
        }
    ]);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const specialtyParam = queryParams.get('specialty');
    const insuranceParam = queryParams.get('insurance');

    const [specialtyFilter, setSpecialtyFilter] = useState(specialtyParam || '');
    const [insuranceFilter, setInsuranceFilter] = useState(insuranceParam || '');

    let filteredDoctors = doctorsData;



    // Apply specialty filter
    console.log("filtering", specialtyFilter)
    if (specialtyFilter != null && specialtyFilter !== "All Specialists") {
        filteredDoctors = filteredDoctors.filter(doctor => doctor.speciality === specialtyFilter);
    }
    console.log("filtering", insuranceFilter)
    // Apply insurance filter
    if (insuranceFilter != null && insuranceFilter !== "Skip for now") {
        filteredDoctors = filteredDoctors.filter(doctor => doctor.insurance.includes(insuranceFilter));
    }



    const [selectedData, setSelectedData] = useState(filteredDoctors.length > 0 ? [filteredDoctors[0]] : []);
    console.log(filteredDoctors)

    useEffect(() => {
        setSelectedData(filteredDoctors[0]);
    }, [filteredDoctors]);

    const fromDateRaw = addDays(new Date(), 4);

    const handleSelect = (doctor) => {
        setSelectedData(doctor);
    };

    const [teleAvail, setTeleAvail] = useState(null);
    const [physAvail, setPhysAvail] = useState(null);

    useEffect(() => {

        if (selectedData) {
            const padZero = (value) => (value < 10 ? `0${value}` : value);
            const fromDate = `${fromDateRaw.getFullYear()}-${padZero(fromDateRaw.getMonth() + 1)}-${padZero(fromDateRaw.getDate())}`;
            const toDateRaw = addDays(fromDateRaw, 6)
            const toDate = `${toDateRaw.getFullYear()}-${padZero(toDateRaw.getMonth() + 1)}-${padZero(toDateRaw.getDate())}`;
            const providerID = selectedData.service_provider_id;

            setActiveTab(null);
        }

    }, [selectedData]);


    const [activeTab, setActiveTab] = useState('fTF');

    const handleTabChange = (tab) => {
        // tab === 'fTF' ? setIndVisit(visitTypes[1].visittype_id) : setIndVisit(visitTypes[0].visittype_id);
        setActiveTab(tab);

    };

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const [selectedTime, setSelectedTime] = useState(null);
    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek[date.getDay()];
    };

    const handleSubmit = (fName, lName, deg, loc, form, day, time) => {
        // Create an object to pass
        const bookingData = {
            fName,
            lName,
            deg,
            loc,
            form,
            day,
            time
        };

        // Convert the object to a JSON string
        const bookingDataString = encodeURIComponent(JSON.stringify(bookingData));

        // Append the JSON string as a query parameter in the URL
        const url = `/booking?bookingData=${bookingDataString}`;

        // Navigate to the new URL
        navigate(url);
    }

    const [selectedTab, setSelectedTab] = useState('inPerson');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };


    const [appDay, setAppDay] = useState(null);
    const [appTime, setAppTime] = useState(null);

    const handleDateClick = (day, time) => {
        const formattedDate = day.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
        console.log(day)
        setAppDay(formattedDate)
        setAppTime(time);
    };

    const [visitVis, setVisitVis] = useState(false);
    const [lanVis, setLanVis] = useState(false);
    const [availVis, setAvailVis] = useState(false);
    const [specVis, setSpecVis] = useState(false);
    const [sortVis, setSortVis] = useState(false);
    return (
        <div className="w-full">
            <div className="w-fill h-16 rounded-3xl mt-6 mx-2 flex items-center justify-between px-4 mb-10">
                <div className="flex space-x-4 items-center">
                    <p className="text-stone-200">Filters: </p>
                    <button onClick={() => setVisitVis(!visitVis)} className="rounded-3xl border-2 border-stone-200 text-stone-200 px-4 py-2">Visit Type</button>
                    <ul className={`dropdown-menu absolute ${visitVis ? 'block' : 'hidden'} bg-[#331735] border border-stone-200 rounded-2xl py-1 w-40 mt-36 left-[4.5rem]`}>
                        <li><button className="block px-4 py-2 text-stone-100 hover:bg-[#6c2e70] w-full text-left rounded-2xl">In Person</button></li>
                        <li><button className="block px-4 py-2 text-stone-100 hover:bg-[#6c2e70] w-full text-left rounded-2xl">Virtual</button></li>
                    </ul>
                    {/* <button onClick={() => setLanVis(!lanVis)} className="rounded-3xl border-2 border-stone-200 text-stone-200 px-4 py-2">Language</button>
                    <ul className={`dropdown-menu absolute ${lanVis ? 'block' : 'hidden'} bg-white border border-stone-200 rounded-lg py-1 w-40 mt-36 left-[12rem]`}>
                        <li><button className="block px-4 py-2 text-stone-500 hover:bg-gray-100 w-full text-left">English</button></li>
                        <li><button className="block px-4 py-2 text-stone-500 hover:bg-gray-100 w-full text-left">Spanish</button></li>
                    </ul> */}
                    <button onClick={() => setAvailVis(!availVis)} className="rounded-3xl border-2 border-stone-200 text-stone-200 px-4 py-2">Availibity</button>
                    <ul className={`dropdown-menu absolute ${availVis ? 'block' : 'hidden'} bg-[#331735] border border-stone-200 rounded-2xl py-1 w-40 mt-36 left-[12rem]`}>
                        <li><button className="block px-4 py-2 text-stone-100 hover:bg-[#6c2e70] w-full text-left rounded-2xl">Morning</button></li>
                        <li><button className="block px-4 py-2 text-stone-100 hover:bg-[#6c2e70] w-full text-left rounded-2xl">Afternoon</button></li>
                    </ul>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                    <p className="text-stone-200">Sort: </p>
                    <button onClick={() => setSortVis(!sortVis)} className="rounded-3xl border-2 border-stone-200 text-stone-200 px-4 py-2">Soonest Available</button>
                    {/* <ul className={`dropdown-menu absolute ${sortVis ? 'block' : 'hidden'} bg-white border border-stone-200 rounded-lg py-1 w-40 mt-36 left-[77.4rem]`}>
                        <li><button className="block px-4 py-2 text-stone-500 hover:bg-gray-100 w-full text-left">Morning</button></li>
                        <li><button className="block px-4 py-2 text-stone-500 hover:bg-gray-100 w-full text-left">Afternoon</button></li>
                    </ul> */}
                </div>
            </div>

            <div className="h-fit flex pl-4 mt-2 rounded-3xl bg-transparent">
                <div className="w-full md:w-[22rem] h-[62rem] rounded-3xl flex flex-col bg-transparent m-2">
                    <h1 className="ml-4 text-left text-xl font-semibold text-stone-200">{filteredDoctors.length} Specialists Available:</h1>
                    <div className="overflow-y-auto p-2">
                        {Array.isArray(filteredDoctors) &&
                            filteredDoctors.map((doctor, index) => (
                                <button key={index} className={`rounded-3xl m-1 p-1 w-full ${selectedData === doctor ? 'bg-[#FF9545]' : ''}`}
                                    onClick={() => handleSelect(doctor)}>
                                    <Individual doctor={doctor} />
                                </button>
                            ))}
                    </div>
                </div>

                {selectedData && selectedData.availability && (
                    <div className="mt-12 bg-domino-gray text-black flex-1 hidden md:block rounded-y-3xl rounded-l-3xl ml-2 pb-6 relative">
                        <div className="w-[14rem] h-[14rem] relative object-contain">
                            <img
                                src={selectedData.avatar}
                                alt="Profile Image"
                                className="object-contain w-full h-full absolute -top-14 -right-16 rounded-2xl"
                            />
                        </div>
                        <div className="-mt-48 ml-80">
                            <div className="flex flex-row">
                                <p className="text-left text-3xl text-stone-200 font-semibold">Dr. {selectedData.firstname} {selectedData.lastname}, {selectedData.degree}</p>
                                <p className="ml-4 text-left text-lg text-[#999999] ">({selectedData.pronouns})</p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <h1 className="font-normal text-xl text-[#999999]"> {selectedData.speciality}</h1>

                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-row items-center mt-4">
                                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8756 28.0331H2.69814C2.21613 28.0313 1.75443 27.851 1.41359 27.5316C1.07275 27.2122 0.880398 26.7795 0.878418 26.3278V1.73165C0.87932 1.27951 1.07129 0.846104 1.41232 0.52627C1.75335 0.206435 2.21567 0.0262095 2.69814 0.0250244H21.6952C22.1775 0.0260397 22.6397 0.206035 22.9808 0.52563C23.3218 0.845224 23.5139 1.27839 23.5149 1.73037V13.1393C23.8384 13.2234 24.1329 13.385 24.3694 13.6082L25.3695 14.5435H26.7825C27.3004 14.5455 27.7964 14.7393 28.1623 15.0827C28.5283 15.426 28.7346 15.891 28.7362 16.3763V17.7005C29.4137 18.3347 30.3085 18.9427 30.3085 19.9331C30.3085 20.9235 29.4308 21.5161 28.7485 22.1561L32.0147 27.4579C32.3381 27.9063 31.8958 28.6751 31.3264 28.4585L28.4628 27.6436L27.8291 30.3785C27.7095 30.8961 26.8721 30.898 26.5822 30.4272L24.1397 26.4406C23.8053 26.668 23.4028 26.791 22.9896 26.792C22.5763 26.793 22.1732 26.6721 21.8374 26.4463L19.384 30.4278C19.0948 30.898 18.2588 30.8942 18.1398 30.3778L17.5041 27.6436L14.6036 28.4688C14.2769 28.5617 13.9679 28.3144 13.8756 28.0312V28.0331ZM22.9852 16.2905C22.2164 16.2904 21.4648 16.5039 20.8255 16.9041C20.1862 17.3042 19.6879 17.8731 19.3936 18.5387C19.0993 19.2043 19.0223 19.9367 19.1722 20.6433C19.3221 21.35 19.6922 21.9991 20.2358 22.5086C20.7793 23.0181 21.4719 23.365 22.2259 23.5056C22.9799 23.6462 23.7615 23.5741 24.4718 23.2985C25.1821 23.0228 25.7891 22.5559 26.2163 21.9569C26.6434 21.3578 26.8714 20.6536 26.8714 19.9331C26.8714 18.9671 26.462 18.0407 25.7332 17.3576C25.0044 16.6745 24.0159 16.2907 22.9852 16.2905ZM22.9852 17.2226C22.4131 17.2225 21.8538 17.3813 21.3781 17.6791C20.9024 17.9768 20.5316 18.4001 20.3125 18.8954C20.0935 19.3906 20.0362 19.9357 20.1477 20.4615C20.2592 20.9873 20.5346 21.4703 20.9391 21.8495C21.3435 22.2286 21.8589 22.4868 22.42 22.5914C22.981 22.6961 23.5626 22.6424 24.0911 22.4373C24.6197 22.2322 25.0714 21.8848 25.3893 21.439C25.7071 20.9933 25.8768 20.4692 25.8768 19.9331C25.8768 19.2143 25.5721 18.525 25.0299 18.0167C24.4876 17.5084 23.7521 17.2228 22.9852 17.2226ZM21.1005 25.789L20.6015 25.322H19.1898C18.7501 25.3204 18.3237 25.1807 17.9787 24.9252C17.6337 24.6697 17.3901 24.3132 17.2867 23.9126L15.1778 27.3361L17.6948 26.6186C17.7619 26.594 17.8339 26.5833 17.9058 26.5873C17.9777 26.5913 18.0478 26.6098 18.1113 26.6417C18.1748 26.6736 18.2302 26.7179 18.2736 26.7718C18.317 26.8257 18.3474 26.8877 18.3627 26.9537L18.915 29.3362L21.1025 25.7884L21.1005 25.789ZM17.2238 22.1561L16.2347 21.2297C15.8707 20.8846 15.6666 20.4189 15.6666 19.9337C15.6666 19.4485 15.8707 18.9829 16.2347 18.6377L17.2341 17.7011V16.3763C17.2353 15.8906 17.4418 15.4251 17.8083 15.0816C18.1748 14.7382 18.6715 14.5447 19.1898 14.5435H20.6015L21.6016 13.6063C21.8832 13.3648 22.1423 13.2097 22.5183 13.1239V1.73165C22.5172 1.52722 22.4302 1.33142 22.2761 1.18668C22.1221 1.04194 21.9134 0.959929 21.6952 0.958415H2.69814C2.47929 0.95892 2.26953 1.04049 2.11458 1.18533C1.95964 1.33018 1.87208 1.52655 1.871 1.73165V26.3278C1.87109 26.4295 1.89255 26.5302 1.93417 26.6241C1.97579 26.7181 2.03674 26.8034 2.11355 26.8753C2.19035 26.9471 2.28151 27.0041 2.38182 27.043C2.48212 27.0818 2.58961 27.1018 2.69814 27.1017H14.1757L17.2225 22.1561H17.2238ZM28.6829 23.9133C28.5797 24.3139 28.3361 24.6704 27.991 24.9259C27.646 25.1814 27.2195 25.3211 26.7798 25.3227H25.3668L24.8808 25.7781L27.056 29.3323L27.6186 26.9185C27.6568 26.8012 27.7429 26.7029 27.8582 26.645C27.9734 26.587 28.1084 26.5741 28.2338 26.609L30.7897 27.3374L28.6802 23.9139L28.6829 23.9133ZM22.305 14.2661L21.1654 15.336C21.1192 15.3809 21.0638 15.4167 21.0025 15.441C20.9412 15.4653 20.8752 15.4778 20.8086 15.4775H19.1898C18.9351 15.4787 18.6912 15.5741 18.5111 15.7428C18.331 15.9116 18.2293 16.1402 18.228 16.3789V17.8959C18.2281 17.9571 18.2153 18.0176 18.1903 18.0742C18.1653 18.1307 18.1286 18.182 18.0824 18.2252L16.9381 19.2982C16.7595 19.4681 16.6594 19.6969 16.6594 19.9353C16.6594 20.1737 16.7595 20.4026 16.9381 20.5724L18.077 21.6404C18.1249 21.6836 18.1631 21.7356 18.189 21.7931C18.215 21.8505 18.2283 21.9123 18.228 21.9748V23.4918C18.2287 23.7306 18.3303 23.9595 18.5105 24.1284C18.6908 24.2973 18.935 24.3924 19.1898 24.3931H20.8065C20.8718 24.3931 20.9365 24.4051 20.9967 24.4285C21.057 24.4519 21.1118 24.4863 21.1579 24.5296L22.3022 25.6033C22.4838 25.7702 22.7281 25.8637 22.9824 25.8637C23.2368 25.8637 23.481 25.7702 23.6626 25.6033L24.8021 24.5353C24.8483 24.4904 24.9038 24.4546 24.9651 24.4303C25.0264 24.406 25.0924 24.3935 25.159 24.3938H26.7777C27.0325 24.3929 27.2767 24.2977 27.4568 24.1288C27.637 23.96 27.7386 23.7312 27.7396 23.4924V21.9722C27.7395 21.911 27.7523 21.8505 27.7773 21.7939C27.8023 21.7374 27.8389 21.6861 27.8852 21.6429C28.3288 21.2265 29.3098 20.5199 29.3098 19.9331C29.3098 19.3194 28.3015 18.6128 27.8906 18.2277C27.8428 18.1844 27.8047 18.1324 27.7788 18.0749C27.7528 18.0175 27.7395 17.9557 27.7396 17.8933V16.3763C27.739 16.1374 27.6375 15.9085 27.4572 15.7395C27.277 15.5706 27.0327 15.4755 26.7777 15.475H25.161C25.0958 15.475 25.0311 15.463 24.9708 15.4396C24.9105 15.4162 24.8558 15.3818 24.8097 15.3385L23.666 14.2648C23.303 13.9266 22.6652 13.908 22.305 14.2648V14.2661ZM3.97783 26.1817H13.7655C13.8973 26.1817 14.0237 26.1327 14.1169 26.0453C14.2101 25.958 14.2625 25.8395 14.2625 25.716C14.2625 25.5925 14.2101 25.474 14.1169 25.3867C14.0237 25.2993 13.8973 25.2503 13.7655 25.2503H3.97783C3.84603 25.2503 3.71962 25.2993 3.62642 25.3867C3.53322 25.474 3.48086 25.5925 3.48086 25.716C3.48086 25.8395 3.53322 25.958 3.62642 26.0453C3.71962 26.1327 3.84603 26.1817 3.97783 26.1817ZM3.97783 23.8499H15.2011C15.2679 23.8522 15.3346 23.8419 15.3971 23.8195C15.4596 23.7971 15.5167 23.7632 15.5648 23.7196C15.613 23.6761 15.6513 23.624 15.6775 23.5663C15.7037 23.5086 15.7172 23.4465 15.7172 23.3838C15.7172 23.3211 15.7037 23.2591 15.6775 23.2014C15.6513 23.1437 15.613 23.0915 15.5648 23.048C15.5167 23.0045 15.4596 22.9705 15.3971 22.9481C15.3346 22.9258 15.2679 22.9154 15.2011 22.9178H3.97783C3.91097 22.9154 3.8443 22.9258 3.7818 22.9481C3.7193 22.9705 3.66225 23.0045 3.61408 23.048C3.5659 23.0915 3.52758 23.1437 3.5014 23.2014C3.47523 23.2591 3.46173 23.3211 3.46173 23.3838C3.46173 23.4465 3.47523 23.5086 3.5014 23.5663C3.52758 23.624 3.5659 23.6761 3.61408 23.7196C3.66225 23.7632 3.7193 23.7971 3.7818 23.8195C3.8443 23.8419 3.91097 23.8522 3.97783 23.8499ZM3.97783 21.518H14.8135C14.8803 21.5203 14.947 21.51 15.0095 21.4876C15.072 21.4652 15.1291 21.4313 15.1772 21.3878C15.2254 21.3443 15.2637 21.2921 15.2899 21.2344C15.3161 21.1767 15.3296 21.1146 15.3296 21.0519C15.3296 20.9892 15.3161 20.9272 15.2899 20.8695C15.2637 20.8118 15.2254 20.7596 15.1772 20.7161C15.1291 20.6726 15.072 20.6386 15.0095 20.6163C14.947 20.5939 14.8803 20.5836 14.8135 20.5859H3.97783C3.91097 20.5836 3.8443 20.5939 3.7818 20.6163C3.7193 20.6386 3.66225 20.6726 3.61408 20.7161C3.5659 20.7596 3.52758 20.8118 3.5014 20.8695C3.47523 20.9272 3.46173 20.9892 3.46173 21.0519C3.46173 21.1146 3.47523 21.1767 3.5014 21.2344C3.52758 21.2921 3.5659 21.3443 3.61408 21.3878C3.66225 21.4313 3.7193 21.4652 3.7818 21.4876C3.8443 21.51 3.91097 21.5203 3.97783 21.518ZM3.97783 19.1861H10.0994C10.2281 19.1816 10.35 19.1306 10.4393 19.0437C10.5287 18.9568 10.5786 18.8408 10.5786 18.7201C10.5786 18.5994 10.5287 18.4834 10.4393 18.3965C10.35 18.3095 10.2281 18.2585 10.0994 18.254H3.97783C3.91097 18.2517 3.8443 18.262 3.7818 18.2844C3.7193 18.3068 3.66225 18.3407 3.61408 18.3842C3.5659 18.4277 3.52758 18.4799 3.5014 18.5376C3.47523 18.5953 3.46173 18.6574 3.46173 18.7201C3.46173 18.7828 3.47523 18.8448 3.5014 18.9025C3.52758 18.9602 3.5659 19.0124 3.61408 19.0559C3.66225 19.0994 3.7193 19.1334 3.7818 19.1557C3.8443 19.1781 3.91097 19.1884 3.97783 19.1861ZM11.831 19.1861H14.8593C14.9261 19.1884 14.9928 19.1781 15.0553 19.1557C15.1178 19.1334 15.1749 19.0994 15.223 19.0559C15.2712 19.0124 15.3095 18.9602 15.3357 18.9025C15.3619 18.8448 15.3754 18.7828 15.3754 18.7201C15.3754 18.6574 15.3619 18.5953 15.3357 18.5376C15.3095 18.4799 15.2712 18.4277 15.223 18.3842C15.1749 18.3407 15.1178 18.3068 15.0553 18.2844C14.9928 18.262 14.9261 18.2517 14.8593 18.254H11.831C11.7023 18.2585 11.5804 18.3095 11.491 18.3965C11.4017 18.4834 11.3517 18.5994 11.3517 18.7201C11.3517 18.8408 11.4017 18.9568 11.491 19.0437C11.5804 19.1306 11.7023 19.1816 11.831 19.1861ZM3.97783 16.8549H11.2731C11.34 16.8572 11.4067 16.8469 11.4692 16.8245C11.5317 16.8021 11.5887 16.7682 11.6369 16.7247C11.6851 16.6812 11.7234 16.629 11.7496 16.5713C11.7758 16.5136 11.7892 16.4515 11.7892 16.3888C11.7892 16.3261 11.7758 16.2641 11.7496 16.2064C11.7234 16.1487 11.6851 16.0965 11.6369 16.053C11.5887 16.0095 11.5317 15.9755 11.4692 15.9532C11.4067 15.9308 11.34 15.9205 11.2731 15.9228H3.97783C3.91097 15.9205 3.8443 15.9308 3.7818 15.9532C3.7193 15.9755 3.66225 16.0095 3.61408 16.053C3.5659 16.0965 3.52758 16.1487 3.5014 16.2064C3.47523 16.2641 3.46173 16.3261 3.46173 16.3888C3.46173 16.4515 3.47523 16.5136 3.5014 16.5713C3.52758 16.629 3.5659 16.6812 3.61408 16.7247C3.66225 16.7682 3.7193 16.8021 3.7818 16.8245C3.8443 16.8469 3.91097 16.8572 3.97783 16.8549ZM13.0922 16.8549H16.1417C16.2704 16.8504 16.3922 16.7994 16.4816 16.7124C16.571 16.6255 16.6209 16.5095 16.6209 16.3888C16.6209 16.2681 16.571 16.1521 16.4816 16.0652C16.3922 15.9783 16.2704 15.9272 16.1417 15.9228H13.0922C12.9635 15.9272 12.8416 15.9783 12.7523 16.0652C12.6629 16.1521 12.613 16.2681 12.613 16.3888C12.613 16.5095 12.6629 16.6255 12.7523 16.7124C12.8416 16.7994 12.9635 16.8504 13.0922 16.8549ZM8.23867 13.7972H16.1492C16.2779 13.7927 16.3998 13.7416 16.4891 13.6547C16.5785 13.5678 16.6284 13.4518 16.6284 13.3311C16.6284 13.2104 16.5785 13.0944 16.4891 13.0075C16.3998 12.9206 16.2779 12.8695 16.1492 12.8651H8.24141C8.1127 12.8695 7.99086 12.9206 7.90149 13.0075C7.81212 13.0944 7.76219 13.2104 7.76219 13.3311C7.76219 13.4518 7.81212 13.5678 7.90149 13.6547C7.99086 13.7416 8.1127 13.7927 8.24141 13.7972H8.23867ZM9.00771 9.02324C9.35549 8.52965 9.82847 8.12459 10.3843 7.84433C10.9401 7.56408 11.5614 7.41739 12.1926 7.41739C12.8237 7.41739 13.4451 7.56408 14.0009 7.84433C14.5567 8.12459 15.0297 8.52965 15.3774 9.02324C15.8123 8.47093 16.0751 7.81638 16.1366 7.13242C16.1981 6.44846 16.0559 5.76192 15.7258 5.1492C15.3957 4.53649 14.8906 4.02162 14.2668 3.66191C13.6431 3.3022 12.925 3.11174 12.1926 3.11174C11.4602 3.11174 10.7421 3.3022 10.1183 3.66191C9.49452 4.02162 8.98948 4.53649 8.65937 5.1492C8.32926 5.76192 8.18705 6.44846 8.24855 7.13242C8.31005 7.81638 8.57285 8.47093 9.00771 9.02324ZM14.6672 9.71576C14.4226 9.30164 14.0641 8.95646 13.629 8.7161C13.1939 8.47575 12.698 8.34898 12.1929 8.34898C11.6878 8.34898 11.192 8.47575 10.7569 8.7161C10.3217 8.95646 9.96326 9.30164 9.71865 9.71576C10.4209 10.2424 11.2935 10.5293 12.1929 10.5293C13.0923 10.5293 13.9649 10.2424 14.6672 9.71576ZM12.1933 3.67274C11.8224 3.67274 11.4598 3.77582 11.1514 3.96894C10.8431 4.16205 10.6027 4.43653 10.4608 4.75766C10.3189 5.07879 10.2818 5.43215 10.3542 5.77303C10.4267 6.11392 10.6053 6.42703 10.8676 6.67276C11.1299 6.91848 11.4641 7.08579 11.8279 7.15353C12.1916 7.22126 12.5687 7.18637 12.9113 7.05327C13.2539 6.92017 13.5467 6.69484 13.7527 6.40578C13.9586 6.11672 14.0685 5.77691 14.0684 5.42934C14.0678 4.9635 13.8701 4.51691 13.5185 4.18757C13.167 3.85824 12.6903 3.67308 12.1933 3.67274ZM12.1933 4.60421C11.7708 4.60421 11.3135 4.99243 11.3135 5.42934C11.3135 5.59256 11.3651 5.75211 11.4619 5.88782C11.5587 6.02352 11.6962 6.12928 11.8572 6.19171C12.0181 6.25415 12.1952 6.27045 12.366 6.23856C12.5368 6.20667 12.6937 6.12802 12.8168 6.01256C12.9399 5.8971 13.0237 5.75002 13.0576 5.58992C13.0915 5.42982 13.0739 5.26389 13.0072 5.11313C12.9405 4.96237 12.8275 4.83355 12.6826 4.74296C12.5377 4.65237 12.3674 4.60409 12.1933 4.60421ZM12.1933 2.17945C11.2137 2.17945 10.2561 2.45167 9.44165 2.9617C8.62718 3.47172 7.99239 4.19663 7.61756 5.04476C7.24272 5.89289 7.14468 6.82614 7.33584 7.72649C7.52699 8.62683 7.99875 9.45384 8.69146 10.1029C9.38417 10.752 10.2667 11.194 11.2275 11.373C12.1882 11.552 13.1841 11.46 14.089 11.1086C14.994 10.7572 15.7674 10.1622 16.3116 9.39889C16.8557 8.63555 17.146 7.73813 17.1459 6.82013C17.1457 5.58929 16.6238 4.40891 15.6951 3.53863C14.7663 2.66835 13.5067 2.17945 12.1933 2.17945Z" fill="#D9D9D9" />
                                        </svg>

                                        <h1 className="ml-2 w-28 font-normal text-sm text-stone-200">{selectedData.YOE} years of experience</h1>
                                    </div>

                                    <div className="flex flex-row items-center mt-4">
                                        <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5121 30.1671C11.5667 30.2395 11.6398 30.2988 11.7252 30.3397C11.8105 30.3806 11.9055 30.402 12.002 30.402C12.0984 30.402 12.1934 30.3806 12.2788 30.3397C12.3641 30.2988 12.4372 30.2395 12.4918 30.1671C12.5587 30.074 19.5738 20.6584 22.0761 16.8678C23.3065 15.0871 23.9723 13.0313 24 10.9275C23.9958 8.03053 22.7302 5.25327 20.4807 3.20478C18.2311 1.1563 15.1813 0.00379188 12 0C8.81868 0.00379188 5.76885 1.1563 3.51932 3.20478C1.26978 5.25327 0.00416404 8.03053 0 10.9275C0.0284223 13.03 0.69423 15.0845 1.92393 16.8642C4.43803 20.6548 11.4413 30.0704 11.5121 30.1671ZM12 1.07484C14.8683 1.07863 17.6179 2.11789 19.6461 3.96481C21.6742 5.81172 22.8155 8.31559 22.8197 10.9275C22.7899 12.832 22.1826 14.6918 21.0649 16.3017C18.9561 19.4832 13.6407 26.6918 12.0157 28.8952C10.379 26.6846 5.05967 19.4832 2.96656 16.3017C1.83781 14.6948 1.21957 12.8347 1.18033 10.9275C1.18449 8.31559 2.32575 5.81172 4.35393 3.96481C6.38211 2.11789 9.13172 1.07863 12 1.07484Z" fill="#797779" />
                                            <path d="M11.9998 16.0975C13.1282 16.0975 14.2312 15.7928 15.1693 15.222C16.1075 14.6511 16.8387 13.8398 17.2705 12.8905C17.7023 11.9412 17.8153 10.8967 17.5951 9.88895C17.375 8.8812 16.8317 7.95554 16.0338 7.22899C15.236 6.50245 14.2195 6.00767 13.1128 5.80722C12.0062 5.60677 10.8591 5.70965 9.81666 6.10285C8.77422 6.49605 7.88324 7.16191 7.25637 8.01623C6.62951 8.87056 6.29492 9.87497 6.29492 10.9024C6.297 12.2797 6.89872 13.6 7.96815 14.5738C9.03758 15.5477 10.4874 16.0956 11.9998 16.0975ZM11.9998 6.78224C12.8947 6.78224 13.7695 7.02388 14.5136 7.47662C15.2576 7.92935 15.8376 8.57284 16.18 9.32571C16.5225 10.0786 16.6121 10.907 16.4375 11.7063C16.2629 12.5055 15.832 13.2397 15.1992 13.8159C14.5664 14.3921 13.7602 14.7845 12.8825 14.9435C12.0049 15.1025 11.0951 15.0209 10.2684 14.709C9.44159 14.3972 8.73495 13.8691 8.23778 13.1915C7.74061 12.514 7.47525 11.7174 7.47525 10.9024C7.47629 9.80999 7.95332 8.76255 8.80162 7.99007C9.64992 7.21758 10.8002 6.78319 11.9998 6.78224Z" fill="#797779" />
                                        </svg>
                                        <h1 className="ml-2 w-28 font-normal text-sm text-stone-200">{selectedData.location} </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row gap-6 pl-6 py-6">
                            <div className="ml-10 w-[30rem] flex flex-col">
                                <p className="font-normal text-base text-stone-200">{selectedData.bio}</p>

                                <div className="w-4/5 mt-8 h-fit flex flex-row">
                                    <div className="w-1 bg-orange-300"></div>
                                    <div className="w-full ml-4 flex flex-col">
                                        <h3 className="text-orange-300 text-xl font-bold">Awards</h3>
                                        <div className=" text-stone-200 text-base font-normal mt-2">
                                            {Object.entries(selectedData.awards).map(([key, [awardName, description, year]]) => (
                                                <div key={key}>
                                                    <h3 className='font-bold text-base'>{awardName}</h3>
                                                    <p className='mt-2 text-sm '>{description}</p>
                                                    <p className='mt-2 text-stone-400'>{year}</p>
                                                    <br />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full mt-8 h-fit flex flex-row">
                                    <div className="w-1 bg-orange-300"></div>
                                    <div className="w-full ml-4 flex flex-col">
                                        <h3 className="text-orange-300 text-xl font-bold">Education</h3>
                                        <div className=" text-stone-200 text-base font-normal mt-2">
                                            {Object.entries(selectedData.education).map(([key, [eduName, degree]]) => (
                                                <div key={key}>
                                                    <h3 className='font-bold'>{eduName}</h3>
                                                    <p className='mt-2'>{degree}</p>
                                                    <br />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-1 flex-col pr-6">
                                <div className="w-full flex flex-col flex-1 grow-0 bg-stone-100 rounded-3xl p-4">
                                    <p className="text-lg font-semibold text-black rounded-left-3xl">Availability</p>

                                    <div className="w-full flex flex-row mt-2">
                                        <button
                                            className={`flex-1 py-2 px-4 ${selectedTab === 'inPerson' ? 'bg-calendar-tabs text-white' : 'bg-gray-200 text-gray-700'
                                                }`}
                                            onClick={() => handleTabClick('inPerson')}
                                        >
                                            In Person
                                        </button>
                                        <button
                                            className={`flex-1 py-2 px-4 ${selectedTab === 'virtual' ? 'bg-calendar-tabs text-white' : 'bg-gray-200 text-gray-700'
                                                }`}
                                            onClick={() => handleTabClick('virtual')}
                                        >
                                            Virtual
                                        </button>
                                    </div>
                                    <div className="w-full flex flex-col mt-4 space-x-2">


                                        <BetterCalendar2
                                            availability={selectedData.availability}
                                            onDateClick={handleDateClick}
                                        />
                                        {/* <div className="flex gap-2">
                                            {Object.keys(selectedData.availability).map((day) => {
                                                const dateObject = new Date(day);
                                                const dayOfWeek = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
                                                const dayOfMonth = day.split('-')[2];
                                                return (
                                                    <button
                                                        key={day}
                                                        className={`bg-gray-300 text-stone-800 p-2 rounded-3xl w-16 ${selectedDay === day ? 'border-2 border-calendar-tabs' : ''}`}
                                                        onClick={() => handleDayClick(day)}
                                                    >
                                                        {dayOfMonth}
                                                        <br />
                                                        {dayOfWeek}
                                                    </button>
                                                );
                                            })}
                                        </div> */}


                                        {/* {selectedDay && (
                                            <div className="w-full mt-4">
                                                <div className="flex flex-row items-center ml-4">
                                                    <div className="w-3 h-3 bg-orange-300 rounded-full -ml-5"></div>
                                                    <h4 className='ml-2'>Morning</h4>
                                                </div>

                                                <div className="flex flex-row h-fit">
                                                    <div className="w-3">
                                                        <div className="w-1 h-full bg-stone-300"></div>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2">
                                                        {selectedData.availability[selectedDay]
                                                            .filter((time) => time.includes('AM'))
                                                            .map((amTime, index) => (
                                                                <button key={index} className={`bg-gray-300 text-stone-800 p-2 rounded-2xl w-20 h-12 ${selectedTime === amTime ? 'border-2 border-calendar-tabs' : ''}`} onClick={() => handleTimeClick(amTime)}>
                                                                    {amTime.replace('AM', '')}
                                                                </button>
                                                            ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-center mt-4 ml-4 ">
                                                    <div className="w-3 h-3 bg-orange-300 rounded-full -ml-5"></div>
                                                    <h4 className='ml-2'>Evening</h4>
                                                </div>

                                                <div className="flex flex-row h-fit ">
                                                    <div className="w-3">
                                                        <div className="w-1 h-full bg-stone-300"></div>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2">
                                                        {selectedData.availability[selectedDay]
                                                            .filter((time) => time.includes('PM'))
                                                            .map((pmTime, index) => (
                                                                <button key={index} className={`bg-gray-300 text-stone-800 p-2 rounded-2xl w-20 h-12 ${selectedTime === pmTime ? 'border-2 border-calendar-tabs' : ''}`} onClick={() => handleTimeClick(pmTime)}>
                                                                    {pmTime.replace('PM', '')}
                                                                </button>
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )} */}
                                    </div>
                                </div>
                                {appDay && appTime && (
                                    <h3 className="text-center text-stone-200 text-lg mt-4"> Selected: {appDay} at {appTime}</h3>
                                )}
                                <div className="mx-auto px-14 mt-4">
                                    <button
                                        onClick={() => handleSubmit(selectedData.firstname, selectedData.lastname, selectedData.degree, selectedData.location, selectedTab, appDay, appTime)} className="w-52 h-14 bg-calendar-tabs rounded-3xl hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div >
    );
}

export default DisplaySpecialists;