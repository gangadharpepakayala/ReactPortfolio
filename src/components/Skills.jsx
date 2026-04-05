import { useState, useRef, useEffect, Suspense, lazy } from "react";
import skills from "../data/skills";

const SkillModal = lazy(() => import("./SkillModal"));

/* ── CSS keyframes ─────────────────────────────────────────────────────── */
const marqueeCSS = `
@keyframes marquee-ltr {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-rtl {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.marquee-ltr {
  display: flex;
  width: max-content;
  animation: marquee-ltr 30s linear infinite;
}
.marquee-rtl {
  display: flex;
  width: max-content;
  animation: marquee-rtl 30s linear infinite;
}
.marquee-ltr:hover,
.marquee-rtl:hover {
  animation-play-state: paused;
}
.marquee-static {
  display: flex;
  width: max-content;
  animation: none;
}
`;

/* ── Per-category accent colours ───────────────────────────────────────── */
const accent = {
    Frontend: { dot: "#22d3ee", label: "#22d3ee" },
    Backend: { dot: "#a78bfa", label: "#a78bfa" },
    Database: { dot: "#34d399", label: "#34d399" },
    "Tools & Designing": { dot: "#fbbf24", label: "#fbbf24" },
};

/* ── Single skill pill ─────────────────────────────────────────────────── */
const SkillPill = ({ skill, onOpen }) => (
    <button
        onClick={() => onOpen(skill)}
        title={skill.description}
        style={{ margin: "0 10px" }}
        className="
      inline-flex items-center gap-2
      px-4 py-2 rounded-2xl flex-shrink-0
      bg-white/5 border border-white/10
      hover:bg-white/15 hover:border-cyan-400/50 hover:scale-105
      transition-all duration-300 cursor-pointer whitespace-nowrap
      group/pill
    "
    >
        <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/5 group-hover/pill:bg-white/10 transition-all duration-300">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 object-contain group-hover/pill:scale-110 transition-transform duration-300"
                loading="lazy"
            />
        </span>
        <span className="text-sm font-semibold text-gray-300 group-hover/pill:text-white transition-colors duration-300">
            {skill.name}
        </span>
    </button>
);

/* ── One marquee row ───────────────────────────────────────────────────── */
const MarqueeRow = ({ category, direction, onOpen }) => {
    const wrapperRef = useRef(null); // the overflow:hidden div
    const trackRef = useRef(null); // the scrolling track (single copy)
    const [overflows, setOverflows] = useState(false);

    useEffect(() => {
        const check = () => {
            if (!wrapperRef.current || !trackRef.current) return;
            // trackRef holds ONE copy; if it's wider than the wrapper → overflow
            setOverflows(trackRef.current.scrollWidth > wrapperRef.current.clientWidth);
        };

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [category.stack]);

    const col = accent[category.title] ?? { dot: "#22d3ee", label: "#22d3ee" };

    // When overflowing duplicate items for seamless loop
    const items = overflows
        ? [...category.stack, ...category.stack]
        : category.stack;

    let trackClass = "marquee-static";
    if (overflows) {
        trackClass = direction === "ltr" ? "marquee-ltr" : "marquee-rtl";
    }

    return (
        <div className="flex items-center py-5 gap-0">
            {/* Label */}
            <div className="flex-shrink-0 w-36 sm:w-44 px-6 flex flex-col gap-1.5">
                <span style={{ background: col.dot }} className="w-2 h-2 rounded-full" />
                <span style={{ color: col.label }} className="text-sm sm:text-[15px] font-bold leading-snug">
                    {category.title}
                </span>
            </div>

            {/* Divider */}
            <div className="w-px self-stretch bg-white/10 flex-shrink-0" />

            {/* Strip */}
            <div ref={wrapperRef} className="flex-1 overflow-hidden relative">
                {/* fade edges — only visible when scrolling */}
                {overflows && (
                    <>
                        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
                    </>
                )}

                <div className={trackClass}>
                    {items.map((skill, i) => (
                        <SkillPill
                            key={`${skill.name}-${i}`}
                            skill={skill}
                            onOpen={onOpen}
                            /* first copy ref so we know single-copy width */
                            {...(i === 0 && !overflows ? { ref: trackRef } : {})}
                        />
                    ))}
                </div>

                {/* Hidden single-copy tracker to measure overflow */}
                {overflows === false && (
                    <div
                        ref={trackRef}
                        style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, display: "flex" }}
                    >
                        {category.stack.map((skill, i) => (
                            <SkillPill key={`measure-${skill.name}-${i}`} skill={skill} onOpen={() => { }} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

/* ── Main component ────────────────────────────────────────────────────── */
const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <section
            id="skills"
            className="relative min-h-screen text-white py-16 md:py-24 px-4 z-10 overflow-hidden flex flex-col justify-center"
        >
            <style>{marqueeCSS}</style>

            <div className="max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-down">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-4">
                        My Tech Stack
                    </h2>
                    <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto" />
                </div>

                {/* Single unified container */}
                <div
                    className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none" />

                    <div className="relative z-10 py-4 divide-y divide-white/10">
                        {skills.map((category, idx) => (
                            <MarqueeRow
                                key={category.title}
                                category={category}
                                direction={idx === 0 ? "ltr" : "rtl"} // Frontend → ltr; rest → rtl
                                onOpen={setSelectedSkill}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedSkill && (
                <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading…</div>}>
                    <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
                </Suspense>
            )}
        </section>
    );
};

export default Skills;
