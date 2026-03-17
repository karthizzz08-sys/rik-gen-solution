import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Check, Crown, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹5,000 – ₹10,000",
    features: ["3–5 Pages", "Mobile Responsive", "Simple Design", "Contact Form", "1 Revision Round", "3-Day Delivery"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹15,000 – ₹30,000",
    features: ["5–10 Pages", "Modern UI/UX", "SEO Optimized", "WhatsApp Integration", "3 Revision Rounds", "5-Day Delivery", "Google Business Setup"],
    highlight: false,
  },
  {
    name: "Most Premium",
    price: "₹40,000 – ₹1,00,000+",
    features: ["Fully Custom Luxury Design", "Advanced Animations", "High-Speed Optimization", "Conversion-Focused Layout", "Unlimited Revisions", "Priority Support", "SEO + Google Ads Ready", "Complete Brand Identity"],
    highlight: true,
  },
];

const PricingPage = () => (
  <div className="pt-24">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Investment Plans" subtitle="Choose the perfect plan for your business growth" />
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-xl p-8 flex flex-col ${
                plan.highlight
                  ? "glass-card gold-border-glow gold-glow"
                  : "glass-card-hover"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  <Crown size={14} /> MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlight ? "gold-text" : ""}`}>{plan.name}</h3>
                <div className="text-2xl font-bold text-foreground">{plan.price}</div>
              </div>
              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-primary shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/917200101470?text=Hi%2C%20I'm%20interested%20in%20the%20${plan.name}%20Plan!`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.highlight ? "btn-gold flex items-center justify-center gap-2" : "btn-outline-gold flex items-center justify-center gap-2"}
              >
                <MessageCircle size={16} /> Book via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PricingPage;
