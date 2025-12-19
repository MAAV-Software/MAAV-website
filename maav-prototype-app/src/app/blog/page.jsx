import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";

export default function Blog(){


    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="absolute top-25 text-4xl font-bold">
                Blog
            </h1>

            <div className="highlight-post absolute top-45">
                <h1 className="text-xl font-bold mt-5 ml-5">
                    Computer Vision Detection Progress
                </h1>

                <img className="absolute w-[25vw] left-1/2 transform -translate-x-1/2 mt-3" src="images/cv-post-thumnail.jpg"></img>
            </div>

        </div>
    );
}