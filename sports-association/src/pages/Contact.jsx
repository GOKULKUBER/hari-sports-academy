import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: The user needs to replace these placeholders with their actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Template for sending email to gokul060704@gmail.com and auto-replying
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setIsLoading(false);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again later.');
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full bg-gray-50 bg-pattern min-h-screen">

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0000FE]/70 to-red-500/70 text-white pt-20 pb-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white max-w-2xl mx-auto"
        >
          We'd love to hear from you. Reach out with any questions, partnership inquiries, or feedback.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6 mt-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 mt-24 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-start gap-6 group hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2">Office Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nangavalli to Mettur Main Road,
                  Eshwaran Kovil Back Side,
                  NANGAVALLI - 636 454
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-start gap-6 group hover:border-red-200 transition-colors"
            >
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                <Phone className="w-7 h-7 text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2">Contact Numbers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Main: +91 93428 20133<br />

                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-start gap-6 group hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                <Mail className="w-7 h-7 text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2">Email Address</h3>
                <p className="text-gray-600 leading-relaxed text-small">
                  harisportsacademy@gmail.com<br />

                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 md:mt-24 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100"
          >
            <h2 className="text-3xl font-heading font-extrabold mb-8">Send a Message</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We have sent an email confirmation to you!</p>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input name="user_name" required type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50/50" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input name="user_email" required type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50/50" placeholder="jane@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input name="subject" required type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50/50" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea name="message" required rows="5" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50/50 resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button disabled={isLoading} type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                  {isLoading ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-10">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative border border-gray-100 group">
          <iframe
            title="Academy Location Map"
            src="https://maps.google.com/maps?q=Nangavalli+to+Mettur+Main+Road,+Eshwaran+Kovil+Back+Side,+NANGAVALLI+-+636+454&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          ></iframe>

          {/* Floating Label */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20 pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 text-lg">Hari Sports Academy</h3>
                <p className="text-sm text-gray-600 font-medium tracking-wide">Nangavalli - 636 454</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
