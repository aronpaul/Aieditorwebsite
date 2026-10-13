"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../../src/components/Footer";
import VideoModal from "../../../src/components/VideoModal";
import { caseStudies } from "../../../src/content/caseStudies";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | undefined>(undefined);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const openVideo = (videoUrl: string | undefined, videoTitle: string) => {
    if (!videoUrl) return;
    setActiveVideoUrl(videoUrl);
    setActiveVideoTitle(videoTitle);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setActiveVideoUrl(undefined);
    setActiveVideoTitle("");
  };

  return (
    <main className="page-offset min-h-screen bg-black text-white">
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={caseStudy.media.hero}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center z-10">
            {caseStudy.client && caseStudy.year && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-light text-gray-400 mb-2 block tracking-wider"
              >
                {caseStudy.client} • {caseStudy.year}
              </motion.span>
            )}
            {caseStudy.accolade && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="inline-block mb-4 border border-white/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/90"
              >
                {caseStudy.accolade}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light mb-4 tracking-tight"
            >
              {caseStudy.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-black">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl px-6 py-14 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center text-gray-500 text-sm md:text-base leading-relaxed"
            >
              Each case study below shows how editorial strategy, visual problem solving, and AI-assisted workflows were shaped into work that could hold up under real production expectations.
            </motion.p>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center mt-10"
            >
              <div className="max-w-3xl px-6">
                <h3 className="!text-center text-2xl font-light mb-4">Project Overview</h3>
                <p className="!text-center text-sm text-neutral-300 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>
            </motion.section>

            {/* Performance vs. Generation (inline side-by-side) */}
            {caseStudy.media.performanceVideo && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full flex justify-center mt-16"
              >
                <div className="w-full max-w-5xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                    Performance → Generation
                  </p>
                  <h3 className="!text-center text-2xl md:text-3xl font-light mb-6">
                    The Human Behind the Frame
                  </h3>
                  <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-gray-900 bg-black">
                    <video
                      className="absolute inset-0 h-full w-full object-contain"
                      src={caseStudy.media.performanceVideo}
                      poster={caseStudy.media.performancePoster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                    />
                  </div>
                  {caseStudy.media.performanceCaption && (
                    <p className="max-w-3xl mx-auto mt-4 !text-center text-sm text-neutral-400 leading-relaxed">
                      {caseStudy.media.performanceCaption}
                    </p>
                  )}
                </div>
              </motion.section>
            )}

            {/* New Structure: Brief, Constraint, Direction, Execution, Outcome */}
            {caseStudy.brief ? (
              <>
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="w-full flex justify-center mt-16"
                >
                  <div className="w-full max-w-6xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                      
                      {/* LEFT COLUMN */}
                      <div className="space-y-48">
                        {/* Brief */}
                        <div>
                          <h3 className="text-3xl font-light text-center mb-6">The Brief</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                            {caseStudy.brief}
                          </p>
                        </div>

                        {/* Direction */}
                        <div>
                          <h3 className="text-3xl font-light text-center mb-6">The Direction</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                            {caseStudy.direction}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="space-y-48">
                        {/* Constraint */}
                        <div>
                          <h3 className="text-3xl font-light text-center mb-6">The Constraint</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                            {caseStudy.constraint}
                          </p>
                        </div>

                        {/* Execution */}
                        <div>
                          <h3 className="text-3xl font-light text-center mb-6">The Execution</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                            {caseStudy.execution}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.section>

                {/* Outcome (full width) */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-full flex justify-center mt-24"
                >
                  <div className="max-w-3xl px-6">
                    <h3 className="!text-center text-2xl font-light mb-4">The Outcome</h3>
                    <p className="!text-center text-sm text-neutral-300 leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>
                </motion.section>
              </>
            ) : (
              /* Fallback to original structure */
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full flex justify-center mt-16"
              >
                <div className="w-full max-w-6xl px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                    
                    {/* LEFT COLUMN */}
                    <div className="space-y-48">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-3xl font-light text-center mb-6">The Challenge</h3>
                        <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                          {caseStudy.problem}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-48">
                      {/* Approach */}
                      <div>
                        <h3 className="text-3xl font-light text-center mb-6">The Approach</h3>
                        <p className="text-sm text-neutral-300 leading-relaxed text-left max-w-xl mx-auto">
                          {caseStudy.approach}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.section>
            )}

            {/* Deliverables */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center mt-24"
            >
              <div className="max-w-3xl px-6">
                <h3 className="!text-center text-2xl font-light mb-6">Deliverables</h3>
                <ul className="!text-center text-sm text-neutral-300 space-y-2">
                  {caseStudy.deliverables.map((deliverable, index) => (
                    <li key={index}>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Video */}
            {(caseStudy.media.video || caseStudy.media.btsVideo) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {caseStudy.media.video && (
                    <button
                      onClick={() => openVideo(caseStudy.media.video, `${caseStudy.title} - Final Film`)}
                      className="group relative w-full aspect-video overflow-hidden rounded-sm border border-gray-900 hover:border-gray-800 transition-colors text-left"
                    >
                      <Image
                        src={caseStudy.media.hero}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Watch</p>
                        <p className="mt-2 text-lg font-light text-white">Final Film</p>
                      </div>
                    </button>
                  )}
                  {caseStudy.media.btsVideo && (
                    <button
                      onClick={() =>
                        openVideo(caseStudy.media.btsVideo, `${caseStudy.title} - BTS Comparison`)
                      }
                      className="group relative w-full aspect-video overflow-hidden rounded-sm border border-gray-900 hover:border-gray-800 transition-colors text-left"
                    >
                      <Image
                        src={
                          caseStudy.media.btsThumbnail ||
                          caseStudy.media.gallery?.[1] ||
                          caseStudy.media.hero
                        }
                        alt={`${caseStudy.title} behind the scenes`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Watch</p>
                        <p className="mt-2 text-lg font-light text-white">BTS Comparison</p>
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            {caseStudy.media.gallery && caseStudy.media.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-light mb-6">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.media.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video overflow-hidden rounded-sm border border-gray-900"
                    >
                      <Image
                        src={image}
                        alt={`${caseStudy.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-900"
            >
              <Link
                href="/case-studies"
                className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                ← Back to Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer email="aorton@mac.com" />

      {/* Video Modal */}
      {(caseStudy.media.video || caseStudy.media.btsVideo) && (
        <VideoModal
          videoUrl={activeVideoUrl}
          title={activeVideoTitle || caseStudy.title}
          isOpen={isVideoOpen}
          onClose={closeVideo}
          poster={caseStudy.media.hero}
        />
      )}
    </main>
  );
}
