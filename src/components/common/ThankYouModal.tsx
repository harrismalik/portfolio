import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

type ThankYouModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showCheck, setShowCheck] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsAnimating(true);
                });
            });
            // Delay the checkmark animation
            const checkTimer = setTimeout(() => {
                setShowCheck(true);
            }, 400);
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            return () => clearTimeout(checkTimer);
        } else {
            setIsAnimating(false);
            setShowCheck(false);
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
                className={`modal-content relative w-full max-w-md bg-gradient-to-b from-stone-800/90 to-stone-900/95
                    rounded-3xl border border-stone-700/30 shadow-2xl shadow-black/50
                    transition-all duration-300 ease-out
                    ${isAnimating
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"}`}
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-300
                        hover:bg-stone-700/50 rounded-xl transition-all duration-200"
                >
                    <IoClose size={22} />
                </button>

                {/* Content */}
                <div className="relative p-8 text-center">
                    {/* Animated Success Checkmark */}
                    <div className="relative mx-auto w-24 h-24 mb-6">
                        {/* Outer ring */}
                        <svg
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out
                                ${showCheck ? "opacity-100" : "opacity-0"}`}
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="rgba(52, 211, 153, 0.2)"
                                strokeWidth="4"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#34d399"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="283"
                                strokeDashoffset={showCheck ? "0" : "283"}
                                className="transition-all duration-700 ease-out"
                                style={{
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "center",
                                }}
                            />
                        </svg>

                        {/* Inner glow circle */}
                        <div
                            className={`absolute inset-2 rounded-full bg-emerald-500/10 transition-all duration-500
                                ${showCheck ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                        />

                        {/* Checkmark */}
                        <svg
                            className={`absolute inset-0 w-full h-full transition-all duration-500 delay-300
                                ${showCheck ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                            viewBox="0 0 100 100"
                        >
                            <path
                                d="M30 52 L45 67 L70 37"
                                fill="none"
                                stroke="#34d399"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="60"
                                strokeDashoffset={showCheck ? "0" : "60"}
                                className="transition-all duration-500 delay-500 ease-out"
                            />
                        </svg>

                        {/* Sparkle effects */}
                        <div
                            className={`absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full transition-all duration-300 delay-700
                                ${showCheck ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                        />
                        <div
                            className={`absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-300 rounded-full transition-all duration-300 delay-800
                                ${showCheck ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                        />
                        <div
                            className={`absolute top-1/2 -right-3 w-2 h-2 bg-emerald-500 rounded-full transition-all duration-300 delay-900
                                ${showCheck ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                        />
                    </div>

                    {/* Text Content */}
                    <h2
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-stone-100 to-stone-300
                            bg-clip-text text-transparent mb-3 transition-all duration-500 delay-200
                            ${showCheck ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        Thank You!
                    </h2>
                    <p
                        className={`text-stone-400 text-sm md:text-base max-w-sm mx-auto transition-all duration-500 delay-300
                            ${showCheck ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        Your message has been sent successfully. I'll get back to you as soon as possible.
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className={`mt-6 px-8 py-3 bg-emerald-500 hover:bg-emerald-400
                            text-stone-950 font-semibold rounded-xl
                            transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25
                            active:scale-[0.98] delay-400
                            ${showCheck ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    );
}
