'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { navigation } from '@/constants/navigation';
import { Menu, X, ChevronDown, ChevronRight, Search, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://mezzex.com" target='_blank' className="flex-shrink-0">
            <Image
              src={siteConfig.logo}
              alt="Mezzex Logo"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group py-2"
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-[#2f5a84] px-2 py-1 flex items-center',
                    pathname === item.href ? 'text-[#2f5a84]' : isScrolled ? 'text-gray-900' : 'text-gray-800'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <div key={child.label} className="relative group/sub px-1">
                          <Link
                            href={child.href}
                            className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-[#2f5a84] hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span>{child.label}</span>
                            {child.children && (
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover/sub:text-[#2f5a84] transition-colors" />
                            )}
                          </Link>
                          
                          {/* Sub-dropdown logic */}
                          {child.children && (
                            <div className="absolute left-full top-0 pl-2 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                              <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.href}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#2f5a84] hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-shrink-0 w-4 h-4 bg-[#2f5a84] rounded flex items-center justify-center text-white text-[10px] mr-2">
                                      ➔
                                    </div>
                                    <span>{subChild.label}</span>
                                  </Link>
                                ))}

                                {/* Add special tools for Digital Marketing */}
                                {child.label === 'Digital Marketing' && (
                                  <>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <Link
                                      href="/seo-tool"
                                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#2f5a84] hover:bg-gray-50 transition-colors font-medium"
                                    >
                                      <Search className="h-4 w-4 text-gray-500 mr-2" />
                                      <span>SEO Checker Tool</span>
                                    </Link>
                                    <Link
                                      href="/free-seo-audit"
                                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#2f5a84] hover:bg-gray-50 transition-colors font-medium"
                                    >
                                      <FileText className="h-4 w-4 text-gray-500 mr-2" />
                                      <span>Free SEO Audit</span>
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-[#2f5a84] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a3855] transition-colors"
            >
              Get A Quote
            </Link>
            <button
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => {
                        const hasChildren = child.children && child.children.length > 0;
                        const isExpanded = !!expandedSubmenus[child.label];

                        return (
                          <div key={child.label} className="space-y-1">
                            <div className="flex items-center justify-between">
                              {hasChildren ? (
                                <button
                                  onClick={(e) => toggleSubmenu(child.label, e)}
                                  className="block text-left text-gray-600 hover:text-[#2f5a84] py-1 flex-grow font-medium focus:outline-none"
                                >
                                  {child.label}
                                </button>
                              ) : (
                                <Link
                                  href={child.href}
                                  className="block text-gray-600 hover:text-[#2f5a84] py-1 flex-grow"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              )}
                              {hasChildren && (
                                <button
                                  onClick={(e) => toggleSubmenu(child.label, e)}
                                  className="p-1 text-gray-500 hover:text-[#2f5a84] focus:outline-none"
                                >
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform duration-200",
                                      isExpanded && "transform rotate-180"
                                    )}
                                  />
                                </button>
                              )}
                            </div>

                            {hasChildren && isExpanded && (
                              <div className="pl-4 border-l border-gray-100 ml-1 space-y-2 py-1">
                                <Link
                                  href={child.href}
                                  className="block text-sm font-semibold text-gray-700 hover:text-[#2f5a84] py-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  All {child.label}
                                </Link>
                                {child.children?.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.href}
                                    className="block text-sm text-gray-500 hover:text-[#2f5a84] py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                                {child.label === 'Digital Marketing' && (
                                  <>
                                    <div className="border-t border-gray-50 my-1"></div>
                                    <Link
                                      href="/seo-tool"
                                      className="flex items-center text-sm text-gray-500 hover:text-[#2f5a84] py-1 gap-1.5"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <span>🔍</span> SEO Checker Tool
                                    </Link>
                                    <Link
                                      href="/free-seo-audit"
                                      className="flex items-center text-sm text-gray-500 hover:text-[#2f5a84] py-1 gap-1.5"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <span>📄</span> Free SEO Audit
                                    </Link>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block text-center mt-6 bg-[#2f5a84] text-white px-6 py-3 rounded-full font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
