import { IoArrowForwardCircle } from "react-icons/io5";
import headshot from "../../assets/pictures/headshot.jpg";

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
                            Let&apos;s build something great
                        </h2>
                        <a href="mailto:contact@mharrismalik.com" className="btn btn-primary text-[18px] pr-3">
                            Start a Conversation
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
                    <a href="/" className="logo">
                        <img
                            src={headshot}
                            alt="Harris Malik"
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-700/50 hover:ring-emerald-400/50 transition-all duration-200"
                        />
                    </a>
                    <p className="text-stone-500 text-sm">
                        &copy; 2025 <span className="text-stone-200">Muhammad Harris Malik</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}