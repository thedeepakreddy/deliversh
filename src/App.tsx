import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { categories, professionals } from './data';
import { Category, Professional } from './types';
import { IconMap } from './components/icons';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const openBookingForProfessional = (prof: Professional) => {
    setSelectedProfessional(prof);
    setSelectedCategory(null);
    setModalOpen(true);
  };

  const openBookingForCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setSelectedProfessional(null);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] pb-24 font-sans text-[#1d1d1f]">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 bg-white/70 backdrop-blur-xl border-b border-[#e8e8ed] z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-xl tracking-tight text-[#1d1d1f]">
              Delivreh
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-medium text-[#1d1d1f]">
            <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Professionals</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Reviews</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-xs font-medium px-4 py-1.5 bg-[#1d1d1f] text-white rounded-full hover:bg-black transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold font-display tracking-tight text-[#1d1d1f] leading-[1.05] mb-6">
              Premium home services.<br />
              <span className="text-[#86868b]">Exclusively in Canada.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] mb-12 max-w-2xl mx-auto font-medium tracking-tight">
              Book expert cleaners, beauty professionals, and repair technicians with a single tap. Tested, trusted, and reliable.
            </p>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f]">Which service do you need?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, idx) => {
              const Icon = IconMap[category.icon];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => openBookingForCategory(category)}
                  className="bg-white p-8 rounded-[2rem] border border-[#e8e8ed] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-[#f5f5f7] rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {Icon && <Icon className="w-8 h-8 text-[#1d1d1f]" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{category.name}</h3>
                  <p className="text-[#86868b] mb-8 text-sm font-medium leading-relaxed">{category.description}</p>
                  <div className="mt-auto px-5 py-2.5 bg-[#f5f5f7] text-[#1d1d1f] text-xs font-semibold rounded-full group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Book Now <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Top Professionals */}
        <section>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Top-Rated Professionals</h2>
            <p className="text-[#86868b] text-lg font-medium">Verified identity and reliable reviews.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tracking-tight">
            {professionals.map((prof, idx) => (
              <motion.div
                key={prof.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group flex flex-col border border-[#e8e8ed]"
              >
                <div className="aspect-square w-full relative overflow-hidden bg-[#f5f5f7]">
                  <img 
                    src={prof.imageUrl} 
                    alt={prof.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-[#1d1d1f] shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {prof.rating}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-[#1d1d1f] text-lg">{prof.name}</h3>
                    <span className="text-base font-semibold text-[#1d1d1f]">CAD ${prof.pricePerHour}<span className="text-xs font-medium text-[#86868b]">/hr</span></span>
                  </div>
                  <p className="text-sm text-[#86868b] mb-6 line-clamp-2 leading-relaxed">{prof.bio}</p>
                  
                  <div className="mt-auto pt-4 border-t border-[#f5f5f7]">
                    <button 
                      onClick={() => openBookingForProfessional(prof)}
                      className="w-full py-3 bg-[#f5f5f7] hover:bg-[#1d1d1f] text-[#1d1d1f] hover:text-white font-semibold text-xs rounded-full transition-all duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <BookingModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        professional={selectedProfessional}
        category={selectedCategory}
      />
    </div>
  );
}
