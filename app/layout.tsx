import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "../styles/globals.scss";

const preahvihear = Preahvihear({
  weight: "400", // Specify the desired weights if available (Preahvihear often has only one weight)
  subsets: ["latin"], // Include necessary subsets
  display: "swap", // Recommended for better performance
});

export const metadata: Metadata = {
  title: {
    default: "Hussen Medhat - Frontend Developer",
    template: "%s | Hussen Medhat",
  },
  description:
    "Frontend developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch for opportunities.",
  keywords: [
    "frontend developer",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "portfolio",
    "hussen medhat",
  ],
  authors: [
    {
      name: "Hussen Medhat",
      url: "https://portfolio-phi-seven-dxtsnsfm2t.vercel.app/",
    },
  ],
  creator: "Hussen Medhat",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://portfolio-phi-seven-dxtsnsfm2t.vercel.app/"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${preahvihear}`}>{children}</body>
    </html>
  );
}
