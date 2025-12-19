import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";

export default function Structures(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="absolute top-25 text-4xl font-bold">
                Structures
            </h1>

            <div className="page-body">
                In the structures subteam, we focus on creating the frame of the drone to be strong and lightweight. <br /> 
            </div>
        </div>
    );
}