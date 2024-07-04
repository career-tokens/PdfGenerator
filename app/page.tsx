import ScrollUp from "../components/landing/Common/ScrollUp";
import Features from "../components/landing/Features";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import LogoMarquee from "../components/landing/LogoMarquee";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import Video from "../components/landing/Video";
import { Metadata } from "next";
import TwoColumnFooter from "../components/landing/syntaxui/Footer";

export const metadata: Metadata = {
  title: "PDFternity",
  description: "PDFternity is the new way to build stellar resumes",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <LogoMarquee/>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      {/* <Blog />
      <Contact /> */}
      <TwoColumnFooter/>
    </>
  );
}
