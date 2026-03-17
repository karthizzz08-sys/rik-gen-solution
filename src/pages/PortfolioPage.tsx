import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Royal Marriage Hall", category: "Event Venue", color: "from-primary/20 to-primary/5" },
  { title: "Elite Restaurant", category: "Food & Dining", color: "from-primary/15 to-primary/5" },
  { title: "Premium Boutique", category: "E-commerce", color: "from-primary/20 to-primary/10" },
  { title: "Luxury Salon & Spa", category: "Beauty & Wellness", color: "from-primary/10 to-primary/5" },
  { title: "Construction Company", category: "Real Estate", color: "from-primary/15 to-primary/5" },
  { title: "Law Firm Website", category: "Professional", color: "from-primary/20 to-primary/10" },
];

const PortfolioPage = () => (
  <div className="pt-24">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Our Portfolio" subtitle="A showcase of premium websites we've crafted for our clients" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover group overflow-hidden"
            >
              <div className={`aspect-video bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-500">{p.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="btn-gold !px-4 !py-2 text-sm flex items-center gap-2">
                    <ExternalLink size={14} /> View Project
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PortfolioPage;
