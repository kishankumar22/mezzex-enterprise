"use client";

import React from "react";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import Breadcrumb from "@/components/common/Breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbContainer() {
  const { items, title, hidden } = useBreadcrumb();
  const pathname = usePathname();

  // If on the home page or set to hidden, do not render breadcrumbs
  if (pathname === "/" || hidden) return null;

  return <Breadcrumb items={items} title={title} />;
}
