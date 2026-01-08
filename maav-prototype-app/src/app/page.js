"use client"
import "./globals.css";
import Image from "next/image";
import { MainCanvas } from "@/components/three/mainCanvas";
import {MainHeader} from "../components/ui/mainHeader";
import {MainFooter} from "../components/ui/mainFooter";

export default function App(){
  return (
    <div className="flex relative flex-col min-h-screen items-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
        <MainHeader />
        <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
          <img className="logo" src="/images/maav-logo-border.png" alt="MAAV" />
        </div>
        <MainCanvas />
        <div className="page">
          <div className="subteam-section">
            <div className="subteam-subheader">
              Structures
            </div>
            <div className="subteam-content">
              <div className="homepage-body">
                  The Structures team is responsible for the build, design, and testing of the drone frame. 
                  To design, we use SolidWorks to model and analyze the quadcopter's custom on and off the shelf 
                  components. To build, we use carbon fiber layups, machining , and additive manufacturing processes. 
                  To test, we fly [and crash] the vehicle at the MAir outdoor test facility to ensure the structural integrity. 
              </div>
              <div className="subteam-pic">
                <img src="/images/structures-thumbnail.png"></img>
              </div>
            </div>
          </div>
          <div className="subteam-section">
            <div className="subteam-subheader">
              Embedded Systems
            </div>
            <div className="subteam-content">
              <div className="homepage-body">
                The embedded systems subteam prints out custom circuit boards (PCBs) to provide platforms
                for the control software to run and communicate with the navigation software, as well as manage the
                safety of the batteries, motors, and operators. We design with Altium Designer and Eagle, along with the
                use of off-the-shelf parts. <br /> 
                <br/>
                The embedded system team is considered as the bridge between the hardware and the software.
                More specifically, ES designs and builds the vehicle's electrical hardware and integrates these
                components into a cohesive product.
              </div>
              <div className="subteam-pic">
                <img src="/images/embedded-thumbnail.png"></img>
              </div>
            </div>
          </div>
          <div className="subteam-section">
            <div className="subteam-subheader">
              Software
            </div>
            <div className="subteam-content">
              <div className="homepage-body">
                Our software team leverages the Raspberry Pi Arducam to capture and analyze the
                surrounding environment. To meet the challenges of our new mission, we develop and refine
                state-of-the-art algorithms for tasks such as detection, autonomous flight, and tracking
                using images taken from the drone. These algorithms are executed on a Raspberry Pi with a Hailo AI
                hat to ensure high-performance processing in real-time. <br/>
                <br/>
                Guidnace, navigation, and control is another critical focus of our team. We process
                inputs from the PX4 flight controller to determine the drone's position and generate precise
                flight paths to guide it to its destination. The Software subteam also develops a series
                of control states tailored to different mission phases, including landing/takeoff and waypoint navigation. <br />
              </div>
              <div className="subteam-pic">
                <img src="/images/software-thumbnail.png"></img>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
    </div>
  );
}

