import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Sponsors(){
    return(
        <div className="page" style={{ backgroundColor: "black" }}>
            <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
                <h1 className="image-title">
                    Sponsors
                </h1>
            </div>

            <div className='page-body'>
                Our work would not be possible without the generous support of our various sponsors. <br />
                If you would like to become a sponsor of our team, please reach out at maav-leads@umich.edu. <br />
            </div>

            <div className='sponsor-pics'>
                <img className="sponsor-pic" src="/images/Ford_logo_flat.svg.png"></img>
                <img className="sponsor-pic" src="/images/lockheed-martin-logo.png"></img>
                <img className="sponsor-pic" src="/images/Northrop-Grumman-Logo-1994.png"></img>
                <img className="sponsor-pic" src="/images/Raytheon-Logo.png"></img>
            </div>

        </div>
    );
}