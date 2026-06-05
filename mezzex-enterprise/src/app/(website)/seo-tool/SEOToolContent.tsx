// src/app/(website)/seo-tool/SEOToolContent.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterHeading from '@/components/common/TypewriterHeading';
import { PartnerSection } from '@/components/home/PartnerSection';
import {
  FaTag, FaAlignLeft, FaHeading, FaFileWord, FaLock, FaLink,
  FaRobot, FaMobileAlt, FaImage, FaSitemap, FaShareAlt,
  FaTwitter, FaCode, FaGlobe, FaSearch, FaCheckCircle,
  FaExclamationTriangle, FaTimesCircle, FaGlobe as FaGlobeIcon,
  FaChartBar, FaLock as FaLockIcon, FaFileAlt, FaCog, FaExternalLinkAlt
} from 'react-icons/fa';

// Types
interface SeoAnalysisResult {
  url: string;
  hasError: boolean;
  errorMessage?: string;
  score: number;
  passedChecks: number;
  warningChecks: number;
  errorChecks: number;
  pageTitle: string | null;
  titleLength: number;
  metaDescription: string | null;
  metaDescriptionLength: number;
  h1Count: number;
  h2Count: number;
  h3Count: number;
  firstH1: string | null;
  wordCount: number;
  pageSizeKb: number;
  internalLinksCount: number;
  externalLinksCount: number;
  totalImages: number;
  imagesMissingAlt: number;
  isHttps: boolean;
  hasCanonical: boolean;
  canonicalUrl: string | null;
  hasRobotsNoIndex: boolean;
  hasViewport: boolean;
  langAttribute: string | null;
  hasFavicon: boolean;
  hasOgTitle: boolean;
  hasOgDescription: boolean;
  hasOgImage: boolean;
  hasTwitterCard: boolean;
  twitterCardType: string | null;
  hasSchema: boolean;
  schemaTypes: string[];
  loadTimeMs: number;
}

// Feature list for pre-analysis
const SEO_FEATURES = [
  { icon: FaTag, title: "Title Tag", desc: "Length, presence & keyword relevance", group: "On-Page" },
  { icon: FaAlignLeft, title: "Meta Description", desc: "Length check & click-worthiness", group: "On-Page" },
  { icon: FaHeading, title: "H1 / H2 / H3", desc: "Heading hierarchy across the page", group: "On-Page" },
  { icon: FaFileWord, title: "Word Count", desc: "Thin content detection (min 300 words)", group: "On-Page" },
  { icon: FaLock, title: "HTTPS / SSL", desc: "Security & confirmed ranking signal", group: "Technical" },
  { icon: FaLink, title: "Canonical URL", desc: "Duplicate content prevention", group: "Technical" },
  { icon: FaRobot, title: "Indexability", desc: "Whether Google can index the page", group: "Technical" },
  { icon: FaMobileAlt, title: "Viewport Meta", desc: "Mobile-friendliness check", group: "Technical" },
  { icon: FaImage, title: "Image Alt Text", desc: "Accessibility & image SEO compliance", group: "Images" },
  { icon: FaSitemap, title: "Internal Links", desc: "Crawlability & site architecture", group: "Links" },
  { icon: FaShareAlt, title: "Open Graph Tags", desc: "Facebook & LinkedIn sharing appearance", group: "Social" },
  { icon: FaTwitter, title: "Twitter / X Card", desc: "Twitter sharing card presence", group: "Social" },
  { icon: FaCode, title: "Schema Markup", desc: "JSON-LD & rich result eligibility", group: "Schema" },
  { icon: FaGlobe, title: "Language Attribute", desc: "Page language for search engines", group: "Technical" },
];

