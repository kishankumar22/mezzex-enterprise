import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { MapPin, Phone, Mail } from 'lucide-react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#071321] text-gray-300">
      {/* TOP */}
      <div className="container mx-auto px-5 py-5 lg:px-6 lg:py-12">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-5">

          {/* COMPANY */}
          <div className="max-w-[360px]">

            {/* LOGO */}
            <div className="mb-5">
              <Image
                src={siteConfig.logo}
                alt="Mezzex"
                width={230}
                height={75}
                className="h-auto w-[220px] object-contain"
                priority
              />
            </div>

            {/* DESC */}
            <p className="text-[15px] leading-7 text-gray-400">
              Leading IT service provider in the UK offering
              digital marketing, website designing, app &
              software development, e-commerce services,
              and more.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-3">

              {[
                {
                  href: siteConfig.social.facebook,
                  icon: <FaFacebook size={18} />,
                },
                {
                  href: siteConfig.social.twitter,
                  icon: <FaTwitter size={18} />,
                },
                {
                  href: siteConfig.social.linkedin,
                  icon: <FaLinkedin size={18} />,
                },
                {
                  href: siteConfig.social.instagram,
                  icon: <FaInstagram size={18} />,
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  target="_blank"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-gray-400
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#4BEAFF]
                    hover:bg-[#4BEAFF]
                    hover:text-[#071321]
                  "
                >
                  {item.icon}
                </Link>
              ))}

            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="mb-5 text-[24px] font-semibold text-[#4BEAFF]">
              Company
            </h4>

            <ul className="space-y-3 text-[15px]">

              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

              {/* HELP */}
          <div>
            <h4 className="mb-5 text-[24px] font-semibold text-[#4BEAFF]">Let Us Help You</h4>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-[#4BEAFF]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="transition-colors hover:text-[#4BEAFF]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#4BEAFF]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#4BEAFF]">
                  Blog
                </Link>
              </li>
               <li>
                <Link
                  href="/seo-tool"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  SEO Checker Tool
                </Link>
              </li>

              <li>
                <Link
                  href="/free-seo-audit"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Free SEO Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-5 text-[24px] font-semibold text-[#4BEAFF]">
              Our Services
            </h4>

            <ul className="space-y-3 text-[15px]">

              <li>
                <Link
                  href="/services/website-designing-development"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Website Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/digital-marketing"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Digital Marketing
                </Link>
              </li>

              <li>
                <Link
                  href="/services/software-development"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Software Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/app-development"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  App Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ecommerce-service"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  E-Commerce Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services/warehouse-management"
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  Warehouse Management
                </Link>
              </li>

             

            </ul>
          </div>
      

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-[24px] font-semibold text-[#4BEAFF]">
              Contact Us
            </h4>

            <ul className="space-y-5 text-[15px]">

              {/* EMAIL */}
              <li className="flex items-center gap-3">
                <Mail
                  className="shrink-0 text-[#4BEAFF]"
                  size={18}
                />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  {siteConfig.email}
                </a>
              </li>

              {/* PHONE */}
              <li className="flex items-center gap-3">
                <Phone
                  className="shrink-0 text-[#4BEAFF]"
                  size={18}
                />

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-[#4BEAFF]"
                >
                  {siteConfig.phone}
                </a>
              </li>

              {/* ADDRESS */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 shrink-0 text-[#4BEAFF]"
                  size={18}
                />

                <span className="leading-7 text-gray-300">
                  {siteConfig.address.street},
                  <br />
                  {siteConfig.address.city},
                  {' '}
                  {siteConfig.address.postcode}
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-2 pt-2 border-t border-white/10">

          <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">

            <p className="text-center text-gray-400 md:text-left">
              © {new Date().getFullYear()} Mezzex.
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">

              <Link
                href="/privacy"
                className="transition-colors hover:text-[#4BEAFF]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#4BEAFF]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/faq"
                className="transition-colors hover:text-[#4BEAFF]"
              >
                FAQ
              </Link>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}