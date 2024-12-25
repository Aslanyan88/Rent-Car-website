// app/layout.tsx
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Toaster 
          position="top-center" 
          closeButton
          richColors
          expand
          duration={3000}
        />
        <Footer />
      </body>
    </html>
  );
}