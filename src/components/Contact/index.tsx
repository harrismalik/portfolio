import { useState, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";
import ThankYouModal from "../common/ThankYouModal";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";

type Social = { href: string; icon: React.ReactNode; label: string };

const socials: Social[] = [
  {
    icon: <BsLinkedin />,
    href: "https://linkedin.com/in/mharrismalik",
    label: "LinkedIn",
  },
  {
    icon: <FaSquareGithub />,
    href: "https://github.com/harrismalik",
    label: "GitHub",
  },
  {
    icon: <RiInstagramLine />,
    href: "https://instagram.com/mharrismalik",
    label: "Instagram",
  },
];

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
          Accept: "application/json",
          Authorization: apiAuth,
        },
        body: JSON.stringify({
          type: "website_form",
          to: {
            id: notificationEmail,
            email: notificationEmail,
          },
          email: {
            subject: `New Contact Message from ${name}`,
            html: htmlContent,
          },
        }),
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
      <div className="container">
        <div className="panel grain relative overflow-hidden p-7 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="flex flex-col">
              <SectionHeader
                eyebrow="Contact"
                title={<>Have a project in&nbsp;mind?</>}
                description="Whether it's an AI-powered application, an automation system, or a full product build — let's talk about bringing your idea to life."
              />

              <a
                href="mailto:contact@mharrismalik.com"
                className="group mt-8 inline-flex w-max items-center gap-2 font-display text-lg font-medium text-white transition-colors hover:text-accent"
              >
                contact@mharrismalik.com
                <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="mt-8 flex items-center gap-2.5">
                {socials.map((item) => (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded-xl text-lg text-white/70 ring-1 ring-inset ring-white/10 transition-all hover:bg-white hover:text-ink"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <Reveal delay={0.1}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      className="text-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      required
                      className="text-field"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project…"
                    required
                    className="text-field max-h-80 min-h-32 resize-y"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  {!isSubmitting && <IoArrowForward />}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </section>
  );
}
