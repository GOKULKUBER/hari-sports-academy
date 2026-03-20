import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Sports', path: '/sports' },
  { name: 'Events', path: '/events' },
  // { name: 'Registration', path: '/registration' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <button
              onClick={() => setIsLogoModalOpen(true)}
              className="focus:outline-none hover:scale-105 transition-transform"
            >
              <img src="/assets/navbar/logo.jpeg" alt="Sports Association Logo" className="h-10 w-auto object-contain rounded shadow-sm" />
            </button>
            <Link to="/">
              <span className="font-heading font-bold text-2xl tracking-tight bg-gradient-to-r from-[#0000FE] to-red-500 bg-clip-text text-transparent">
                Hari Sports Academy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-bold transition-colors cursor-pointer ${isActive
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary hover:bg-red-50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pl-4">
              <Link to="/contact" className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-primary hover:bg-red-50">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 flex flex-col">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${location.pathname === link.path ? 'text-secondary bg-red-50' : 'text-primary hover:bg-blue-50 hover:text-secondary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-lg font-semibold shadow-md">
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full View Logo Modal */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsLogoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute -top-12 -right-4 text-white hover:text-secondary bg-white/10 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src="/assets/navbar/logo.jpeg"
                alt="Sports Association Logo Full View"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl ring-4 ring-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
