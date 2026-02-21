import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menuData';
import { X, Star, Clock, Flame } from 'lucide-react';

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
    <section id="menu" className="py-16 sm:py-24 bg-[#FFF8E1] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#5D4037] font-['Lato']">
            Explore our carefully curated selection
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 pb-4 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-['Lato'] font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#3E2723] text-[#FFF8E1] shadow-lg'
                    : 'bg-white text-[#3E2723] hover:bg-[#D7CCC8]'
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
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(62, 39, 35, 0.15)' }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl p-6 cursor-pointer transition-all duration-300"
                style={{ boxShadow: '0 4px 20px -2px rgba(62, 39, 35, 0.1)' }}
                data-testid={`menu-item-${item.id}`}
              >
                <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5D4037] font-['Lato'] mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-['Lato'] font-bold text-[#3E2723]">
                    {item.price.small ? `₹${item.price.small} / ₹${item.price.large}` : `₹${item.price.regular}`}
                  </span>
                  <span className="text-xs text-[#BCAAA4] font-['Lato']">
                    Tap for details
                  </span>
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
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all shadow-lg"
                data-testid="modal-close-button"
              >
                <X size={24} />
              </button>

              {/* 3D Image with Animation */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-[#3E2723] to-[#5D4037]">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transformStyle: 'preserve-3d'
                  }}
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
                  Popular
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
                  <div className="bg-[#FFF8E1] rounded-xl p-4 flex items-center gap-3">
                    <Clock className="text-[#3E2723]" size={20} />
                    <div>
                      <p className="text-xs text-[#5D4037] font-['Lato']">Prep Time</p>
                      <p className="font-['Lato'] font-bold text-[#3E2723]">5-8 mins</p>
                    </div>
                  </div>
                  <div className="bg-[#FFF8E1] rounded-xl p-4 flex items-center gap-3">
                    <Flame className="text-[#3E2723]" size={20} />
                    <div>
                      <p className="text-xs text-[#5D4037] font-['Lato']">Freshly Made</p>
                      <p className="font-['Lato'] font-bold text-[#3E2723]">Always Hot</p>
                    </div>
                  </div>
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