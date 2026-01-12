'use client'
import {useState} from "react"
import { Html } from '@react-three/drei'
import {Environment, OrbitControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import {DroneI} from "../../components/three/modelDroneI"

export default function DronePage() {
    const [cube1Clicked, setCube1Clicked] = useState(false)
    const [cube2Clicked, setCube2Clicked] = useState(false)
    const [cube3Clicked, setCube3Clicked] = useState(false)
    const [cube4Clicked, setCube4Clicked] = useState(false)
    const [droneClicked, setDroneClicked] = useState(false)
    let message

    const handleCube1Click = () => {
        console.log("Cubed1 Clicked!")
        setCube1Clicked(true)
        setCube2Clicked(false)
        setCube3Clicked(false)
        setCube4Clicked(false)
    }

    const handleCube2Click = () => {
        console.log("Cubed2 Clicked!")
        setCube1Clicked(false)
        setCube2Clicked(true)
        setCube3Clicked(false)
        setCube4Clicked(false)
        setDroneClicked(false)
    }

    const handleCube3Click = () => {
        console.log("Cubed3 Clicked!")
        setCube1Clicked(false)
        setCube2Clicked(false)
        setCube3Clicked(true)
        setCube4Clicked(false)
        setDroneClicked(false)
    }

    const handleCube4Click = () => {
        console.log("Cubed4 Clicked!")
        setCube1Clicked(false)
        setCube2Clicked(false)
        setCube3Clicked(false)
        setCube4Clicked(true)
        setDroneClicked(false)
    }

    const handleDroneClick = () => {
        console.log("Drone Clicked")
        setCube1Clicked(false)
        setCube2Clicked(false)
        setCube3Clicked(false)
        setCube4Clicked(false)
        setDroneClicked(true)
    }

    if(cube1Clicked === true){
        message = "Cube 1 has been clicked and it represents the propellers"
    }
    else if (cube2Clicked === true) {
        message = "Cube 2 has been clicked and it represents the camera"
    }
    else if (cube3Clicked === true) {
        message = "Cube 3 has been clicked and it represents the shark fin"
    }
    else if (cube4Clicked === true) {
        message = "Cube 4 has been clicked and it represents the skis"
    }
    else{
        message = "No cube has been clicked and it represents the entire drone. Click the red cubes to learn more about a specific component!"
    }

    return (
        <div className="w-screen h-screen">
        
            <div className="drone-model">
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ fov: 55, position: [0, 0, 20] }}
                >
                    <Environment files="/images/ashphalt.jpg" />
                    <DroneI
                        handleCube1Click={handleCube1Click}
                        handleCube2Click={handleCube2Click}
                        handleCube3Click={handleCube3Click}
                        handleCube4Click={handleCube4Click}
                        handleDroneClick={handleDroneClick}
                    >
                    </DroneI>

                    <Html wrapperClass="click-box" fullscreen>
                        <div className="click-text">
                            {message}
                        </div>
                    </Html>

                    <OrbitControls 
                        enablePan={false}
                    />

                </Canvas>
            </div>
        </div>
    )
}