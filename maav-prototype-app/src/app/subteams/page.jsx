"use client"

import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Subteam(){

    const handleHover = (e) => {
        console.log('Mouse hovered!');
        e.target.style.textDecoration = "underline";
    }

    const handleLeave = (e) => {
        console.log('Mouse left!');
        e.target.style.textDecoration = "none";
    }

    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            
            <h1 className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Subteams
            </h1>

            <img className="w-screen mb-[5vh]" src="/images/subteams-thumbnail.png"></img>

            <div className="flex flex-row mb-20 text-white">
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/structures"}}
                    className="w-45 h-5"
                >
                    <p className='text-3xl'>Structures</p>
                </button>
                <p className='text-3xl'>|</p>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/embedded"}}
                    className="w-85 h-5"
                >
                    <p className='text-3xl'>Embedded Systems</p>
                </button>
                <p className='text-3xl'>|</p>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/software"}}
                    className="w-45 h-5"
                >
                    <p className='text-3xl'>Software</p>
                </button>

            </div>

            <div className="page-body text-white">
                We've broken down our work into smaller groups, each focusing on one of three key parts <br /> 
                of the project: software, structures, and embedded systems. Each group handles a specific part, led by a team lead. <br />
                These leads are in charge of keeping their group on track to hit their goals. <br />
            </div>

            <MainFooter />
        </div>
    );
}