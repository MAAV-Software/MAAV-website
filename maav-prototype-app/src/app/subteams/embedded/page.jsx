import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";

export default function Embedded(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="absolute top-25 text-4xl font-bold">
                Embedded
            </h1>

            <div className="page-body">
                In the embedded systems subteam, we focus on handling the electrical work to bring the drone to life. <br /> 
            </div>
        </div>
    );
}