import { Timeline } from "./timeline";
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
            timeString: "2024 - Present",
            company: {
                link:"https://vconekt.com/",
                name:"Vconekt"
            },
            description: "Leading development of SaaS applications with AI-powered features. Shipped production AI Voice Agents handling 200+ daily conversations with sub-500ms latency. Architected omnichannel workflow automation automating 60% of customer inquiries.",
            tools: ["React", "Next.js", "Python", "LangChain", "VAPI", "Node.js"]
        },
        {
            timeString: "2023 - 2024",
            company: {
                link:"https://www.asfargroup.ae/",
                name:"Asfar Group"
            },
            description: "Built multiple web applications achieving performing frontends and scalable backends. Led ERP platform development for travel and tourism, enhancing operational workflows. Worked collaboratively across departments to design and deliver customized solutions.",
            tools: ["TypeScript", "Next.js", "React", "Laravel", "Node.js"]
        },
        {
            timeString: "2021 - 2023",
            company: {
                link:"https://uforiainfotech.com/",
                name:"Uforia Infotech | Glorify"
            },
            description: "Developed complex canvas features for Glorify, an award-winning SaaS tool (P@SHA ICT Award 2022 Gold, Product Hunt Featured) later acquired by Leadspages. Built API-driven applications serving 100,000+ monthly active users.",
            tools: ["TypeScript", "Fabric.js", "React", "Redux-Saga", "Node.js"]
        },
        {
            timeString: "2020 - 2021",
            company: {
                link:"https://atoptimize.com/",
                name:"AtOptimize"
            },
            description: "Designed and implemented web applications for ecommerce businesses. Built dynamic web pages enhancing user experience and operational efficiency.",
            tools: ["PHP", "Laravel", "WordPress", "JavaScript", "MySQL"]
        },
    ])
    return (
        <section id="experience" className="section">
            <Timeline data={data} />
        </section>
    );
}
