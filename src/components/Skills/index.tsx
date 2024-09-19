import { BiLogoTypescript } from "react-icons/bi"
import { BsDatabaseFillGear } from "react-icons/bs"
import { DiPhp } from "react-icons/di"
import { RiGitMergeFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri"
import { SiExpress, SiLaravel } from "react-icons/si"

type skillType = {
    icon: React.ReactNode,
    title: string,
    info: string
}

const skills: skillType[] = [
    {
        icon: <RiReactjsFill fontSize={"30px"} />,
        title: 'React',
        info: 'JS Library'
    },
    {
        icon: <RiGitMergeFill fontSize={"30px"} />,
        title: 'Git',
        info: 'Version Management'
    },
    {
        icon: <RiNodejsLine fontSize={"30px"} />,
        title: 'Node',
        info: 'JS Runtime'
    },
    {
        icon: <BiLogoTypescript fontSize={"30px"} />,
        title: 'TypeScript',
        info: 'Superset of JavaScript'
    },
    {
        icon: <SiExpress fontSize={"30px"} />,
        title: 'Express',
        info: 'Framework for Node.js'
    },
    {
        icon: <DiPhp fontSize={"30px"} />,
        title: 'PHP',
        info: 'Server-side Scripting Language'
    },
    {
        icon: <SiLaravel fontSize={"30px"} />,
        title: 'Laravel',
        info: 'PHP Framework'
    },
    {
        icon: <BsDatabaseFillGear fontSize={"30px"} />,
        title: 'SQL / NoSQL',
        info: 'Databases'
    }
]

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="reveal headline-2">
                    Key Skills & Technologies
                </h2>
                <p className="reveal text-stone-400 mt-3 mb-8 max-w-[50ch]">
                My expertise in various programming languages and frameworks, enabling me to create efficient and user-friendly applications. My dedication to continuous learning ensures that I consistently deliver impactful solutions tailored to meet user needs and achieve meaningful results.
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