"use client"

export function MainHeader(){

    const handleHover = (e) => {
        console.log('Mouse hovered!');
        e.target.style.textDecoration = "underline";
    }

    const handleLeave = (e) => {
        console.log('Mouse left!');
        e.target.style.textDecoration = "none";
    }

    return(
        
        <div className="top-bar">
            <div className="links">
                <a href="/">
                    <img className="my-image" src="/images/maav-word.png"></img>
                </a>

            <div className="word-links">
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/about"}}
                    className="w-15 h-5"
                >
                    About
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/subteams"}}
                    className="w-25 h-5"
                >
                    Subteams
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/leads"}}
                    className="w-15 h-5"
                >
                    Leads
                </button>
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/sponsors"}}
                    className="w-25 h-5"
                >
                    Sponsors
                </button>

                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/blog"}}
                    className="w-15 h-5"
                >
                    Blog
                </button>
            </div>

            </div>

            <div className="join">
                <button
                    type="button"
                    title="Join"
                    className="rounded-xl px-4 py-2 flex gap-2 items-center transition-all text-white bg-blue-700 active:bg-blue-900 focus:ring focus:ring-blue-400 hover:bg-blue-800"
                    onClick={() => window.open("https://forms.gle/obSNekRc4Sh9njLc9", "_blank")}
                    >
                    <span>Join</span>
                    <svg
                        viewBox="0 0 16 16"
                        width="1.2em"
                        height="1.2em"
                        className="text-lg hidden md:inline"
                    >
                        <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}