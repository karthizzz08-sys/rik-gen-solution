import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Target, Heart, Rocket, Users } from "lucide-react";

const timeline = [
  { year: "2024", title: "Founded", desc: "Rik Gen Solution was born with a vision to deliver luxury digital solutions" },
  { year: "2025", title: "Growing Fast", desc: "Served 100+ clients across Tamil Nadu with premium websites" },
  { year: "2026", title: "Expanding", desc: "Scaling to pan-India with a full-service digital agency model" },
];

const values = [
  { icon: Target, title: "Excellence", desc: "Every pixel is crafted to perfection" },
  { icon: Heart, title: "Client First", desc: "Your success is our top priority" },
  { icon: Rocket, title: "Fast Delivery", desc: "Premium websites in just 3 days" },
  { icon: Users, title: "Results Driven", desc: "Focused on leads and conversions" },
];

const AboutPage = () => (
  <div className="pt-24">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Our Story" subtitle="Building digital excellence, one website at a time" />

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            { name: "KARTHI MUTHU", role: "Founder & CEO", desc: "Visionary leader passionate about delivering luxury digital experiences that transform businesses." },
            { name: "RAJARAJAN", role: "Co-Founder", desc: "Technical expert driving innovation and excellence in every project we deliver." },
          ].map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-2xl font-bold gold-text">{f.name.charAt(0)}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1">{f.name}</h3>
              <p className="text-primary text-sm mb-3">{f.role}</p>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeading title="Our Journey" />
        <div className="max-w-2xl mx-auto mb-20">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-6 mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                  {t.year.slice(-2)}
                </div>
                {i < timeline.length - 1 && <div className="w-px h-full bg-primary/20 mt-2" />}
              </div>
              <div className="pb-8">
                <div className="text-primary text-sm font-semibold">{t.year}</div>
                <h4 className="font-display text-lg font-semibold">{t.title}</h4>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <SectionHeading title="Our Values" />
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                <v.icon size={24} className="text-primary" />
              </div>
              <h4 className="font-display font-semibold mb-1">{v.title}</h4>
              <p className="text-muted-foreground text-xs">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
