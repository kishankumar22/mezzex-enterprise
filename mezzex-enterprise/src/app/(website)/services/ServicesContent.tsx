'use client';

import { useState, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Monitor, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Check, 
  ArrowRight, 
  Trophy, 
  Award, 
  Users, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Globe,
  Settings,
  Sparkles,
  Play,
  HelpCircle
} from 'lucide-react';
import { PartnerSection } from '@/components/home/PartnerSection';
import { submitContactForm } from '@/services/contact/submitContact';

export default function ServicesContent() {
  const [isPending, startTransition] = useTransition();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [requirements, setRequirements] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  
  // CAPTCHA Math Puzzle State
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [expectedSum, setExpectedSum] = useState(0);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setExpectedSum(n1 + n2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Captcha validation
    if (parseInt(captchaAnswer) !== expectedSum) {
      setFormError(`Incorrect CAPTCHA answer. Please solve ${num1} + ${num2} = ?`);
      generateCaptcha();
      setCaptchaAnswer('');
      return;
    }

    startTransition(async () => {
      const result = await submitContactForm({
        email,
        phone,
        service: 'Consultation - Services Page',
        subject: `Free Consultation Request from ${fullName}`,
        message: `Country: ${country || 'Not specified'}\nRequirements: ${requirements}`,
      });

      if (result.success) {
        setFormSuccess('Thank you! Your consultation request has been successfully submitted. Our team will get back to you shortly.');
        setFullName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setRequirements('');
        setCaptchaAnswer('');
        generateCaptcha();
      } else {
        setFormError(result.message || 'Something went wrong. Please try again later.');
      }
    });
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#4BEAFF] selection:text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION (COSMIC BANNER) */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950 py-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover opacity-35 scale-105"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://res.cloudinary.com/ddsenadu2/video/upload/v1752832242/home-video_ztbhpm.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to match mezzex colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3855]/70 via-slate-950/80 to-slate-950 z-10" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#4BEAFF] border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9C0A]" /> 🚀 Your UK-Based Partner
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Mezzex <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#4BEAFF] bg-clip-text text-transparent">
                Web, Software &amp; App Development
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              We engineer digital systems that accelerate business growth, combining strategy, custom development, and industry-focused execution. Whether you&apos;re launching a platform, scaling e-commerce, or modernising your tech stack, Mezzex delivers end-to-end solutions that drive measurable ROI.
            </p>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleScrollTo('services')}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF9C0A] to-[#e88b00] hover:from-[#e88b00] hover:to-[#cc7a00] text-white font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                Explore Services 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold transition-all border border-white/20 hover:border-white/30 backdrop-blur-md flex items-center gap-2"
              >
                Request a Proposal ✨
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle page divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </section>

      {/* 2. TECH GALAXY (Full-Stack Digital Delivery) */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden" id="technologies">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f5a84]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4BEAFF]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Full-Stack Digital Delivery</h2>
            <div className="w-16 h-1 bg-[#4BEAFF] mx-auto rounded-full"></div>
            <p className="text-slate-300 text-lg">
              Mezzex delivers tailored web, mobile, and software solutions that simplify operations, cut manual effort, and support scalable growth. Our agile UK-led teams have built e-commerce platforms, replatformed legacy systems, and developed custom dashboards for logistics, finance, and healthcare.
            </p>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto mb-12">
            {[
              { label: '.NET', iconText: 'Nt', color: 'from-blue-600 to-indigo-600' },
              { label: '.NET MAUI', iconText: 'Mu', color: 'from-violet-600 to-purple-600' },
              { label: 'Python', iconText: 'Py', color: 'from-emerald-600 to-teal-600' },
              { label: 'WordPress', iconText: 'Wp', color: 'from-sky-600 to-blue-600' },
              { label: 'Next.js', iconText: 'Nj', color: 'from-neutral-700 to-neutral-900' },
              { label: 'Flutter', iconText: 'Fl', color: 'from-cyan-500 to-blue-500' },
              { label: 'React.js', iconText: 'RN', color: 'from-blue-500 to-cyan-500' },
              { label: 'Figma', iconText: 'Fg', color: 'from-orange-500 to-rose-500' },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/50 hover:border-slate-600/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md mb-3 group-hover:scale-110 transition-transform`}>
                  {tech.iconText}
                </div>
                <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleScrollTo('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 hover:border-white/30 transition-all font-semibold"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION WONDERLAND (Form & Contact details) */}
      <section className="bg-slate-50 py-20" id="contact">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left side details */}
            <div className="lg:col-span-5 bg-[#2f5a84] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Background abstract element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-3xl font-extrabold flex items-center gap-2 text-white">
                    ⚡ Mezzex
                  </h3>
                  <p className="text-slate-200 mt-2 text-sm">Strategic Technology Partnership</p>
                </div>

                {/* Quick actions */}
                <div className="flex flex-col gap-3">
                  <a 
                    href="tel:+441216616357"
                    className="flex items-center justify-center gap-2 bg-[#1a3855] hover:bg-[#12283e] text-white py-3 px-4 rounded-xl font-semibold transition-all border border-white/10 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 text-[#4BEAFF]" /> 📞 Book A Call
                  </a>
                  <a 
                    href="https://wa.me/441216616357" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" /> 💬 WhatsApp
                  </a>
                  <a 
                    href="mailto:info@mezzex.com"
                    className="flex items-center justify-center gap-2 bg-[#FF9C0A] hover:bg-[#e88b00] text-white py-3 px-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4" /> ✉️ Email Us
                  </a>
                </div>

                {/* Core Benefits */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-white/10 rounded-lg text-[#4BEAFF]">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Engineering-Led Quality</h4>
                      <p className="text-xs text-slate-200 mt-0.5">Built with CI/CD pipelines, test-driven workflows, and robust deployment strategies.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-white/10 rounded-lg text-[#4BEAFF]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Flexible Delivery Models</h4>
                      <p className="text-xs text-slate-200 mt-0.5">Fixed-scope sprint, retainer support, or dedicated team to match your growth phase.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-white/10 rounded-lg text-[#4BEAFF]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">UK Support, Global Execution</h4>
                      <p className="text-xs text-slate-200 mt-0.5">UK-based strategy, backed by offshore technical expertise.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom compliance badges */}
              <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-white/10 relative z-10">
                {['GDPR Compliant', 'UK Hosted', 'Agile Delivery'].map((badge, idx) => (
                  <div key={idx} className="bg-white/10 text-center py-2 px-1 rounded-lg text-[10px] font-bold tracking-wider uppercase text-slate-200">
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Book Free Consultation</h3>
              <p className="text-slate-500 text-sm mt-1 mb-6">Let&apos;s turn your idea into a working platform</p>

              {formSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-sm flex items-start gap-3 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{formSuccess}</span>
                </div>
              )}

              {formError && (
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-800 text-sm flex items-start gap-3 mb-6">
                  <HelpCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] bg-slate-50 transition-all text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] bg-slate-50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone No. (Optional)</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] bg-slate-50 transition-all text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] bg-slate-50 transition-all text-sm text-slate-700"
                    >
                      <option value="">Choose Country</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="IN">India</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="NL">Netherlands</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Requirements *</label>
                  <textarea 
                    required
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] bg-slate-50 transition-all text-sm resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm">
                  <span className="text-sm font-bold text-slate-700 bg-slate-200 px-3 py-1.5 rounded-lg shrink-0 select-none">
                    Security Check
                  </span>
                  <span className="text-sm font-extrabold text-slate-800 shrink-0">
                    {num1} + {num2} =
                  </span>
                  <input 
                    type="number" 
                    required
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder="Answer"
                    className="w-20 px-2 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#2f5a84] text-center text-sm font-bold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#FF9C0A] to-[#e88b00] hover:from-[#e88b00] hover:to-[#cc7a00] text-white font-extrabold rounded-full shadow-lg transition-all hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    'Get Free Consultation →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SPECTACLE (Stats Section) */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', caption: 'Projects Delivered' },
              { number: '50+', caption: 'Industry Verticals' },
              { number: '10+', caption: 'Years Experience' },
              { number: '99%', caption: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300"
              >
                <span className="block text-3xl md:text-4xl font-extrabold text-[#2f5a84]">{stat.number}</span>
                <span className="block text-xs md:text-sm font-bold text-slate-500 mt-2 uppercase tracking-wide">{stat.caption}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES WONDERLAND (Scroll list of services) */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky left sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-gradient-to-br from-[#2f5a84] to-[#4a90e2] text-white p-10 rounded-3xl shadow-xl space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#4BEAFF] border border-white/10 uppercase tracking-wide">
                Our Focus
              </span>
              
              <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
                Purpose-Built Solutions for Business Growth
              </h2>
              
              <p className="text-base text-slate-100 leading-relaxed">
                From discovery workshops to deployment and scale-up, we provide comprehensive technology solutions with agile delivery, transparent pricing, and industry-specific expertise across all verticals.
              </p>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gradient-to-r from-[#FF9C0A] to-[#e88b00] hover:from-[#e88b00] hover:to-[#cc7a00] text-white font-bold transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Talk to Our Experts <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scroll zone cards on the right */}
            <div className="lg:col-span-8 space-y-8">
              {[
                {
                  title: 'Website Designing & Development',
                  icon: <Monitor className="w-7 h-7" />,
                  desc: 'Purpose-built websites that convert and scale. We develop fast, responsive websites that combine visual appeal with measurable business impact.',
                  bullets: [
                    'Custom UI/UX with Figma wireframes and accessibility compliance',
                    'Responsive layouts for mobile and desktop optimisation',
                    'CMS flexibility: WordPress, headless, Laravel-based systems',
                    'UK-localised solutions with support for global operations',
                  ]
                },
                {
                  title: 'Software Development',
                  icon: <Code className="w-7 h-7" />,
                  desc: 'Secure, scalable software tailored to your business logic. From internal tools to customer-facing platforms, we deliver robust, modular software that grows with your business.',
                  bullets: [
                    'Full-cycle Laravel and Django software architecture',
                    'Python-led prototyping, automation, and integrations',
                    'Bespoke CRM development aligned with sales and service ops',
                    'API-first, cloud-ready backends for scale and reliability',
                    'GDPR-compliant, UK-hosted deployment and support',
                  ]
                },
                {
                  title: 'App Development',
                  icon: <Smartphone className="w-7 h-7" />,
                  desc: 'Cross-platform mobile apps for iOS, Android & hybrid. We create mobile experiences that work beautifully across devices with fast loading and intuitive interaction.',
                  bullets: [
                    'iPhone applications development using Swift and Flutter',
                    'React Native vs Native: Platform guidance based on your goals',
                    'Integration of features like Bluetooth, diagnostics, and location tracking',
                    'MVP delivery in 6–10 weeks using agile sprints',
                    'Cross-platform deployment with post-launch optimisation',
                  ]
                },
                {
                  title: 'E-commerce Services',
                  icon: <ShoppingCart className="w-7 h-7" />,
                  desc: 'Infrastructure and automation for high-growth e-commerce. We support digital retailers with backend systems that streamline fulfilment and unify sales channels.',
                  bullets: [
                    'CRM system integration for customer lifecycle automation',
                    'Real-time inventory and multi-channel sync',
                    'Storefront UX aligned with CRO and SEO standards',
                    'Dashboards for performance, returns, fulfilment, and stock',
                    'Support for Shopify, WooCommerce, eBay, Etsy, and Amazon',
                  ]
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-l-[4px] border-[#2f5a84] overflow-hidden hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 transform"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#2f5a84]/10 rounded-2xl flex items-center justify-center text-[#2f5a84]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">{service.title}</h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-2.5 items-start p-3 bg-slate-50 rounded-xl">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs mt-0.5">
                          ✓
                        </span>
                        <span className="text-xs font-semibold text-slate-700 leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MEZZEX (Dark Slate background) */}
      <section className="bg-slate-950 text-white py-20 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16">
            Why Choose Mezzex?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategic Technology Partnership',
                desc: 'We collaborate beyond the brief—from business model validation to tech stack decisions. Our team functions as an extension of yours.'
              },
              {
                title: 'Engineering-Led Quality',
                desc: 'Built with CI/CD pipelines, test-driven workflows, and robust deployment strategies, ensuring scalability from day one.'
              },
              {
                title: 'Flexible Delivery Models',
                desc: 'Hire us for a fixed-scope sprint, retainer support, or as a dedicated team. We match your growth phase.'
              },
              {
                title: 'Transparent & Accountable',
                desc: 'You get milestone-based billing, live dashboards, and full communication access—no surprises.'
              },
              {
                title: 'Industry-Specific Expertise',
                desc: 'From supply chain logic to patient data flows, we design systems that speak your language.'
              },
              {
                title: 'UK Support, Global Execution',
                desc: 'UK-based strategy, backed by offshore technical expertise. Onshore delivery is available for regulated industries.'
              }
            ].map((choose, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <h4 className="text-lg font-bold text-[#FF9C0A]">{choose.title}</h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{choose.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS (Clean White step layout) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16 text-slate-900">
            Our Process: Built Around Your Outcomes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Discovery Workshop', desc: 'We align on business goals, user pain points, and must-haves in a structured planning session.' },
              { title: 'Proposal & Team Allocation', desc: 'You receive a fixed roadmap, timeline, and a dedicated team tailored to your stack and priorities.' },
              { title: 'Sprint-Based Development', desc: 'Agile delivery with sprint demos, backlog transparency, and regular reviews.' },
              { title: 'Scale & Optimise', desc: 'Once launched, we track ROI, identify growth opportunities, and support scale-up needs.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border-t-4 border-[#2f5a84] border-x border-b border-slate-100 shadow-sm hover:shadow-md rounded-2xl p-6 text-center relative pt-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#2f5a84] to-[#1a3855] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRY SECTORS (Gradient blue background) */}
      <section className="bg-gradient-to-br from-[#2f5a84] to-[#1a3855] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Industry Sectors We Empower
          </h2>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We deliver practical, high-impact tech solutions across multiple industries with deep domain expertise.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-10">
            {[
              { title: 'Finance & Fintech', icon: '💰' },
              { title: 'Education & Technology', icon: '🎓' },
              { title: 'Retail & Ecommerce', icon: '🛒' },
              { title: 'Logistics & Supply Chain', icon: '📦' },
              { title: 'Manufacturing & Industrial', icon: '🏭' },
            ].map((sector, idx) => (
              <div 
                key={idx}
                className="bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center"
              >
                <span className="text-4xl block mb-3">{sector.icon}</span>
                <span className="text-xs font-bold text-slate-100">{sector.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION (Orange background) */}
      <section className="bg-gradient-to-r from-[#FF9C0A] to-[#e88b00] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Build What&apos;s Next?
          </h2>
          
          <p className="text-slate-100 text-base md:text-lg">
            Let&apos;s turn your idea into a working platform—designed, developed, and delivered by Mezzex.
          </p>
          
          <button
            onClick={() => handleScrollTo('contact')}
            className="inline-block px-8 py-3.5 bg-white text-[#FF9C0A] font-extrabold rounded-full transition-all hover:bg-slate-50 shadow-xl hover:shadow-white/10 uppercase tracking-wider text-sm hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </button>
        </div>
      </section>

      {/* 10. PARTNERS SECTION */}
      <div className="py-12 bg-white border-t border-slate-100">
       
        <PartnerSection />
      </div>

    </div>
  );
}
