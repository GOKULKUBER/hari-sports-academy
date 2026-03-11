import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Shield } from 'lucide-react';

const coachesData = [
  {
    name: 'Jotheeshwaran',
    role: 'Coach',
    sport: 'Athletics',
    image: '/assets/coaches/Jotheeshwaran.png',
    description: 'A dedicated and experienced coach focusing on traditional and modern athletics. Dedicated to instilling discipline, agility, and mental toughness in every student.',
    achievements: ['Youth Development']
  },
  {
    name: 'Anu',
    role: 'Coach',
    sport: 'Badminton',
    image: '/assets/coaches/anu.jpeg',
    description: 'Passionate about building foundational strength, endurance, and overall cardiovascular health. Believes in a holistic approach to athletic training and sports excellence.',
    achievements: ['Youth Development']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export default function Coaches() {
  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0506E4]/90 to-[#0506E4]/40 pt-20 pb-20 px-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbb1b040a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Meet Our Coaches
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Learn from the best. Our world-class instructors are dedicated to your athletic and personal development.
          </motion.p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {coachesData.map((coach, idx) => (
            <motion.div
              key={coach.name}
              variants={itemVariants}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Vertical Image Container */}
              <div className="w-full h-[500px] overflow-hidden relative bg-gray-100">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-bold text-sm shadow-md">
                  {coach.sport}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Floating Role Badge */}
                <div className="absolute -top-6 left-8 bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-secondary/30">
                  {coach.role}
                </div>

                <h2 className="text-3xl font-heading font-bold text-gray-900 mt-2 mb-4">
                  {coach.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  {coach.description}
                </p>

                {/* Achievements List */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Highlights</h3>
                  <div className="space-y-3">
                    {coach.achievements.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-700 font-medium text-sm">
                        <Star className="w-4 h-4 text-secondary mr-3 shrink-0" />
                        {item}
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
