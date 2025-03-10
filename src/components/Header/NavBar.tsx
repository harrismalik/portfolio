import { useEffect, useRef } from "react";
import Lenis from 'lenis';

type navItemType = {
    name: string;
    link: string;
    className: string;
    ref?: React.Ref<HTMLAnchorElement>;
};

type NavBarType = {
    isActive:boolean
}

export default function NavBar({isActive}:NavBarType) {
    const lastActive = useRef<HTMLAnchorElement | null>(null);
    const activeBox = useRef<HTMLDivElement | null>(null);

    const initActiveBox = () => {
        if(activeBox.current && lastActive.current) {
            activeBox.current.style.top =  lastActive.current.offsetTop + 'px'
            activeBox.current.style.left =  lastActive.current.offsetLeft + 'px'
            activeBox.current.style.width =  lastActive.current.offsetWidth + 'px'
            activeBox.current.style.height =  lastActive.current.offsetHeight + 'px'
        }
    }

    useEffect(() => {
        initActiveBox()
        window.addEventListener('resize',initActiveBox)
    },[])

    const changeLink = (event:React.MouseEvent<HTMLAnchorElement>) => {
        lastActive.current?.classList.remove('active')
        event.currentTarget.classList.add('active');
        lastActive.current = event.currentTarget;
        if(activeBox.current && lastActive.current) {
            activeBox.current.style.top =  event.currentTarget.offsetTop + 'px'
            activeBox.current.style.left =  event.currentTarget.offsetLeft + 'px'
            activeBox.current.style.width =  event.currentTarget.offsetWidth + 'px'
            activeBox.current.style.height =  event.currentTarget.offsetHeight + 'px'
        }
    }

    const navItems: navItemType[] = [
        {
            name: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActive
        },
        {
            name: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            name: 'Skills',
            link: '#skills',
            className: 'nav-link'
        },
        {
            name: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            name: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ]

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            lerp: 0.1, // Smoothness of scrolling (optional)
            smoothWheel: true, // Enable smooth scroll on wheel (optional)
        });

        // Animation frame loop for smooth scrolling
        const render = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(render);
        };

        // Start the render loop
        requestAnimationFrame(render);

        // Handle anchor link clicks with Lenis
        const handleAnchorClick = (event: MouseEvent) => {
            const targetId = (event.target as HTMLElement).getAttribute('href')?.substring(1); // Extract ID from href
            const targetElement = document.getElementById(targetId || '');
            if (targetElement) {
                event.preventDefault(); // Prevent default jump scroll behavior
                lenis.scrollTo(targetElement); // Scroll smoothly to the target element using Lenis
            }
        };

        // Add event listener to anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            const anchorLink = link as HTMLAnchorElement; // Ensure link is treated as an HTMLAnchorElement
            anchorLink.addEventListener('click', handleAnchorClick);
        });

        // Cleanup on component unmount
        return () => {
            lenis.destroy(); // Clean up Lenis when the component unmounts
        };
    }, []);

    function NavItems() {
        return (
            <>{navItems.map((item: navItemType, key: number) =>
                <a href={item.link} className={item.className}
                key={key} ref={item.ref} onClick={changeLink}>
                    {item.name}
                </a>
            )}</>
        )
    }

    return (
        <nav className={"nav-bar " + (isActive?'active':'')}>
            <NavItems/>
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}