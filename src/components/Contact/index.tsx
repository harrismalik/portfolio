import { useState, useRef } from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaSquareGithub } from "react-icons/fa6"
import { RiInstagramLine } from "react-icons/ri"
import ThankYouModal from "../common/ThankYouModal"

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #34d399; border-bottom: 2px solid #34d399; padding-bottom: 10px;">New Contact Message</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 100px;">Name:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Email:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                </table>
                <div style="margin-top: 20px;">
                    <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                    <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
                </div>
            </div>
        `;

        const apiUrl = import.meta.env.VITE_NOTIFICATION_API_URL;
        const apiAuth = import.meta.env.VITE_NOTIFICATION_API_AUTH;
        const notificationEmail = import.meta.env.VITE_NOTIFICATION_EMAIL;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": apiAuth
                },
                body: JSON.stringify({
                    type: "website_form",
                    to: {
                        id: notificationEmail,
                        email: notificationEmail
                    },
                    email: {
                        subject: `New Contact Message from ${name}`,
                        html: htmlContent
                    }
                })
            });

            if (response.ok) {
                formRef.current?.reset();
                setShowThankYou(true);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch]">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-stone-400 mt-2 max-w-[50ch] lg:max-w-[30ch]">
                        Whether it's an AI-powered application, automation system, or a full product build, let's talk about bringing your idea to life.
                    </p>
                    <div className="flex items-center gap-2 mt-4 md:mt-auto">
                        {
                            socials.map((item:socialType,key) => (
                                <a href={item.href} key={key} target="_blank" className="w-12 h-12 grid place-items-center 
                                ring-inset ring-2 ring-stone-50/5 rounded-lg transition-[background-color,color] hover:bg-stone-50 hover:text-stone-900">{item.icon}</a>
                            ))
                        }
                    </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            {/* <label htmlFor="name" className="">Name</label> */}
                            <input type="text" name="name" className="text-field" id="name"
                             autoComplete="name" placeholder="Enter Name" required/>
                        </div>
                        <div className="mb-4">
                            {/* <label htmlFor="email" className="">Email</label> */}
                            <input type="email" name="email" className="text-field" id="email"
                             autoComplete="email" placeholder="Enter Email" required/>
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="message" className="label">Message</label> */}
                        <textarea name="message" id="message" className="text-field resize-y min-h-32 max-h-80" placeholder="Write your message!" required></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary [&]:max-w-full w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* Thank You Modal */}
            <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
        </section>
    )
}