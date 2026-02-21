import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Coffee } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/80 via-[#3E2723]/70 to-[#3E2723]/90" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Brand with Coffee Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
              className="bg-[#FFF8E1] rounded-full p-6 mb-6 shadow-2xl"
            >
              <Coffee className="text-[#3E2723]" size={64} strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-[#FFF8E1] leading-tight mb-4">
              ITI HA ASA Foods
            </h1>
          </motion.div>

          {/* Sub-brands - Simple Text Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 bg-[#FFF8E1]/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#FFF8E1]/30"
            >
              <div className="w-2 h-2 bg-[#FFF8E1] rounded-full animate-pulse" />
              <span className="text-xl font-['Lato'] font-semibold text-[#FFF8E1]">
                Fresh Bean
              </span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 bg-[#FFF8E1]/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#FFF8E1]/30"
            >
              <div className="w-2 h-2 bg-[#FFF8E1] rounded-full animate-pulse" />
              <span className="text-xl font-['Lato'] font-semibold text-[#FFF8E1]">
                Bean & Brew
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-2xl sm:text-3xl font-['Playfair_Display'] font-semibold text-[#D7CCC8]">
              Where Tradition Meets Every Cup
            </p>
            
            <p className="text-lg sm:text-xl text-[#FFF3E0] font-['Lato'] max-w-2xl mx-auto leading-relaxed">
              Experience the finest blend of heritage and flavor at our cozy cafe
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 248, 225, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#FFF8E1] text-[#3E2723] rounded-full font-['Lato'] font-bold text-lg shadow-2xl hover:bg-[#FFF3E0] transition-all duration-300"
            data-testid="hero-view-menu-button"
          >
            <Coffee size={24} />
            Explore Our Menu
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