import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-background border-t border-white/5 py-24 pb-12 overflow-hidden lowercase">

            {/* ─── Compact Contact Section ─── */}
            <section className="relative px-6 md:px-12 max-w-[1600px] mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 border-b border-white/5">

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-8 h-[1px] bg-primary" />
                            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">// contact_initiation</span>
                        </motion.div>
                        <h2 className="font-bebas text-6xl md:text-8xl tracking-tighter text-white mb-6 leading-none">
                            GET_IN_ <span className="text-primary">TOUCH</span>
                        </h2>
                        <p className="font-mono text-sm text-muted max-w-md leading-relaxed">
                            Have a project in mind or just want to chat about tech? My inbox is always open for new opportunities and collaborations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.a
                                href={`mailto:${siteConfig.email}`}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 border border-white/5 bg-surface/50 group hover:border-primary/30 transition-all"
                            >
                                <span className="font-mono text-[9px] text-muted uppercase block mb-2">Email_Terminal</span>
                                <span className="font-mono text-xs text-white group-hover:text-primary transition-colors">{siteConfig.email}</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 border border-white/5 bg-surface/50 group hover:border-secondary/30 transition-all"
                            >
                                <span className="font-mono text-[9px] text-muted uppercase block mb-2">Location_Node</span>
                                <span className="font-mono text-xs text-white group-hover:text-secondary transition-colors">{siteConfig.location}</span>
                            </motion.div>
                        </div>

                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="w-full sm:w-fit inline-block px-12 py-5 bg-primary text-background font-mono text-[10px] uppercase tracking-widest font-black hover:scale-105 transition-transform rounded-sm text-center shadow-[0_0_30px_rgba(126,255,160,0.2)]"
                        >
                            Establish_Connection
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── Final 3-Column Industrial Layout ─── */}
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 pt-12">

                {/* Brand & Status */}
                <div className="md:col-span-5 space-y-8">
                    <div className="flex flex-col">
                        <span className="font-bebas text-5xl tracking-tighter">ROUNAK NAIK</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted leading-none mt-2">
                            System_Version v.2026.final
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(126,255,160,1)]" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-primary">All Systems Nominal</span>
                    </div>
                </div>

                {/* Industrial Links */}
                <div className="md:col-span-3 space-y-6">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-4">// access_nodes</span>
                    <div className="flex flex-col gap-4">
                        {siteConfig.nav.map(item => (
                            <Link key={item.key} to={item.path} className="font-mono text-[11px] text-muted hover:text-white transition-colors uppercase tracking-widest">
                                ./{item.key}.exe
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Nodes */}
                <div className="md:col-span-4 space-y-6">
                    <span className="font-mono text-[10px] text-pink uppercase tracking-widest block mb-4">// social_uplinks</span>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(siteConfig.social).map(([key, url]) => (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 border border-white/5 hover:border-pink/30 hover:bg-pink/5 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-white transition-all text-center"
                            >
                                {key}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sub-footer Copyright */}
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="font-mono text-[9px] text-muted/30 uppercase tracking-widest">
                    © 2026 Rounak Naik // Built with React & Antigravity_Engine
                </span>
                <div className="flex gap-4">
                    <span className="font-mono text-[9px] text-primary/30 uppercase tracking-widest underline decoration-primary/10">Legal_Core</span>
                    <span className="font-mono text-[9px] text-primary/30 uppercase tracking-widest underline decoration-primary/10">System_Diagnostics</span>
                </div>
            </div>

        </footer>
    );
}
