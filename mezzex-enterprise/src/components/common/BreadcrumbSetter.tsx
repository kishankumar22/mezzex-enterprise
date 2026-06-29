"use client";

import { useEffect } from "react";
import { useBreadcrumb, BreadcrumbItem } from "@/providers/BreadcrumbProvider";

interface BreadcrumbSetterProps {
  items: BreadcrumbItem[];
  title: string;
  hidden?: boolean;
}

export default function BreadcrumbSetter({ items, title, hidden }: BreadcrumbSetterProps) {
  const { setBreadcrumbs } = useBreadcrumb();
  const itemsStr = JSON.stringify(items);

  useEffect(() => {
    setBreadcrumbs({ items, title, hidden });
    return () => {
      setBreadcrumbs(null);
    };
  }, [itemsStr, title, hidden, setBreadcrumbs]);

  return null;
}
