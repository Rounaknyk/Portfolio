import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { siteConfig } from "../config/siteConfig";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle anchor scrolling
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (path.startsWith("/#")) {
            const id = path.replace("/#", "");
            if (location.pathname === "/") {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
                setMenuOpen(false);
            } else {
                // Let the default Link behavior take us to / then the useEffect will scroll
                setMenuOpen(false);
            }
        }
    };

    const scrollToTop = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "h-14 sm:h-16 bg-background/80 backdrop-blur-md border-b border-white/5"
                : "h-16 sm:h-24 bg-transparent border-b border-transparent"
                }`}
        >
            <nav className="max-w-[1600px] mx-auto h-full px-4 sm:px-6 md:px-12 flex items-center justify-between">

                {/* Asymmetric Logo Section */}
                <div className="flex items-baseline gap-4">
                    <Link
                        to="/#home"
                        onClick={(e) => {
                            scrollToTop();
                            handleNavClick(e, "/#home");
                        }}
                        className="group flex flex-col"
                    >
                        <span className="font-bebas text-xl sm:text-3xl tracking-tighter leading-none group-hover:text-primary transition-colors text-white uppercase">
                            ROUNAK <span className="text-primary group-hover:text-white">NAIK</span>
                        </span>
                        <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-muted leading-none mt-1 hidden sm:block">
                            Software Engineer // v.2026
                        </span>
                    </Link>
                </div>

                {/* Industrial Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-8">
                        {siteConfig.nav.map((item, i) => {
                            const isActive = location.pathname === "/" && location.hash === item.path.replace("/", "");
                            return (
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    onClick={(e) => handleNavClick(e, item.path)}
                                    className={`relative flex items-center gap-2 group`}
                                >
                                    <span className="font-mono text-[9px] text-primary/50 group-hover:text-primary transition-colors">
                                        0{i + 1}
                                    </span>
                                    <span className={`font-mono text-xs uppercase tracking-widest ${isActive ? "text-white" : "text-muted hover:text-white"} transition-colors`}>
                                        {item.key}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-glow"
                                            className="absolute -inset-x-4 -inset-y-2 bg-primary/5 blur-md rounded-lg z-[-1]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="h-6 w-[1px] bg-white/10 mx-2" />

                    <div className="flex items-center gap-6">
                        <ThemeToggle />

                        <a
                            href="/Rounak Naik Resume 2026.pdf"
                            download
                            className="font-mono text-[11px] uppercase tracking-widest px-6 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all rounded-sm magnetic"
                        >
                            Get_resume
                        </a>
                    </div>
                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 z-[110]"
                >
                    <motion.div animate={menuOpen ? { rotate: 45, y: 7 } : {}} className="w-6 h-[1.5px] bg-primary" />
                    <motion.div animate={menuOpen ? { opacity: 0 } : {}} className="w-6 h-[1.5px] bg-primary" />
                    <motion.div animate={menuOpen ? { rotate: -45, y: -7 } : {}} className="w-6 h-[1.5px] bg-primary" />
                </button>

            </nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-background/98 backdrop-blur-xl z-[105] flex flex-col justify-center px-6 sm:px-12"
                    >
                        <div className="space-y-6 sm:space-y-8">
                            {siteConfig.nav.map((item, i) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className="font-bebas text-5xl sm:text-7xl tracking-tighter hover:text-primary transition-colors block uppercase"
                                    >
                                        {item.key}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile menu footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12"
                        >
                            <a
                                href="/Rounak Naik Resume 2026.pdf"
                                download
                                className="block w-full py-4 text-center font-mono text-[10px] sm:text-[11px] uppercase tracking-widest border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all"
                            >
                                Download_Resume
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Integrated Scroll Progress */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-primary via-secondary to-pink z-[101] origin-left"
                style={{ scaleX }}
            />
        </header>
    );
}
