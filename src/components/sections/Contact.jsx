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
  
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });

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


  return (
    <section id="contact" className="py-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            contact
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md"
        >
          {formStatus.message && (
            <div className={`mb-6 p-3 text-xs font-mono ${formStatus.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono"
                placeholder="your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-3 py-2 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none text-xs font-mono"
                placeholder="your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={sending}
              className="w-full px-4 py-2 bg-orange-500 text-white text-xs font-mono hover:bg-orange-600 transition-all focus:outline-none disabled:opacity-70"
            >
              {sending ? 'sending...' : 'send'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
