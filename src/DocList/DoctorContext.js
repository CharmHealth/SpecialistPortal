import { createContext, useContext, useState } from 'react';
import FemaleDoctor from './assets/FemaleDoctor.jpg';

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  const [selectedDoctor, setSelectedDoctor] = useState({ id: 1, availability: {'2023-10-06': ['11:45 PM'],}, firstname: 'Emily', lastname: 'Harris', degree: 'MD, FAAN', meetingOptions: ["TeleVisit", "In Person"], avatar: FemaleDoctor, insurance: ['Aetna'], speciality: 'Neurology', bio: "Dr. Emily Harris is an accomplished neurologist with over two decades of expertise in diagnosing and treating neurological disorders. She earned her MD with top honors and completed a rigorous residency program in Neurology, followed by a specialized fellowship in Neurophysiology. As a Fellow of the American Academy of Neurology (FAAN) and an active member of leading professional organizations, Dr. Harris remains at the forefront of neurological research. Her research interests include genetics in neurological disorders and innovative treatment approaches. Currently serving as a Senior Neurologist at [Name of Prestigious Hospital], Dr. Harris is known for her compassionate, patient-centric care. She empowers her patients by involving them in their treatment decisions, instilling hope in the face of neurological challenges. Outside of her medical practice, Dr. Harris is an inspiring mentor and a dedicated volunteer in community health clinics. Her dedication to improving the lives of those with neurological disorders leaves a lasting impact on both patients and aspiring neurologists." });

  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
}

export function useDoctor() {
  return useContext(DoctorContext);
}
