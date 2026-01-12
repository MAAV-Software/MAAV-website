'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { MainScene } from "./mainScene";
import { extend } from '@react-three/fiber'
extend({ OrbitControls })
import { useEffect } from "react";
import HangingCardsCarousel from "../ui/HangingCardsCarousel";
import { Html } from '@react-three/drei'

// ngl, this InstagramEmbed stuff is all Chapt-GPT script writing, not even gonna lie
export function InstagramEmbed() {
  useEffect(() => {
    // Check if the Instagram script is already loaded
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, just reprocess embeds
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink="https://www.instagram.com/umichmaav/"
      data-instgrm-version="14"
      style={{ maxWidth: "100%", width: "auto", minHeight: "500px", paddingRight: "1em" }}
    ></blockquote>
  );
}

// Don't question anything above this as I don't understand it, it just renders the pictures in the Instagram profile for me so it looks nice

export function MainCanvas() {

  return (
    <div className="canvas">

      <div className="above-drone">
        <h1 className="canvas-header">
          Michigan Autonomous Aerial Vehicles
        </h1>

        <div className="canvas-body text-left">
          Michigan Autonomous Aerial Vehicles (MAAV)
          is a student-run project team at the University of Michigan
          that annually competes with teams internationally in the
          International Aerial Robotics Competition (IARC) Competition.

          <br />
          <br />
          MAAV strives to provide practical, hands-on experience students
          by competing annually in the IARC Competition.
          Members of MAAV engage in the design, building, and testing
          of an autonomous unmanned aerial system (UAS) while furthering
          multiple areas of Computer Science, Embedded Systems,
          Mechanical Engineering, and Aerospace Engineering research.

          <div className="insta-link">
            <InstagramEmbed />
          </div>

        </div>

        <div className="cards-section w-full mt-8 mb-8">
          <HangingCardsCarousel />
        </div>

        <div className="canvas-page">
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
            </div>
          </div>
        </div>
      </div>

      <div className="djkfldsaf h-screen w-screen fixed top-0 left-0">
        <Canvas
          shadow
          dpr={[1, 2]}
          camera={{ fov: 55, position: [0, 0, 9] }}
        >
          <color attach="background" args={['black']} />
          <Environment files="/images/ashphalt.jpg" />
          <MainScene />

        </Canvas>
      </div>

    </div>
  )
}