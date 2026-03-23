"use client";

import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";

export default function AboutPage() {
  return (
    <main className="page-offset min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            I am a veteran film and commercial editor working as an AI-native creative partner for brands, filmmakers, and teams who need cinematic work that still holds up to real editorial, finishing, and delivery standards.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 border-y border-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-light mb-6 tracking-tight">
                Experience
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                With more than 25 years in post-production, I have cut feature films, television, promos, trailers, and commercial work where taste, pacing, and finish still matter. That editorial background is the foundation of everything I do now.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                My current focus is helping creative teams use AI as part of a serious filmmaking and commercial workflow, not as a gimmick. That means building image and sequence systems that can survive real client expectations, real revisions, and real delivery standards.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I work at the intersection of editorial judgment, sequence direction, and hybrid visual production — bringing structure to ideas that need to feel cinematic, original, and execution-ready. If you are specifically looking for an <a href="/ai-editor" className="text-white underline underline-offset-4 hover:text-gray-300">AI Sequence Editor</a> for film, commercial, or sequence-driven work, that is exactly the lane this site is built to support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light mb-12 text-center tracking-tight"
          >
            Approach
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: "Editorial Judgment First",
                description:
                  "I start from story, pacing, clarity, and emotional control. New tools are useful only if they strengthen the cut instead of distracting from it.",
              },
              {
                title: "AI With Standards",
                description:
                  "I use AI where it expands visual scope, speed, or iteration, but the end result still has to hold up like real premium post work, not a tech demo.",
              },
              {
                title: "Built for Real Production",
                description:
                  "The goal is not experimentation for its own sake. It is creating workflows, sequences, and deliverables that survive client review, finishing, and release pressure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-900 hover:border-gray-800 transition-colors"
              >
                <h3 className="text-xl font-light mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer email="aorton@mac.com" />
    </main>
  );
}
