import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingOrbs() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary Orb (Green) */}
            <motion.div
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
                className="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-primary/10 blur-[120px] rounded-full animate-float"
            />

            {/* Secondary Orb (Purple) */}
            <motion.div
                animate={{
                    x: -mousePos.x * 1.5,
                    y: -mousePos.y * 1.5,
                }}
                className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] bg-secondary/10 blur-[140px] rounded-full animate-float"
                style={{ animationDelay: '-2s' }}
            />

            {/* Accent Orb (Pink) */}
            <motion.div
                animate={{
                    x: mousePos.x * 0.8,
                    y: -mousePos.y * 1.2,
                }}
                className="absolute top-[40%] right-[5%] w-[25vw] h-[25vw] bg-pink/5 blur-[100px] rounded-full animate-pulse-glow"
            />
        </div>
    );
}
