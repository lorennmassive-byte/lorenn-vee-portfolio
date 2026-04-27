import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Settings, 
  Layout, 
  Clock, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Menu, 
  X,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Experience', href: '#testimonials' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center">
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase leading-none">Lorenn Vee</span>
          <span className="text-[7px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1.5">GoHighLevel Expert</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-slate-100 p-8 space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-slate-900"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-8 min-h-[85vh] flex items-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-7 flex flex-col justify-center"
        >
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-6">
            Virtual Assistant & Automation Architect
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900 mb-8">
            Building your <br /> <span className="text-slate-400">GoHighLevel</span> <br /> power house.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed mb-12">
            I help agencies scale by engineering high-converting funnels, complex workflow automations, and seamless CRM migrations.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
            <div className="h-px w-16 bg-slate-200"></div>
            <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Available for Projects</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-indigo-100">
            <img 
              src="https://picsum.photos/seed/minimalist/800/1000" 
              alt="Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Abstract Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-indigo-50/50 -z-10 blur-3xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    { 
      title: 'Funnels', 
      desc: 'Landing page & UI design', 
      icon: <Layout size={24} />, 
      bg: 'bg-indigo-50', 
      text: 'text-indigo-600' 
    },
    { 
      title: 'Automation', 
      desc: 'Snapshots & Workflows', 
      icon: <Zap size={24} />, 
      bg: 'bg-emerald-50', 
      text: 'text-emerald-600' 
    },
    { 
      title: 'CRM', 
      desc: 'Data mapping & Cleanup', 
      icon: <Cpu size={24} />, 
      bg: 'bg-orange-50', 
      text: 'text-orange-600' 
    },
    { 
      title: 'Support', 
      desc: '24/7 Tech management', 
      icon: <Clock size={24} />, 
      bg: 'bg-purple-50', 
      text: 'text-purple-600' 
    },
  ];

  return (
    <section id="services" className="py-32 px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
          >
            <div className={`w-12 h-12 ${item.bg} ${item.text} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-24 px-8 bg-slate-100/50">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-16 md:gap-32">
        <div className="text-center">
          <p className="text-5xl font-bold text-slate-900 mb-2 tracking-tighter">99%</p>
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Retention</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-slate-400 mb-2 tracking-tighter">500+</p>
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Processes</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-slate-900 mb-2 tracking-tighter">45h</p>
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Time Saved</p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Julian Reed',
      company: 'CEO, Nexus Agency',
      text: 'The GHL setup saved us 20 hours a week. High-level technical architecture at its best.',
    },
    {
      name: 'Sophia Chen',
      company: 'Founder, Bloom Digital',
      text: 'Engineering high-converting funnels that actually convert. Fast, reliable, and visionary.',
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-8 bg-slate-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((item, i) => (
            <motion.div 
              key={i}
              className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="flex gap-1 text-indigo-200 mb-6 font-serif text-6xl leading-none">“</div>
              <p className="text-lg text-slate-600 italic leading-relaxed mb-8">{item.text}</p>
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-indigo-600 mt-1">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call to the actual endpoint constructed earlier
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Portfolio Inquiry'
        })
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        setErrors({ submit: 'Something went wrong. Please try again later.' });
      }
    } catch (err) {
      setErrors({ submit: 'Failed to connect. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 overflow-hidden relative group">
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let's build <br /> something <span className="text-indigo-400">great</span>.</h2>
            <p className="text-slate-400 text-lg max-w-sm">Ready to optimize your GHL sub-accounts? Reach out and I'll get back to you within 24 hours.</p>
            
            <div className="pt-8 space-y-4">
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">lorenn@example.com</span>
               </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.submit && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-bold uppercase tracking-widest text-center">
                  {errors.submit}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                  }}
                  placeholder="John Doe" 
                  className={`w-full bg-slate-800/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-700'} rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder:text-slate-600 transition-all`}
                />
                {errors.name && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  placeholder="john@example.com" 
                  className={`w-full bg-slate-800/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700'} rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder:text-slate-600 transition-all`}
                />
                {errors.email && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                  }}
                  placeholder="How can I help you scale?" 
                  rows={4}
                  className={`w-full bg-slate-800/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-700'} rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder:text-slate-600 transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-bold text-sm px-8 py-5 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : sent ? (
                  'Message Sent!'
                ) : (
                  <>Send Message <ArrowRight size={18} /></>
                )}
              </button>
              
              {sent && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-center text-emerald-400 text-xs font-bold uppercase tracking-widest"
                >
                  I'll be in touch shortly!
                </motion.p>
              )}
            </form>
          </div>

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-slate-200 bg-slate-50">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
        <div>&copy; 2024 Lorenn Vee &bull; GoHighLevel Expert</div>
        <div className="flex flex-wrap justify-center gap-12">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
            Scroll-Free Interaction
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            Based in San Francisco
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <ContactArea />
      <Footer />
    </div>
  );
}
