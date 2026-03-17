import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Globe, Search, Smartphone, MessageCircle, Zap, Shield, Code, Palette } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const services = [
  { icon: Code, title: "Basic Website Development", desc: "Professional websites with clean design for startups and small businesses. Mobile responsive with fast loading.", features: ["3-5 Pages", "Mobile Responsive", "Contact Form", "Fast Loading"] },
  { icon: Palette, title: "Premium Business Website", desc: "Modern UI/UX with advanced features. SEO optimized with WhatsApp integration for lead generation.", features: ["5-10 Pages", "Modern UI/UX", "SEO Optimized", "WhatsApp Integration"] },
  { icon: Globe, title: "Most Premium Luxury Website", desc: "Fully custom luxury design with advanced animations, conversion-focused layout, and high-speed optimization.", features: ["Unlimited Pages", "Custom Animations", "Conversion Focused", "Premium Support"] },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google with our proven SEO strategies. Get organic traffic and quality leads for your business.", features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reports"] },
  { icon: Shield, title: "Google Business Setup", desc: "Complete Google Business Profile setup to appear in local searches and Google Maps.", features: ["Profile Setup", "Reviews Management", "Local SEO", "Analytics"] },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Convert visitors into customers with direct WhatsApp chat integration on your website.", features: ["Chat Widget", "Auto Reply", "Lead Capture", "Business API"] },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Websites optimized for mobile devices first, ensuring the best experience on every screen.", features: ["Responsive Design", "Touch Optimized", "Fast Mobile Load", "PWA Ready"] },
  { icon: Zap, title: "Speed Optimization", desc: "Lightning fast websites that load in under 2 seconds. Better speed = better conversions.", features: ["Core Web Vitals", "Image Optimization", "CDN Setup", "Caching"] },
];

const ServicesPage = () => (
  <div className="pt-24">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Our Services" subtitle="End-to-end digital solutions crafted for growth and excellence" />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <s.icon size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card/20 border-t border-border">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gold-text">Transform</span> Your Business?
          </h2>
          <p className="text-muted-foreground mb-8">Get a free consultation and quote today</p>
          <a
            href="https://wa.me/917200101470?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <MessageCircle size={18} /> Get Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
