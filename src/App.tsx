import ReactLenis from "lenis/react";
import { AuroraBackground } from "./components/common/AuroraBackground";
import { ScrollProgress } from "./components/common/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Metrics from "./components/Metrics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <AuroraBackground />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Proof />
        <About />
        <Services />
        <Skills />
        <Work />
        <Experience />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
