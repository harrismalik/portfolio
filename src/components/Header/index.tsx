import NavBar from "./NavBar";
import {useEffect, useState} from "react";
import toast, {Toaster} from 'react-hot-toast';
import { PiCubeFill } from "react-icons/pi";

export default function Header() {
    const [navIsActive, setNavIsActive] = useState(false)

    useEffect(() => {
        const notify = () => toast('I’m actively seeking new opportunities in Web3. If you\'re looking to collaborate or have exciting Web3 projects in mind, feel free to reach out. Let\'s build the future together! 🔥🔥🔥',
            {
                // icon: '🔥',
                duration: 26000,
                position:"bottom-right",
                style: {
                    borderRadius: '10px',
                    background: '#a1a1a1',
                    color: 'rgb(28 25 23)',
                    minWidth: '400px',
                },
                removeDelay: 1000,
            }
        );
        setTimeout(notify, 1000);
    },[])

    return (
        <header className="w-full top-0 left-0 fixed flex items-center h-20 z-20">
            <div className="container max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
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
                    <Toaster />
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    )
}