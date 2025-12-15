import { TextGenerateEffect } from "../common/text-generate-effect";
import { IoArrowForward } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const words = ` Open to new projects`;

export default function Hero() {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-1 lg:gap-10">
                <div>
                    <div className="flex items-center lg:justify-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="favicon.svg" alt="Harris Malik" width={40} height={40} className="img-cover" />
                        </figure>
                        <div className="flex items-center gap-1.5 text-stone-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            <TextGenerateEffect duration={0} words={words}/>
                        </div>
                    </div>

                    <h1 className="main-heading lg:text-center mx-auto mt-4 mb-8 lg:mb-2">
                        I Build AI-Powered Products <br/> That Solve Real Problems
                    </h1>

                    <p className="text-stone-400 text-center max-w-3xl mx-auto mb-8 lg:text-lg">
                        Full-Stack Engineer turning complex ideas into production-ready AI applications.
                        From intelligent automation to Voice AI, I ship products that deliver results.
                    </p>

                    <div className="flex items-center lg:justify-center gap-3">
                        <a href={"#contact"} className="btn btn-primary text-[18px] pr-3">
                            Start a Project
                            <IoArrowForward />
                        </a>
                        <a href="https://github.com/harrismalik" target="_blank" className="btn btn-outline text-[18px] pr-3">
                            View My Work
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}