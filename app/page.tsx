"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import LogoStrip from "../src/components/LogoStrip";
import WorkGrid from "../src/components/WorkGrid";
import CaseStudyCard from "../src/components/CaseStudyCard";
import Footer from "../src/components/Footer";
import Shell from "../src/components/Shell";
import { workItems } from "../src/content/work";
import { caseStudies } from "../src/content/caseStudies";

const Hero3D = dynamic(() => import("../src/components/Hero3D"), {
  ssr: false,
});

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredWork = workItems.filter((item) => item.featured).slice(0, 4);
  const featuredCaseStudies = caseStudies.slice(0, 4);

  const clientLogos = [
    "Netflix",
    "Disney",
    "Universal Studios",
    "Meta",
    "A Bigger Boat Productions",
  ];

  const services = [
    {
      title: "AI Sequence Direction",
      description:
        "I design sequence-level visual systems that combine story, shot construction, and AI-enhanced execution without losing editorial control or cinematic intent.",
    },
    {
      title: "Editorial Leadership",
      description:
        "I bring 25+ years of film, television, promo, and commercial editing experience to projects that still need rhythm, performance judgment, and a real finishing standard.",
    },
    {
      title: "Hybrid Production Workflows",
      description:
        "I build practical bridges between traditional post and emerging AI tools so teams can move faster, expand scope, and still deliver work that feels premium and production-ready.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy + Editorial Read",
      description:
        "I start by identifying the real creative objective, the editorial pressure points, and where AI can expand the work without compromising clarity, taste, or delivery realities.",
    },
    {
      step: "02",
      title: "Visual System Design",
      description:
        "From look development to shot logic, I help define the visual rules that keep a project coherent across live action, AI generation, VFX-assisted workflows, and finishing.",
    },
    {
      step: "03",
      title: "Build + Refine",
      description:
        "Sequences are developed with editorial discipline, tested against continuity and performance, and refined until the work feels intentional rather than experimental.",
    },
    {
      step: "04",
      title: "Finish for the Real World",
      description:
        "The final stage is about making the work hold up under actual delivery standards — color, polish, versioning, and presentation that can survive client review, broadcast, or release.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[82vh] md:min-h-[88vh] overflow-hidden border-b border-white/8">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
        <div className="relative z-10 w-full min-h-[82vh] md:min-h-[88vh] flex items-center pt-20 md:pt-24 pb-10">
          <Shell>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-white/75">
                Film editor • AI editor • sequence direction
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-light leading-[0.9] tracking-[-0.05em] text-white max-w-[11ch]">
                AI-native direction with veteran editorial judgment.
              </h1>
              <p className="mt-8 text-xl md:text-[1.65rem] leading-relaxed text-white/82 max-w-2xl">
                I help brands, filmmakers, and creative teams build cinematic,
                AI-enhanced work that can survive real post-production,
                finishing, and delivery standards.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-10 py-4 border border-white/60 text-white font-light tracking-[0.18em] hover:bg-white hover:text-black transition-colors duration-200 uppercase text-sm"
                >
                  Start a Conversation
                </button>
                <a
                  href="/ai-editor"
                  className="px-10 py-4 text-white/78 font-light tracking-[0.18em] hover:text-white transition-colors duration-200 uppercase text-sm"
                >
                  View AI Editor Page →
                </a>
              </div>
              <p className="mt-8 text-[11px] md:text-[12px] uppercase tracking-[0.24em] text-white/65">
                25+ years across film, television, commercial, and hybrid AI workflows
              </p>
            </motion.div>
          </Shell>
        </div>
      </section>

      <LogoStrip logos={clientLogos} title="Selected Credits" />

      <section className="py-32 md:py-40 bg-[#050505]">
        <Shell>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-14 md:mb-16 tracking-tight"
          >
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-10 md:p-12 border border-white/8 bg-[#0a0a0a] min-h-[220px]"
              >
                <h3 className="text-2xl md:text-[1.85rem] font-light mb-5 tracking-tight max-w-[14ch]">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-[34ch]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-28 md:py-36 bg-[#080808] border-y border-white/6">
        <Shell>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Case Studies
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
              A closer look at how editorial strategy, AI-assisted workflows,
              and premium finishing discipline show up in real project work.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {featuredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-32 md:py-40 bg-[#050505]">
        <Shell>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Process
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
              The workflow is built to keep creative ambition and production reality in the same room.
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto space-y-14">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12"
              >
                <div>
                  <span className="text-3xl md:text-4xl font-light text-gray-600">
                    {item.step}
                  </span>
                </div>
                <div className="border-l border-white/8 pl-8 md:pl-12">
                  <h3 className="text-2xl md:text-[1.85rem] font-light mb-4 tracking-tight max-w-[18ch]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-[44ch]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-28 md:py-36 bg-[#080808] border-y border-white/6">
        <Shell>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Selected Work
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
              Commercial, promo, and title-sequence work shaped through editorial thinking and AI-native expansion.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <WorkGrid items={featuredWork} columns={2} />
          </div>
        </Shell>
      </section>

      <section className="py-32 md:py-36 bg-[#050505]">
        <Shell className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-8 tracking-tight"
          >
            Looking for a partner who understands both craft and new tools?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-10 text-xl md:text-2xl max-w-4xl leading-relaxed"
          >
            If you are building a film, campaign, sequence, or proof-of-concept that needs editorial judgment and AI-native execution, let’s talk. If you want the clearest version of that positioning, visit the <a href="/ai-editor" className="text-white underline underline-offset-4 hover:text-gray-300">AI Editor</a> page.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/Aron_Paul_Orton_Rate_Sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-colors duration-200 uppercase text-sm"
          >
            Download Rate Sheet PDF
          </motion.a>
        </Shell>
      </section>

      <section
        ref={contactRef}
        className="py-36 md:py-44 bg-[#080808] border-y border-white/6"
      >
        <Shell className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-8 tracking-tight"
          >
            Start the conversation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="pt-4"
          >
            <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-light tracking-wide hover:bg-gray-100 transition-colors duration-200 uppercase text-sm text-center">
              Open Contact Form
            </a>
          </motion.div>
        </Shell>
      </section>

      <Footer email="aorton@mac.com" />
    </main>
  );
}
