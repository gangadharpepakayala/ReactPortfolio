import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import skills from "../data/skills";

const SkillModal = lazy(() => import("./SkillModal"));

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Index of the active category

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Grouping skills for slides
    const slides = [
        [skills[0], skills[1]], // Slide 1: Frontend & Backend
        [skills[2], skills[3]], // Slide 2: Database & Tools
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-scroll functionality
    useEffect(() => {
        if (isHovered || isMobile) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [isHovered, isMobile]);

    return (
        <section
            id="skills"
            className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 z-10 overflow-hidden flex flex-col justify-center"
        >
            <div className="max-w-[90rem] mx-auto w-full">
                {/* Section Header */}
                <div
                    className="text-center mb-8 sm:mb-12"
                    data-aos="fade-down"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
                        My Tech Stack
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-cyan-400 rounded-full mx-auto"></div>
                </div>

                {/* Dynamic Content Based on Screen Size */}
                <div
                    className="relative w-full mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isMobile ? (
                        // Mobile View: Tabs + Static Grid
                        <div className="flex flex-col gap-6">
                            {/* Category Tabs */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {skills.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === index
                                                ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                                : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                                            }`}
                                    >
                                        {category.title}
                                    </button>
                                ))}
                            </div>

                            {/* Active Category Skills Grid */}
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl"
                            >
                                <div className="grid grid-cols-3 gap-3">
                                    {skills[activeTab].stack.map((skill) => (
                                        <div
                                            key={skill.name}
                                            onClick={() => setSelectedSkill(skill)}
                                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 p-2 bg-white/5 rounded-lg flex items-center justify-center">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[10px] text-gray-300 text-center leading-tight">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        // Desktop View: Carousel
                        <>
                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
                                aria-label="Previous Slide"
                            >
                                <FaChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
                                aria-label="Next Slide"
                            >
                                <FaChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                            </button>

                            {/* Slides Area */}
                            <div className="overflow-hidden h-auto px-4 sm:px-12 md:px-24">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="grid md:grid-cols-2 gap-6 md:gap-8 w-full h-full"
                                    >
                                        {slides[currentSlide].map((group, groupIndex) => (
                                            <div
                                                key={group.title}
                                                className="relative group w-full h-full"
                                            >
                                                {/* Skill Group Card */}
                                                <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden w-full flex flex-col">
                                                    {/* Shimmer Effect */}
                                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                                                    {/* Glow Effect */}
                                                    <div className="absolute -inset-1 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                                                    <div className="relative z-10 flex-1 flex flex-col">
                                                        {/* Group Header */}
                                                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">
                                                                {group.title}
                                                            </h3>
                                                            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent min-w-[20px]"></div>
                                                        </div>

                                                        {/* Skills Grid */}
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full flex-1 content-start">
                                                            {group.stack.map((skill) => (
                                                                <div
                                                                    key={skill.id || skill.name}
                                                                    className="group/skill relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:scale-105 touch-manipulation active:scale-95 w-full aspect-square"
                                                                    onClick={() => setSelectedSkill(skill)}
                                                                >
                                                                    {/* Skill Icon Container - Adjusted Size */}
                                                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white/5 p-2 sm:p-3 group-hover/skill:bg-white/10 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                                                        <img
                                                                            src={skill.icon}
                                                                            alt={`${skill.name} icon`}
                                                                            className="w-full h-full object-contain opacity-100 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300"
                                                                            loading="lazy"
                                                                        />
                                                                        {/* Hover Glow */}
                                                                        <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/skill:opacity-100 rounded-xl transition-opacity duration-300"></div>
                                                                    </div>

                                                                    {/* Skill Name */}
                                                                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-300 group-hover/skill:text-white text-center transition-colors duration-300 px-1 line-clamp-2">
                                                                        {skill.name}
                                                                    </p>

                                                                    {/* Hover Indicator */}
                                                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Modal */}
            {
                selectedSkill && (
                    <Suspense
                        fallback={
                            <div style={{ textAlign: "center", padding: "2rem" }}>
                                Loading skill...
                            </div>
                        }
                    >
                        <SkillModal
                            skill={selectedSkill}
                            onClose={() => setSelectedSkill(null)}
                        />
                    </Suspense>
                )
            }
        </section >
    );
};

export default Skills;
// Updated Skills component
