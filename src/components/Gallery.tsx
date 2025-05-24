import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { images } from '@/assets';

export function Gallery() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handlePause = () => {
    setIsPaused(!isPaused);
  };
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Event <span className="text-primary-red">Gallery</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Glimpses from previous FEFO events
          </motion.p>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="gallery-mask flex overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex gap-4 ${isPaused ? '' : 'animate-scroll'}`}
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'fit-content',
              }}
            >
              {/* First set of images */}
              {images.gallery.map((image, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-72 h-64 relative group">
                  <img 
                    src={image} 
                    alt={`FEFO event ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white">
                    <p className="text-lg font-medium px-4 text-center">FEFO Event {index + 1}</p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {images.gallery.map((image, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-72 h-64 relative group">
                  <img 
                    src={image} 
                    alt={`FEFO event ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white">
                    <p className="text-lg font-medium px-4 text-center">FEFO Event {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePause}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label={isPaused ? "Play gallery" : "Pause gallery"}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}