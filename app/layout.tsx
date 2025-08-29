import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ThemeProvider } from "@/provider/theme-provider";

export const metadata: Metadata = {
  title: "PNOTE | Pradhuman Note",
  description: "Hands On Note By Self Taught Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("w-full antialiased relative font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
