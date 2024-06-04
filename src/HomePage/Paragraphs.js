import React from "react";
import DoctorSearch from '../Elements/DoctorSearch';


export default function PageContent() {

    const specialties = ["Neurology/Epileptology", "Allergy/Immunology", "Rheumatology", "Gastroenterology", "Somnology", "Psychiatry"]
    const listItems = specialties.map((specialties) =>
        <li>{specialties}</li>
    );
    return (
    <section class="bg-domino-gray">
        <div class="para1 flex flex-wrap items-center place-items-center">
            <div class="blob flex-1">
                <img
                    src="/Doctor.svg"
                    class="h-auto max-w-[26rem] rounded-full ml-16 md:ml-48 lg:ml-48"
                    alt="" />
            </div>
            <div class="flex-1 self-center place-self-center">
                <h1 class="text-4xl font-bold tracking-tight text-[hsl(280,100%,81%)] pl-4 pr-5">Why choose us?</h1>
                <p class="text-lg text-[hsl(218,81%,95%)] pl-4 pr-56">
                We aim to facilitate patient access to specialists proficient in managing neurodevelopmental disorders, while also prioritizing expertise in coordinated healthcare.

                </p>
            </div>
        </div>

        <div class="para2 flex flex-wrap items-center place-items-center">
            <div class="blob flex-1 self-center place-self-center md:order-last lg:order-last">
                <img
                    src="/specialties.png"
                    class="h-auto max-w-[26rem] rounded-full ml-16 md:order-last lg:order-last"
                    alt="" />
            </div>
            <div class="flex-1 self-center place-self-center">
                <h1 class="text-4xl font-bold tracking-tight text-[hsl(280,100%,81%)] pl-4 md:pl-48 lg:pl-48">Specialties include</h1>
                <p class="text-lg text-[hsl(218,81%,95%)] pl-4 md:pl-48 lg:pl-48">
                    <ul class="list-disc pl-5">
                        {listItems}
                    </ul>
                </p>
            </div>
        </div>

    </section>
  

    );
}