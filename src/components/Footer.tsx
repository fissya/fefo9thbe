import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-foreground text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About FEFO</h3>
            <p className="mb-4 text-gray-300">
              Fun Education For Olympiad (FEFO) is an annual educational event organized by KARBIT and KIR, celebrating its 9th year with a Japanese theme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-red transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-red transition-colors">About</a>
              </li>
              <li>
                <a href="#showcase" className="text-gray-300 hover:text-primary-red transition-colors">Showcase</a>
              </li>
              <li>
                <a href="#competition" className="text-gray-300 hover:text-primary-red transition-colors">Competition</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-primary-red transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary-red transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#registration" className="text-gray-300 hover:text-primary-red transition-colors">Registration</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-red flex-shrink-0" />
                <span className="text-gray-300">123 School Street, Bandung, West Java, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-red flex-shrink-0" />
                <a href="mailto:fefo@example.com" className="text-gray-300 hover:text-primary-red transition-colors">fefo@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-red flex-shrink-0" />
                <a href="tel:+62123456789" className="text-gray-300 hover:text-primary-red transition-colors">+62 123 4567 890</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter to receive updates about FEFO events and competitions.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button className="bg-primary-red hover:bg-primary-red/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} FEFO 9. All rights reserved. Organized by KARBIT and KIR.
          </p>
        </div>
      </div>
    </footer>
  );
}