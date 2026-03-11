import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Trophy, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeIn} className="inline-block py-1 px-3 rounded-full bg-secondary text-white font-semibold tracking-wide text-sm mb-6 shadow-md shadow-secondary/50">
              Empowering Champions Since 2021
            </motion.span>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
              Fueling Passion.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-red-400">
                Building Excellence.
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Join the Hari sports academy dedicated to athletic development, elite competition, and community engagement.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/registration" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/30 hover:-translate-y-1">
                Register Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/events" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                View Tournaments
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white shrink-0 -mt-10 relative z-20 rounded-t-[3rem] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: 'Become a Member', desc: 'Join our community of athletes, clubs, and coaches.', link: '/membership' },
              { icon: Calendar, title: 'Upcoming Events', desc: 'Discover and register for the latest tournaments.', link: '/events' },
              { icon: Trophy, title: 'Results & Rankings', desc: 'Track performance and view official leaderboards.', link: '/results' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Link to={item.link} className="inline-flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Highlights</span>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mt-2">Latest News & Events</h2>
            </div>
            <Link to="/news" className="text-primary font-semibold flex items-center mt-4 md:mt-0 hover:underline">
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* News Card 1 */}
            <motion.article variants={fadeIn} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbb1b040a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">Tournament</div>
              </div>
              <div className="p-8">
                <span className="text-gray-400 text-sm flex items-center mb-3">
                  <Calendar className="w-4 h-4 mr-2" /> Oct 15, 2023
                </span>
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">National Championships Kick Off Next Week</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">The highly anticipated national sports championships are set to begin with over 500 athletes competing.</p>
                <Link to="/news/1" className="text-secondary font-medium flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </motion.article>

            {/* Event Card */}
            <motion.article variants={fadeIn} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">Event</div>
              </div>
              <div className="p-8">
                <span className="text-gray-400 text-sm flex items-center mb-3">
                  <Calendar className="w-4 h-4 mr-2" /> Nov 02, 2023
                </span>
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">Youth Development Training Camp</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">A specialized 3-day training camp for younger athletes focused on foundational skills and endurance.</p>
                <Link to="/events/1" className="text-secondary font-medium flex items-center">Event Details <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </motion.article>

            {/* News Card 2 */}
            <motion.article variants={fadeIn} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Achievement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Achievement</div>
              </div>
              <div className="p-8">
                <span className="text-gray-400 text-sm flex items-center mb-3">
                  <Calendar className="w-4 h-4 mr-2" /> Sep 28, 2023
                </span>
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">New Records Broken at Regional Meet</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">Five district records were shattered this weekend as our athletes demonstrated peak performance.</p>
                <Link to="/news/2" className="text-secondary font-medium flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by Official Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Sponsor Logos Placeholder */}
            {['Partner One', 'Global Sports', 'AthletiCo', 'Peak Gear'].map((sponsor, i) => (
              <h2 key={i} className="text-2xl md:text-3xl font-heading font-black text-gray-800">{sponsor}</h2>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
