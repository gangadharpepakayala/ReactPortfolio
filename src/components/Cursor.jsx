import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [trail, setTrail] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Add point to trail
            const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
            setTrail((prev) => [...prev.slice(-12), newPoint]); // Keep last 12 points

            // Check for hover state
            const target = e.target;
            const isPointer = window.getComputedStyle(target).cursor === 'pointer';
            setIsHovering(isPointer);
        };

        const mouseDown = () => setIsClicked(true);
        const mouseUp = () => setIsClicked(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);

        // Cleanup trail interval
        const interval = setInterval(() => {
            setTrail((prev) => prev.slice(1)); // Remove oldest point to fade trail
        }, 40);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
            clearInterval(interval);
        };
    }, []);

    // Hide on mobile
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Trail Effects (Stars) */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className={`fixed pointer-events-none rounded-full z-[9998] hidden md:block transition-colors duration-200 ${isHovering ? 'bg-accent-secondary' : 'bg-accent-primary'}`}
                    style={{
                        left: point.x,
                        top: point.y,
                        width: `${(index / trail.length) * 10}px`,
                        height: `${(index / trail.length) * 10}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: (index / trail.length) * 0.6,
                        transition: 'opacity 0.1s'
                    }}
                />
            ))}

            {/* Main Cursor Dot (Instant, no lag) */}
            <div
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block transition-all duration-200 
            ${isHovering ? 'bg-accent-secondary w-4 h-4' : 'bg-accent-primary w-2 h-2'}
            ${isClicked ? 'scale-75' : 'scale-100'}
        `}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: isHovering ? '0 0 15px #ff006e' : '0 0 10px #00d4ff'
                }}
            />
        </>
    );
};

export default Cursor;
