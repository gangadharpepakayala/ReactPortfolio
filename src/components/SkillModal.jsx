import React from "react";
import { createPortal } from "react-dom";

const SkillModal = ({ skill, onClose }) => {
    const modalRef = React.useRef(null);

    // Trap focus and close on Esc
    React.useEffect(() => {
        if (!skill || !modalRef.current) return;

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
    }, [skill, onClose]);

    if (!skill) return null;

    const modalContent = (
        <div
            className="fixed inset-0 bg-black/60 flex justify-center items-center"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            style={{ zIndex: 99999 }}
        >
            <div
                ref={modalRef}
                className="backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6 rounded-xl shadow-xl w-11/12 max-w-md max-h-[90vh] overflow-y-auto text-gray-200 relative transition-all duration-300 mx-4"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                style={{
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: skill ? "scale(1)" : "scale(0.75)",
                    opacity: skill ? 1 : 0,
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-white hover:text-red-500 text-2xl"
                    aria-label="Close modal"
                >
                    ×
                </button>

                {/* Title */}
                <div className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 font-semibold border-b pb-2 border-gray-600">
                    <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        loading="lazy"
                    />{" "}
                    {skill.name}
                </div>

                {/* Description */}
                <p className="mb-3 text-sm sm:text-base">{skill.description}</p>

                {/* Experience */}
                {skill.experience && (
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">
                        <strong>Experience:</strong> {skill.experience}
                    </p>
                )}

                {/* Libraries */}
                {skill.libraries && skill.libraries.length > 0 && (
                    <div className="mb-2">
                        <strong className="text-xs sm:text-sm">Tools & Libraries:</strong>
                        <ul className="list-disc list-inside ml-2 text-xs sm:text-sm mt-1">
                            {skill.libraries.map((lib, index) => (
                                <li key={index}>{lib}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Projects */}
                {skill.projects && skill.projects.length > 0 && (
                    <div className="mb-4">
                        <strong className="text-xs sm:text-sm">Projects:</strong>
                        <ul className="list-disc list-inside ml-2 text-xs sm:text-sm mt-1">
                            {skill.projects.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Quote */}
                {skill.quote && (
                    <blockquote className="text-xs sm:text-sm italic text-cyan-300 border-l-4 border-cyan-500 pl-3 sm:pl-4 mt-3">
                        "{skill.quote}"
                    </blockquote>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default SkillModal;
