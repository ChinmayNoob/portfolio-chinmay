import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavDemo } from "@/components/others/floating-navbar-demo";

const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-inter'
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: "Chinmay's Portfolio",
  description: "A small showcase of my projects and achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavDemo />
          {children}
          <Toaster
            richColors
            toastOptions={{
              classNames: {
                title: "text-lg",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
