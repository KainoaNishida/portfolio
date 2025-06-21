import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });
  const [copyStates, setCopyStates] = useState({
    email: false,
    linkedin: false,
    instagram: false,
    discord: false
  });
  const email = 'kainoanishida@gmail.com';

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // This is optional but recommended for better error tracking
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map form field names to state properties
    const stateKey = name === 'user_name' ? 'name' : 
                    name === 'user_email' ? 'email' : 'message';
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setFormStatus({
          success: true,
          error: false,
          message: 'Success! - I will get back to you asap :)'
        });
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setFormStatus({ success: false, error: false, message: '' }), 5000);
      }, (error) => {
        console.error('Error sending email:', error);
        setFormStatus({
          success: false,
          error: true,
          message: 'Please try again or contact me directly via email :)'
        });
        // Clear error message after 5 seconds
        setTimeout(() => setFormStatus({ success: false, error: false, message: '' }), 5000);
      })
      .finally(() => {
        setSending(false);
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopyStates(prev => ({ ...prev, email: true }));
    setTimeout(() => setCopyStates(prev => ({ ...prev, email: false })), 2000);
  };

  const socials = [
    {
      name: 'Email',
      value: email,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      action: {
        type: 'button',
        onClick: copyEmail,
        icon: copyStates.email ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      }
    },
    {
      name: 'LinkedIn',
      value: 'KainoaNishida',
      link: 'https://linkedin.com/in/kainoa-nishida',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      action: {
        type: 'button',
        onClick: () => {
          navigator.clipboard.writeText('KainoaNishida');
          setCopyStates(prev => ({ ...prev, linkedin: true }));
          setTimeout(() => setCopyStates(prev => ({ ...prev, linkedin: false })), 2000);
        },
        icon: copyStates.linkedin ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      }
    },
    {
      name: 'Instagram',
      value: '@kainoanishida',
      link: 'https://instagram.com/kainoanishida',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      action: {
        type: 'button',
        onClick: () => {
          navigator.clipboard.writeText('@kainoanishida');
          setCopyStates(prev => ({ ...prev, instagram: true }));
          setTimeout(() => setCopyStates(prev => ({ ...prev, instagram: false })), 2000);
        },
        icon: copyStates.instagram ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      }
    },
    {
      name: 'Discord',
      value: 'kainishida',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
      action: {
        type: 'button',
        onClick: () => {
          navigator.clipboard.writeText('kainishida');
          setCopyStates(prev => ({ ...prev, discord: true }));
          setTimeout(() => setCopyStates(prev => ({ ...prev, discord: false })), 2000);
        },
        icon: copyStates.discord ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      }
    }
    // {
    //   name: 'Valorant',
    //   value: 'kainoa#NA1',
    //   icon: (
    //     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 22c-4.75-1.19-8-4.46-8-8.24V9l8-4 8 4v4.76c0 3.78-3.25 7.05-8 8.24z"/>
    //       <path d="M12 6L6 9v3.76c0 2.84 1.94 5.28 4.5 6.24V12h3v7c2.56-.96 4.5-3.4 4.5-6.24V9l-6-3z"/>
    //     </svg>
    //   ),
    //   action: {
    //     type: 'button',
    //     onClick: () => {
    //       navigator.clipboard.writeText('kainoa#NA1');
    //       setCopied(true);
    //       setTimeout(() => setCopied(false), 2000);
    //     },
    //     icon: copied ? (
    //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    //       </svg>
    //     ) : (
    //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    //       </svg>
    //     )
    //   }
    // },
    // {
    //   name: 'Nintendo Switch',
    //   value: 'SW-1234-5678-9012',
    //   icon: (
    //     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M18.667 21H5.333C2.333 21 0 18.667 0 15.667V8.333C0 5.333 2.333 3 5.333 3h13.334C21.667 3 24 5.333 24 8.333v7.334C24 18.667 21.667 21 18.667 21zM5.333 5C3.467 5 2 6.467 2 8.333v7.334C2 17.533 3.467 19 5.333 19h13.334C20.533 19 22 17.533 22 15.667V8.333C22 6.467 20.533 5 18.667 5H5.333z"/>
    //     </svg>
    //   ),
    //   action: {
    //     type: 'button',
    //     onClick: () => {
    //       navigator.clipboard.writeText('SW-1234-5678-9012');
    //       setCopied(true);
    //       setTimeout(() => setCopied(false), 2000);
    //     },
    //     icon: copied ? (
    //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    //       </svg>
    //     ) : (
    //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    //       </svg>
    //     )
    //   }
    // }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
              Say Hello!
            </h2>
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                <p>{formStatus.message}</p>
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={sending}
                className="w-3/7 ml-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-70 flex items-center justify-center space-x-2"
              >
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                {!sending && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Socials</h3>
            
            <div className="space-y-0">
              {socials.map((social, index) => {
                const SocialComponent = social.link ? 'a' : 'div';
                const socialProps = social.link ? {
                  href: social.link,
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {};

                return (
                  <SocialComponent
                    key={index}
                    {...socialProps}
                    className="group flex items-center space-x-4 p-4 rounded-xl transition-colors hover:bg-white/50 dark:hover:bg-slate-700/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900 dark:text-white font-medium">{social.value}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{social.name}</p>
                    </div>
                    {social.action && (
                      <motion.button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          social.action.onClick();
                        }}
                        className="text-slate-400 hover:text-orange-500 focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Copy ${social.name}`}
                      >
                        {social.action.icon}
                      </motion.button>
                    )}
                  </SocialComponent>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
