'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Upload, 
  X, 
  User, 
  Mail, 
  Phone, 
  Map, 
  Calendar, 
  FileText, 
  MessageSquare,
  Search,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PartnerSection } from '@/components/home/PartnerSection';

interface Job {
  id: number;
  title: string;
  salary: string;
  location: string;
  experience: string;
  image: string;
  description: string[];
  skills: string[];
  qualification: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Customer Service E-Commerce Executive",
    salary: "Rs. 20,000 - 25,000 per month (Negotiable)",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "1 Year to 3 Years of experience in the online e-commerce field",
    image: "/images/customer-service.webp",
    description: [
      "Handling customer service & operations of the online e-commerce portals like Amazon, eBay, etc.",
      "Responsible for designing and implementing customer service strategies and managing relationships with online retailers & partners to drive sales.",
      "Listing knowledge for Online Marketplaces (Amazon).",
      "Creating vendor and seller accounts, listing and cataloging products on all E-commerce channels.",
      "Handling order management, pricing, payment reconciliation, and advertisement activities.",
      "Coordinating with internal operations teams for accurate and timely orders fulfillment, stock reconciliation, RTV processing & claim settlement.",
      "Handling customer complaints & monitoring negative feedback from customer side.",
      "Manage large amounts of incoming phone calls.",
      "Identify and assess customers' needs to achieve satisfaction.",
      "Follow communication procedures, guidelines, and policies.",
      "Take the extra mile to engage customers."
    ],
    skills: [
      "Excellent communication and interpersonal skills",
      "English proficiency is a must",
      "Ability to listen and active problem-solving skills",
      "Ability to handle pressure",
      "Knowledge of MS Word, MS Excel, MS PowerPoint"
    ],
    qualification: "Any graduate, preferred MBA/PGDBA in Marketing/Operations"
  },
  {
    id: 2,
    title: "E-Commerce Catalogue Executive",
    salary: "Rs. 22,000 - 28,000 per month",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "1 Year to 3 Years of experience in Catalogue Management",
    image: "/images/ecommerce-catalogue-executive.webp",
    description: [
      "Creating, maintaining, and updating product catalogs on Amazon, eBay, Shopify, and other e-commerce channels.",
      "Creating product listings using flat files/bulk templates, ensuring high-quality images and accurate SKU structure.",
      "Optimizing product titles, bullet points, and descriptions for SEO search visibility.",
      "Monitoring inventory counts and updating product stock levels across multi-channel integrations.",
      "Troubleshooting catalog listing errors, suppressed listings, and search performance issues on seller central.",
      "Categorizing products accurately with correct keywords, browse nodes, and item specifications.",
      "Coordinating with copywriters and designers to create high-converting A+ Content / EBC (Enhanced Brand Content)."
    ],
    skills: [
      "Strong command over MS Excel (VLOOKUP, Pivot Tables, data manipulation)",
      "Familiarity with Amazon Flat Files and eBay listing templates",
      "Basic understanding of SEO principles and search terms optimization",
      "High attention to detail and ability to organize large datasets",
      "Good written English skills for product description optimization"
    ],
    qualification: "Any graduate (B.Sc, BCA, BBA, B.Com preferred)"
  },
  {
    id: 3,
    title: "E-Commerce Key Account Manager (Amazon)",
    salary: "Rs. 40,000 - 60,000 per month (Negotiable)",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "3 to 5 Years in Amazon Seller Central / Vendor Central management",
    image: "/images/ecommerce-key-account-manager.webp",
    description: [
      "Formulating and executing growth strategies to maximize sales and margins on Amazon UK, US, and EU.",
      "Managing Amazon PPC campaigns (Sponsored Products, Brands, and Display), budgeting, and ROAS optimization.",
      "Monitoring account health metrics, managing customer feedbacks, and resolving account policy violations.",
      "Planning inventory replenishment, managing FBA inbound shipments, and forecasting product demand.",
      "Optimizing product listings, storefront design, and A+ Content to improve conversion rates.",
      "Analyzing competitor trends, pricing strategies, and marketplace data to find growth opportunities.",
      "Liaising directly with Amazon support to resolve listing hijackers, brand registry issues, and billing disputes."
    ],
    skills: [
      "Deep knowledge of Amazon advertising algorithms and bid management",
      "Proficiency with e-commerce analytics tools (Helium 10, Jungle Scout, Keepa)",
      "Strong financial acumen to calculate net margins, ROI, and advertising metrics (ACOS, TACOS)",
      "Exceptional analytical, decision-making, and communication skills",
      "Ability to coordinate with designers, copywriters, and warehouse managers"
    ],
    qualification: "Bachelor's degree in Marketing, Business Administration, or related fields (MBA preferred)"
  },
  {
    id: 4,
    title: "MIS & Data Analyst",
    salary: "Rs. 25,000 - 35,000 per month",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "2 to 4 Years of experience in data analytics or MIS reporting",
    image: "/images/mis-data-analyst.webp",
    description: [
      "Extracting, cleaning, and consolidating daily sales and operations data from multiple channels.",
      "Developing and maintaining automated Excel reports, dashboards, and KPI scorecards for stakeholders.",
      "Analyzing e-commerce sales, margins, and marketing performance metrics to identify cost-saving areas.",
      "Collaborating with department heads to understand data needs and design customized reporting structures.",
      "Monitoring data consistency and resolving discrepancies across inventory, sales, and accounts datasets.",
      "Conducting historical data analysis to assist in demand forecasting and supply chain scheduling."
    ],
    skills: [
      "Expertise in Advanced MS Excel (Index/Match, VBA Macros, Power Query, Power Pivot)",
      "Knowledge of database querying (SQL) and data visualization tools (Power BI, Tableau) is a big plus",
      "Strong analytical and logical reasoning skills to translate raw data into actionable insights",
      "Ability to work independently and meet strict reporting deadlines",
      "Excellent numerical and communication skills"
    ],
    qualification: "B.Sc in Mathematics/Statistics, BCA, B.Tech, or B.Com (specialization in Analytics preferred)"
  },
  {
    id: 5,
    title: "Product Research & Sourcing",
    salary: "Rs. 25,000 - 35,000 per month",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "1 to 3 Years in product research and supply chain sourcing",
    image: "/images/product-research-sourcing.webp",
    description: [
      "Researching e-commerce marketplaces to find high-demand, low-competition, and profitable products.",
      "Identifying and evaluating local and overseas suppliers (via Alibaba, global sources, trade fairs).",
      "Negotiating product pricing, packaging, production lead times, and payment terms with manufacturers.",
      "Calculating total landed costs (production, freight, customs duty, shipping, FBA fees) and calculating net margins.",
      "Ordering and inspecting product samples, validating build quality, and ensuring compliance with UK/EU standards.",
      "Coordinating with freight forwarders to manage logistics from factory to warehouse."
    ],
    skills: [
      "Experience with product research tools (Helium 10, Keepa, Jungle Scout)",
      "Strong negotiation and supplier relationship management skills",
      "Understanding of international shipping terms (Incoterms like FOB, EXW, DDP) and customs procedures",
      "Analytical approach to estimating profit margins and sales volumes",
      "Familiarity with product packaging designs and quality check checklists"
    ],
    qualification: "Any graduate with interest in global trade, supply chain management, or international business"
  },
  {
    id: 6,
    title: "Project Analyst",
    salary: "Rs. 30,000 - 45,000 per month",
    location: "A624 Logix Technova Sector 132 Noida, Uttar Pradesh 201301",
    experience: "1 to 3 Years in IT project coordination or business analysis",
    image: "/images/project-analyst.webp",
    description: [
      "Gathering, analyzing, and documenting business requirements from clients and internal teams.",
      "Translating business needs into technical specifications and user stories for designers and developers.",
      "Creating and monitoring project milestones, timelines, and action items in Jira/Trello.",
      "Coordinating daily standups and sprint planning to track project development.",
      "Conducting User Acceptance Testing (UAT) to verify that features match requirements before launch.",
      "Preparing project status reports, meeting minutes, and system documentation for stakeholders."
    ],
    skills: [
      "Familiarity with Agile/Scrum project management methodologies",
      "Proficiency with project tracking software (Jira, Confluence, Trello, Asana)",
      "Strong capability to bridge communication between business users and technical developers",
      "Excellent analytical, problem-solving, and writing skills",
      "Proactive attitude towards risk identification and issue resolution"
    ],
    qualification: "Bachelor's degree (B.Tech, BCA, BBA preferred) or certification in Agile/Project Management"
  }
];

