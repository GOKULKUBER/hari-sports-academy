import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, TrendingUp } from 'lucide-react';
const sportsData = [
  {
    title: 'Karate',
    image: '/assets/sports/image3.jpg',
    description: 'A traditional Japanese martial art focusing on striking techniques such as punching, kicking, knee strikes, and elbow strikes, as well as open-hand techniques. Karate is not just about physical strength but also emphasizes character development, discipline, and respect.',
    features: ['Discipline & Focus', 'Self-Defense', 'Physical Fitness']
  },
  {
    title: 'Kudo',
    image: '/assets/sports/image2.jpg',
    description: 'A modern Japanese mixed martial art that combines elements from Kyokushin Karate, Judo, and Muay Thai. Kudo allows for a wide range of techniques, including full-contact strikes, throws, and submissions, executed while wearing specialized protective headgear.',
    features: ['Full-Contact Realism', 'Comprehensive Grappling', 'Mental Toughness']
  },
  {
    title: 'Boxing',
    image: '/assets/sports/image4.jpg',
    description: 'Also known as the "sweet science," Boxing is a combat sport consisting of two people throwing punches at each other for a predetermined amount of time in a boxing ring. It requires exceptional cardiovascular conditioning, footwork, speed, and strategic thinking.',
    features: ['Agility & Speed', 'Cardiovascular Health', 'Strategic Combat']
  },
  {
    title: 'Pencak Silat',
    image: '/assets/sports/image1.jpg',
    description: 'An umbrella term for a class of indigenous martial arts from the Indonesian archipelago. Pencak Silat involves fluid, dance-like movements combined with devastating strikes, joint manipulation, throws, and the use of traditional weaponry.',
    features: ['Fluid Weaponry', 'Joint Manipulations', 'Cultural Heritage']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function Sports() {
  return (
    <div className="w-full bg-gray-50 pb-24">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0506E4]/90 to-[#0506E4]/40 pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee7e14f9d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Our Disciplines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our diverse range of martial arts programs, each designed to develop physical ability, mental focus, and character.
          </motion.p>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {sportsData.map((sport, idx) => (
            <motion.div key={sport.title} variants={itemVariants} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* Image Container */}
              <div className="h-72 overflow-hidden relative">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
                  <h2 className="text-4xl font-heading font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {sport.title}
                  </h2>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {sport.description}
                </p>

                {/* Features List */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {sport.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <Target className="w-4 h-4 text-secondary shrink-0" />
                        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
