import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export default function Works() {
    return (
        <div className="pt-32 pb-24 lowercase">
            <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 border-b border-white/5 pb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="font-mono text-[10px] text-secondary">[ project_archive.dir ]</span>
                            <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                                Total_Files: {siteConfig.projects.length}
                            </span>
                        </motion.div>
                        <h1 className="bebas-gradient text-8xl md:text-[12rem] lg:text-[15rem] leading-[0.8] tracking-tighter">
                            THE_ <br />
                            <span className="bebas-stroke">ARCHIVE</span>
                        </h1>
                    </div>
                </div>

                {/* Alternating Row Archive */}
                <div className="space-y-32">
                    {siteConfig.projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
                            >
                                {/* Image Column */}
                                <div className={`relative aspect-video group overflow-hidden border border-white/5 bg-surface ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <Link to={`/works/${project.slug}`} className="cursor-none block h-full w-full">
                                        <div className="absolute inset-0 z-0 opacity-[0.03] font-mono text-[9px] p-6 text-primary select-none overflow-hidden">
                                            {Array(10).fill(0).map((_, idx) => (
                                                <div key={idx} className="whitespace-nowrap">{`import { ${project.slug.toUpperCase()} } from "@antigravity/core";`}</div>
                                            ))}
                                        </div>
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                                        {/* Corner Index */}
                                        <div className="absolute top-0 left-0 p-6 font-bebas text-4xl text-white/10 group-hover:text-primary/20 transition-colors">
                                            0{i + 1}
                                        </div>

                                        {/* Hover Industrial Scanline */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:animate-[scan_3s_linear_infinite]" />
                                    </Link>
                                </div>

                                {/* Details Column */}
                                <div className={`space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-3 mb-6"
                                        >
                                            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em]">{project.category}</span>
                                            <span className="w-8 h-[1px] bg-white/10" />
                                            <span className="font-mono text-[10px] text-muted">{project.year}</span>
                                        </motion.div>
                                        <h2 className="font-bebas text-6xl md:text-8xl text-white hover:text-primary transition-colors leading-none mb-6">
                                            {project.name}
                                        </h2>
                                        <p className="font-mono text-sm text-muted leading-relaxed max-w-xl">
                                            {project.badge || "High-performance solution built with precision engineering."}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tag) => (
                                            <span key={tag} className="px-3 py-1 border border-white/10 bg-white/5 font-mono text-[9px] text-muted uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {siteConfig.showSourceButton && (
                                        <Link
                                            to={`/works/${project.slug}`}
                                            className="inline-block px-8 py-3 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest hover:bg-primary hover:text-background transition-all rounded-sm magnetic"
                                        >
                                            Inspect_Source
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <style>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}
