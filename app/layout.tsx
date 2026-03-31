import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PeopleSoft AI Studio — AI Gateway for Enterprise Systems",
  description:
    "The AI Gateway (MCP) for PeopleSoft and Enterprise Systems. Connect, analyze, and automate your enterprise workflows with cutting-edge AI.",
  keywords: [
    "PeopleSoft",
    "AI Studio",
    "MCP Gateway",
    "Enterprise AI",
    "AI Automation",
    "PeopleCode",
  ],
  openGraph: {
    title: "PeopleSoft AI Studio",
    description: "AI Gateway for Enterprise Systems — Connect. Analyze. Automate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
