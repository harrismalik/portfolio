import { TextGenerateEffect } from "../common/text-generate-effect";
import { IoArrowForward } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { useState } from "react";
import ProjectInquiryModal from "../common/ProjectInquiryModal";
import headshot from "../../assets/pictures/headshot.jpg";

const words = ` Open to new projects`;

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-1 lg:gap-10">
                <div>
                    <div className="flex items-center lg:justify-center gap-3">
                        {/* <figure className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-stone-700/50">
                            <img src={headshot} alt="Harris Malik" width={36} height={36} className="w-full h-full object-cover" />
                        </figure> */}
                        <div className="flex items-center gap-1.5 text-stone-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            <TextGenerateEffect duration={0} words={words}/>
                        </div>
                    </div>

                    <h1 className="headline-2 md:headline-1 lg:text-center text-left lg:mx-auto mt-4 mb-2 lg:mb-2">
                        I Build AI-Powered Products <br/> That Solve Real Problems
                    </h1>

                    <p className="text-stone-400 lg:text-center max-w-3xl lg:mx-auto mb-8 lg:text-lg">
                        Full-Stack Engineer turning complex ideas into production-ready AI applications.
                        From intelligent automation to Voice AI, I ship products that deliver results.
                    </p>

                    <div className="flex items-center lg:justify-center gap-3">
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary text-[18px] pr-3">
                            Start a Project
                            <IoArrowForward />
                        </button>
                        <a href="#work" className="btn btn-outline text-[18px] pr-3">
                            View My Work
                            <HiOutlineBriefcase />
                        </a>
                    </div>
                </div>
            </div>

            <ProjectInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}