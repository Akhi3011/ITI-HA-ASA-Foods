import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1767785445908-e557ce09a0ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMG9uJTIwd29vZGVuJTIwdGFibGUlMjB3YXJtJTIwY296eXxlbnwwfHx8fDE3NzE2MDU0MjZ8MA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/50 to-transparent" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Logo with Decorative Frame */}
          <div className="flex flex-col items-center justify-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#D7CCC8]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#D7CCC8]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#D7CCC8]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#D7CCC8]" />
              
              <div className="relative bg-gradient-to-br from-[#FFF8E1]/30 to-[#FFF8E1]/10 backdrop-blur-md rounded-full p-6 shadow-2xl border-2 border-[#D7CCC8]/40">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/vwd9ucwz_WhatsApp%20Image%202026-02-20%20at%2017.10.24.jpeg"
                  alt="ITI HA ASA Foods"
                  className="w-36 h-36 sm:w-48 sm:h-48 object-contain"
                  data-testid="hero-logo-main"
                />
                {/* Sparkle effects */}
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="text-[#FFF3E0]" size={20} />
                </motion.div>
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Sparkles className="text-[#D7CCC8]" size={16} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sub-brands with Enhanced Design */}
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FFF8E1]/20 backdrop-blur-sm rounded-full blur-xl group-hover:bg-[#FFF8E1]/30 transition-all" />
              <div className="relative bg-[#FFF8E1]/20 backdrop-blur-md rounded-full p-3 border border-[#D7CCC8]/30 shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/wj1wn726_WhatsApp%20Image%202026-02-20%20at%2017.02.51.jpeg"
                  alt="Fresh Bean"
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                  data-testid="hero-logo-freshbean"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FFF8E1]/20 backdrop-blur-sm rounded-full blur-xl group-hover:bg-[#FFF8E1]/30 transition-all" />
              <div className="relative bg-[#FFF8E1]/20 backdrop-blur-md rounded-full p-3 border border-[#D7CCC8]/30 shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/nqxed4lh_WhatsApp%20Image%202026-02-20%20at%2017.02.54.jpeg"
                  alt="Bean & Brew"
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                  data-testid="hero-logo-beanbrew"
                />
              </div>
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#FFF8E1] leading-tight mt-8"
          >
            Where Tradition Meets
            <br />
            <span className="text-[#D7CCC8]">Every Cup</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-[#FFF3E0] font-['Lato'] max-w-2xl mx-auto leading-relaxed"
          >
            Experience the finest blend of heritage and flavor at ITI HA ASA Foods, featuring Fresh Bean and Bean & Brew
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(62, 39, 35, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMenu}
            className="inline-flex items-center px-10 py-5 bg-[#3E2723] text-[#FFF8E1] rounded-full font-['Lato'] font-bold text-lg shadow-2xl hover:bg-[#5D4037] transition-all duration-300 border-2 border-[#D7CCC8]/30"
            data-testid="hero-view-menu-button"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-[#FFF8E1]" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;