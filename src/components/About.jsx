import { workExperience } from "../data/education";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-gray-200 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
                        About Me
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Side - About Text & Job */}
                    <div className="space-y-8" data-aos="fade-right">
                        {/* About Text */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed relative z-10">
                                    I'm{" "}
                                    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                        Gangadhar Pepakayala
                                    </span>
                                    , a passionate{" "}
                                    <strong className="text-white">Full Stack Developer</strong>{" "}
                                    driven by curiosity and a deep love for clean, scalable
                                    solutions. I specialize in modern full-stack technologies and
                                    build intuitive UIs and scalable APIs that bring ideas to
                                    life.
                                </p>
                            </div>

                            {/* Current Job Card */}
                            {workExperience[0] && (
                                <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                                                        Current Position
                                                    </span>
                                                </div>
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                                                    {workExperience[0].title}
                                                </h3>
                                                <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                                                    {workExperience[0].institution}
                                                </p>
                                            </div>
                                            <div className="text-left sm:text-right mt-2 sm:mt-0">
                                                <p className="text-xs sm:text-sm text-gray-400">
                                                    {workExperience[0].location}
                                                </p>
                                                <p className="text-xs sm:text-sm font-medium text-cyan-400">
                                                    {workExperience[0].duration}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {workExperience[0].techStack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            {workExperience[0].highlights
                                                .slice(0, 2)
                                                .map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-cyan-400 mt-1">▹</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side - Personal Info */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8" data-aos="fade-left" data-aos-delay="200">
                        {/* Personal Info Card */}
                        <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 group overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                    Personal Info
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Full Name:
                                        </strong>
                                        <span className="text-gray-300 text-sm">
                                            Gangadhar Pepakayala
                                        </span>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Roles:
                                        </strong>
                                        <span className="text-gray-300 text-sm">
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Location:
                                        </strong>
                                        <span className="text-gray-300 text-sm">
                                            Hyderabad, Telangana
                                        </span>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Education:
                                        </strong>
                                        <span className="text-gray-300 text-sm">
                                            B.Tech, CSE
                                        </span>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            GitHub:
                                        </strong>
                                        <a
                                            href="https://github.com/gangadharpepakayala"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline text-sm"
                                        >
                                            github.com/gangadharpepakayala
                                        </a>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            LinkedIn:
                                        </strong>
                                        <a
                                            href="https://www.linkedin.com/in/gangadhar-pepakayala"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline text-sm"
                                        >
                                            linkedin.com/gangadhar-pepakayala
                                        </a>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Email:
                                        </strong>
                                        <a
                                            href="mailto:gangadharpepakayala22@gmail.com"
                                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline text-sm"
                                        >
                                            gangadharpepakayala22@gmail.com
                                        </a>
                                    </div>
                                    <div className="group/item p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <strong className="text-white block mb-1 text-sm">
                                            Freelancing:
                                        </strong>
                                        <span className="text-teal-400 font-semibold flex items-center gap-2 text-sm">
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                                            Available
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
