// src/app/(website)/free-seo-audit/FreeAuditContent.tsx
'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { PartnerSection } from '@/components/home/PartnerSection';
import { 
  FaSearch, FaTachometerAlt, FaLink, FaChartBar, 
  FaCheckDouble , FaCode, FaFileAlt, FaArrowRight, 
  FaShieldAlt, FaBolt, FaCheckCircle, FaClock, 
  FaChartLine, FaQuestionCircle, FaEnvelope, FaPhone,
  FaGlobe, FaComment, FaDownload, FaUsers, FaRegClock
} from 'react-icons/fa';
import { CounterSection, SEO_STATS_WITH_ICONS } from '@/components/home/CounterSection';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  requirements: string;
}

export default function FreeAuditContent() {
  const searchParams = useSearchParams();
  const success = searchParams?.get('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    requirements: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const benefitItems = [
    { icon: FaSearch, label: 'On-Page SEO Analysis', color: 'from-blue-600 to-blue-800' },
    { icon: FaTachometerAlt, label: 'Page Speed & Core Vitals', color: 'from-green-600 to-green-800' },
    { icon: FaLink, label: 'Backlink Profile Review', color: 'from-purple-600 to-purple-800' },
    { icon: FaChartBar, label: 'Competitor Gap Analysis', color: 'from-orange-600 to-orange-800' },
    { icon: FaCheckDouble , label: 'Priority Action Plan', color: 'from-red-600 to-red-800' },
    { icon: FaCode, label: 'Technical SEO Audit', color: 'from-indigo-600 to-indigo-800' },
  ];

  const steps = [
    { number: '01', title: 'We Receive Your Request', desc: 'Our team gets notified instantly. We\'ll review your website URL and requirements right away.', icon: FaEnvelope },
    { number: '02', title: 'We Audit Your Website', desc: 'Our SEO experts run a comprehensive analysis covering on-page, technical, backlinks and competitor gaps.', icon: FaSearch },
    { number: '03', title: 'You Get Your Report', desc: 'Within 24 hours you\'ll receive a detailed PDF report with a prioritised action plan — straight to your inbox.', icon: FaDownload },
  ];

  const stats = [
    { value: '500+', label: 'Websites Audited', icon: FaGlobe },
    { value: '24h', label: 'Average Turnaround', icon: FaClock },
    { value: '100%', label: 'Free — No Hidden Cost', icon: FaCheckCircle },
    { value: '14+', label: 'SEO Factors Covered', icon: FaChartLine },
  ];

  const faqs = [
    {
      q: 'Is the SEO audit really free?',
      a: 'Yes — completely free, no credit card required. We provide a full audit report as part of our commitment to helping businesses grow online.'
    },
    {
      q: 'How long does it take to receive my report?',
      a: 'Most reports are delivered within 24 hours. Complex or large websites may take up to 48 hours for a thorough analysis.'
    },
    {
      q: 'What\'s the difference between this and the SEO Checker Tool?',
      a: 'The SEO Checker Tool gives you an instant automated snapshot of 14 key factors. The Free Audit is a manual, expert-led deep dive that covers backlinks, competitor analysis, and a full priority action plan — far more detailed.'
    },
    {
      q: 'Will I be pressured to buy anything?',
      a: 'Never. We send you the report and leave the next step entirely up to you. If you\'d like our help implementing the recommendations, we\'re here — but there\'s zero obligation.'
    }
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.websiteUrl.trim()) newErrors.websiteUrl = 'Website URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/free-seo-audit/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = '/free-seo-audit?success=true';
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb */}
      <section className="relative bg-gradient-to-r from-[#1a3855] to-[#2f5a84] py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3 flex-wrap">
              <a href="/" className="hover:text-white transition-colors">
                <span className="inline-block mr-1">🏠</span> home
              </a>
              <span className="text-white/50">›</span>
              <span className="text-white font-medium">Free SEO Audit</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Free SEO Audit Report</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Panel - Benefits */}
            <div className="bg-[#f5f7ff] rounded-2xl p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2a6e] mb-4">
                Get Your Free SEO Audit Report
              </h2>
              <p className="text-gray-600 mb-6">
                Fill in your details and our SEO experts will analyse your website and send you a detailed, actionable report — completely free.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {benefitItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm flex-shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <h6 className="font-bold text-gray-800 text-sm">{item.label}</h6>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-2 border-[#1565c0] rounded-xl p-5 text-center bg-white">
                <p className="font-semibold text-[#0a2a6e] mb-3 flex items-center justify-center gap-1">
                  <FaBolt className="text-yellow-500" /> Want an instant automated check?
                </p>
                <a
                  href="/seo-tool"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a2a6e] text-white rounded-lg hover:opacity-90 transition"
                >
                  <FaSearch size={14} /> Try Free SEO Checker Tool
                </a>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              {success ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-xl md:text-2xl font-extrabold text-green-700 mb-3">
                    Request Submitted Successfully!
                  </h4>
                  <p className="text-gray-600 mb-5">
                    We have received your request and will be in touch shortly with your free SEO audit report.
                  </p>
                  <a
                    href="/seo-tool"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
                  >
                    <FaSearch size={14} /> Try SEO Checker Tool
                  </a>
                </div>
              ) : (
                <>
                  <h4 className="text-xl md:text-2xl font-extrabold text-[#0a2a6e] mb-6 flex items-center gap-2">
                    <FaFileAlt className="text-[#1565c0]" /> Tell Us About Your Website
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1 text-sm">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565c0] ${
                            errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1 text-sm">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565c0] ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1 text-sm">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565c0] ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+44 000 000 0000"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1 text-sm">
                          Website URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565c0] ${
                            errors.websiteUrl ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="https://yourwebsite.com"
                        />
                        {errors.websiteUrl && <p className="text-red-500 text-xs mt-1">{errors.websiteUrl}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block font-semibold text-gray-700 mb-1 text-sm">
                          Tell us about your requirements
                        </label>
                        <textarea
                          rows={4}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565c0]"
                          placeholder="What are your main SEO goals? Any specific areas to focus on?"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#1565c0] to-[#0a2a6e] text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Audit Request <FaArrowRight />
                          </>
                        )}
                      </button>
                      <p className="text-center text-gray-400 text-xs mt-4 flex items-center justify-center gap-1">
                        <FaShieldAlt size={10} /> Your information is safe. We never share your data with third parties.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 bg-[#f5f7ff]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2a6e] mb-3">What Happens After You Submit?</h2>
            <p className="text-gray-500">A simple 3-step process to get your free SEO report</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1565c0] to-[#0a2a6e] flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.number}
                </div>
                <step.icon className="text-[#1565c0] text-2xl mx-auto mb-3" />
                <h5 className="text-lg font-bold text-[#0a2a6e] mb-2">{step.title}</h5>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
<CounterSection 
  stats={SEO_STATS_WITH_ICONS}
  title="Why Businesses Choose Our SEO Services"
  subtitle="We deliver measurable results with transparency, expertise, and a commitment to your online growth."
  badge="TRUST & ACHIEVEMENTS"
/>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2a6e] mb-3 flex items-center justify-center gap-2">
              <FaQuestionCircle className="text-[#1565c0]" /> Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-5 font-semibold text-[#0a2a6e] hover:bg-gray-50 transition">
                    <span>{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-5 pt-0 text-gray-500 text-sm border-t border-gray-100">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <PartnerSection />
    </div>
  );
}