"use client"

export function MainFooter(){

    const handleHover = (e) => {
        console.log('Mouse hovered!');
        e.target.style.textDecoration = "underline";
    }

    const handleLeave = (e) => {
        console.log('Mouse left!');
        e.target.style.textDecoration = "none";
    }

    return(
        <div className="footer mt-10" style={{backgroundColor: "#3c3c3c"}}>
            <div className="contact mt-5 mb-5 ml-20 mr-20 text-2xl">
                <h1 className="font-bold">Contact</h1> <br />
                <p>2603 Draper Dr, Ann Arbor, MI, 48109</p> <br/>
                <p>maav-leads@umich.edu</p>
            </div>
            <div className="navigation mt-5 mb-5 ml-20 mr-20 text-2xl">
                <h1 className="font-bold">Navigation</h1> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./about"}}
                    className="w-15 h-5"
                >
                    About
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams"}}
                    className="w-20 h-5"
                >
                    Subteams
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./leads"}}
                    className="w-15 h-5"
                >
                    Leads
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./sponsors"}}
                    className="w-20 h-5"
                >
                    Sponsors
                </button> <br />
            </div>
            <div className="socials mt-5 mb-5 ml-20 mr-20 text-2xl">
                <h1 className="font-bold">Socials</h1> <br />
                <a href="https://www.instagram.com/umichmaav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <img className="w-[3vw]" src="/images/new-instagram-logo-glyph.png"></img>
                </a>
                <a href="https://www.linkedin.com/company/maav/" target="_blank">
                    <img className="w-[3vw]" src="/images/logo-linkedin-logo-icon.png"></img>
                </a>
            </div>
        </div>
    )
}