export default function SEOToolContent() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SeoAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  const [leadErrors, setLeadErrors] = useState({ name: '', email: '' });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [hasLead, setHasLead] = useState(false);

  // Check local storage for lead on mount
  useEffect(() => {
    const savedLead = localStorage.getItem('seo_tool_lead');
    if (savedLead) {
      setHasLead(true);
    }
  }, []);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    // Check if URL has protocol
    let targetUrl = url;
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    // If no lead saved, show modal
    if (!hasLead) {
      setShowLeadModal(true);
      return;
    }

    await performAnalysis(targetUrl);
  };

  const performAnalysis = async (targetUrl: string) => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/seo-tool/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Analysis failed');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze website');
      setResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const errors = { name: '', email: '' };
    if (!leadForm.name.trim()) errors.name = 'Name is required';
    if (!leadForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      errors.email = 'Valid email is required';
    }

    if (errors.name || errors.email) {
      setLeadErrors(errors);
      return;
    }

    setIsSubmittingLead(true);

    try {
      const response = await fetch('/api/seo-tool/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          websiteUrl: url,
        }),
      });

      if (response.ok) {
        localStorage.setItem('seo_tool_lead', leadForm.email);
        setHasLead(true);
        setShowLeadModal(false);

        // Proceed with analysis
        let targetUrl = url;
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
          targetUrl = 'https://' + targetUrl;
        }
        await performAnalysis(targetUrl);
      } else {
        throw new Error('Failed to save lead');
      }
    } catch (err) {
      setError('Failed to save your information. Please try again.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreRingColor = (score: number) => {
    if (score >= 70) return 'stroke-green-500';
    if (score >= 40) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb */}



      {/* URL Input Section */}
      <section className="bg-[#f5f7ff] py-8 border-b border-[#dde3f8]">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-500 mb-4 text-sm">
            <FaSearch className="inline mr-1" size={14} />
            Enter any website URL to instantly analyse 14 key SEO factors
          </p>
          <form onSubmit={handleAnalyze} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="flex-1 border-2 border-[#d0d9f0] rounded-xl px-5 py-3 text-sm focus:border-[#1565c0] outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-[#1565c0] to-[#0a2a6e] text-white rounded-xl px-6 py-3 font-bold hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analysing...
                  </>
                ) : (
                  <>
                    <FaSearch size={14} />
                    Analyse Now
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center mt-3">{error}</p>
            )}
          </form>
        </div>
      </section>

      {/* Results Section */}
      {result && !result.hasError && (
        <>
          {/* Score Hero */}
          <section className="bg-gradient-to-r from-[#0a2a6e] to-[#1565c0] text-white py-10">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Score Ring */}
                <div className="text-center">
                  <div className="relative w-36 h-36 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="72" cy="72" r="65" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="10" />
                      <circle
                        cx="72" cy="72" r="65"
                        fill="none"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className={getScoreRingColor(result.score)}
                        strokeDasharray="408"
                        strokeDashoffset={408 - (408 * result.score / 100)}
                        style={{ transition: 'stroke-dashoffset 1.2s ease' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold">{result.score}</span>
                      <span className="text-xs opacity-80">/100</span>
                    </div>
                  </div>
                  <p className="mt-2 font-semibold">
                    SEO Score — {result.score >= 70 ? 'Good' : result.score >= 40 ? 'Average' : 'Poor'}
                  </p>
                </div>

                {/* Summary Stats */}
                <div>
                  <p className="text-sm opacity-75 mb-2 break-all">
                    <FaGlobeIcon className="inline mr-1" size={12} />
                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-[#90caf9] hover:underline">
                      {result.url}
                    </a>
                  </p>
                  <div className="bg-white/10 rounded-md h-2 mb-4">
                    <div
                      className={`h-full rounded-md ${result.score >= 70 ? 'bg-green-500' : result.score >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500 text-green-300 text-sm font-semibold">
                      <FaCheckCircle /> {result.passedChecks} Passed
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500 text-yellow-300 text-sm font-semibold">
                      <FaExclamationTriangle /> {result.warningChecks} Warnings
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500 text-red-300 text-sm font-semibold">
                      <FaTimesCircle /> {result.errorChecks} Errors
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold">{result.wordCount.toLocaleString()}</div>
                    <div className="text-xs opacity-70">Words on Page</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold">{result.pageSizeKb} KB</div>
                    <div className="text-xs opacity-70">Page Size</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold">{result.internalLinksCount}</div>
                    <div className="text-xs opacity-70">Internal Links</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold">{Math.round(result.loadTimeMs)} ms</div>
                    <div className="text-xs opacity-70">Load Time</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Checks */}
          <section className="py-12 bg-[#f8faff]">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  {/* On-Page SEO Group */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#0a2a6e] border-l-4 border-[#1565c0] pl-3 mb-4">
                      <FaFileAlt className="inline mr-2" /> On-Page SEO
                    </h3>

                    {/* Title Tag */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.pageTitle && result.titleLength >= 10 && result.titleLength <= 60 ? 'bg-green-100' :
                            result.pageTitle ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                          {result.pageTitle && result.titleLength >= 10 && result.titleLength <= 60 ? '✅' :
                            result.pageTitle ? '⚠️' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Title Tag</div>
                          {result.pageTitle ? (
                            <>
                              <div className="text-sm text-gray-600 mt-1">"{result.pageTitle.length > 80 ? result.pageTitle.substring(0, 80) + '…' : result.pageTitle}"</div>
                              <p className="text-xs text-gray-400 mt-1">{result.titleLength} characters — ideal: 10–60 chars</p>
                            </>
                          ) : (
                            <p className="text-xs text-red-500 mt-1">No title tag found. This is critical for SEO.</p>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.pageTitle && result.titleLength >= 10 && result.titleLength <= 60 ? 'bg-green-100 text-green-700' :
                            result.pageTitle ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {result.pageTitle && result.titleLength >= 10 && result.titleLength <= 60 ? 'Good' :
                            result.pageTitle ? 'Length Issue' : 'Missing'}
                        </span>
                      </div>
                    </div>

                    {/* Meta Description */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.metaDescription && result.metaDescriptionLength >= 50 && result.metaDescriptionLength <= 160 ? 'bg-green-100' :
                            result.metaDescription ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                          {result.metaDescription && result.metaDescriptionLength >= 50 && result.metaDescriptionLength <= 160 ? '✅' :
                            result.metaDescription ? '⚠️' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Meta Description</div>
                          {result.metaDescription ? (
                            <>
                              <div className="text-sm text-gray-600 mt-1">"{result.metaDescription.length > 120 ? result.metaDescription.substring(0, 120) + '…' : result.metaDescription}"</div>
                              <p className="text-xs text-gray-400 mt-1">{result.metaDescriptionLength} characters — ideal: 50–160 chars</p>
                            </>
                          ) : (
                            <p className="text-xs text-red-500 mt-1">No meta description. Add one to improve click-through rates.</p>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.metaDescription && result.metaDescriptionLength >= 50 && result.metaDescriptionLength <= 160 ? 'bg-green-100 text-green-700' :
                            result.metaDescription ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {result.metaDescription && result.metaDescriptionLength >= 50 && result.metaDescriptionLength <= 160 ? 'Good' :
                            result.metaDescription ? 'Length Issue' : 'Missing'}
                        </span>
                      </div>
                    </div>

                    {/* Heading Structure */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.h1Count === 1 ? 'bg-green-100' : result.h1Count === 0 ? 'bg-red-100' : 'bg-yellow-100'
                          }`}>
                          {result.h1Count === 1 ? '✅' : result.h1Count === 0 ? '❌' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Heading Structure</div>
                          {result.firstH1 && (
                            <div className="text-sm text-gray-600 mt-1">H1: "{result.firstH1.length > 80 ? result.firstH1.substring(0, 80) + '…' : result.firstH1}"</div>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            H1: {result.h1Count} | H2: {result.h2Count} | H3: {result.h3Count} — every page needs exactly 1 H1
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.h1Count === 1 ? 'bg-green-100 text-green-700' : result.h1Count === 0 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                          {result.h1Count === 1 ? 'Good (1 H1)' : result.h1Count === 0 ? 'Missing' : `Multiple (${result.h1Count})`}
                        </span>
                      </div>
                    </div>

                    {/* Word Count */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.wordCount >= 300 ? 'bg-green-100' : result.wordCount >= 100 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                          {result.wordCount >= 300 ? '✅' : result.wordCount >= 100 ? '⚠️' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Word Count</div>
                          <div className="text-sm text-gray-600 mt-1">{result.wordCount.toLocaleString()} words on this page</div>
                          <p className="text-xs text-gray-400 mt-1">Minimum 300 words recommended for SEO. Longer content generally ranks better.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.wordCount >= 300 ? 'bg-green-100 text-green-700' : result.wordCount >= 100 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {result.wordCount >= 300 ? 'Good' : result.wordCount >= 100 ? 'Thin Content' : 'Too Short'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Images & Links Group */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#0a2a6e] border-l-4 border-[#1565c0] pl-3 mb-4">
                      <FaImage className="inline mr-2" /> Images &amp; Links
                    </h3>

                    {/* Image Alt Text */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.totalImages === 0 || result.imagesMissingAlt === 0 ? 'bg-green-100' :
                            result.imagesMissingAlt < result.totalImages ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                          {result.totalImages === 0 || result.imagesMissingAlt === 0 ? '✅' :
                            result.imagesMissingAlt < result.totalImages ? '⚠️' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Image Alt Text</div>
                          <div className="text-sm text-gray-600 mt-1">{result.totalImages} total images — {result.imagesMissingAlt} missing alt attribute(s)</div>
                          <p className="text-xs text-gray-400 mt-1">Alt text helps search engines understand images and improves accessibility.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.totalImages === 0 || result.imagesMissingAlt === 0 ? 'bg-green-100 text-green-700' :
                            result.imagesMissingAlt < result.totalImages ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {result.totalImages === 0 ? 'No Images' : result.imagesMissingAlt === 0 ? 'All Good' : `${result.imagesMissingAlt} Missing`}
                        </span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.internalLinksCount >= 1 ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.internalLinksCount >= 1 ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Internal &amp; External Links</div>
                          <div className="text-sm text-gray-600 mt-1">{result.internalLinksCount} internal links | {result.externalLinksCount} external links</div>
                          <p className="text-xs text-gray-400 mt-1">Internal links help search engines crawl your site. External links add credibility.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.internalLinksCount >= 1 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.internalLinksCount >= 1 ? 'Good' : 'No Links'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Technical SEO Group */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#0a2a6e] border-l-4 border-[#1565c0] pl-3 mb-4">
                      <FaCog className="inline mr-2" /> Technical SEO
                    </h3>

                    {/* HTTPS */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.isHttps ? 'bg-green-100' : 'bg-red-100'}`}>
                          {result.isHttps ? '✅' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">HTTPS / SSL Certificate</div>
                          <div className="text-sm text-gray-600 mt-1">{result.isHttps ? 'Site is served over secure HTTPS connection' : 'Site is using insecure HTTP'}</div>
                          <p className="text-xs text-gray-400 mt-1">HTTPS is a confirmed Google ranking factor and builds user trust.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.isHttps ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {result.isHttps ? 'Secure' : 'Not Secure'}
                        </span>
                      </div>
                    </div>

                    {/* Canonical URL */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.hasCanonical ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.hasCanonical ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Canonical URL</div>
                          {result.canonicalUrl && (
                            <div className="text-sm text-gray-600 mt-1 break-all">{result.canonicalUrl}</div>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            {result.hasCanonical ? 'Canonical tag present — prevents duplicate content issues.' : 'No canonical tag found. Add one to avoid duplicate content penalties.'}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.hasCanonical ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.hasCanonical ? 'Present' : 'Missing'}
                        </span>
                      </div>
                    </div>

                    {/* Indexability */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${!result.hasRobotsNoIndex ? 'bg-green-100' : 'bg-red-100'}`}>
                          {!result.hasRobotsNoIndex ? '✅' : '❌'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Indexability (Robots Meta)</div>
                          <div className="text-sm text-gray-600 mt-1">{result.hasRobotsNoIndex ? 'noindex directive found — Google will not index this page' : 'No noindex directive — page is indexable'}</div>
                          <p className="text-xs text-gray-400 mt-1">Ensure important pages are not accidentally blocked from indexing.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${!result.hasRobotsNoIndex ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {!result.hasRobotsNoIndex ? 'Indexable' : 'Blocked'}
                        </span>
                      </div>
                    </div>

                    {/* Viewport Meta */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.hasViewport ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.hasViewport ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Viewport Meta Tag</div>
                          <div className="text-sm text-gray-600 mt-1">{result.hasViewport ? 'Viewport meta tag is present — mobile-friendly' : 'No viewport meta tag found'}</div>
                          <p className="text-xs text-gray-400 mt-1">Required for proper mobile rendering and Google&apos;s mobile-first indexing.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.hasViewport ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.hasViewport ? 'Present' : 'Missing'}
                        </span>
                      </div>
                    </div>

                    {/* Language & Favicon */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">
                            <span className="mr-2">{result.langAttribute ? '✅' : '⚠️'}</span>Language
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${result.langAttribute ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {result.langAttribute || 'Missing'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">lang attribute on &lt;html&gt; helps search engines identify page language.</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">
                            <span className="mr-2">{result.hasFavicon ? '✅' : '⚠️'}</span>Favicon
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${result.hasFavicon ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {result.hasFavicon ? 'Present' : 'Missing'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Favicon improves brand recognition in browser tabs and bookmarks.</p>
                      </div>
                    </div>
                  </div>

                  {/* Social & Schema Group */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#0a2a6e] border-l-4 border-[#1565c0] pl-3 mb-4">
                      <FaShareAlt className="inline mr-2" /> Social &amp; Schema
                    </h3>

                    {/* Open Graph */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.hasOgTitle && result.hasOgDescription && result.hasOgImage ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.hasOgTitle && result.hasOgDescription && result.hasOgImage ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Open Graph Tags (Facebook / LinkedIn)</div>
                          <div className="text-sm text-gray-600 mt-1">
                            og:title {result.hasOgTitle ? '✅' : '❌'} &nbsp;&nbsp;
                            og:description {result.hasOgDescription ? '✅' : '❌'} &nbsp;&nbsp;
                            og:image {result.hasOgImage ? '✅' : '❌'}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Open Graph tags control how your page appears when shared on social media.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.hasOgTitle && result.hasOgDescription && result.hasOgImage ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.hasOgTitle && result.hasOgDescription && result.hasOgImage ? 'Complete' : 'Incomplete'}
                        </span>
                      </div>
                    </div>

                    {/* Twitter Card */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.hasTwitterCard ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.hasTwitterCard ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Twitter / X Card</div>
                          <div className="text-sm text-gray-600 mt-1">{result.hasTwitterCard ? `Twitter card type: ${result.twitterCardType}` : 'No twitter:card meta tag found'}</div>
                          <p className="text-xs text-gray-400 mt-1">Twitter cards control how links appear when shared on Twitter / X.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.hasTwitterCard ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.hasTwitterCard ? 'Present' : 'Missing'}
                        </span>
                      </div>
                    </div>

                    {/* Schema Markup */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${result.hasSchema ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {result.hasSchema ? '✅' : '⚠️'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Schema Markup (JSON-LD)</div>
                          <div className="text-sm text-gray-600 mt-1">
                            {result.hasSchema && result.schemaTypes.length > 0 ? result.schemaTypes.slice(0, 3).join(', ') : 'No JSON-LD schema found'}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Structured data helps Google understand your content and enables rich results.</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${result.hasSchema ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {result.hasSchema ? 'Present' : 'Missing'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-10 bg-gradient-to-r from-[#0a2a6e] to-[#1565c0] rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Want a Full Professional SEO Audit?</h3>
                <p className="mb-6 opacity-90">Our experts deliver an in-depth report covering technical SEO, backlinks, competitor analysis &amp; a complete priority action plan.</p>
                <a href="/free-seo-audit" className="inline-flex items-center gap-2 bg-white text-[#0a2a6e] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  <FaFileAlt /> Request Free Audit Report
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Error State */}
      {result?.hasError && (
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <div className="text-red-500 text-2xl">⚠️</div>
              <div>
                <strong className="text-red-700">Analysis failed</strong>
                <p className="text-red-600 text-sm">{result.errorMessage}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pre-analysis Feature Section (shown when no result) */}
      {!result && !isAnalyzing && (
        <section className="py-12 bg-[#f8faff]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">14 SEO Factors Checked Instantly</h2>
              <p className="text-gray-500 mt-2">No login, no email — just enter your URL and get a full report in seconds</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SEO_FEATURES.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1565c0] to-[#0a2a6e] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-white text-xl" />
                  </div>
                  <h6 className="font-semibold text-sm mb-1">{feature.title}</h6>
                  <p className="text-xs text-gray-500 mb-2">{feature.desc}</p>
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs">{feature.group}</span>
                </div>
              ))}
            </div>

            {/* CTA Strip */}
            <div className="mt-10 bg-gradient-to-r from-[#0a2a6e] to-[#1565c0] rounded-2xl p-8 text-center text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need a Full Expert Audit Instead?</h3>
              <p className="mb-6 opacity-90">Our SEO experts deliver a detailed report covering technical SEO, backlinks, competitor gaps &amp; an action plan — completely free.</p>
              <a href="/free-seo-audit" className="inline-flex items-center gap-2 bg-white text-[#0a2a6e] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                <FaFileAlt /> Request Free Audit Report
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Partner Section */}
      <div className="py-8">
        <PartnerSection />
      </div>

      {/* Lead Capture Modal */}
{showLeadModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowLeadModal(false)}>
    <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
      {/* Close Button - Top Right */}
      <button
        onClick={() => setShowLeadModal(false)}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="bg-gradient-to-r from-[#1a3c8f] to-[#2563eb] p-6 text-white">
        <h3 className="text-xl font-bold mb-1">Free SEO Analysis</h3>
        <p className="text-sm opacity-85">Enter your details to get your instant SEO report</p>
      </div>
      
      <form onSubmit={handleLeadSubmit} className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={leadForm.name}
            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${leadErrors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Smith"
          />
          {leadErrors.name && <p className="text-red-500 text-xs mt-1">{leadErrors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            value={leadForm.email}
            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${leadErrors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com"
          />
          {leadErrors.email && <p className="text-red-500 text-xs mt-1">{leadErrors.email}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
          <input
            type="tel"
            value={leadForm.phone}
            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+44 7700 900000"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmittingLead}
          className="w-full bg-gradient-to-r from-[#1a3c8f] to-[#2563eb] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {isSubmittingLead ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analysing...
            </span>
          ) : (
            <span><FaChartBar className="inline mr-2" /> Get My Free SEO Report</span>
          )}
        </button>
        
        <p className="text-center text-gray-400 text-xs mt-4">
          <FaLockIcon className="inline mr-1" size={10} /> Your information is safe. No spam, ever.
        </p>
      </form>
    </div>
  </div>
)}
    </div>
  );
}