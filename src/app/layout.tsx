import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/features/layout/nav-bar/nav-bar";
import ThemeProvider from "@/features/layout/theme-provider/theme-provider";
import { Footer } from "@/features/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alsacia SRL",
  description: "Cabaña Nogal Del Río",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NavBar />
          <main className="pt-navbar flex-1 scrollbar-none">{children}</main>
          <footer className="w-full h-fit bg-muted flex items-center justify-center text-sm">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
