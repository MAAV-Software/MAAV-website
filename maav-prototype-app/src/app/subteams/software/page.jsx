import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Software(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Software
            </h1>

            <img src="/images/software-thumbnail.png"></img>

            <div className='page-header text-white text-left mt-10 mb-10'>
                Computer Vision
            </div>

            <div className='page-body text-white'>
                Our software team leverages the Raspberry Pi Arducam to capture and analyze the <br />
                surrounding environment. To meet the challenges of our new mission, we develop and refine <br />
                state-of-the-art algorithms for tasks such as detection, autonomous flight, and tracking <br />
                using images taken from the drone. These algorithms are executed on a Raspberry Pi with a Hailo AI <br />
                hat to ensure high-performance processing in real-time.
            </div>

            <div className='page-header text-white text-left mt-10 mb-10'>
                Guidance, Navigation, and Control
            </div>

            <div className='page-body text-white'>
                Guidnace, navigation, and control is another critical focus of our team. We process <br />
                inputs from the PX4 flight controller to determine the drone's position and generate precise <br />
                flight paths to guide it to its destination. The Software subteam also develops a series <br /> 
                of control states tailored to different mission phases, including landing/takeoff and waypoint navigation. <br />
            </div>

            <div className='page-header text-white text-left mt-10 mb-10'>
                Utilities
            </div>

            <div className='page-body text-white'>
                In addition to core mission tasks, our Software subteam develops tools to support and streamline <br />
                the team's workflow and enhance the overall experience. The Software subteam has developed the <br />
                team's website as well as the automated emailing system designed for prospective new members. 
            </div>

            <div className='page-header text-white text-left mt-10 mb-10'>
                Tech-Stack
            </div>

            <div className="tech-stack">
                <img className="w-[5vw]" src="/images/Python-logo.png"></img>
                <img className="w-[5vw]" src="/images/C++_Logo.png"></img>
            </div>
            <MainFooter />
        </div>
    );
}