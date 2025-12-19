import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";

export default function Software(){
    return(
        <div div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="absolute top-25 text-4xl font-bold">
                Software
            </h1>

            <div className="page-body">
                In the software subteam, we focus on two main tasks, computer vision and autonomous navigation. <br /> 
            </div>
        </div>
    );
}