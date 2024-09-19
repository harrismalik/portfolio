import ReactLenis from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP,ScrollTrigger)
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {
  useGSAP(() => {
    const _nodes = gsap.utils.toArray('.reveal');
    _nodes.forEach((_node:any) => {
      gsap.to(_node,{
        scrollTrigger: {
          trigger:_node,
          scrub:true
        },
        y:0,
        opacity:1,
        duration: 1,
        ease: 'power3.out'
      })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <section id="work">
          {/* <Work /> */}
          <Experience />
        </section>
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App