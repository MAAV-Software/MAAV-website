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
            <div className="footer-section">
                <h1 className="footer-header">Contact</h1> <br />
                <p className="footer-content">2603 Draper Dr, Ann Arbor, MI, 48109</p> <br/>
                <p className="footer-content">maav-leads@umich.edu</p>
            </div>
            
            <div className="footer-section">
                <h1 className="footer-header">Navigation</h1> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./about"}}
                    className="w-auto h-auto"
                >
                    <p className="footer-content">About</p>
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams"}}
                    className="w-auto h-auto"
                >
                    <p className="footer-content">Subteams</p>
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./leads"}}
                    className="w-auto h-auto"
                >
                    <p className="footer-content">Leads</p>
                </button> <br />
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./sponsors"}}
                    className="w-auto h-auto"
                >
                    <p className="footer-content">Sponsors</p>
                </button> <br />
            </div>
            <div className="footer-section">
                <h1 className="footer-header">Socials</h1> <br />
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