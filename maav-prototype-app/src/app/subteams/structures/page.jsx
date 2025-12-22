import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Structures(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Structures
            </h1>

            <img src="/images/structures-thumbnail.png"></img>

            <div className='page-header text-white mt-10 mb-10'>
                The Frame
            </div>

            <div className="page-body">
                The Structures team is responsible for the build, design, and testing of the drone frame. <br /> 
                To design, we use SolidWorks to model and analyze the quadcopter's custom on and off the shelf <br />
                components. To build, we use carbon fiber layups, machining , and additive manufacturing processes. <br />
                To test, we fly [and crash] the vehicle at the MAir outdoor test facility to ensure the structural integrity. <br />
            </div>
            <MainFooter />
        </div>
    );
}