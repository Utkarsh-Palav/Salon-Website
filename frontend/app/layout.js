import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/ui/Navbar/Navbar";
import Footer from "@/ui/footer/Footer";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // choose the weights you need
  style: ["normal", "italic"],
  variable: "--font-montserrat", // optional if you want to use CSS variable
});

export const metadata = {
  metadataBase: new URL("https://pooja-salon.vercel.app"),
  
  title: "Pooja Salon | AI-Powered Beauty & Styling",
  description: "Experience the future of beauty at Pooja Salon. Our AI-powered salon provides personalized styling, premium treatments, and world-class beauty services.",
  keywords: ["Pooja Salon", "Hair Salon", "AI-Powered Salon", "Beauty Parlor", "Hair Styling", "Bridal Makeup", "Salon Near Me"],
  authors: [{ name: "Utkarsh Palav" }],
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://pooja-salon.vercel.app/",
    title: "Pooja Salon | AI-Powered Beauty & Styling",
    description: "Experience the future of beauty at Pooja Salon. Our AI-powered salon provides personalized styling and premium treatments.",
    siteName: "Pooja Salon",
    images: [
      {
        url: "/preview.webp", // Next.js automatically prepends the metadataBase URL
        width: 1200,
        height: 630,
        alt: "Pooja Salon Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pooja Salon | AI-Powered Beauty & Styling",
    description: "Experience the future of beauty at Pooja Salon. Our AI-powered salon provides personalized styling.",
    images: ["/preview.webp"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon", // Highly specific schema type for better Google Local ranking
    "name": "Pooja Salon",
    "image": "https://pooja-salon.vercel.app/preview.webp",
    "description": "AI-Powered Beauty & Styling Salon offering premium treatments and personalized makeovers.",
    "url": "https://pooja-salon.vercel.app",
    "telephone": "+91-7208451005", // Add your client's contact number
    "priceRange": "Rs.50", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 13, Ramchandra Plaza", // Update with real address
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "401105",
      "addressCountry": "IN"
    }
  };
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
          <head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </head>
        <body className={montserrat.className}>
          <Navbar />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