export default function CareersContent() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [isPending, startTransition] = useTransition();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [currentCTC, setCurrentCTC] = useState('');
  const [currentInHandSalary, setCurrentInHandSalary] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [currentEmployment, setCurrentEmployment] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [others, setOthers] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleApplyClick = (job: Job) => {
    setApplyJob(job);
    setSelectedJob(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    startTransition(async () => {
      // Simulate API response time
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form states
      setFullName('');
      setEmail('');
      setPhone('');
      setZipcode('');
      setCity('');
      setState('');
      setCurrentCTC('');
      setCurrentInHandSalary('');
      setNoticePeriod('');
      setCurrentEmployment('');
      setReferredBy('');
      setOthers('');
      setResumeFile(null);
      setApplyJob(null);

      // Redirect to Thank you page
      router.push('/careers/thank-you');
    });
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Breadcrumb section */}
      <section className="relative bg-[#2f5a84] py-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-[#4BEAFF] mb-4">
                <Link href="/" className="hover:underline flex items-center gap-1 font-medium">
                  <Home className="w-3.5 h-3.5" /> Home
                </Link>
                <span>/</span>
                <span className="text-white font-medium">Careers</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Join Our Family</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Info Intro Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              We Are Always Looking For <span className="text-[#2f5a84]">Unique Talent</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mezzex is growing at a sky-rocketing pace. We need more resources to support the never-ending journey of challenges, learning, and impact. Discover your true potential by being a part of the UK’s fastest-developing group that is passionate about what we do.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are constantly improving our skills and learning trends to offer exceptional services in business e-commerce and digital marketing. If you are interested in sharing the same values with us, then you are the right candidate.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium text-[#2f5a84]">
              Here at Mezzex, we believe that our support team and relaxed yet productive working environment can make it easy to take on the most challenging tasks.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/images/join-family.webp"
              alt="Join Mezzex Family"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* Job Grid Title */}
      <section className="bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Choose The Career That Fits You Perfectly
            </h2>
            <div className="w-16 h-1 bg-[#2f5a84] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600">
              If you are looking for an OPPORTUNITY that gives your career a new definition, join Mezzex. We heartily welcome talented and enthusiastic individuals to our team.
            </p>
          </div>

          {/* Job listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2f5a84]/10 text-[#2f5a84]">
                      Full-Time
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-[#2f5a84] transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors flex-1"
                    >
                      Description
                    </button>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="px-4 py-2.5 rounded-xl bg-[#2f5a84] text-white text-sm font-semibold hover:bg-[#1a3855] transition-colors flex-1"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section at bottom */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>

      {/* JOB DESCRIPTION MODAL (Framer Motion) */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 pr-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {selectedJob.title}
                  </h3>
                  <p className="text-sm font-medium text-[#2f5a84] mt-1">Mezzex Careers Opportunity</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-5 rounded-2xl border border-gray-100 text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#2f5a84] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Job Location</p>
                      <p className="text-gray-600">{selectedJob.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <DollarSign className="w-5 h-5 text-[#2f5a84] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Offered Salary</p>
                      <p className="text-gray-600">{selectedJob.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-5 h-5 text-[#2f5a84] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Experience Needed</p>
                      <p className="text-gray-600">{selectedJob.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900">Key Roles & Responsibilities</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#2f5a84] shrink-0 mt-1" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-bold text-gray-900">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-bold text-gray-900">Preferred Qualifications</h4>
                  <p className="text-sm text-gray-700 leading-relaxed bg-[#2f5a84]/5 p-4 rounded-xl border border-[#2f5a84]/10">
                    {selectedJob.qualification}
                  </p>
                </div>

                <div className="flex justify-end gap-4 border-t border-gray-100 pt-6 mt-8">
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-600 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleApplyClick(selectedJob)}
                    className="px-6 py-2.5 rounded-xl bg-[#2f5a84] text-white hover:bg-[#1a3855] text-sm font-semibold transition-colors flex items-center gap-1.5"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* APPLY NOW FORM MODAL (Framer Motion) */}
      <AnimatePresence>
        {applyJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setApplyJob(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 pr-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Apply for Position
                  </h3>
                  <p className="text-lg font-semibold text-[#2f5a84] mt-1.5">
                    {applyJob.title}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    {/* Left Column Fields */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-[#2f5a84]" /> Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-[#2f5a84]" /> Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="zipcode" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Map className="w-4 h-4 text-[#2f5a84]" /> Postal / Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipcode"
                          value={zipcode}
                          onChange={(e) => setZipcode(e.target.value)}
                          placeholder="Enter postal/zip code"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="pos_applied" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-[#2f5a84]" /> Position Applied For
                        </label>
                        <input
                          type="text"
                          id="pos_applied"
                          value={applyJob.title}
                          readOnly
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 cursor-not-allowed font-medium focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="currentCTC" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4 text-[#2f5a84]" /> Current CTC
                        </label>
                        <input
                          type="text"
                          id="currentCTC"
                          value={currentCTC}
                          onChange={(e) => setCurrentCTC(e.target.value)}
                          placeholder="Enter your current CTC"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>
                    </div>

                    {/* Right Column Fields */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-[#2f5a84]" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter phone number"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="city" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#2f5a84]" /> City
                        </label>
                        <input
                          type="text"
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Enter your city"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="state" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#2f5a84]" /> State / Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Enter your state"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="currentEmployment" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-[#2f5a84]" /> Current Employment Company
                        </label>
                        <input
                          type="text"
                          id="currentEmployment"
                          value={currentEmployment}
                          onChange={(e) => setCurrentEmployment(e.target.value)}
                          placeholder="Enter current employer"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="currentInHand" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4 text-[#2f5a84]" /> Current In-Hand Salary
                        </label>
                        <input
                          type="text"
                          id="currentInHand"
                          value={currentInHandSalary}
                          onChange={(e) => setCurrentInHandSalary(e.target.value)}
                          placeholder="Enter current monthly salary"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>
                    </div>

                    {/* Bottom Fields span 2 */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="noticePeriod" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#2f5a84]" /> Notice Period (Days)
                        </label>
                        <input
                          type="text"
                          id="noticePeriod"
                          value={noticePeriod}
                          onChange={(e) => setNoticePeriod(e.target.value)}
                          placeholder="e.g. 30 days"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="referredBy" className="font-semibold text-gray-700 flex items-center gap-1.5">
                          <Search className="w-4 h-4 text-[#2f5a84]" /> How were you referred to us?
                        </label>
                        <input
                          type="text"
                          id="referredBy"
                          value={referredBy}
                          onChange={(e) => setReferredBy(e.target.value)}
                          placeholder="Ad, Walk-In, Referral name, etc."
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                      <label htmlFor="others" className="font-semibold text-gray-700 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-[#2f5a84]" /> Any additional notes
                      </label>
                      <textarea
                        id="others"
                        value={others}
                        onChange={(e) => setOthers(e.target.value)}
                        placeholder="Share anything else with HR team..."
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2f5a84] focus:ring-1 focus:ring-[#2f5a84] transition-all resize-none"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <span className="block font-semibold text-gray-700 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#2f5a84]" /> Upload Resume
                      </span>
                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#2f5a84] transition-colors relative bg-gray-50 flex flex-col items-center justify-center cursor-pointer group">
                        <input
                          type="file"
                          id="resume"
                          onChange={handleFileChange}
                          required
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#2f5a84] transition-colors mb-2" />
                        {resumeFile ? (
                          <p className="text-sm font-semibold text-[#2f5a84]">
                            Selected: {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                          </p>
                        ) : (
                          <>
                            <p className="text-sm font-semibold text-gray-600">Drag and drop or click to upload</p>
                            <p className="text-xs text-gray-400 mt-1">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 border-t border-gray-100 pt-6 mt-8">
                    <button
                      type="button"
                      onClick={() => setApplyJob(null)}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-600 transition-colors"
                      disabled={isPending}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-2.5 rounded-xl bg-[#2f5a84] hover:bg-[#1a3855] text-white text-sm font-semibold transition-colors flex items-center gap-2"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
