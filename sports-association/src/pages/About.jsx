import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Shield, Award } from 'lucide-react';

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

export default function About() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0000FE]/70 to-red-500/70 pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee7e14f9d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0000FE]/70 to-red-500/70"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            About Our Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Shaping the future of sports through integrity, passion, and excellence since 2021.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 -mt-16 relative z-20 rounded-t-3xl border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading sports organization that nurtures world-class athletes while promoting a lifelong culture of health, teamwork, and fair play across all communities.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors"></div>
              <Flag className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We organize premium competitive events, provide top-tier coaching resources, and establish sustainable infrastructure to empower athletes from grassroots to elite levels.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-16">Our Core Values</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: 'Integrity', desc: 'Upholding strictly transparent and ethical standards.' },
              { icon: Award, title: 'Excellence', desc: 'Striving for the highest sporting achievements.' },
              { icon: Target, title: 'Discipline', desc: 'Fostering focus, hard work, and resilience.' },
              { icon: Flag, title: 'Inclusivity', desc: 'Sports for all, regardless of background.' }
            ].map((v, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-gray-100">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* President Message */}
      <section className="py-20 bg-gradient-to-r from-[#0506E4]/90 to-[#0506E4]/40 text-white relative overflow-hidden mb-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-32 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="/assets/about/hari.jpeg" alt="President" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-lg">Hari</p>
                <p className="text-sm">Founder , General Secretary</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 md:pl-10"
            >
              <Award className="w-12 h-12 text-secondary mb-6 opacity-80" />
              <h2 className="text-4xl font-heading font-bold mb-6">A Message from the Founder</h2>
              <blockquote className="text-xl leading-relaxed text-gray-300 italic mb-8 relative">
                <span className="text-6xl text-primary absolute -top-8 -left-6 opacity-50 font-serif">"</span>
                Sport has the unique power to unite, inspire, and transform lives. Our academy remains steadfast in its commitment to providing a platform where every athlete can discover their potential and achieve greatness. Together, we are building not just athletes, but leaders of tomorrow.
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
