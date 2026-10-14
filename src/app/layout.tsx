import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";



export const metadata: Metadata = {
  title: "Dakingo - Luxury Artisan Bakery",
  description: "Handcrafted fresh daily in small batches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-[#FAF5F0] text-[#3D261B] antialiased">
        {/* Navbar yahan include karein */}
        <Navbar/>
        
        
        {/* Pages ka main content */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}