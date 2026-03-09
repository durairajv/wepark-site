"use client";
import { useScrollReveal, useCountUp, useCustomCursor, useParallax, useScrollProgress } from "@/lib/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductDetails from "@/components/ProductDetails";
import HowItWorks from "@/components/HowItWorks";
import Safety from "@/components/Safety";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import ForBuilders from "@/components/ForBuilders";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  useScrollReveal();
  useCountUp();
  useCustomCursor();
  useParallax();
  useScrollProgress();

  return (
    <main className="overflow-x-hidden bg-wp-black">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductDetails />
      <HowItWorks />
      <Safety />
      <Stats />
      <CaseStudies />
      <ForBuilders />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
