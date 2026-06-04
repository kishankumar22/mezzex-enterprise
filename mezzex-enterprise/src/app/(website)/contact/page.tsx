// src/app/(website)/contact/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { submitContactForm } from '@/services/contact/submitContact';
import TypewriterHeading from '@/components/common/TypewriterHeading';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    captchaAnswer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // CAPTCHA state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);

  // Generate random CAPTCHA numbers
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaValue(n1 + n2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    
    // CAPTCHA validation
    const userAnswer = parseInt(formData.captchaAnswer);
    if (isNaN(userAnswer) || userAnswer !== captchaValue) {
      newErrors.captcha = `Incorrect answer. Please solve ?`;
      generateCaptcha(); // Refresh CAPTCHA on wrong answer
    }
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    const result = await submitContactForm(formData);
    setSubmitStatus(result);
    setIsSubmitting(false);
    
    if (result.success) {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', captchaAnswer: '' });
      setErrors({});
      generateCaptcha(); // New CAPTCHA after successful submit
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

      {/* Hero Section with Typewriter */}
      <section className="py-4   md:py-8 text-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <TypewriterHeading
            words={['Connect with Us', 'With Mezzex', 'Get in Touch']}
            className="mb-4 min-h-[60px] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3855]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
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
             <h5 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h5>
              <p className="text-gray-600 mb-4">Let’s discuss your project and find out what we can do to provide value.</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#2f5a84] focus:border-transparent outline-none transition-all`}
                      placeholder="+44 123 456 7890"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
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
                    rows={2}
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

          {/* Office & Contact Info - 3 Column Grid with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* UK Office Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#2f5a84] transition-colors">
                <MapPin className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">UK Office</h5>
              <p className="text-gray-600 leading-relaxed">
                Spacebox Business Park Unit E, 38 Plume Street, Birmingham B6 7RT, United Kingdom
              </p>
            </motion.div>

            {/* India Office Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#2f5a84] transition-colors">
                <MapPin className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">India Office</h5>
              <p className="text-gray-600 leading-relaxed">
                A 624 Logix Technova, Sector 132, Noida, Uttar Pradesh 201301, India
              </p>
            </motion.div>

            {/* Work Hours Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#2f5a84] transition-colors">
                <Clock className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">Working Hours</h5>
              <p className="text-gray-600 leading-relaxed">
                Monday to Friday<br />
                8:00 AM - 5:00 PM (GMT)<br />
                Saturday & Sunday: Closed
              </p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#2f5a84] transition-colors">
                <Phone className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">Phone Number</h5>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <a href="tel:+441216616357" className="text-[#2f5a84] hover:text-[#1a3855] font-medium text-lg transition-colors">
                  +44 121-6616357
                </a>
              </div>
              <p className="text-gray-500 text-sm">Available during working hours</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#2f5a84] transition-colors">
                <Mail className="w-7 h-7 text-[#2f5a84] group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">Email Address</h5>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <a href="mailto:info@mezzex.com" className="text-[#2f5a84] hover:text-[#1a3855] font-medium text-lg transition-colors break-all">
                  info@mezzex.com
                </a>
              </div>
              <p className="text-gray-500 text-sm">We respond within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}