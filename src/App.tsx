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
  TrendingUp,
  Cpu,
  ShieldCheck,
  MousePointer2
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
    { name: 'Expertise', href: '#expertise' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Impact', href: '#impact' },
    { name: 'Transmit', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-bg/80 backdrop-blur-2xl py-4 border-b border-line' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col leading-none group cursor-pointer"
        >
          <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none group-hover:text-brand transition-colors">Lorenn Vee</span>
          <span className="text-[9px] font-bold text-brand uppercase tracking-[0.4em] mt-2 brightness-125">GHL Solution Architect</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-3 bg-white text-bg rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Initiate Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white/60 p-2 glass rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg z-[-1] flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-brand transition-colors text-white"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-12 py-5 bg-brand text-white rounded-full text-sm font-black uppercase tracking-widest"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Active Protocol: Scaling High-Ticket Agencies</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12vw] lg:text-[9vw] font-black tracking-[-0.04em] leading-[0.88] uppercase text-white"
          >
            Elite <span className="text-white/20">Operations</span> <br />
            <span className="text-brand italic font-serif lowercase tracking-tight">High-Impact</span> Results.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-2xl text-white/50 max-w-2xl leading-relaxed font-medium"
          >
            I engineer GoHighLevel ecosystems that don't just "work"—they dominate. High-converting funnels, intelligent automation, and seamless CRM migrations for visionary agencies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <a href="#contact" className="px-10 py-5 bg-brand text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
              Secure Availability <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-4 px-8 py-5 glass rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Portfolio Archive</span>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-4 hidden lg:block relative"
        >
          <div className="portrait-glow group relative border border-white/5 overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-1.5 z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
              <span className="text-[6px] font-black tracking-widest text-white/30 uppercase ml-2 font-mono">Workstation.exe</span>
            </div>

            <img 
              src="https://raw.githubusercontent.com/lorennmassive-byte/lorenn-vee-portfolio/main/portrait%20(1).png"
              alt="Lorenn Vee" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Elite Technical Overlay */}
            <div className="absolute inset-0 border border-brand/20 rounded-[4rem] pointer-events-none overflow-hidden">
               <motion.div 
                 animate={{ y: ['0%', '100%', '0%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                 className="w-full h-px bg-brand/50 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10"
               />
               
               {/* Metadata Scanning Tags */}
               <div className="absolute top-12 left-12 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                  <div className="px-2 py-1 bg-brand/20 border border-brand/40 rounded text-[6px] font-black uppercase text-brand">V_IDENTITY_VERIFIED</div>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[6px] font-black uppercase text-white/40">S_LOC: REMOTE_OPS</div>
               </div>

               <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-brand/40 m-8 rounded-tl-2xl" />
               <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brand/40 m-8 rounded-tr-2xl" />
               <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-brand/40 m-8 rounded-bl-2xl" />
               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-brand/40 m-8 rounded-br-2xl" />
            </div>

            {/* Status Overlay */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-5 transition-opacity">
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/5 rotate-90 whitespace-nowrap">SYSTEM_ACTIVE</span>
            </div>

            {/* Overlay Info Card - Repositioned to be less obstructive */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 glass p-5 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 backdrop-blur-xl border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand text-left">Access status</span>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-accent text-left">Active</span>
                </div>
              </div>
              <p className="text-[10px] text-white/50 font-medium leading-tight italic text-left">
                "Scaling agencies through algorithmic precision & strategic architecture."
              </p>
            </div>
          </div>

          {/* Floaters */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand/20 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    { 
      title: 'Funnel Architecture', 
      desc: 'Psychology-driven design meets GHL technical constraints for conversion rates that defy averages.',
      icon: <Layout className="text-brand" />,
      tag: 'UI/UX CONVERSION'
    },
    { 
      title: 'Workflow Orchestration', 
      desc: 'High-level automation using Zapier, Make, and n8n to create recursive, error-free operations that scale indefinitely.',
      icon: <Cpu className="text-accent" />,
      tag: 'AUTOMATION ARCHITECTURE'
    },
    { 
      title: 'API & CRM Integration', 
      desc: 'Seamlessly bridging GHL with external ecosystems through secure API protocols and multi-platform data synchronization.',
      icon: <TrendingUp className="text-indigo-300" />,
      tag: 'INTEGRATED SYSTEMS'
    },
    { 
      title: 'Technical Custom Stack', 
      desc: 'Bespoke sub-account customization leveraging JavaScript, HTML, and CSS to push GHL ecosystems beyond native constraints.',
      icon: <ShieldCheck className="text-white" />,
      tag: 'CUSTOM DEVELOPMENT'
    },
  ];

  return (
    <section id="expertise" className="py-40 px-8 relative bg-surface">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-12 border border-white/[0.05] hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
          >
            <div className="mb-12 opacity-40 group-hover:opacity-100 transition-opacity">
              {skill.icon}
            </div>
            <span className="text-[9px] font-black tracking-[0.3em] text-white/30 uppercase block mb-4 group-hover:text-brand transition-colors">
              {skill.tag}
            </span>
            <h3 className="text-2xl font-bold mb-6 group-hover:translate-x-2 transition-transform text-white">{skill.title}</h3>
            <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
              {skill.desc}
            </p>
            
            {/* Grid Mask Background */}
            <div className="absolute top-0 right-0 p-8 text-white/[0.02] -z-10 group-hover:text-white/[0.05] transition-colors">
              <span className="text-8xl font-black">0{i+1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Metrics = () => {
  const data = [
    { label: 'Retention rate', val: '98%', color: 'text-accent' },
    { label: 'Processes deployed', val: '1.2k', color: 'text-brand' },
    { label: 'Daily uptime', val: '24/7', color: 'text-white' },
    { label: 'GHL Snapshots', val: '40+', color: 'text-indigo-400' },
  ];

  return (
    <section id="impact" className="py-32 px-8 border-y border-line">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between gap-16 lg:gap-0">
        {data.map((item, i) => (
          <div key={i} className="flex-1 min-w-[200px] space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">{item.label}</span>
            <p className={`text-6xl lg:text-7xl font-black tracking-tighter ${item.color}`}>{item.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Julian Reed',
      company: 'CEO, NEXUS ARCHITECTURE',
      text: 'Lorenn doesn\'t just set up templates. He builds ecosystems that anticipate our needs. Our churn dropped by 15% in the first quarter post-overhaul.',
    },
    {
      name: 'Sophia Chen',
      company: 'FOUNDER, BLOOM SYNC',
      text: 'Total workflow clarity. The administrative high-impact execution is unlike anything I\'ve encountered in the VA space. Precision-driven results only.',
    }
  ];

  return (
    <section className="py-40 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {reviews.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-10"
          >
            <div className="w-12 h-0.5 bg-brand/40" />
            <p className="text-3xl lg:text-4xl font-medium leading-[1.3] text-white/80 tracking-tight italic font-serif">
              "{item.text}"
            </p>
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-white">{item.name}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand/60 mt-2">{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactArea = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.message.length < 10) newErrors.message = 'Detail required (min 10 chars)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'Inquiry via Portfolio' })
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      setErrors({ submit: 'Failure. Check connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-40 px-8 relative overflow-hidden">
      {/* Decorative Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-brand/5 blur-[200px] -z-10 rounded-full" />

      <div className="max-w-[1440px] mx-auto text-center space-y-20">
        <div className="space-y-6">
          <span className="text-[10px] font-black tracking-[0.5em] text-brand uppercase">Open Communication Link</span>
          <h2 className="text-[8vw] font-black uppercase tracking-tighter leading-none italic text-white flex flex-col items-center">
             <span>Let's <span className="text-white/20">Dominate</span></span>
             <span>the Market.</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 glass p-12 lg:p-20 rounded-[3rem]">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">Protocol: Identity</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Name or Agency"
                className="w-full bg-white/[0.05] border border-white/5 rounded-2xl p-5 text-sm focus:border-brand focus:outline-none transition-all placeholder:text-white/10 text-white"
              />
              {errors.name && <span className="text-[9px] text-brand font-bold uppercase tracking-widest ml-2">{errors.name}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">Protocol: Transmission Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="email@example.com"
                className="w-full bg-white/[0.05] border border-white/5 rounded-2xl p-5 text-sm focus:border-brand focus:outline-none transition-all placeholder:text-white/10 text-white"
              />
              {errors.email && <span className="text-[9px] text-brand font-bold uppercase tracking-widest ml-2">{errors.email}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">Protocol: Strategic Detail</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Briefly describe the bottleneck..."
                className="w-full bg-white/[0.05] border border-white/5 rounded-2xl p-5 text-sm focus:border-brand focus:outline-none transition-all placeholder:text-white/10 resize-none text-white focus:bg-white/[0.08]"
              />
              {errors.message && <span className="text-[9px] text-brand font-bold uppercase tracking-widest ml-2">{errors.message}</span>}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-6 bg-white text-bg rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand hover:text-white transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-bg border-t-white rounded-full animate-spin" />
            ) : sent ? (
              'Transmission Received'
            ) : (
              <>Initiate Uplink <ArrowRight size={14} /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-line">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-white/80">
            <MousePointer2 size={16} className="text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Lorenn Vee</span>
          </div>
          <p className="text-xs text-white/20 max-w-xs leading-loose">
            High-Performance GHL Operations & Strategy. We build for long-term leverage and strategic precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          <div className="space-y-6">
            <span className="text-brand block">Archive</span>
            <a href="#" className="block hover:text-brand transition-colors">Lab</a>
            <a href="#" className="block hover:text-brand transition-colors">Case Studies</a>
          </div>
          <div className="space-y-6">
            <span className="text-brand block">Network</span>
            <a href="#" className="block hover:text-brand transition-colors">Twitter</a>
            <a href="#" className="block hover:text-brand transition-colors">LinkedIn</a>
          </div>
          <div className="space-y-6">
            <span className="text-brand block">Status</span>
            <span className="block text-accent">Active</span>
            <span className="block text-white/20">Q3 Open</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-20 pt-10 border-t border-white/[0.05] flex justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-white/10">
        <span>&copy; 2024 LORENN VEE SOLUTIONS. CC01-X.</span>
        <div className="flex gap-10">
          <span>San Francisco / Remote</span>
          <span>Strategic Precision</span>
        </div>
      </div>
    </footer>
  );
};

const Marquee = () => {
  const tools = ['Zapier', 'Make.com', 'n8n', 'GoHighLevel', 'JavaScript', 'HTML5', 'CSS3', 'API Design', 'CRM Logic', 'Automations', 'Workflow Architecture'];
  
  return (
    <div className="py-16 border-y border-line overflow-hidden bg-bg relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
      
      <motion.div 
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="flex gap-24 items-center whitespace-nowrap"
      >
        {[...tools, ...tools].map((tool, i) => (
          <span key={i} className="text-4xl lg:text-7xl font-black text-white/5 uppercase tracking-tighter hover:text-brand/30 transition-all duration-500 cursor-default">
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SuccessProtocol = () => {
  const steps = [
    { name: 'Audit', desc: 'Deep-dive into current CRM bottlenecks and automation leakage.' },
    { name: 'Architecture', desc: 'Designing the recursive logic stack and technical blueprints.' },
    { name: 'Deployment', desc: 'Seamless integration of GHL, Zapier, and API protocols.' },
    { name: 'Optimization', desc: 'Real-time performance tuning and scaling architecture.' },
  ];

  return (
    <section id="architecture" className="py-32 px-8 bg-surface/50 border-y border-line overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/3 sticky top-32 space-y-6">
            <span className="text-[10px] font-black tracking-[0.4em] text-brand uppercase">The Protocol</span>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              Systematic <br /><span className="text-white/20">Scaling.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Every agency has a ceiling. I build the technical ladders to help you break through them.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
            {steps.map((step, i) => (
              <div key={i} className="bg-bg p-12 space-y-8 group hover:bg-white/[0.02] transition-colors">
                <span className="text-8xl font-black text-white/[0.02] group-hover:text-brand/5 transition-colors">0{i+1}</span>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-brand transition-colors">{step.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    document.title = 'Lorenn Vee - GHL Expert';
  }, []);

  return (
    <div className="bg-bg text-white font-sans selection:bg-brand/30 selection:text-brand overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Expertise />
      <SuccessProtocol />
      <Metrics />
      <Testimonials />
      <ContactArea />
      <Footer />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 left-10 hidden md:flex flex-col items-center gap-4 group"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 vertical-rl transform rotate-180">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-4 bg-brand"
          />
        </div>
      </motion.div>
    </div>
  );
}
