import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Leads(){
    return(
        <div className="page">
            <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
                <h1 className="image-title">
                    Board
                </h1>
            </div>

            <div className='page-header'>
                Current Board
            </div>

            <div className='leads'>
                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Eli Goreta <br />
                        <span style={{ fontWeight: 'normal' }}>President</span>
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Ian Stough <br />
                        <span style={{ fontWeight: 'normal' }}>Vice President</span>
                    </p>
                </div>
            </div>

            <div className='leads'>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Vishal Dattathreya <br />
                        <span style={{ fontWeight: 'normal' }}>Secretarian</span>
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Rahil Bhavan <br />
                        <span style={{ fontWeight: 'normal' }}>Treasurer</span>
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Sandeep Sawhney <br />
                        <span style={{ fontWeight: 'normal' }}>Public Relations Lead</span>
                    </p>
                </div>
            </div>

            <div className="leads">
                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Enrique Vezga <br />
                        <span style={{ fontWeight: 'normal' }}>Structures Lead</span>
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        James Spielman <br />
                        <span style={{ fontWeight: 'normal' }}>Embedded Systems Lead</span>
                    </p>
                </div>
                <div className='lead'>
                    <img className="lead-photo" src="/images/dervin-photo.JPG"></img>
                    <p className='lead-description'>
                        Dervin Tian <br />
                        <span style={{ fontWeight: 'normal' }}>Software Co-Lead</span>
                    </p>
                </div>

                <div className='lead'>
                    <img className="lead-photo" src="/images/output-onlinepngtools.png"></img>
                    <p className='lead-description'>
                        Habib Shakour <br />
                        <span style={{ fontWeight: 'normal' }}>Software Co-Lead</span>
                    </p>
                </div>
            </div>
        </div>
    );
}