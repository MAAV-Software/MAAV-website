import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function About(){


    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl font-bold text-white">
                About
            </h1>

            <div className="page-body text-white">
                <br />
                <br />
                <br />
                <br />
                <br />
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