import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Leads(){
    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <div className="page-header absolute top-25 text-4xl w-[20vw] h-[10vh] font-bold border-2 border-yellow-500 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#3c3c3c" }}>
                Leads
            </div>
            <img src="/images/maav-mair.png"></img>

            <div className='page-header text-white mt-10 mb-10'>
                Current Leads
            </div>

            <div className='leads mb-[3vw]'>
                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Eli Goreta <br />
                        President
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Ian Stough <br />
                        Vice President
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Vishal Dattathreya <br />
                        Secretarian
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Rahil Bhavan <br />
                        Treasurer
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Sandeep Sawhney <br />
                        Head of Public Relations
                    </p>
                </div>
            </div>

            <div className="leads">
                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Enrique Vezga <br />
                        Structures Subteam Lead
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        James Spielman <br />
                        Embedded Systems Subteam Lead
                    </p>
                </div>
                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/dervin-photo.JPG"></img>
                    <p className='text-white text-center'>
                        Dervin Tian <br />
                        Software Subteam Co-Lead
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo w-[15vw] mt-10" src="/images/output-onlinepngtools.png"></img>
                    <p className='text-white text-center'>
                        Habib Shakour <br />
                        Software Subteam Co-Lead
                    </p>
                </div>
            </div>
            <MainFooter />
        </div>
    );
}