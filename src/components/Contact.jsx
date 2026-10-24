import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personalData';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Isolated integration logic:
    // To connect to a live backend service (e.g., Web3Forms, Formspree, or custom API),
    // replace this timeout block with your fetch POST request.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }

      // Also open mailto trigger for instant email draft option
      const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Hi Vrushabh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink, '_blank');

    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>07. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Build Something.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Open for Software Engineer, Full Stack Developer, and Backend Engineering roles. Feel free to reach out directly via email or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Email Card */}
            <a
              href={`mailto:${personalData.email}`}
              className="p-6 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex items-start gap-4 group shadow-lg"
            >
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Direct Email</div>
                <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {personalData.email}
                </div>
                <div className="text-xs text-slate-400 mt-1">Click to compose email</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalData.phone}`}
              className="p-6 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex items-start gap-4 group shadow-lg"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-400/30 text-indigo-400 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Phone Contact</div>
                <div className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {personalData.phone}
                </div>
                <div className="text-xs text-slate-400 mt-1">Available for calls & WhatsApp</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-bgCard border border-slate-800 flex items-start gap-4 shadow-lg">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Location</div>
                <div className="text-base font-bold text-white">
                  {personalData.location}
                </div>
                <div className="text-xs text-slate-400 mt-1">PICT Pune • Open to Relocation</div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-xs font-mono uppercase text-slate-400 mb-4">Professional Profiles:</div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="md"
                  icon={Github}
                  href={personalData.github}
                  target="_blank"
                  className="flex-1"
                >
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  icon={Linkedin}
                  href={personalData.linkedin}
                  target="_blank"
                  className="flex-1"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

          </motion.div>

          {/* Right Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-bgCard border border-slate-800 shadow-2xl relative overflow-hidden">
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    Message Prepared & Triggered!
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you! Your message client has been initialized with the parameters. I will respond to <strong className="text-white">{formData.email}</strong> within 24 hours.
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Software Engineering Opportunity', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-sky-400'
                      } text-white text-sm outline-none transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Your Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-sky-400'
                      } text-white text-sm outline-none transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-400 text-white text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vrushabh, we're interested in discussing a Software Engineer opportunity at..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-sky-400'
                      } text-white text-sm outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    icon={Send}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Dispatching Message...' : 'Send Message'}
                  </Button>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                    Form triggers direct email dispatch to vrushabhdarekar45@gmail.com
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
