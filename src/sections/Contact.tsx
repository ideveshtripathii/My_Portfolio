import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

interface ContactInfo {
  name: string;
  value: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const contactInfoData: ContactInfo[] = [
  {
    name: 'Email Address',
    value: 'deveshbiksi@gmail.com',
    link: 'mailto:deveshbiksi@gmail.com',
    icon: <Mail size={20} />,
    color: 'cyan',
  },
  {
    name: 'Phone Connection',
    value: '+91 8112944825',
    link: 'tel:+918112944825',
    icon: <Phone size={20} />,
    color: 'indigo',
  },
  {
    name: 'LinkedIn Profile',
    value: 'idevesh-tripathi',
    link: 'https://linkedin.com/in/idevesh-tripathi',
    icon: <LinkedinIcon size={20} />,
    color: 'purple',
  },
  {
    name: 'GitHub Repository',
    value: 'idevesh-tripathi',
    link: 'https://github.com/idevesh-tripathi',
    icon: <GithubIcon size={20} />,
    color: 'indigo',
  },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let valid = true;
    const tempErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      tempErrors.name = 'Please provide your name';
      valid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide your email';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a message';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters long';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Celebrate successful submission with confetti
      confetti({
        particleCount: 150,
        spread: 80,
        colors: ['#06B6D4', '#8B5CF6', '#6366F1'],
        origin: { y: 0.6 },
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Dismiss success screen after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-gray-900"
          >
            Get In <span className="text-brand-cyan">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info cards - Span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-800 text-left mb-2 tracking-tight">
              Contact Information
            </h3>
            
            {contactInfoData.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-5 rounded-2xl glass border border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/10 dark:hover:border-white/10 light:hover:border-black/10 flex items-center gap-4 text-left shadow-lg transition-transform hover:scale-[1.02] group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                  info.color === 'cyan'
                    ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan'
                    : info.color === 'purple'
                    ? 'bg-brand-purple/10 border-brand-purple/20 text-brand-purple'
                    : 'bg-brand-indigo/10 border-brand-indigo/20 text-brand-indigo'
                }`}>
                  {info.icon}
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">
                    {info.name}
                  </span>
                  <span className="text-sm font-semibold text-white dark:text-white light:text-gray-800 mt-1 block truncate group-hover:text-brand-cyan transition-colors">
                    {info.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form - Span 7 */}
          <div className="lg:col-span-7 glass border border-white/5 dark:border-white/5 light:border-black/5 p-8 rounded-3xl shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 text-left"
                >
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-800 tracking-tight">
                    Send a Message
                  </h3>

                  {/* Name field */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Devesh Tripathi"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-brand-cyan focus:outline-none text-sm text-white dark:text-white light:text-gray-800 transition-colors"
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="deveshbiksi@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-brand-cyan focus:outline-none text-sm text-white dark:text-white light:text-gray-800 transition-colors"
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</span>}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                      Message Body
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Devesh, I would love to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-brand-cyan focus:outline-none text-sm text-white dark:text-white light:text-gray-800 transition-colors resize-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Dispatching...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. Devesh will get back to you at your email address as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-gray-800 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
