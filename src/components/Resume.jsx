import React from "react";
import { education, internships, workExperience } from "../data/education";


const Resume = () => {
    return (
        <section
            id="resume"
            className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
                        Resume
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-cyan-400 rounded-full mx-auto"></div>

                </div>

                {/* Work Experience Section */}
                {workExperience.length > 0 && (
                    <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Work Experience</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {workExperience.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        {index === 0 && (
                                                            <>
                                                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                                                                    Current Position
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-cyan-400 font-semibold text-sm sm:text-base md:text-lg">{item.institution}</p>
                                                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.location}</p>
                                                </div>
                                                <div className="text-left sm:text-right mt-2 sm:mt-0">
                                                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 font-semibold text-xs sm:text-sm">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            </div>

                                            {item.techStack && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {item.techStack.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <ul className="space-y-2 text-sm text-gray-300">
                                                {item.highlights.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education & Internships Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Education Section */}
                    <div data-aos="fade-right">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                        </div>

                        <div className="space-y-6">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title} <span className="text-cyan-400">- {item.score}</span></h4>
                                                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-1">{item.institution}</p>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{item.location}</p>
                                                </div>
                                                <div className="text-left sm:text-right mt-2 sm:mt-0">
                                                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 font-semibold text-xs sm:text-sm">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internships Section */}
                    <div data-aos="fade-left">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-400 rounded-full animate-pulse"></div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Internships</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-teal-400/50 to-transparent"></div>
                        </div>

                        <div className="space-y-6">
                            {internships.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-teal-400 font-semibold text-sm sm:text-base mb-1">{item.institution}</p>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{item.location}</p>
                                                </div>
                                                <div className="text-left sm:text-right mt-2 sm:mt-0">
                                                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-teal-400/20 border border-teal-400/30 text-teal-300 font-semibold text-xs sm:text-sm">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                {item.highlights.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="text-teal-400 mt-1.5 flex-shrink-0">▹</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Resume;
