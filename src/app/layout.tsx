// app/layout.tsx
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "sonner";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Drive Luxe | Rent Luxury Cars",
    template: "%s | Drive Luxe"
  },
  description: "Experience luxury car rentals with our premium fleet. Easy booking, flexible pickup options, and 24/7 customer support.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' } 
    ],
    shortcut: ['/new-favicon.ico'] 
  },
  applicationName: "Drive Luxe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32" /> 
        <link rel="logo" href="/logo.png" />
        <meta name="application-name" content="Drive Luxe" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
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
