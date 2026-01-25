import './globals.css';
import ReduxProvider from "@/components/providers/ReduxProvider";
import type { Metadata } from "next";
import ThemeRegistry from '@/theme/ThemeRegistry';
export const metadata: Metadata = {
  title: "Mafser Ul Ulum Senior Madrasah",
  description: "Is is a Islamic Educational Instituions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}


