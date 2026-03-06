"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/hero/Hero";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Experience } from "@/components/sections/Experience";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/common/SectionDivider";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen text-foreground">
        <NavBar />
        <Hero />

        {/* Selected Works Section */}
        <SectionDivider />
        <SelectedWorks />

        {/* Experience Timeline Section */}
        <SectionDivider />
        <Experience />

        {/* Insights & Blog + Contact Section */}
        <SectionDivider />
        <section className="relative w-full py-24">
          <div className="max-w-6xl mx-auto px-8">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full">
                <Insights />
              </div>
              <div className="w-full">
                <Contact />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SectionDivider />
        <Footer />
      </div>
    </>
  );
}
