import { useEffect, useRef } from "react";

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