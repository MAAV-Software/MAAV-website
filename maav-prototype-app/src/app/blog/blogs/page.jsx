"use client"
import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function BlogPost(){

    const handleHover = (e) => {
        console.log('Mouse hovered!');
        e.target.style.textDecoration = "underline";
    }

    const handleLeave = (e) => {
        console.log('Mouse left!');
        e.target.style.textDecoration = "none";
    }

    return(

        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <div className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Blog Post
            </div>

            <MainFooter />

        </div>
    );
}