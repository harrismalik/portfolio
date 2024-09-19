import { PiCubeFill } from "react-icons/pi"

type aboutItemType = {
    title: string
    number: number
}

const aboutItems: aboutItemType[] = [
    {
        title: 'Years working with clients',
        number: 4
    },
    {
        title: 'Years of learning & exploring',
        number: 9
    }
]

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-stone-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-stone-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I love programming and implementing features that creates a wow moment.
                        I am a boat in the ocean of knowledge navigating my way and
                        building creative and complex web applications for
                        innovative startups and thought leaders.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map((item:aboutItemType,key:number) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl md:text-4xl font-semibold">{item.number}</span>
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