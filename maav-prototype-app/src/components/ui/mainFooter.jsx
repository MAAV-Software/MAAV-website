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
        <div className="footer shrink-0 mt-10" style={{backgroundColor: "#3c3c3c"}}>
            <div className="footer-section">
                <h1 className="footer-header">Contact</h1>
                <p className="footer-content">2603 Draper Dr, Ann Arbor, MI, 48109</p> <br/>
                <p className="footer-content">maav-leads@umich.edu</p>
            </div>
            
            <div className="footer-section">
                <h1 className="footer-header">Navigation</h1>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./about"}}
                    className="w-auto h-auto text-left"
                >
                    <p className="footer-content text-left">About</p>
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./subteams"}}
                    className="w-auto h-auto text-left"
                >
                    <p className="footer-content">Subteams</p>
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./leads"}}
                    className="w-auto h-auto text-left"
                >
                    <p className="footer-content">Leads</p>
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "./sponsors"}}
                    className="w-auto h-auto"
                >
                    <p className="footer-content text-left">Sponsors</p>
                </button>
            </div>
            <div className="footer-section">
                <h1 className="footer-header">Socials</h1>
                <a href="https://www.instagram.com/umichmaav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <img className="w-[3vw]" src="/images/new-instagram-logo-glyph.png"></img>
                </a>
                <a href="https://www.linkedin.com/company/maav/" target="_blank">
                    <img className="w-[3vw]" src="/images/logo-linkedin-logo-icon.png"></img>
                </a>
                <a href="https://github.com/MAAV-Software" target="_blank">
                    <img className="w-[3vw]" src="/images/github-logo.png"></img>
                </a>
            </div>

            <img className="footer-section w-full h-full object-contain" src="/images/maav-word.png"></img>
        </div>
    )
}