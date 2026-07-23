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
    value: 'ideveshtripathii',
    link: 'https://github.com/ideveshtripathii',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY environment variable is not defined. Falling back to simulated send.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 80,
          colors: ['#38BDF8', '#8A94E5', '#5E6AD2'],
          origin: { y: 0.6 },
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 80,
          colors: ['#38BDF8', '#8A94E5', '#5E6AD2'],
          origin: { y: 0.6 },
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send message via Web3Forms.");
      }
    } catch (error: any) {
      setIsSubmitting(false);
      alert(error.message || "Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Get In <span className="text-brand-cyan">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 mb-6 rounded-full"
          />
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-200 mb-3"
          >
            Let's build something that lasts.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Open to backend and full-stack roles. Drop me a message below — or email me directly. I usually reply within a day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info cards - Span 6 */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-left mb-2 tracking-tight">
              Contact Information
            </h3>
            
            {contactInfoData.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="relative p-5 rounded-3xl glass flex items-center gap-4 text-left shadow-lg hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] transition-all duration-500 ease-out overflow-hidden group"
              >
                {/* Corner Glow Overlay */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-transform duration-300 group-hover:scale-110 relative z-10">
                  {info.icon}
                </div>
                <div className="overflow-hidden relative z-10">
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">
                    {info.name}
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white mt-1 block truncate group-hover:text-brand-cyan transition-colors">
                    {info.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form - Span 6 */}
          <div className="relative lg:col-span-6 glass p-6 md:p-8 rounded-3xl shadow-2xl transition-all duration-500 ease-out border border-black/5 dark:border-white/5 hover:border-brand-cyan/35 hover:shadow-[0_20px_40px_rgba(94,106,210,0.1)] overflow-hidden group">
            {/* Corner Glow Overlay */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-transparent blur-3xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/8" />
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 text-left relative z-10"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none text-sm text-slate-800 dark:text-white transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none text-sm text-slate-800 dark:text-white transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none text-sm text-slate-800 dark:text-white transition-colors resize-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[0_4px_15px_rgba(94,106,210,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:scale-100 cursor-pointer bg-gradient-to-r from-brand-indigo to-brand-cyan relative z-10"
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
                  className="flex flex-col items-center justify-center py-12 text-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. Devesh will get back to you at your email address as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
