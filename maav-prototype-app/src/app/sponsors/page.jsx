import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Sponsors(){
    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <div className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Sponsors
            </div>
            <img src="/images/maav-mair.png"></img>

            <div className='page-body text-white mt-10 mb-10'>
                Our work would not be possible without the generous support of our various sponsors. <br />
                If you would like to become a sponsor of our team, please reach out at maav-leads@umich.edu. <br />
            </div>

            <img src="/images/sponsors.png"></img>

            <MainFooter />
        </div>
    );
}