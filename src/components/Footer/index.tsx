import { IoArrowForwardCircle } from "react-icons/io5";
import { PiCubeFill } from "react-icons/pi";

type footerLinkType = {
    name: string,
    href: string
}
const footerLinks = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Work',
        href: '#work'
    },
    {
        name: 'Contact me',
        href: '#contact'
    }
]
const footerSocialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/harrismalik'
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mharrismalik'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/mharrismalik/'
    },
    {
        name: 'X (Twitter)',
        href: ''
    }
]

export default function Footer() {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let&apos;s work together
                        </h2>
                        <a href="mailto:harrismalik4647@gmail.com" className="btn btn-primary text-[18px] pr-3">
                            Let's Talk
                            <IoArrowForwardCircle />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="">Links</p>
                            <ul>
                                {
                                    footerLinks.map((item: footerLinkType, key) => (
                                        <li className="" key={key}>
                                            <a href={item.href} className="block text-sm text-stone-400 py-1 transition-colors hover:text-stone-200">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {
                                    footerSocialLinks.map((item: footerLinkType, key) => (
                                        <li className="" key={key}>
                                            <a href={item.href} target="_blank" className="block text-sm text-stone-400 py-1 transition-colors hover:text-stone-200">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="">
                        <PiCubeFill fontSize={"35px"} />
                    </a>
                    <p className="text-stone-500 text-sm">
                        &copy; 2024 <span className="text-stone-200">mharrismalik</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}