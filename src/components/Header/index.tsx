import NavBar from "./NavBar";
import {useState} from "react";
import headshot from "../../assets/pictures/headshot.jpg";

export default function Header() {
    const [navIsActive, setNavIsActive] = useState(false)

    return (
        <header className="w-full top-0 left-0 fixed flex items-center h-20 z-20">
            {/* Progressive blur background */}
            <div className="header-blur-bg"></div>
            <div className="container max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr] relative z-10">
                <h1>
                    <a href="/" className="logo">
                        <img
                            src={headshot}
                            alt="Harris Malik"
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-700/50 hover:ring-emerald-400/50 transition-all duration-200"
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavIsActive(x=>!x)}>
                        <span className="material-symbols-rounded">
                            {navIsActive?'close':'menu'}
                        </span>
                    </button>
                    <NavBar isActive={navIsActive} />
                    {/*<Toaster />*/}
                </div>
                <a href="mailto:contact@mharrismalik.com" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Email Me
                </a>
            </div>
        </header>
    )
}