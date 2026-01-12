import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Software(){
    return(
        <div div className="page" style={{ backgroundColor: "black" }}>
            <div className="header" style={{backgroundImage: "url(/images/software-thumbnail.png)", aspectRatio: 2809 / 1022}}>
                <h1 className="image-title">
                    Software
                </h1>
            </div>

            <div className='page-header'>
                Computer Vision
            </div>

            <div className='page-body'>
                Our software team leverages the Raspberry Pi Arducam to capture and analyze the <br />
                surrounding environment. To meet the challenges of our new mission, we develop and refine <br />
                state-of-the-art algorithms for tasks such as detection, autonomous flight, and tracking <br />
                using images taken from the drone. These algorithms are executed on a Raspberry Pi with a Hailo AI <br />
                hat to ensure high-performance processing in real-time.
            </div>

            <div className='page-header'>
                Guidance, Navigation, and Control
            </div>

            <div className='page-body'>
                Guidnace, navigation, and control is another critical focus of our team. We process <br />
                inputs from the PX4 flight controller to determine the drone's position and generate precise <br />
                flight paths to guide it to its destination. The Software subteam also develops a series <br /> 
                of control states tailored to different mission phases, including landing/takeoff and waypoint navigation. <br />
            </div>

            <div className='page-header'>
                Utilities
            </div>

            <div className='page-body'>
                In addition to core mission tasks, our Software subteam develops tools to support and streamline <br />
                the team's workflow and enhance the overall experience. The Software subteam has developed the <br />
                team's website as well as the automated emailing system designed for prospective new members. 
            </div>

            <div className='page-header'>
                Tech-Stack
            </div>

            <div className="tech-stack">
                <img className="w-[10vw]" src="/images/Python-logo.png"></img>
                <img className="w-[10vw]" src="/images/C++_Logo.png"></img>
            </div>
        </div>
    );
}