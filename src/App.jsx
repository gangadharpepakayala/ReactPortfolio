import React, { useEffect, Suspense, lazy } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });

    // ✅ Chatbase chatbot integration
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "WrTDr0R2JGODdJGV7QD2g";
    script.domain = "www.chatbase.co";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans relative overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />

      <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Resume />
      </Suspense>

      <Contact />
      <ScrollToTopButton />
      <Cursor />
    </div>
  );
}

export default App;
