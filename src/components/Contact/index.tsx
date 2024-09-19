import { BsLinkedin } from "react-icons/bs"
import { FaSquareGithub } from "react-icons/fa6"
import { RiInstagramLine } from "react-icons/ri"

type socialType = {
    href:string,
    icon:React.ReactNode
}

const socials = [
    {
        icon:<BsLinkedin/>,
        href:"https://linkedin.com/in/mharrismalik"
    },
    {
        icon:<FaSquareGithub/>,
        href:"https://github.com/harrismalik"
    },
    {
        icon:<RiInstagramLine/>,
        href:"https://instagram.com/mharrismalik"
    }
]

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch]">
                        Let's Talk
                    </h2>
                    <p className="text-stone-400 mt-8 max-w-[50ch] lg:max-w-[30ch]">
                        Let's work together to make something awesome.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        {
                            socials.map((item:socialType,key) => (
                                <a href={item.href} key={key} target="_blank" className="w-12 h-12 grid place-items-center 
                                ring-inset ring-2 ring-stone-50/5 rounded-lg transition-[background-color,color] hover:bg-stone-50 hover:text-stone-900">{item.icon}</a>
                            ))
                        }
                    </div>
                </div>

                <form action="https://formcarry.com/s/EJc8A-tdkq1" method="POST" className="xl:pl-10 2xl:pl-20">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="">Name</label>
                            <input type="text" name="name" className="text-field" id="name"
                             autoComplete="name" placeholder="Enter Name" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="">Email</label>
                            <input type="email" name="email" className="text-field" id="email"
                             autoComplete="email" placeholder="Enter Email" required/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea name="message" id="message" className="text-field resize-y min-h-32 max-h-80" placeholder="Write your message!" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}