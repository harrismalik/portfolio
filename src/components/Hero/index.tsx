import { Globe } from "../common/Globe";
import { FaDownload } from "react-icons/fa6";
import { RiScrollToBottomFill } from "react-icons/ri";
import { TextGenerateEffect } from "../common/text-generate-effect";
import Resume from '../../assets/resume/Harris_Malik_Resume.pdf'

const words = ` Available for work`;

export default function Hero() {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="favicon.svg" alt="" width={40} height={40} className="img-cover" />
                        </figure>
                        <div className="flex items-center gap-1.5 text-stone-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            <TextGenerateEffect duration={0} words={words}/>
                            {/* Available for work */}
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-8 mb-8 lg:mb-10">
                        I&apos;m Harris, software engineer building awesome apps.
                    </h2>

                    <div className="flex items-center gap-3">
                        <a href={Resume} download="Muhammad_Harris_Malik_Resume" className="btn btn-primary text-[18px] pr-3">
                            Download CV
                            <FaDownload />
                        </a>
                        <a href="#about" className="btn btn-outline text-[18px] pr-3">
                            Explore
                            <RiScrollToBottomFill fontSize={'18px'} />
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[500px] ml-auto">
                        {/* <Globe /> */}
                    </figure>
                </div>
            </div>
        </section>
    )
}