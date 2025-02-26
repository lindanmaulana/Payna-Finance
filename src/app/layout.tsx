import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Payna – Simplify Payroll & Boost Business Productivity",
  description:
    "Payna membantu bisnis Anda mengelola payroll dengan mudah & efisien tanpa keahlian keuangan. Tingkatkan produktivitas tim dengan fitur canggih!",
  keywords:
    "payroll, manajemen keuangan, bisnis, produktivitas, software payroll",
  authors: [{ name: "Payna Team", url: "https://paynafinance.vercel.app" }],
  openGraph: {
    title: "Payna – Simplify Payroll & Boost Business Productivity",
    description: "Kelola payroll bisnis Anda dengan mudah dan efisien.",
    url: "https://paynafinance.vercel.app",
    siteName: "Payna",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Payna Payroll Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payna – Simplify Payroll & Boost Business Productivity",
    description: "Kelola payroll bisnis Anda dengan mudah dan efisien.",
    images: ["/paynafinance.svg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
