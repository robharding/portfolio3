import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BackgroundGradient from "@/components/BackgroundGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rob Harding | Full Stack Developer",
  description:
    "Rob Harding is a full stack developer skilled in React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          `bg-gray-50 min-h-screen text-gray-950 relative grainy`
        )}
      >
        <BackgroundGradient />
        {children}
      </body>
    </html>
  );
}
