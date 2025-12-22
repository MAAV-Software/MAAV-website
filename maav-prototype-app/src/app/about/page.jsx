import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function About(){


    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                About
            </h1>

            <img className="w-screen mb-[5vh]" src="/images/team-pic.png"></img>

            <h1 className="page-header text-white mb-10 text-left">Who we Are</h1>

            <div className="page-body text-white">
                Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan <br />
                that is participating in the IARC Competition. Members of MAAV engage in the design, building, and testing <br />
                of an autonomous unmanned aerial system (UAS) while furthering multiple areas of <br/>
                Computer Science and Aerospace Engineering research. <br />
                <br />
                MAAV as an organization has existed at U-M for nearly 15 years. However, post-COVID we went through a <br />
                period of major knowledge loss and and therefore last year we attempted to attend the SUAS competition <br />
                but were unable to get a working flight demo with autonomous control. Going to competition this year was our main focus; <br/>
                we are thrilled with our progress the past few years and are excited to compete! <br />
            </div>
            <MainFooter />
        </div>
    );
}