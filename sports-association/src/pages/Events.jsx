import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Filter } from 'lucide-react';

const EVENTS = [
  // { id: 2, title: 'Youth Football Clinic', date: 'Sep 05, 2024', time: '10:00 AM', location: 'City Stadium', locationUrl: 'https://maps.google.com/?q=City+Stadium', category: 'Training', image: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // { id: 3, title: 'Regional Basketball Finals', date: 'Sep 22, 2024', time: '06:00 PM', location: 'Downtown Sports Complex', locationUrl: 'https://maps.google.com/?q=Downtown+Sports+Complex', category: 'Match', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Karate', date: 'mar 22, 2026', time: '08:00 AM - 05:00 PM', location: 'Pistons Yard Turf', locationUrl: 'https://www.google.com/maps/place/Pistons+Yard+Turf/@11.8039639,77.8253023,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba95398fea57a2b:0x46f100dd464d9a28!8m2!3d11.8039639!4d77.8253023!16s%2Fg%2F11vz8yd8m4?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D', category: 'Tournament', image: 'https://plus.unsplash.com/premium_photo-1683120902370-0431903fb8b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function Events() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Tournament', 'Training'];
  const filteredEvents = filter === 'All' ? EVENTS : EVENTS.filter(e => e.category === filter);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0000FE]/70 to-red-500/70 text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-6"
          >
            Events & Tournaments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white max-w-2xl mx-auto"
          >
            Stay updated with our upcoming matches, training camps, and national tournaments.
          </motion.p>
        </div>
      </section>

      {/* Filter and List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-gray-500 font-medium">
            <Filter className="w-5 h-5 mr-2" />
            Filter by Category:
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === c ? 'bg-secondary text-primary-dark shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredEvents.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 sm:hidden bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{ev.category}</div>
              </div>

              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="hidden sm:inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {ev.category}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">{ev.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-3 text-secondary" />
                      {ev.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-3 text-secondary" />
                      {ev.time}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-3 text-secondary" />
                      {ev.location}
                    </div>
                  </div>
                </div>
                <a
                  href={ev.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-gray-200 text-secondary hover:bg-secondary hover:text-white transition-colors bg-gray-50 font-semibold flex justify-center items-center gap-2 shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Location
                </a>
              </div>
            </motion.div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500 text-lg">
              No events found in this category.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
