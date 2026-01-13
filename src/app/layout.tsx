import { Hind_Siliguri, Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from "@/components/providers/ReduxProvider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mafser Ul Ulum Senior Madrasah",
  description: "Is is a Islamic Educational Instituions",
};

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const hind = Hind_Siliguri({
  subsets: ['bengali'],
  variable: '--font-bengali',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${hind.variable}`}>
      <body suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

