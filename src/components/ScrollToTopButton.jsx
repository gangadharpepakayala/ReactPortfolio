import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            // Force instant scroll if smooth isn't working on some browsers or reduce duration
        });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="group hidden md:flex fixed bottom-4 right-4 sm:right-6 md:right-20 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-teal-400 text-white shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/70 overflow-hidden backdrop-blur-md border border-white/20 touch-manipulation active:scale-95 items-center justify-center"
                aria-label="Scroll to top"
            >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <FaArrowUp className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
        )
    );
};

export default ScrollToTopButton;
