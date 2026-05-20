import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import AboutSection from "./components/sections/AboutSection";
import InternshipSection from "./components/sections/InternshipSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return <HeroSection />;
}

function ServicesPage() {
  return <ServicesSection />;
}

function AboutPage() {
  return <AboutSection />;
}

function InternshipPage() {
  return <InternshipSection />;
}

function PortfolioPage() {
  return <PortfolioSection />;
}

function ContactPage() {
  return <ContactSection />;
}

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="bg-white pt-[72px] dark:bg-[#050816]">
      <Header dark={dark} setDark={setDark} />

      <ScrollToTop />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
