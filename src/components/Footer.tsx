import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
    <div className="container mx-auto section-padding !py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold gold-text mb-4">Rik Gen Solution</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium digital agency delivering luxury websites that grow your business.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Services", "Pricing", "Portfolio", "About", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+917200101470" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91 7200101470
            </a>
            <a href="mailto:rikgen2026@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> rikgen2026@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Tamil Nadu, India
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Get Started</h4>
          <a
            href="https://wa.me/917200101470?text=Hi%20Rik%20Gen%20Solution%2C%20I%20need%20a%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm inline-block !px-6 !py-2"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rik Gen Solution. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
