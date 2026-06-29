"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbContextType {
  items: BreadcrumbItem[];
  title: string;
  hidden: boolean;
  setBreadcrumbs: (config: { items: BreadcrumbItem[]; title: string; hidden?: boolean } | null) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};

export const useSetBreadcrumbs = (items: BreadcrumbItem[], title: string, hidden?: boolean) => {
  const { setBreadcrumbs } = useBreadcrumb();
  const itemsStr = JSON.stringify(items);
  
  useEffect(() => {
    setBreadcrumbs({ items, title, hidden });
    return () => {
      setBreadcrumbs(null);
    };
  }, [itemsStr, title, hidden, setBreadcrumbs]);
};

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [customConfig, setCustomConfig] = useState<{ items: BreadcrumbItem[]; title: string; hidden?: boolean } | null>(null);
  
  // Reset custom config when pathname changes
  useEffect(() => {
    setCustomConfig(null);
  }, [pathname]);
  
  // Helper to auto-generate breadcrumbs from pathname
  const getAutoBreadcrumbs = () => {
    if (customConfig) {
      return {
        items: customConfig.items,
        title: customConfig.title,
        hidden: !!customConfig.hidden,
      };
    }
    
    // Split paths and remove empty segments
    const paths = pathname.split("/").filter(Boolean);
    
    // Map of pathname segments to human-readable names
    const segmentMap: Record<string, string> = {
      about: "About Us",
      blog: "Blog & Insights",
      careers: "Careers",
      contact: "Contact Us",
      faq: "FAQ",
      "free-seo-audit": "Free SEO Audit",
      gallery: "Gallery",
      portfolio: "Portfolio",
      privacy: "Privacy Policy",
      "seo-tool": "SEO Tool",
      services: "Services",
      "terms-and-conditions": "Terms & Conditions",
      "thank-you": "Thank You",
    };

    const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    let currentPath = "";
    
    paths.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === paths.length - 1;
      
      // Format segment label
      let label = segmentMap[segment] || segment;
      if (!segmentMap[segment]) {
        // Fallback to capitalizing and replacing dashes
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
      
      items.push({
        label,
        href: isLast ? undefined : currentPath,
        active: isLast,
      });
    });
    
    const title = items[items.length - 1]?.label || "";
    return { items, title, hidden: false };
  };
  
  const { items, title, hidden } = getAutoBreadcrumbs();
  
  return (
    <BreadcrumbContext.Provider value={{ items, title, hidden, setBreadcrumbs: setCustomConfig }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
