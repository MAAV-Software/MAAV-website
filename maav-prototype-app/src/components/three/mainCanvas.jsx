'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"
import { MainScene } from "./mainScene";
import { extend } from '@react-three/fiber'
extend({ OrbitControls})
import { useEffect } from "react";

// ngl, this InstagramEmbed stuff is all Chapt-GPT script writing, not even gonna lie
export function InstagramEmbed( ) {
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
      style={{ maxWidth: "100%", width: "auto", minHeight: "500px", paddingRight: "1em"}}
    ></blockquote>
  );
}

// Don't question anything above this as I don't understand it, it just renders the pictures in the Instagram profile for me so it looks nice

export function MainCanvas(){

    return(
        <div className="canvas">

              <h1 className="canvas-header">
                  Michigan Autonomous Aerial Vehicles
              </h1>

              <div className="canvas-body text-left">
                  Michigan Autonomous Aerial Vehicles (MAAV)
                  is a student-run project team at the University of Michigan
                  that annually competes with teams internationally in the
                  International Aerial Robotics Competition (IARC) Competition.

                  <br/>
                  <br/>
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

            <div className="drone-model">
                <Canvas
                    shadow
                    dpr={[1,2]}
                    camera={{fov: 55, position: [0, 0, 9]}}
                >
                    <Environment files="/images/ashphalt.jpg" />
                    <MainScene />

                    <OrbitControls />
                
                </Canvas>
            </div>
            
        </div>
    )
}