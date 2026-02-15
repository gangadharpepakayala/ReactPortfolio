import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);

    // Trap focus and close on Esc
    useEffect(() => {
        if (!project || !modalRef.current) return;

        const focusable = modalRef.current.querySelectorAll(
            'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        first && first.focus();
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [project, onClose]);

    if (!project) return null;

    const modalContent = (
        <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[100] px-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                ref={modalRef}
                className="backdrop-blur-xl bg-slate-900/90 border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto text-gray-200 relative transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Column - Image & Tech Stack */}
                    <div className="space-y-6">
                        {/* Project Image */}
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(({ icon: Icon, name, color }, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                                    >
                                        {Icon && <Icon style={{ color }} className="w-4 h-4" />}
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                <FaGithub className="text-xl" />
                                Source Code
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                            >
                                <FaExternalLinkAlt className="text-lg" />
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
                            <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
                        </div>

                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            {project.description}
                        </p>

                        {project.highlights && (
                            <div>
                                <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                                <ul className="space-y-3">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Screenshots Gallery (if available) */}
                        {project.screenshot && project.screenshot.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-lg font-bold text-white mb-3">Screenshots</h4>
                                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                                    {project.screenshot.map((shot, idx) => (
                                        <img
                                            key={idx}
                                            src={shot}
                                            alt={`Screenshot ${idx + 1}`}
                                            className="rounded-lg border border-white/10 hover:border-cyan-400/50 transition-colors"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ProjectModal;
