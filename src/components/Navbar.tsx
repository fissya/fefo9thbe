import { useState, useEffect } from 'react';
import { Menu, X, Scroll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/assets';

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Showcase', href: '#showcase' },
  { title: 'Competition', href: '#competition' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-montserrat">
            FEFO<span className="text-primary-red">9</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-primary-red",
                scrolled ? "text-dark-foreground" : "text-dark-foreground"
              )}
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-primary-red hover:bg-primary-red/90" size="sm">
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="font-medium py-2 text-dark-foreground hover:text-primary-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <Button 
                className="bg-primary-red hover:bg-primary-red/90 w-full"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}