import React from "react";
import { BreadcrumbProvider } from "@/providers/BreadcrumbProvider";
import BreadcrumbContainer from "@/components/common/BreadcrumbContainer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BreadcrumbProvider>
      <BreadcrumbContainer />
      {children}
    </BreadcrumbProvider>
  );
}
