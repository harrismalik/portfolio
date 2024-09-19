import NavBar from "./NavBar";
import { useState } from "react";
import { PiCubeFill } from "react-icons/pi";

export default function Header() {
    const [navIsActive, setNavIsActive] = useState(false)
    return (
        <header className="w-full top-0 left-0 fixed flex items-center h-20 z-20">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <PiCubeFill fontSize={"35px"} />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavIsActive(x=>!x)}>
                        <span className="material-symbols-rounded">
                            {navIsActive?'close':'menu'}
                        </span>
                    </button>
                    <NavBar isActive={navIsActive} />
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    )
}