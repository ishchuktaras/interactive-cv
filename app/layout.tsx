import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Interactive CV",
  description: "An interactive CV showcasing my skills, experiences, and projects.",
  keywords: "CV, resume, web developer, JavaScript, Next.js, TypeScript, LinkedIn, GitHub, portfolio",
  authors: [{ name: "Taras Ishchuk" }],
  openGraph: {
    title: "My Interactive CV",
    description: "An interactive CV showcasing my skills, experiences, and projects.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    siteName: "Your Name's CV",
    images: [
      {
        url: "https://yourwebsite.com/path/to/your-image.jpg", // Replace with an actual image URL
        width: 800,
        height: 600,
        alt: "Preview of my CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    title: "My Interactive CV",
    description: "An interactive CV showcasing my skills, experiences, and projects.",
    images: "https://yourwebsite.com/path/to/your-image.jpg", // Replace with an actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
