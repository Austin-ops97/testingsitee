import "./globals.css";
import { DesignProvider } from "@/components/sqyid-system/DesignProvider";
import type { ReactNode } from "react";
import { siteBrief } from "@/lib/site-brief";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQYID",
  description: "Generate qualified consultation calls and secure on-site project estimates"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sqyid-bg font-body text-sqyid-primary antialiased">
        <DesignProvider brief={siteBrief}>{children}</DesignProvider>
      </body>
    </html>
  );
}
