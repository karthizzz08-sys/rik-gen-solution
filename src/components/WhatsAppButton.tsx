import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917200101470?text=Hi%20Rik%20Gen%20Solution%2C%20I%20need%20a%20website!"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-background" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
