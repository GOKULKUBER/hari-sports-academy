import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white/10 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Sports<span className="text-secondary">Assoc</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering athletes, organizing premier events, and fostering a community of sports excellence since 1995.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-secondary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-secondary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-secondary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Events', 'Sports', 'Gallery', 'News', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center before:content-['>'] before:mr-2 before:text-secondary before:font-bold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3">
              {['Registration', 'Membership', 'Results', 'Coaches', 'Downloads', 'Sponsors'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center before:content-['>'] before:mr-2 before:text-secondary before:font-bold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-5 w-5 mr-3 text-secondary shrink-0 mt-0.5" />
                <span>123 Sports Avenue, Athletic District<br/>Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-5 w-5 mr-3 text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-5 w-5 mr-3 text-secondary shrink-0" />
                <span>info@sportsassoc.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sports Association. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
