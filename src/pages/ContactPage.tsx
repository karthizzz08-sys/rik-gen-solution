import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", business: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Rik Gen Solution!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ABusiness: ${form.business}%0ABudget: ${form.budget}`;
    window.open(`https://wa.me/917200101470?text=${msg}`, "_blank");
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Get In Touch" subtitle="Let's discuss your project and bring your vision to life" />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+917200101470" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <div className="text-sm font-medium">+91 7200101470</div>
                    </div>
                  </a>
                  <a href="mailto:rikgen2026@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-medium">rikgen2026@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm font-medium">Tamil Nadu, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917200101470?text=Hi%20Rik%20Gen%20Solution%2C%20I%20need%20a%20website!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
                <h3 className="font-display text-xl font-semibold mb-2">Send Enquiry</h3>
                {[
                  { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { key: "business", label: "Business Type", type: "text", placeholder: "e.g., Restaurant, Salon, Startup" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs text-muted-foreground mb-1 block">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Budget Range</label>
                  <select
                    required
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                    <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
                    <option value="₹40,000 – ₹1,00,000+">₹40,000 – ₹1,00,000+</option>
                  </select>
                </div>
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 !mt-6">
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
