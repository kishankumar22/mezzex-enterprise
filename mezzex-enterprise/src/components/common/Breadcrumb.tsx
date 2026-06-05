import * as React from "react";
import Link from "next/link";
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

  return (
    <section className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <nav
          aria-label="breadcrumb"
          className={cn(
            "flex items-center justify-between",
            className
          )}
          {...props}
        >
          {/* Left Side Breadcrumb */}
          <ol className="inline-flex items-center flex-wrap text-sm text-gray-600">
            {items.map((item, idx) => {
              const isLast =
                idx === items.length - 1 || item.active;

              const content =
                item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#2f5a84] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      isLast &&
                        "font-semibold text-gray-900"
                    )}
                  >
                    {item.label}
                  </span>
                );

              return (
                <li
                  key={`${item.label}-${idx}`}
                  className="flex items-center"
                >
                  {content}

                  {!isLast && (
                    <svg
                      className="w-3 h-3 mx-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Right Side Title - Desktop Only */}
          {title && (
            <h1 className="hidden md:block text-3xl font-bold text-[#2f5a84]">
              {title}
            </h1>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;