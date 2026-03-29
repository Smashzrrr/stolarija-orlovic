'use client';

import { motion } from 'framer-motion';
import { Thermometer, Volume2, Factory, Clock } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FeaturesProps {
  dict: any;
}

const featureIcons = [Thermometer, Volume2, Factory, Clock];

export default function Features({ dict }: FeaturesProps) {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-muted-foreground border border-border uppercase mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] tracking-tight max-w-3xl">
             {/* Note: In expert.io "expert.io" is colored differently. We can color "Stolariju Orlović" */ }
            Zašto odabrati <span className="text-[#84CC16]">Stolariju Orlović</span>?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Block (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Top Row of Left Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-6">
                  <Thermometer className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{dict.items[0].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{dict.items[0].description}</p>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-6">
                  <Volume2 className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{dict.items[1].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{dict.items[1].description}</p>
              </motion.div>
            </div>

            {/* Bottom Wide Row of Left Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F8F9FA] rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-6">
                  <Factory className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{dict.items[2].title}</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">{dict.items[2].description}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Block (Takes 1 column, Tall) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0B254E] text-white rounded-[2rem] p-8 sm:p-10 flex flex-col h-full relative overflow-hidden"
          >
            {/* Subtle background glow effect if desired */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 relative z-10">
              <Clock className="w-5 h-5 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 leading-tight relative z-10">{dict.items[3].title}</h3>
            <p className="text-blue-100/80 text-base leading-relaxed mb-10 flex-1 relative z-10">{dict.items[3].description}</p>
            
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#84CC16] hover:bg-[#65a30d] text-white font-semibold py-4 px-6 rounded-full transition-colors w-fit relative z-10 group">
              Zatraži ponudu
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
