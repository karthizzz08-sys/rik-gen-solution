import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Globe, Search, Smartphone, MessageCircle, Zap, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  { icon: Globe, title: "Premium Websites", desc: "Luxury, conversion-focused websites" },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google" },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Perfect on every device" },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Convert visitors instantly" },
  { icon: Zap, title: "High-Speed Sites", desc: "Lightning fast performance" },
  { icon: Shield, title: "Google Business", desc: "Complete business setup" },
];

const testimonials = [
  { name: "Anand Kumar", biz: "Marriage Hall Owner", text: "Rik Gen delivered an amazing website. Our bookings increased 3x in just 2 months!" },
  { name: "Priya Raman", biz: "Boutique Owner", text: "The premium design truly reflects our brand. Customers love our new website." },
  { name: "Vikram S.", biz: "Restaurant Owner", text: "WhatsApp integration was a game changer. We get 10+ leads daily now!" },
];

const HomePage = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-6 border border-primary/30 rounded-full px-6 py-2">
            Premium Digital Agency
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          We Build <span className="gold-text">Luxury Websites</span>
          <br />That Grow Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          From Basic to Most Premium – We Deliver Excellence.
          <br />
          <span className="text-primary font-medium">Get Your Website in 3 Days</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/917200101470?text=Hi%20Rik%20Gen%20Solution%2C%20I%20need%20a%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Book on WhatsApp
          </a>
          <a href="tel:+917200101470" className="btn-outline-gold flex items-center justify-center gap-2">
            <Phone size={18} /> Get Free Consultation
          </a>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding border-y border-border bg-card/20">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
        <AnimatedCounter end={120} suffix="+" label="Happy Clients" />
        <AnimatedCounter end={98} suffix="%" label="Success Rate" />
        <AnimatedCounter end={3} label="Day Delivery" suffix=" " />
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Our Services" subtitle="End-to-end digital solutions to skyrocket your business" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-outline-gold inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-card/20 border-y border-border">
      <div className="container mx-auto">
        <SectionHeading title="Client Love" subtitle="Trusted by businesses across Tamil Nadu" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground/80 text-sm mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.biz}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card gold-border-glow p-10 md:p-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            No Website = <span className="gold-text">Losing Customers</span>
          </h2>
          <p className="text-muted-foreground mb-2">Limited Slots Available – Act Now!</p>
          <p className="text-primary font-semibold mb-8">Get your premium website starting at just ₹5,000</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917200101470?text=Hi%20Rik%20Gen%20Solution%2C%20I%20want%20to%20book%20a%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Book on WhatsApp Now
            </a>
            <a href="tel:+917200101470" className="btn-outline-gold flex items-center justify-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default HomePage;
