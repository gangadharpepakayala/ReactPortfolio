import React, { useEffect, Suspense, lazy } from "react";
// import { Analytics } from "@vercel/analytics/react"; // Skipped as it requires installation/setup
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
    // Inject Chatbase chatbot script
    const script = document.createElement("script");
    script.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="2VqFdMh6B85BwAUbamypB";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans relative overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
        }
      >
        <About />
        <Skills />
        <Projects />
        <Resume />
      </Suspense>
      <Contact />
      <ScrollToTopButton />
      <Cursor />
      {/* <Analytics /> */}
    </div>
  );
}

export default App;
