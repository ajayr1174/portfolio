"use client";

import type { ReactNode } from "react";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Insights } from "@/components/sections/Insights";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { TechStack } from "@/components/sections/TechStack";
import { SectionDivider } from "@/components/common/SectionDivider";

interface HomeSectionDefinition {
  id: string;
  render: () => ReactNode;
}

const HOME_SECTIONS: HomeSectionDefinition[] = [
  {
    id: "works",
    render: () => <SelectedWorks />,
  },
  {
    id: "about",
    render: () => <Experience />,
  },
  {
    id: "stack",
    render: () => <TechStack />,
  },
  {
    id: "insights",
    render: () => (
      <section className="relative w-full py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="w-full flex flex-col gap-12">
            <div className="w-full">
              <Insights />
            </div>
            <div id="contact" className="w-full scroll-mt-28">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    ),
  },
];

export function HomeSections() {
  return (
    <>
      {HOME_SECTIONS.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-[5.5rem]">
          <SectionDivider />
          {section.render()}
        </div>
      ))}
    </>
  );
}
