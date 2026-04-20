import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Swapnil Nanavati – Full-Stack Developer & Senior Consultant",
  description:
    "Full-stack developer specializing in React, Next.js, Spring Boot, FastAPI, Kafka, and cloud technologies (AWS, GCP). Available for freelance on Fiverr and Upwork.",
  keywords: [
    "Full-Stack Developer",
    "React developer",
    "Next.js developer freelance",
    "Kafka developer",
    "Spring Boot developer",
    "FastAPI developer",
    "freelance developer Upwork",
    "hire React developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Swapnil Nanavati" }],
  openGraph: {
    title: "Swapnil Nanavati – Full-Stack Developer",
    description:
      "Building enterprise web apps, Kafka pipelines, and cloud infrastructure. Available for freelance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapnil Nanavati – Full-Stack Developer",
    description: "React, Next.js, Kafka, Spring Boot, FastAPI, AWS/GCP. Available for freelance.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
