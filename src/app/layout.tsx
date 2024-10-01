import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs'
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
  title: "Resources Finder",
  description: "Find tech and mentorship resources in NL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="fixed flex w-full items-center justify-center p-4 z-10">
          Resources Finder
          <div className="absolute top-4 right-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className="flex h-full items-start justify-items-center p-8 mt-14">
          {children}
        </main>
        <footer className="flex items-center justify-center p-4 mt-auto">
          Resources Finder
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
