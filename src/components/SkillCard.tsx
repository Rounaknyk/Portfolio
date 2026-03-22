import { motion } from "motion/react";

interface SkillCardProps {
    category: string;
    skills: { name: string; level: number }[];
    index: number;
}

export default function SkillCard({ category, skills, index }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-[2.5rem] group hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
        >
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">{category}</h3>
            </div>

            <div className="space-y-6 flex-grow">
                {skills.map((skill, i) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-white/70 group-hover:text-white transition-colors">{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                className="h-full bg-primary shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                                style={{
                                    background: "linear-gradient(90deg, var(--primary), #fff)"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                    {skills.length} Technologies
                </span>
            </div>
        </motion.div>
    );
}
