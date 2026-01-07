import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Embedded(){
    return(
        <div div className="page" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <div className="header" style={{backgroundImage: "url(/images/embedded-thumbnail.png)", aspectRatio: 1673 / 709}}>
                <h1 className="image-title">
                    Embedded Systems
                </h1>
            </div>

            <div className='page-header'>
                Circuitry
            </div>

            <div className="page-body">
                The embedded systems subteam prints out custom circuit boards (PCBs) to provide platforms <br />
                for the control software to run and communicate with the navigation software, as well as manage the <br />
                safety of the batteries, motors, and operators. We design with Altium Designer and Eagle, along with the <br />
                use of off-the-shelf parts. <br />
            </div>

            <div className='page-header'>
                Integration
            </div>

            <div className='page-body'>
                The embedded system team is considered as the bridge between the hardware and the software. <br />
                More specifically, ES designs and builds the vehicle's electrical hardware and integrates these <br />
                components into a cohesive product. <br />
            </div>

            <MainFooter />
        </div>
    );
}