// src/app/(website)/contact/page.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import BreadcrumbSetter from '@/components/common/BreadcrumbSetter';
import { submitContactForm } from '@/services/contact/submitContact';
import TypewriterHeading from '@/components/common/TypewriterHeading';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PartnerSection } from '@/components/home/PartnerSection';

// Services for dropdown
const services = [
  "Website Designing & Development",
  "App Development",
  "Software Development",
  "Ecommerce Service",
  "Digital Marketing",
  "Warehouse Management",
  "Other",
];

// Country type definition
interface Country {
  name: string;
  flag: string;
  dialCode: string;
  code: string; // ISO code for reference
}


export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    service: '',
    subject: '',
    message: '',
    captchaAnswer: ''
  });
  
  // Phone states
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // CAPTCHA states
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setCaptchaValue(newNum1 + newNum2);
  };

  // Fetch countries on mount
  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags');
        const data = await res.json();
        const parsed: Country[] = data
          .map((c: any) => {
            const root = c.idd?.root ?? '';
            const suffix = c.idd?.suffixes?.[0] ?? '';
            const dial = root && suffix ? `${root}${suffix}` : '';
            if (!dial) return null;
          return {
            name: c.name?.common ?? '',
            flag: c.flags?.png ?? c.flags?.svg ?? '',
            dialCode: dial,
            code: c.cca2 ?? '',
          };
          })
          .filter((c: Country | null) => c !== null) as Country[];
        
        parsed.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(parsed);
        setFiltered(parsed);
        
        const uk = parsed.find(c => c.name === 'United Kingdom');
        setSelectedCountry(uk ?? parsed[0] ?? null);
      } catch (e) {
        console.error('Failed to load countries', e);
      }
    }
    fetchCountries();
    generateCaptcha();
  }, []);

  // Search filter effect
  useEffect(() => {
    const term = search.trim().toLowerCase();
    if (!term) {
      setFiltered(countries);
    } else {
      setFiltered(
        countries.filter(
          c =>
            c.name.toLowerCase().includes(term) ||
            c.dialCode.includes(term)
        )
      );
    }
  }, [search, countries]);

  // Click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (c: Country) => {
    setSelectedCountry(c);
    setDropdownOpen(false);
    setSearch('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    
    // Validation
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    
    if (!phoneNumber.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.service.trim()) newErrors.service = 'Service is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    
    // CAPTCHA validation
    const userAnswer = parseInt(formData.captchaAnswer);
    if (isNaN(userAnswer) || userAnswer !== captchaValue) {
      newErrors.captcha = `Incorrect answer. Please solve ${num1} + ${num2} = ?`;
      generateCaptcha();
    }
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    const fullPhoneNumber = selectedCountry?.dialCode ? `${selectedCountry.dialCode} ${phoneNumber}` : phoneNumber;
    const payload = { ...formData, phone: fullPhoneNumber };
    const result = await submitContactForm(payload);
    setSubmitStatus(result);
    setIsSubmitting(false);

    if (result.success) {
      setFormData({ email: '', service: '', subject: '', message: '', captchaAnswer: '' });
      setPhoneNumber('');
      setSelectedCountry(countries.find(c => c.name === 'United Kingdom') ?? null);
      generateCaptcha();
      
      // Auto hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Mezzex</title>
        <meta name="description" content="Get in touch with Mezzex for web development, app development, and IT solutions. Contact our UK and India offices." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mezzex.com/#localbusiness",
              "name": "Mezzex",
              "url": "https://mezzex.com/",
              "image": "https://mezzex.com/assets/img/MZ%20Mezzex%20Stroc.png",
              "priceRange": "££",
              "telephone": "+44 1216616357",
              "email": "info@mezzex.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "UK Office",
                  "streetAddress": "Spacebox Business Park Unit E 38, Plume Street",
                  "addressLocality": "Birmingham",
                  "postalCode": "B6 7RT",
                  "addressCountry": "GB"
                },
                {
                  "@type": "PostalAddress",
                  "name": "India Office",
                  "streetAddress": "A 624 Logix Technova, Sector 132",
                  "addressLocality": "Noida",
                  "postalCode": "201301",
                  "addressCountry": "IN"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <BreadcrumbSetter
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', active: true }
        ]}
        title="Connect with Us"
      />

      {/* Intro Description */}
      <section className="py-8 text-center bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Feel free to write to us about any query, and we will get in touch with you promptly. 
            Alternatively, contact us directly using the details below.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Grid: Image left, Form right */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 mb-4 items-start"
          >
            {/* Left Side - Illustration */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center lg:sticky lg:top-24">
              <h5 className="text-2xl font-bold text-blue-600 mb-2">Tell Us About Your Project</h5>
              <p className="text-gray-600 mb-4">Let&apos;s discuss your project and find out what we can do to provide value.</p>
              <div className="relative w-128 h-128 md:w-128 md:h-128">
                <Image
                  src="https://mezzex.com/images/form-gr-contact.svg"
                  alt="Contact illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#2f5a84] rounded-full"></span>
                Send Us A Message
              </h3>
              
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${
                    submitStatus.success
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.success ? <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}
              
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="flex">
                      {/* Country selector - Only flag and dial code */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-l-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2f5a84]"
                        >
                          {selectedCountry ? (
                            <>
                              <img
  src={selectedCountry.flag}
  alt={selectedCountry.name}
  className="w-6 h-4 object-cover rounded-sm"
/>
                              <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-500">Select</span>
                          )}
                          <svg
                            className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute z-10 mt-1 w-72 max-h-64 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
                            <div className="p-2 border-b border-gray-100 sticky top-0 bg-white">
                              <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search country..."
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2f5a84]"
                              />
                            </div>
                            <ul className="text-sm">
                              {filtered.map(c => (
                                <li
                                  key={c.name}
                                  onClick={() => handleCountrySelect(c)}
                                  className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                 <img
  src={c.flag}
  alt={c.name}
  className="w-6 h-4 object-cover rounded-sm"
/>
                                  <span className="font-medium text-gray-900">{c.name}</span>
                                  <span className="ml-auto text-gray-500 text-xs">{c.dialCode}</span>
                                </li>
                              ))}
                              {filtered.length === 0 && (
                                <li className="px-3 py-2 text-gray-400 text-center">No countries found</li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      {/* Phone number input */}
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className={`flex-1 px-4 py-2 w-32 border-t border-b border-r rounded-r-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                        placeholder="123 456 7890"
                        maxLength={10}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Tell us about your project requirements..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* CAPTCHA Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Security Check: {num1} + {num2} = ?
                  </label>
                  <input
                    name="captchaAnswer"
                    value={formData.captchaAnswer}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.captcha ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                    placeholder="Enter your answer"
                  />
                  {errors.captcha && <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#2f5a84] to-[#1a3855] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed gap-2"
                >
                  {isSubmitting ? (
                    <>Sending... <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Office & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {/* UK Office */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2f5a84] transition-colors">
                  <MapPin className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-gray-900">UK Office</h5>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Spacebox Business Park Unit E, 38 Plume Street,
                Birmingham B6 7RT, United Kingdom
              </p>
            </motion.div>

            {/* India Office */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2f5a84] transition-colors">
                  <MapPin className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-gray-900">India Office</h5>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A 624 Logix Technova, Sector 132, Noida,
                Uttar Pradesh 201301, India
              </p>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2f5a84] transition-colors">
                  <Clock className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-gray-900">Working Hours</h5>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Monday to Friday
                <br />
                8:00 AM - 5:00 PM (GMT)
                <br />
                Saturday &amp; Sunday: Closed
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2f5a84] transition-colors">
                  <Phone className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-gray-900">Phone Number</h5>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <a
                  href="tel:+441216616357"
                  className="text-[#2f5a84] hover:text-[#1a3855] font-medium text-lg transition-colors"
                >
                  +44 121-6616357
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Available during working hours
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2f5a84] transition-colors">
                  <Mail className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
                </div>
                <h5 className="text-xl font-bold text-gray-900">Email Address</h5>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <a
                  href="mailto:info@mezzex.com"
                  className="text-[#2f5a84] hover:text-[#1a3855] font-medium text-lg transition-colors break-all"
                >
                  info@mezzex.com
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                We respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className='py-3'>
          <PartnerSection />   
        </div>
      </section>
    </>
  );
}