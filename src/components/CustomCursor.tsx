import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const isMagnetic = useRef(false);

    const mouseX = useSpring(0, { stiffness: 1000, damping: 50, mass: 0.1 });
    const mouseY = useSpring(0, { stiffness: 1000, damping: 50, mass: 0.1 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (!isMagnetic.current) {
                mouseX.set(clientX);
                mouseY.set(clientY);
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("a, button, .magnetic");

            if (interactive) {
                setIsHovered(true);
                if (interactive.classList.contains("magnetic")) {
                    isMagnetic.current = true;
                    const rect = interactive.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    mouseX.set(centerX);
                    mouseY.set(centerY);
                }
            } else {
                setIsHovered(false);
                isMagnetic.current = false;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] mix-blend-exclusion"
                style={{
                    x: mouseX,
                    y: mouseY
                }}
                animate={{
                    scale: isHovered ? 4 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary rounded-full pointer-events-none z-[9999] opacity-30 mix-blend-exclusion"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.6 : 0.2
                }}
            />
        </>
    );
}
