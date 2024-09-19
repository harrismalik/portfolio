import animatingUIImage from '../../assets/projects/portfolio_design_animation.png';
import { GoArrowUpRight } from "react-icons/go";

type projectType = {
    image: string,
    title: string,
    tags: string[],
    projectLink: string
}

const projects:projectType[] = [
    {
        image:animatingUIImage,
        title:'Animating UI',
        tags:['Animation','GSAP','UI','React'],
        projectLink:''
    }
]

export default function Work() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="reveal headline-2 mb-8">
                    Fun Projects
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        projects.map((item:projectType,key:number) => (
                            <div className="reveal relative p-4 rounded-2xl bg-stone-800 
                            hover:bg-stone-700/50 active:bg-stone-700/60 ring-1 ring-inset 
                            ring-stone-50/5 transition-colors" key={key}>
                                <figure className="img-box aspect-square rounded-lg">
                                    <img src={item.image} alt={item.title} className="img-cover" loading="lazy" />
                                </figure>

                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="title-1 mb-3 mt-3 flex items-center gap-2">
                                            {item.title}
                                            <span>
                                            <GoArrowUpRight />
                                            </span>
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {item.tags.map((_item:string,key:number) => (
                                                <span className="h-8 text-sm text-stone-400 bg-stone-50/5 
                                                grid items-center px-3 rounded-lg" key={key}>
                                                    {_item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <a href={item.projectLink} className="absolute inset-0" target="_blank"></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}