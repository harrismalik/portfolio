import { PiCubeFill } from "react-icons/pi";
import { Timeline } from "./timeline";
import { title } from "framer-motion/client";
import { MdArrowOutward } from "react-icons/md";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

type expType = {
    timeString: string,
    description: string,
    tools: string[],
    company: {
        link:string,
        name:string
    },
}

function createExpObj(experiences: expType[]): TimelineEntry[] {
    const _data: TimelineEntry[] = []
    experiences.forEach((item: expType) => {
        _data.push({
            title: item.timeString,
            content: (
                <div className="container md:p-0">
                    <div className="reveal bg-stone-800/50 p-7 rounded-2xl md:p-12">
                        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-stone-500 dark:text-stone-500">
                            {item.timeString}
                        </h3>
                        <p className="text-stone-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-7">
                            <div >
                                <a href={item.company.link} target="_blank" className="title-1 text-stone-400 mb-3 flex items-center gap-2 hover:text-stone-300">
                                    {item.company.name}
                                    <MdArrowOutward />
                                </a>
                                <div className="flex flex-wrap items-center gap-2">
                                    {
                                        item.tools.map((tool, key) => (
                                            <span className="h-8 text-sm text-stone-400 bg-stone-50/5 
                                                grid items-center px-3 rounded-lg" key={key}>
                                                {tool}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* <PiCubeFill className="ml-auto md:w-[40px] md:h-[40px]" fontSize={"35px"} /> */}
                        </div>
                    </div>
                </div>
            )
        })
    })
    return _data
}

export default function Experience() {
    const data: TimelineEntry[] = createExpObj([
        {
            timeString: "Mid 2023",
            company: {
                link:"https://www.asfargroup.ae/",
                name:"Asfar Group"
            },
            description: "Developed and styled interavtive web apps and written multiple API's.",
            tools: ["TypeScript", "Next", "Laravel", "PHP"]
        },
        {
            timeString: "2022",
            company: {
                link:"https://uforiainfotech.com/",
                name:"Uforia Infotech | Glorify"
            },
            description: "Year of exciting features and intense coding. Our product winning GOLD at P@SHA ICT Award and featured at numrious places.",
            tools: ["TypeScript", "Fabric.js", "React", "Node"]
        },
        {
            timeString: "2021",
            company: {
                link:"https://uforiainfotech.com/",
                name:"Uforia Infotech | Glorify"
            },
            description: "Falling in love with creative coding xD. It's really been an year of learning and exploring, worked on performance intensive features and scalability.",
            tools: ["React", "Canvas", "Fabric.js", "Laravel", "PHP"]
        },
        {
            timeString: "Early 2021",
            company: {
                link:"https://atoptimize.com/",
                name:"AtOptimize"
            },
            description: "Developed, styled and maintained ecommerce web applications. Worked on creating and optimizing wordpress stores and laravel apps",
            tools: ["PHP", "Laravel", "Javascript", "Wordpress"]
        },
        {
            timeString: "2020",
            company: {
                link:"https://zaf-technologies.com/",
                name:"Zaf Technologies"
            },
            description: "This is where I first got introduced to Laravel while working on an in-house supply chain management system as a full-stack developer.",
            tools: ["PHP", "Laravel", "Javascript", "MySQL"]
        },
    ])
    return (
        <section id="experience" className="section">
            <Timeline data={data} />
        </section>
    );
}
