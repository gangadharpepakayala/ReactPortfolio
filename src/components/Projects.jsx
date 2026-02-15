import React, { useState, useEffect, Suspense, lazy } from "react";
import projects from "../data/projects";
import "aos/dist/aos.css";

const ProjectModal = lazy(() => import("./ProjectModal"));

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Note: AOS init is handled in App.jsx or main entry point, but we can rely on it if global.
    // If not, we can add a useEffect here too, but it's better to perform init once at root.

    return (
        <section
            id="projects"
            className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
                        Projects
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-cyan-400 rounded-full mx-auto"></div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id || index}
                            onClick={() => setSelectedProject(project)}
                            className="group relative cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 ease-in-out overflow-hidden touch-manipulation active:scale-[1.02]"
                            data-aos={index % 2 === 0 ? "fade-up" : "zoom-in-up"}
                            data-aos-delay={200 + index * 100}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                            <div className="relative z-10">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-lg sm:rounded-xl mb-3 sm:mb-4 w-full h-48 sm:h-56 md:h-60 object-cover border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300"
                                        loading="lazy"
                                    />
                                )}
                                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3 text-xl sm:text-2xl text-gray-200 mb-3 sm:mb-4">
                                    {project.stack.map(({ icon: Icon, name, color }, i) => (
                                        <div key={i} className="relative group/tech hover:scale-125 transition-transform duration-300" aria-label={name}>
                                            {Icon && <Icon style={{ color }} className="filter drop-shadow-lg w-5 h-5 sm:w-6 sm:h-6" />}
                                            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-xs text-white bg-slate-800/90 backdrop-blur-sm px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 border border-white/10">
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 overflow-hidden touch-manipulation active:scale-95 text-center flex-1"
                                        >
                                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                            <span className="relative z-10">Code</span>
                                        </a>
                                    )}

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 overflow-hidden touch-manipulation active:scale-95 text-center flex-1"
                                    >
                                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                        <span className="relative z-10">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading project...</div>}>
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                </Suspense>
            )}
        </section>
    );
};

export default Projects;
