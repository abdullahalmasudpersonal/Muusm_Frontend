// // import './page.module.css'

import ReduxProvider from "@/components/providers/ReduxProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mafser Ul Ulum Senior Madrasah",
  description: "Is is a Islamic Educational Instituions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
          <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

