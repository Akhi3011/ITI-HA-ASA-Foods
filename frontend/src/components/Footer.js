import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleFeedbackClick = () => {
    window.open('https://www.google.com/search?client=safari&sca_esv=554760131&rls=en&q=Bean+Board+-+Visalakshi+Nagar+(ITIHASA+Foods),+Alluri+Sitarama+Raju+Marg,+Vishalakshi+Nagar,+Visakhapatnam,+Andhra+Pradesh&spell=1&sa=X&ved=2ahUKEwiv2onz98yAAxWBQ94KHdY8CQwQBSgAegQIBhAB&biw=1440&bih=714&dpr=2&udm=1&lqi=CnpCZWFuIEJvYXJkIC0gVmlzYWxha3NoaSBOYWdhciAoSVRJSEFTQSBGb29kcyksIEFsbHVyaSBTaXRhcmFtYSBSYWp1IE1hcmcsIFZpc2hhbGFrc2hpIE5hZ2FyLCBWaXNha2hhcGF0bmFtLCBBbmRocmEgUHJhZGVzaEjT3eaQkLGAgAhamgEQABABEAIQAxAEEAUYABgBGAMYBBgGGAcYCBgJGAoYCxgMGA0YDiJyYmVhbiBib2FyZCB2aXNhbGFrc2hpIG5hZ2FyIGl0aWhhc2EgZm9vZHMgYWxsdXJpIHNpdGFyYW1hIHJhanUgbWFyZyB2aXNoYWxha3NoaSBuYWdhciB2aXNha2hhcGF0bmFtIGFuZGhyYSBwcmFkZXNokgELY29mZmVlX3Nob3CaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUk9hWFZMTjNaQlJSQUL6AQQIABA5', '_blank');
  };

  return (
    <footer className="bg-[#3E2723] text-[#FFF8E1] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#5D4037] rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5D4037] rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="text-[#D7CCC8]" size={28} />
              <h3 className="text-2xl font-['Playfair_Display'] font-bold">
                ITI HA ASA Foods
              </h3>
            </div>
            <p className="text-[#D7CCC8] font-['Lato'] text-sm leading-relaxed">
              Where Tradition Meets Every Cup. Serving excellence since our inception.
            </p>
          </div>

          {/* Sub-brands */}
          <div>
            <h4 className="text-lg font-['Playfair_Display'] font-bold mb-3">
              Our Brands
            </h4>
            <ul className="space-y-2 font-['Lato'] text-sm text-[#D7CCC8]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D7CCC8] rounded-full" />
                Fresh Bean
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D7CCC8] rounded-full" />
                Bean & Brew
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-['Playfair_Display'] font-bold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 font-['Lato'] text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#D7CCC8] hover:text-[#FFF8E1] transition-colors flex items-center gap-2"
                  data-testid="footer-menu-link"
                >
                  <span className="w-1.5 h-1.5 bg-[#D7CCC8] rounded-full" />
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#D7CCC8] hover:text-[#FFF8E1] transition-colors flex items-center gap-2"
                  data-testid="footer-about-link"
                >
                  <span className="w-1.5 h-1.5 bg-[#D7CCC8] rounded-full" />
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={handleFeedbackClick}
                  className="text-[#D7CCC8] hover:text-[#FFF8E1] transition-colors flex items-center gap-2"
                  data-testid="footer-feedback-link"
                >
                  <span className="w-1.5 h-1.5 bg-[#D7CCC8] rounded-full" />
                  Leave Feedback
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-['Playfair_Display'] font-bold mb-3">
              Get In Touch
            </h4>
            <ul className="space-y-3 font-['Lato'] text-sm text-[#D7CCC8]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Vishalakshi Nagar, Visakhapatnam</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+91" className="hover:text-[#FFF8E1] transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@itihaasafoods.in" className="hover:text-[#FFF8E1] transition-colors">
                  info@itihaasafoods.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Feedback Button */}
        <div className="border-t border-[#5D4037] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-['Lato'] text-[#D7CCC8]">Follow Us:</span>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/itihaasafoods/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5D4037] p-2.5 rounded-full hover:bg-[#FFF8E1] hover:text-[#3E2723] transition-all"
                  data-testid="social-instagram"
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/itihaasafoods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5D4037] p-2.5 rounded-full hover:bg-[#FFF8E1] hover:text-[#3E2723] transition-all"
                  data-testid="social-facebook"
                >
                  <Facebook size={18} />
                </motion.a>
              </div>
            </div>

            {/* Feedback Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFeedbackClick}
              className="flex items-center gap-2 bg-[#FFF8E1] text-[#3E2723] px-6 py-3 rounded-full font-['Lato'] font-bold shadow-lg hover:bg-[#FFF3E0] transition-all"
              data-testid="feedback-button"
            >
              <MessageCircle size={18} />
              Share Your Experience
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#5D4037] pt-6 mt-8 text-center"
        >
          <p className="text-[#D7CCC8] font-['Lato'] text-sm">
            © {new Date().getFullYear()} ITI HA ASA Foods. Crafted with passion and love.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;