import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-[#F5EFE6] to-[#FFF8E1] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-6">
            About ITI HA ASA Foods
          </h2>
          <p className="text-lg text-[#5D4037] font-['Lato'] max-w-2xl mx-auto">
            Where Rich Culinary Heritage Meets Every Cup
          </p>
        </motion.div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#3E2723] p-3 rounded-full">
                <Coffee className="text-[#FFF8E1]" size={24} />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#3E2723]">
                Our Story
              </h3>
            </div>
            <p className="text-base text-[#5D4037] font-['Lato'] leading-relaxed mb-4">
              ITI HA ASA Foods is where rich culinary heritage meets contemporary cafe culture. Our story begins with a passion for authentic flavors and a commitment to quality that spans generations.
            </p>
            <p className="text-base text-[#5D4037] font-['Lato'] leading-relaxed">
              Founded with the vision of creating a space where tradition and modernity coexist, we have become a beloved destination for coffee enthusiasts and food lovers alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#3E2723] p-3 rounded-full">
                <Heart className="text-[#FFF8E1]" size={24} />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#3E2723]">
                Our Passion
              </h3>
            </div>
            <p className="text-base text-[#5D4037] font-['Lato'] leading-relaxed mb-4">
              Through our brands <strong>Fresh Bean</strong> and <strong>Bean & Brew</strong>, we bring you an exquisite range of coffees, teas, and artisanal food crafted with love and precision.
            </p>
            <p className="text-base text-[#5D4037] font-['Lato'] leading-relaxed">
              Every cup tells a story, every bite creates a memory. We source the finest ingredients and blend them with time-honored techniques to deliver an unforgettable experience.
            </p>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 group">
            <img
              src="https://itihaasafoods.in/assets/images/NZ6_0660.jpg"
              alt="Cafe Interior"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 group">
            <img
              src="https://itihaasafoods.in/assets/images/05-Perfect-Cup-Everytime.jpeg"
              alt="Perfect Cup"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 group">
            <img
              src="https://itihaasafoods.in/assets/images/NZ6_0598.jpg"
              alt="Coffee Art"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="bg-[#FFF8E1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-[#3E2723]" size={28} />
            </div>
            <h4 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-2">
              Premium Quality
            </h4>
            <p className="text-sm text-[#5D4037] font-['Lato']">
              Only the finest beans and freshest ingredients make it to your cup
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="bg-[#FFF8E1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#3E2723]" size={28} />
            </div>
            <h4 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-2">
              Community Focus
            </h4>
            <p className="text-sm text-[#5D4037] font-['Lato']">
              Building connections, one cup at a time, in a warm welcoming space
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="bg-[#FFF8E1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-[#3E2723]" size={28} />
            </div>
            <h4 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-2">
              Authentic Flavors
            </h4>
            <p className="text-sm text-[#5D4037] font-['Lato']">
              Traditional recipes meet modern techniques for exceptional taste
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;