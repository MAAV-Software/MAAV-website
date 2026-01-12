import { Drone } from './modelDrone';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

export function MainScene(){
    const can1Ref = useRef()
    const can1SpinRef = useRef()
    const initialPosition = [0, 0, 0]

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                markers: true,
            }
        })

        timeline
            // .to(can1Ref.current.position, {
            //     x: 0,
            //     y: 0,
            //     z: 10,
            // })
            // .to(can1Ref.current.position, {
            //     x: 0,
            //     y: 0,
            //     z: 0,
            // })
            .to(can1Ref.current.rotation, {
                x: 0,
                 y: "+=6.28319",
                z: 0,
                duration: 8,
            })
            // .to(can1Ref.current.rotation, {
            //     x: 0,
            //     y: 0,
            //     z: 0,
            // })
            // .to(can1SpinRef.current.rotation, {
            //     y: Math.PI,
            // }, 0)
            // .to(can1SpinRef.current.rotation, {
            //     y: 0,
            // }, )
    }, [])



    return(
        <>

        <group ref={can1Ref} position={initialPosition}>
            <group ref={can1SpinRef}>
                <Drone>
                </Drone>
            </group>
        </group>
        </>
    )
}