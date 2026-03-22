import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteConfig } from "../config/siteConfig";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = siteConfig.projects.find((p) => p.slug === slug);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center font-mono uppercase">
            [ Error: Project_Not_Found ]
        </div>
    );

    return (
        <div className="pt-24 pb-24 lowercase">
            {/* ─── Hero Section ─── */}
            <section className="relative h-[80vh] flex flex-col justify-end px-6 md:px-12 max-w-[1600px] mx-auto pb-16 overflow-hidden">

                {/* Visual Background Element */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale brightness-50 opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-primary">[ project_id: {project.slug.toUpperCase()} ]</span>
                            <div className="h-[1px] flex-grow bg-white/5" />
                        </div>
                        <h1 className="bebas-gradient text-9xl md:text-[15rem] lg:text-[18rem] leading-[0.8] tracking-tighter">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap gap-12 mt-12 pb-12 border-b border-white/5">
                            <div>
                                <span className="font-mono text-[10px] text-muted block mb-1 uppercase tracking-widest">Role</span>
                                <span className="font-mono text-sm text-white">{project.role}</span>
                            </div>
                            <div>
                                <span className="font-mono text-[10px] text-muted block mb-1 uppercase tracking-widest">Year</span>
                                <span className="font-mono text-sm text-white">{project.year}</span>
                            </div>
                            <div>
                                <span className="font-mono text-[10px] text-muted block mb-1 uppercase tracking-widest">Category</span>
                                <span className="font-mono text-sm text-white">{project.category}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Industrial Meta */}
                <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
                    <div className="rotate-90 origin-right font-mono text-[9px] text-primary/30 uppercase tracking-[1em] whitespace-nowrap">
                        antigravity_system_node_0x{project.slug.substring(0, 2)}
                    </div>
                </div>
            </section>

            {/* ─── Story & Tech Section ─── */}
            <section className="px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24">
                <div className="space-y-16">
                    <div className="space-y-8">
                        <span className="font-mono text-xs text-secondary opacity-50 block">// overview.md</span>
                        <p className="font-mono text-2xl md:text-3xl text-foreground leading-relaxed">
                            {project.badge || "project details pending verification by system admin."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <span className="font-mono text-xs text-pink opacity-50 block">// challenges.log</span>
                            <p className="font-mono text-muted text-lg leading-relaxed">
                                integrating complex cross-functional requirements within the {project.category} ecosystem while maintaining performance.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <span className="font-mono text-xs text-primary opacity-50 block">// solution.exe</span>
                            <p className="font-mono text-muted text-lg leading-relaxed">
                                implemented a streamlined architecture using {project.tech[0]} and {project.tech[1] || "modern tools"}.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Sidebar */}
                <div className="space-y-12">
                    <div className="p-8 border border-white/5 bg-surface/30 backdrop-blur-sm">
                        <span className="font-mono text-xs text-white block mb-8 uppercase tracking-[0.3em] border-b border-white/5 pb-4">Dependencies</span>
                        <div className="space-y-6">
                            {project.tech?.map((tag: string, i: number) => (
                                <div key={tag} className="flex items-center justify-between group">
                                    <span className="font-mono text-[11px] text-muted group-hover:text-primary transition-colors uppercase tracking-widest">{tag}</span>
                                    <span className="font-mono text-[10px] text-primary group-hover:text-white transition-colors">v.0{i + 1}.0</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {siteConfig.showSourceButton && (
                        <div className="flex flex-col gap-4">
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-white text-background font-mono text-xs uppercase tracking-[0.4em] text-center hover:bg-primary transition-colors magnetic"
                            >
                                Launch_Live_App.sh
                            </a>
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.4em] text-center hover:border-primary transition-all rounded-sm magnetic"
                            >
                                View_Source_Code.git
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Gallery (Bento Layout) ─── */}
            <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery?.map((img, i) => {
                        const gridClass = i === 0 ? "md:col-span-2 lg:row-span-2" : "";
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`${gridClass} border border-white/5 overflow-hidden group`}
                            >
                                <img
                                    src={img}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ─── Next Project Navigation ─── */}
            <section className="border-t border-white/5 py-40 text-center">
                <Link to="/works" className="group inline-block">
                    <span className="font-mono text-xs text-muted uppercase tracking-[0.5em] block mb-12 group-hover:text-primary transition-colors">Return_to_Archive</span>
                    <h2 className="bebas-gradient text-9xl md:text-[15rem] leading-none tracking-tighter group-hover:scale-105 transition-transform">
                        NEXT_ <span className="bebas-stroke">STEPS</span>
                    </h2>
                </Link>
            </section>
        </div>
    );
}
