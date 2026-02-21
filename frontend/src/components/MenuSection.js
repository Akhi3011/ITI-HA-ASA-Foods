import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menuData';
import { X, Star, Clock, Flame, Sparkles } from 'lucide-react';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('coffee');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const formatPrice = (priceObj) => {
    if (priceObj.small) {
      return { small: `₹${priceObj.small}`, large: `₹${priceObj.large}` };
    }
    return { regular: `₹${priceObj.regular}` };
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF8E1] to-[#FFF3E0] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#3E2723]/10 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="text-[#3E2723]" size={18} />
            <span className="text-sm font-['Lato'] text-[#3E2723] font-semibold">Handcrafted Delights</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#5D4037] font-['Lato']">
            Explore our carefully curated selection of beverages and treats
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 pb-4 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-['Lato'] font-medium transition-all duration-300 whitespace-nowrap shadow-md ${
                  selectedCategory === category.id
                    ? 'bg-[#3E2723] text-[#FFF8E1] shadow-lg shadow-[#3E2723]/30'
                    : 'bg-white text-[#3E2723] hover:bg-[#D7CCC8] hover:shadow-lg'
                }`}
                data-testid={`category-${category.id}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px -10px rgba(62, 39, 35, 0.25)',
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border border-[#D7CCC8]/20"
                style={{ boxShadow: '0 4px 20px -2px rgba(62, 39, 35, 0.1)' }}
                data-testid={`menu-item-${item.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] pr-2">
                    {item.name}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Star className="text-[#3E2723]" size={18} fill="#3E2723" />
                  </motion.div>
                </div>
                
                <p className="text-sm text-[#5D4037] font-['Lato'] mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#D7CCC8]/30">
                  <span className="text-lg font-['Lato'] font-bold text-[#3E2723]">
                    {item.price.small ? `₹${item.price.small} / ₹${item.price.large}` : `₹${item.price.regular}`}
                  </span>
                  <motion.span 
                    whileHover={{ x: 3 }}
                    className="text-xs text-[#5D4037] font-['Lato'] flex items-center gap-1"
                  >
                    View Details →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
            data-testid="menu-item-modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full relative overflow-hidden shadow-2xl"
            >
              <motion.button
                onClick={() => setSelectedItem(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all shadow-lg"
                data-testid="modal-close-button"
              >
                <X size={24} />
              </motion.button>

              {/* Image Header */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-[#3E2723] to-[#5D4037]">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute top-4 left-4 bg-[#FFF8E1] text-[#3E2723] px-4 py-2 rounded-full font-['Lato'] font-bold text-sm shadow-lg flex items-center gap-2"
                >
                  <Star size={16} className="fill-[#3E2723]" />
                  Popular Choice
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-4"
                >
                  {selectedItem.name}
                </motion.h2>
                
                <motion.p 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg text-[#5D4037] font-['Lato'] mb-6 leading-relaxed"
                >
                  {selectedItem.description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-[#FFF8E1] to-[#FFF3E0] rounded-xl p-4 flex items-center gap-3"
                  >
                    <Clock className="text-[#3E2723]" size={20} />
                    <div>
                      <p className="text-xs text-[#5D4037] font-['Lato']">Prep Time</p>
                      <p className="font-['Lato'] font-bold text-[#3E2723]">5-8 mins</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-[#FFF8E1] to-[#FFF3E0] rounded-xl p-4 flex items-center gap-3"
                  >
                    <Flame className="text-[#3E2723]" size={20} />
                    <div>
                      <p className="text-xs text-[#5D4037] font-['Lato']">Freshly Made</p>
                      <p className="font-['Lato'] font-bold text-[#3E2723]">Always Hot</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Price */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="border-t border-[#D7CCC8] pt-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#5D4037] font-['Lato'] mb-2">Price</p>
                      {selectedItem.price.small ? (
                        <div className="flex gap-4">
                          <div>
                            <p className="text-sm text-[#5D4037] font-['Lato']">Small</p>
                            <p className="text-2xl font-['Lato'] font-bold text-[#3E2723]">
                              {formatPrice(selectedItem.price).small}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[#5D4037] font-['Lato']">Large</p>
                            <p className="text-2xl font-['Lato'] font-bold text-[#3E2723]">
                              {formatPrice(selectedItem.price).large}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-3xl font-['Lato'] font-bold text-[#3E2723]">
                          {formatPrice(selectedItem.price).regular}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;