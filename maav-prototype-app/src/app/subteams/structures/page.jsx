import React from 'react'
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";

export default function Structures(){
    return(
        <div div className="page" style={{ backgroundColor: "black" }}>
            <div className="header" style={{backgroundImage: "url(/images/structures-thumbnail.png)", aspectRatio: 2809 / 1022}}>
                <h1 className="image-title">
                    Structures
                </h1>
            </div>

            <div className='page-header'>
                The Frame
            </div>

            <div className="page-body">
                The Structures team is responsible for the build, design, and testing of the drone frame. <br /> 
                To design, we use SolidWorks to model and analyze the quadcopter's custom on and off the shelf <br />
                components. To build, we use carbon fiber layups, machining , and additive manufacturing processes. <br />
                To test, we fly [and crash] the vehicle at the MAir outdoor test facility to ensure the structural integrity. <br />
            </div>
        </div>
    );
}