import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LocationCapsule from "./LocationCapsule";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
        <div class="bg-transparent">

            <div className="flex justify-between pt-8 pr-6">
                <Navbar />
                {/* <LocationCapsule /> */}
            </div>

        </div>
            <Outlet/>
        </>
  

    );
}