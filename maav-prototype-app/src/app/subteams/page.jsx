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
        <div div className="page" style={{ backgroundColor: "black" }}>
            
            <div className="header" style={{backgroundImage: "url(/images/subteams-thumbnail.png)", aspectRatio: 2809 / 1022}}>
                <h1 className="image-title">
                    Subteams
                </h1>
            </div>

            <div className="subteam-subheader">
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/structures"}}
                    className="w-auto h-auto"
                >
                    Structures
                </button>
                <p className='text-[2em]'>|</p>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/embedded"}}
                    className="w-auto h-auto"
                >
                    Embedded Systems
                </button>
                <p className='text-[2em]'>|</p>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams/software"}}
                    className="w-auto h-auto"
                >
                    Software
                </button>

            </div>

            <div className="page-body">
                We've broken down our work into smaller groups, each focusing on one of three key parts
                of the project: software, structures, and embedded systems. Each group handles a specific part, led by a team lead.
                These leads are in charge of keeping their group on track to hit their goals.
            </div>

        </div>
    );
}