import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
    HiHome,
    HiUser,
    HiCode,
    HiFolder,
    HiDocumentText,
    HiMail,
} from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = [
                "hero",
                "about",
                "skills",
                "projects",
                "resume",
                "contact",
            ];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: "Home", href: "#hero", icon: HiHome },
        { label: "About", href: "#about", icon: HiUser },
        { label: "Skills", href: "#skills", icon: HiCode },
        { label: "Projects", href: "#projects", icon: HiFolder },
        { label: "Resume", href: "#resume", icon: HiDocumentText },
        { label: "Contact", href: "#contact", icon: HiMail },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-cyan-500/10"
                : "bg-slate-950/60 backdrop-blur-md border-b border-white/10"
                }`}
        >
            {/* Animated Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-teal-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
                    {/* Logo Section */}
                    <a
                        href="#hero"
                        className="group flex items-center relative z-10"
                        onClick={() => setActiveSection("hero")}
                    >
                        {/* Text Container */}
                        <div className="flex flex-col justify-center">
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300 leading-none">
                                Gangadhar P.
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {links.map((link) => {
                            const Icon = link.icon;
                            const isActive = activeSection === link.href.substring(1);

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.href.substring(1))}
                                    className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                        ? "text-cyan-400"
                                        : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {/* Active Background */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-teal-500/20 rounded-lg blur-sm"></div>
                                    )}

                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex items-center gap-2">
                                        <Icon
                                            className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                                                }`}
                                        />
                                        <span className="font-medium text-xs lg:text-sm">{link.label}</span>
                                    </div>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                                    )}

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 p-2.5 sm:p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group touch-manipulation"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                                    }`}
                            ></span>
                            <span
                                className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            ></span>
                            <span
                                className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-3 sm:py-4 space-y-1 sm:space-y-2 border-t border-white/10 mt-2">
                        {links.map((link, index) => {
                            const Icon = link.icon;
                            const isActive = activeSection === link.href.substring(1);

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveSection(link.href.substring(1));
                                    }}
                                    className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 touch-manipulation ${isActive
                                        ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400"
                                        : "text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                                        }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <Icon
                                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                                            }`}
                                    />
                                    <span className="font-medium text-sm sm:text-base">{link.label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </nav>
    );
};

export default Navbar;
