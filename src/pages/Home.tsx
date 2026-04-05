import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteConfig } from "../config/siteConfig";
import Globe from "../components/Globe";

const badges = [
    { label: "Flutter_Expert", color: "text-primary", border: "border-primary/30" },
    { label: "Frontend_Engineer", color: "text-secondary", border: "border-secondary/30" },
    { label: "UI_Architect", color: "text-pink", border: "border-pink/30" },
    { label: "Blockchain_Dev", color: "text-primary", border: "border-primary/30" },
    { label: "AI_Integrator", color: "text-secondary", border: "border-secondary/30" },
    { label: "Problem_Solver", color: "text-pink", border: "border-pink/30" },
];

export default function Home() {
    return (
        <div className="relative overflow-hidden lowercase">
            {/* ─── Hero Section ─── */}
            <section id="home" className="relative min-h-[100svh] flex items-center py-16 sm:py-20 md:py-8 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-6 lg:gap-8 items-center w-full">
                    {/* Hero Text */}
                    <div className="relative z-20 order-2 lg:order-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-3 sm:mb-4 justify-center lg:justify-start"
                        >
                            <span className="w-6 sm:w-8 h-[1px] bg-primary" />
                            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary">
                                I_am_Coder?
                            </span>
                        </motion.div>

                        <h1 className="bebas-gradient text-7xl sm:text-8xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter mb-3 sm:mb-4">
                            ROUNAK <br />
                            <span className="bebas-stroke">NAIK</span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-md mx-auto lg:mx-0"
                        >
                            <p className="font-mono text-[11px] sm:text-[12px] md:text-xs text-muted leading-relaxed mb-5 sm:mb-6">
                                Full-stack developer and entrepreneur building real-world tech and AI solutions.
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                <a
                                    href="#projects"
                                    className="px-5 sm:px-6 py-3 bg-primary text-background font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-black hover:scale-105 transition-transform rounded-sm magnetic"
                                >
                                    View_My_Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-5 sm:px-6 py-3 border border-white/20 text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-widest hover:border-primary transition-all rounded-sm magnetic"
                                >
                                    Get_In_Touch
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Morphing Blob Avatar Section */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
                        >
                            <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-orbit" />
                            <div className="absolute inset-[-20px] sm:inset-[-30px] border-[0.5px] border-secondary/10 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-pink animate-morph opacity-30 blur-2xl" />
                            <div className="absolute inset-5 sm:inset-6 md:inset-8 animate-morph overflow-hidden border border-white/10 group">
                                <img
                                    src="/rounak1.jpg"
                                    alt="Rounak Naik"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";
                                    }}
                                />
                            </div>
                            <div className="absolute top-0 right-0 font-mono text-[7px] sm:text-[8px] text-primary bg-background/50 px-2 py-1 border border-primary/30 uppercase tracking-widest backdrop-blur-sm">
                                [ node_0x_prime ]
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 md:left-12 flex items-center gap-4 opacity-30">
                    <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-muted">Scroll_Down</span>
                    <div className="w-6 sm:w-8 h-[1px] bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ x: [-32, 32] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full bg-primary"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Marquee Section (Restore) ─── */}
            <section className="bg-surface border-y border-white/5 py-2 overflow-hidden h-[60px] sm:h-[8vh] flex items-center">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="flex gap-8 sm:gap-20 mr-8 sm:mr-20 items-center">
                            {siteConfig.stats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-2 sm:gap-4">
                                    <span className="font-bebas text-xl sm:text-2xl md:text-4xl text-foreground/20">{stat.value}</span>
                                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">{stat.label}</span>
                                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink rounded-full opacity-30" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── About Section ─── */}
            <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-32 items-start">
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6 sm:mb-8"
                        >
                            <span className="font-mono text-[9px] sm:text-[10px] text-primary">[ about_me.md ]</span>
                        </motion.div>
                        <h2 className="bebas-gradient text-5xl sm:text-7xl md:text-9xl tracking-tighter mb-6 sm:mb-8 leading-none">
                            THE_ <br />
                            <span className="bebas-stroke">STORY</span>
                        </h2>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {badges.map((badge, i) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className={`px-2 sm:px-3 py-1 sm:py-1.5 border ${badge.border} ${badge.color} font-mono text-[7px] sm:text-[8px] uppercase tracking-widest animate-float`}
                                >
                                    {badge.label}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12 sm:space-y-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-base sm:text-xl md:text-2xl text-foreground leading-relaxed"
                        >
                            Final-year Computer Engineering student, full-stack developer, and entrepreneur from South Goa. I build real-world tech that ships — from a government-deployed police app to AI platforms that competed nationally.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-6 sm:pt-8 border-t border-white/5">
                            <div className="space-y-3 sm:space-y-4">
                                <span className="text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-widest opacity-50">// context</span>
                                <p className="font-mono text-[11px] sm:text-xs text-muted leading-relaxed">I thrive at the intersection of engineering and business, focusing on scalable architectures and intuitive user experiences.</p>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <span className="text-secondary font-mono text-[9px] sm:text-[10px] uppercase tracking-widest opacity-50">// ambition</span>
                                <p className="font-mono text-[11px] sm:text-xs text-muted leading-relaxed">Currently exploring Agentic AI systems and highly-efficient cloud-native applications for the next generation of web tech.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Projects Section (Horizontal Slider) ─── */}
            <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-10 sm:mb-16 border-b border-white/5 pb-6 sm:pb-8">
                    <div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-secondary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">[ active_deployments.sh ]</span>
                        <h2 className="font-bebas text-5xl sm:text-7xl md:text-9xl tracking-tighter text-white">
                            PROJECTS_ <span className="text-secondary">SLIDER</span>
                        </h2>
                    </div>
                    <Link to="/works" className="w-fit px-4 sm:px-6 py-2 border border-primary text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-primary hover:text-background transition-all">
                        See_All.exe
                    </Link>
                </div>

                {/* Slider Container */}
                <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-8 sm:pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                    {siteConfig.projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <Link to={`/works/${project.slug}`} key={project.slug}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="min-w-[85vw] sm:min-w-[75vw] md:min-w-[70vw] lg:min-w-[60vw] h-[400px] sm:h-[450px] md:h-[500px] snap-center bg-surface border border-white/5 relative group p-1 cursor-pointer"
                                >
                                    <div className={`flex flex-col lg:flex-row h-full w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                        {/* Image Column */}
                                        <div className="w-full h-[45%] lg:h-full lg:w-1/2 relative overflow-hidden">
                                            <div className="absolute inset-0 z-0 opacity-[0.03] font-mono text-[8px] p-6 text-primary overflow-hidden hidden sm:block">
                                                {Array(5).fill(0).map((_, idx) => (
                                                    <div key={idx} className="whitespace-nowrap">{`import { ${project.slug.toUpperCase()} } from "@antigravity/core";`}</div>
                                                ))}
                                            </div>
                                            <img src={project.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 via-transparent to-transparent" />
                                        </div>
                                        {/* Details Column */}
                                        <div className="w-full h-[55%] lg:h-full lg:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col justify-center">
                                            <span className="font-mono text-[8px] sm:text-[9px] text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-4">{project.category} // {project.year}</span>
                                            <h3 className="font-bebas text-3xl sm:text-5xl md:text-7xl group-hover:text-primary transition-colors leading-none mb-3 sm:mb-6">{project.name}</h3>
                                            <p className="font-mono text-[10px] sm:text-xs text-muted leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-8">{project.badge || "High-performance solution built with precision engineering."}</p>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.tech?.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="px-1.5 sm:px-2 py-0.5 border border-white/10 bg-white/5 font-mono text-[7px] sm:text-[8px] text-muted uppercase tracking-widest">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:animate-scan" />
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* ─── Experience Section (Horizontal Slider) ─── */}
            <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-10 sm:mb-16 border-b border-white/5 pb-6 sm:pb-8">
                    <div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-pink uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">[ career_sequence.log ]</span>
                        <h2 className="font-bebas text-5xl sm:text-7xl md:text-9xl tracking-tighter text-white">
                            TIMELINE_ <span className="text-pink">LOGS</span>
                        </h2>
                    </div>
                </div>

                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 sm:pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                    {siteConfig.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="min-w-[260px] sm:min-w-[300px] md:min-w-[400px] snap-center p-6 sm:p-8 border border-white/5 bg-surface/50 group hover:border-primary/30 transition-all relative"
                        >
                            <div className="flex justify-between items-start mb-6 sm:mb-8 text-[8px] sm:text-[9px] font-mono text-muted">
                                <span>{exp.year}</span>
                                <span className="text-secondary">{exp.duration}</span>
                            </div>
                            <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-2 group-hover:text-primary transition-colors">{exp.org}</h3>
                            <p className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-widest mb-4 sm:mb-6">{exp.role}</p>
                            <p className="font-mono text-[11px] sm:text-xs text-muted leading-relaxed line-clamp-4">{exp.desc}</p>
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary/5 blur-2xl" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── International Clients Section ─── */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden border-b border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-10 sm:mb-16 border-b border-white/5 pb-6 sm:pb-8">
                    <div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">[ global_network.map ]</span>
                        <h2 className="font-bebas text-5xl sm:text-7xl md:text-9xl tracking-tighter text-white">
                            GLOBAL_ <span className="text-primary">REACH</span>
                        </h2>
                    </div>
                </div>

                {/* World Map Container */}
                <div className="relative w-full aspect-[2/1] bg-surface/30 border border-white/5 rounded-sm overflow-hidden">
                    {/* 3D Globe */}
                    <Globe />

                    {/* Corner decorations */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 font-mono text-[7px] sm:text-[8px] text-muted uppercase tracking-widest opacity-50">
                        [ coordinates: global ]
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 font-mono text-[7px] sm:text-[8px] text-primary uppercase tracking-widest">
                        5 countries • 3+ years
                    </div>
                </div>

                {/* Country list */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12">
                    {siteConfig.internationalClients.map((client, i) => (
                        <motion.div
                            key={client.country}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full" />
                            <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-widest">{client.country}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Achievements Section (Horizontal Slider) ─── */}
            <section id="achievements" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-10 sm:mb-16 border-b border-white/5 pb-6 sm:pb-8">
                    <div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-secondary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">[ merit_verification.exe ]</span>
                        <h2 className="font-bebas text-5xl sm:text-7xl md:text-9xl tracking-tighter text-white">
                            MILESTONE_ <span className="text-secondary">SYSTEM</span>
                        </h2>
                    </div>
                </div>

                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 sm:pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                    {siteConfig.achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="min-w-[260px] sm:min-w-[300px] md:min-w-[400px] snap-center p-6 sm:p-8 border border-white/10 bg-surface/80 group hover:border-pink/30 transition-all"
                        >
                            <div className="flex justify-between items-start mb-4 sm:mb-6 font-mono text-[8px] sm:text-[9px] text-muted">
                                <span className="bg-pink/10 text-pink px-2 py-0.5 border border-pink/20 uppercase tracking-widest">{item.year}</span>
                                <span className="font-bebas text-xl sm:text-2xl text-white/5 group-hover:text-pink/20 transition-colors">0{i + 1}</span>
                            </div>
                            <h3 className="font-bebas text-2xl sm:text-3xl md:text-5xl text-white mb-3 sm:mb-4 leading-none group-hover:text-pink transition-colors">
                                {item.title}
                            </h3>
                            <p className="font-mono text-[10px] sm:text-xs text-muted leading-relaxed italic">
                                "{item.body}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <style>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .group-hover:animate-scan { animation: scan 3s linear infinite; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
