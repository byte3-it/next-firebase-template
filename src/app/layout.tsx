import type { Metadata } from "next";
import "./globals.css";
import ClientSideLayout from "./clientside-layout";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BYTE3",
  description: "Change this",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
