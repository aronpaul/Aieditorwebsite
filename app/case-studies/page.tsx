"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "../../src/components/CaseStudyCard";
import Footer from "../../src/components/Footer";
import { caseStudies } from "../../src/content/caseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="page-offset min-h-screen bg-black text-white">
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-4 tracking-tight"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-10 text-lg max-w-3xl"
          >
            A closer look at how I approach editorial leadership, hybrid AI workflows, and premium post-production problem solving across commercial, promo, and film work.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer email="aorton@mac.com" />
    </main>
  );
}
