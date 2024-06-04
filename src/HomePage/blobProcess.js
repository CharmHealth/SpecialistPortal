import React from "react";

export default function Blobs() {
    return (
        <section class="blobs justify-center">

        <h1 class="pl-10 text-4xl font-bold tracking-tight text-[hsl(280,100%,81%)] bg-domino-gray md:text-5xl xl:text-6xl">Easy as</h1>
        <br></br>
        <br></br>

            <div class="blob-wrapper ml-20 flex flex-wrap justify-center">
            <div class="blob flex-1">
                <img
                    src="/blob1.svg"
                    class="blob1 max-w-[16rem]"
                    alt="1" />
                    <p class="text-lg ml-16 mt-1 text-[hsl(218,81%,95%)]">
                    Find the right specialist
                    </p>
            </div>
            
            <div class="blob flex-1">
                <img
                    src="/blob2.svg"
                    class="blob2 max-w-[14rem]"
                    alt="2" /> 
                    <p class="text-lg ml-14 mt-4 text-[hsl(218,81%,95%)]">
                    Schedule appointments
                    </p>
                         
            </div>
            
            <div class="blob flex-1">
                <img
                    src="/blob3.svg"
                    class="blob3 max-w-[16rem]"
                    alt="3" />
                    <p class="text-lg ml-16 mt-1 text-[hsl(218,81%,95%)]">
                    Meet with the specialist
                    </p>
                    
            </div>
            </div>

        </section>


    );
}