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
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/umichmaav/"
      data-instgrm-version="14"
      style={{ maxWidth: "540px", width: "100%" }}
    ></blockquote>
  );
}

// Don't question anything above this as I don't understand it, it just renders the pictures in the Instagram profile for me so it looks nice

export function MainCanvas(){

    return(
        <div className="page">
            <div className="text-white">
                <h1 className="page-header mt-10 text-left text-4xl font-bold">
                    Michigan Autonomous Aerial Vehicles
                </h1>

                <div className="page-body mt-10 text-left">
                    Michigan Autonomous Aerial Vehicles (MAAV) <br>
                    </br>is a student-run project team at the University of Michigan <br>
                    </br> that annually competes with teams internationally in the <br>
                    </br>International Aerial Robotics Competition (IARC) Competition.

                    <br>
                    </br>
                    <br>
                    </br>MAAV strives to provide practical, hands-on experience students <br>
                    </br> by competing annually in the IARC Competition. <br>
                    </br>Members of MAAV engage in the design, building, and testing <br>
                    </br> of an autonomous unmanned aerial system (UAS) while furthering <br>
                    </br>multiple areas of Computer Science, Embedded Systems, <br>
                    </br>Mechanical Engineering, and Aerospace Engineering research.

                    <div>
                        <InstagramEmbed />
                    </div>

                </div>

            </div>

            <div className="h-[50vh] w-[85vw] border-4 rounded-xl border-white mt-10">
                <Canvas
                    shadow
                    dpr={[1,2]}
                    camera={{fov: 55, position: [0, 0, 6]}}
                >
                    <Environment files="/images/ashphalt.jpg" />
                    <MainScene />

                    <OrbitControls />
                
                </Canvas>
            </div>
            
        </div>
    )
}