import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import ThankYouModal from "./ThankYouModal";

type ProjectInquiryModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ProjectInquiryModal({ isOpen, onClose }: ProjectInquiryModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const projectType = formData.get("project_type") as string;
        const budget = formData.get("budget") as string;
        const timeline = formData.get("timeline") as string;
        const message = formData.get("message") as string;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #34d399; border-bottom: 2px solid #34d399; padding-bottom: 10px;">New Project Inquiry</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 140px;">Name:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Email:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Project Type:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${projectType}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Budget Range:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${budget || "Not specified"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Timeline:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${timeline || "Not specified"}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px;">
                    <h3 style="color: #333; margin-bottom: 10px;">Project Description:</h3>
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
                        subject: `New Project Inquiry from ${name}`,
                        html: htmlContent
                    }
                })
            });

            if (response.ok) {
                formRef.current?.reset();
                onClose();
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

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsAnimating(true);
                });
            });
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out
                ${isAnimating ? "bg-black/70 backdrop-blur-sm" : "bg-black/0 backdrop-blur-0"}`}
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className={`modal-content relative w-full max-w-2xl bg-gradient-to-b from-stone-800/90 to-stone-900/95
                    rounded-3xl border border-stone-700/30 shadow-2xl shadow-black/50
                    transition-all duration-300 ease-out
                    ${isAnimating
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"}`}
                style={{
                    maxHeight: "min(90vh, 800px)",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(168, 162, 158, 0.3) transparent",
                }}
            >
                {/* Premium thin scrollbar */}
                <style>{`
                    .modal-content::-webkit-scrollbar {
                        width: 6px;
                    }
                    .modal-content::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .modal-content::-webkit-scrollbar-thumb {
                        background: rgba(168, 162, 158, 0.3);
                        border-radius: 3px;
                    }
                    .modal-content::-webkit-scrollbar-thumb:hover {
                        background: rgba(168, 162, 158, 0.5);
                    }
                `}</style>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-10 p-2 text-stone-500 hover:text-stone-300
                        hover:bg-stone-700/50 rounded-xl transition-all duration-200"
                >
                    <IoClose size={22} />
                </button>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium
                            text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Available for new projects
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stone-100 to-stone-400
                            bg-clip-text text-transparent">
                            Start a Project
                        </h2>
                        <p className="text-stone-400 mt-1 text-sm">
                            Share your vision and let's build something great together.
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit}>

                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-3 mb-3">
                            <div className="group">
                                <label htmlFor="inquiry-name" className="block text-xs font-medium text-stone-400 mb-1.5
                                    group-focus-within:text-stone-300 transition-colors">
                                    Name <span className="text-emerald-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="inquiry-name"
                                    className="modal-input"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="inquiry-email" className="block text-xs font-medium text-stone-400 mb-1.5
                                    group-focus-within:text-stone-300 transition-colors">
                                    Email <span className="text-emerald-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="inquiry-email"
                                    className="modal-input"
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Project Type, Budget & Timeline Row */}
                        <div className="grid md:grid-cols-3 gap-3 mb-3">
                            <div className="group">
                                <label htmlFor="inquiry-type" className="block text-xs font-medium text-stone-400 mb-1.5
                                    group-focus-within:text-stone-300 transition-colors">
                                    Project Type <span className="text-emerald-400">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="project_type"
                                        id="inquiry-type"
                                        className="modal-input modal-select"
                                        required
                                    >
                                        <option value="">Select type</option>
                                        <option value="AI/Automation">AI / Automation</option>
                                        <option value="Voice AI Agent">Voice AI Agent</option>
                                        <option value="SaaS Application">SaaS Application</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="API Development">API Development</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" size={14} />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="inquiry-budget" className="block text-xs font-medium text-stone-400 mb-1.5
                                    group-focus-within:text-stone-300 transition-colors">
                                    Budget Range
                                </label>
                                <div className="relative">
                                    <select
                                        name="budget"
                                        id="inquiry-budget"
                                        className="modal-input modal-select"
                                    >
                                        <option value="">Select budget</option>
                                        <option value="< $5,000">{"< $5,000"}</option>
                                        <option value="$5,000 - $10,000">$5K - $10K</option>
                                        <option value="$10,000 - $25,000">$10K - $25K</option>
                                        <option value="$25,000 - $50,000">$25K - $50K</option>
                                        <option value="> $50,000">{"> $50,000"}</option>
                                        <option value="Not sure">Not sure</option>
                                    </select>
                                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" size={14} />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="inquiry-timeline" className="block text-xs font-medium text-stone-400 mb-1.5
                                    group-focus-within:text-stone-300 transition-colors">
                                    Timeline
                                </label>
                                <div className="relative">
                                    <select
                                        name="timeline"
                                        id="inquiry-timeline"
                                        className="modal-input modal-select"
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="ASAP">ASAP</option>
                                        <option value="1-2 months">1-2 months</option>
                                        <option value="2-3 months">2-3 months</option>
                                        <option value="3-6 months">3-6 months</option>
                                        <option value="Flexible">Flexible</option>
                                    </select>
                                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-4 group">
                            <label htmlFor="inquiry-description" className="block text-xs font-medium text-stone-400 mb-1.5
                                group-focus-within:text-stone-300 transition-colors">
                                Project Description <span className="text-emerald-400">*</span>
                            </label>
                            <textarea
                                name="message"
                                id="inquiry-description"
                                className="modal-input resize-none h-20"
                                placeholder="Tell me about your project goals and requirements..."
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-400
                                text-stone-950 font-semibold rounded-xl
                                transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25
                                active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send Inquiry"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Thank You Modal */}
            <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
        </div>
    );
}
