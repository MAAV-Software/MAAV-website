import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Embedded(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Embedded
            </h1>

            <img src="/images/embedded-thumbnail.png"></img>

            <div className='page-header text-white mt-10 mb-10'>
                Circuitry
            </div>

            <div className="page-body text-white">
                The embedded systems subteam prints out custom circuit boards (PCBs) to provide platforms <br />
                for the control software to run and communicate with the navigation software, as well as manage the <br />
                safety of the batteries, motors, and operators. We design with Altium Designer and Eagle, along with the <br />
                use of off-the-shelf parts. <br />
            </div>

            <div className='page-header text-white mt-10 mb-10'>
                Integration
            </div>

            <div className='page-body text-white '>
                The embedded system team is considered as the bridge between the hardware and the software. <br />
                More specifically, ES designs and builds the vehicle's electrical hardware and integrates these <br />
                components into a cohesive product. <br />
            </div>

            <MainFooter />
        </div>
    );
}