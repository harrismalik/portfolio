import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi"
import { BsDatabaseFillGear, BsRobot } from "react-icons/bs"
import { DiPython } from "react-icons/di"
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri"
import { SiExpress, SiLaravel, SiLangchain } from "react-icons/si"
import { TbApi } from "react-icons/tb"

type skillType = {
    icon: React.ReactNode,
    title: string,
    info: string
}

const skills: skillType[] = [
    {
        icon: <RiReactjsFill fontSize={"30px"} />,
        title: 'React',
        info: 'Frontend Library'
    },
    {
        icon: <RiNextjsFill fontSize={"30px"} />,
        title: 'Next.js',
        info: 'React Framework'
    },
    {
        icon: <RiNodejsLine fontSize={"30px"} />,
        title: 'Node.js',
        info: 'JS Runtime'
    },
    {
        icon: <BiLogoTypescript fontSize={"30px"} />,
        title: 'TypeScript',
        info: 'Type-Safe JavaScript'
    },
    {
        icon: <DiPython fontSize={"30px"} />,
        title: 'Python',
        info: 'AI & Backend'
    },
    {
        icon: <BsRobot fontSize={"30px"} />,
        title: 'AI Agents',
        info: 'LangChain & LangGraph'
    },
    {
        icon: <TbApi fontSize={"30px"} />,
        title: 'Voice AI',
        info: 'VAPI & Voice Models'
    },
    {
        icon: <SiLangchain fontSize={"30px"} />,
        title: 'LLM APIs',
        info: 'Claude, OpenAI, RAG'
    },
    {
        icon: <SiExpress fontSize={"30px"} />,
        title: 'Express',
        info: 'Node.js Framework'
    },
    {
        icon: <SiLaravel fontSize={"30px"} />,
        title: 'Laravel',
        info: 'PHP Framework'
    },
    {
        icon: <BiLogoTailwindCss fontSize={"30px"} />,
        title: 'Tailwind CSS',
        info: 'Utility-First CSS'
    },
    {
        icon: <BsDatabaseFillGear fontSize={"30px"} />,
        title: 'Databases',
        info: 'SQL & NoSQL'
    }
]

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="reveal headline-2">
                    What I Work With
                </h2>
                <p className="reveal text-stone-400 mt-3 mb-8 max-w-[50ch]">
                The tools I use to turn your ideas into reality. Modern AI capabilities combined with battle-tested full-stack technologies, optimized for products that need to ship.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skills.map((item:skillType,key) => (
                            <div className="reveal skill-card flex items-center gap-3 ring-2 ring-inset 
                            ring-stone-50/10 rounded-2xl p-3 hover:bg-stone-800 
                            transition-colors group" key={key}>
                                <span className="top-border"></span>
                                <span className="bottom-border"></span>
                                <figure className="bg-stone-700/50 rounded-lg overflow-hidden 
                                w-12 h-12 p-2 group-hover:bg-stone-900 transition-colors">
                                    {item.icon}
                                </figure>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="text-stone-400 text-sm">
                                        {item.info}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}