import * as React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  title?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  title,
  className,
  ...props
}) => {
  if (!items?.length) return null;

  // Fallback title: last item label if no explicit title is provided
  const displayTitle = title || items[items.length - 1]?.label;

  return (
    <section className="relative bg-[#2f5a84] py-5 md:py-16 text-white overflow-hidden w-full">
      {/* Background Grid/Radial Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col">
          <nav
            aria-label="breadcrumb"
            className={cn(
              "flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-[#4BEAFF] mb-0 md:mb-4 font-medium",
              className
            )}
            {...props}
          >
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1 || item.active;
              const isHome = idx === 0 && (item.label.toLowerCase() === "home" || item.href === "/");

              const content = item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:underline inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  {isHome && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "inline-flex items-center gap-1 select-none",
                    isLast ? "text-white font-semibold" : "text-[#4BEAFF]"
                  )}
                >
                  {isHome && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </span>
              );

              return (
                <React.Fragment key={`${item.label}-${idx}`}>
                  {content}
                  {!isLast && <span className="text-[#4BEAFF]/70 select-none">/</span>}
                </React.Fragment>
              );
            })}
          </nav>
          {displayTitle && (
            <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {displayTitle}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;