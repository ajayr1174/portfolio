"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/common/SectionDivider";
import { HomeSections } from "@/app/home/HomeSections";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen text-foreground">
        <NavBar />
        <Hero />
        <HomeSections />
        <SectionDivider />
        <Footer />
      </div>
    </>
  );
}
