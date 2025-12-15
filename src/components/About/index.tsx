import { PiCubeFill } from "react-icons/pi"

type aboutItemType = {
    title: string
    displayValue: string
}

const aboutItems: aboutItemType[] = [
    {
        title: 'Years building products',
        displayValue: '5'
    },
    {
        title: 'Users impacted',
        displayValue: '100K'
    }
]

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-stone-800/50 p-7 rounded-2xl md:p-12">
                    <h2 className={"headline-2"}>From Idea to Production</h2>
                    <p className="text-stone-300 mt-3 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I help businesses turn complex ideas into working products. Whether you need
                        an AI-powered automation system, a Voice AI agent, or a complete SaaS platform,
                        I handle everything from architecture to deployment. My work has powered
                        award-winning products and served hundreds of thousands of users.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map((item:aboutItemType,key:number) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl md:text-4xl font-semibold">{item.displayValue}</span>
                                        <span className="text-emerald-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-stone-400">{item.title}</p>
                                </div>
                            ))
                        }
                        <PiCubeFill className="ml-auto md:w-[40px] md:h-[40px]" fontSize={"35px"} />
                    </div>
                </div>
            </div>
        </section>
    )
}