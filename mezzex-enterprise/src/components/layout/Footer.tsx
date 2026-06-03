import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0b1727] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src={siteConfig.logo}
              alt="Mezzex"
              width={180}
              height={56}
              className="mb-6 brightness-0 invert"
            />
            <p className="text-sm mb-6 text-gray-400">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <Link href={siteConfig.social.facebook} className="text-gray-400 hover:text-[#4BEAFF] transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href={siteConfig.social.twitter} className="text-gray-400 hover:text-[#4BEAFF] transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href={siteConfig.social.linkedin} className="text-gray-400 hover:text-[#4BEAFF] transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href={siteConfig.social.instagram} className="text-gray-400 hover:text-[#4BEAFF] transition-colors">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#4BEAFF] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#4BEAFF] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#4BEAFF] transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#4BEAFF] transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-[#4BEAFF] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/website-designing-development" className="hover:text-[#4BEAFF] transition-colors">Website Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-[#4BEAFF] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/software-development" className="hover:text-[#4BEAFF] transition-colors">Software Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-[#4BEAFF] transition-colors">App Development</Link></li>
              <li><Link href="/services/ecommerce-service" className="hover:text-[#4BEAFF] transition-colors">E-Commerce Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#4BEAFF] mt-1 shrink-0" size={20} />
                <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postcode}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#4BEAFF] shrink-0" size={20} />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#4BEAFF] shrink-0" size={20} />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-center md:flex md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Mezzex. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-[#4BEAFF] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-[#4BEAFF] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
