"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intro: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Website inquiry from ${formData.name || formData.email}`;
    const body = [
      `Name: ${formData.name || "Not provided"}`,
      `Email: ${formData.email}`,
      "",
      "Intro note:",
      formData.intro,
    ].join("\n");

    window.location.href = `mailto:aorton@mac.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="page-offset min-h-screen bg-black text-white">
      <section className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-4 tracking-tight"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-12 text-lg leading-relaxed"
          >
            If you need an AI editor, film editor, or AI-native creative partner for a commercial, sequence, proof-of-concept, or post-production workflow, send a quick note and it will open directly to my personal email.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-10 grid gap-4 sm:grid-cols-2"
          >
            <a
              href="mailto:aorton@mac.com"
              className="rounded-sm border border-gray-900 px-6 py-5 text-sm text-white transition-colors hover:border-gray-700"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Email</p>
              <p className="mt-2 text-base text-white">aorton@mac.com</p>
            </a>
            <a
              href="/Aron_Paul_Orton_Rate_Sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-gray-900 px-6 py-5 text-sm text-white transition-colors hover:border-gray-700"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Rate Sheet</p>
              <p className="mt-2 text-base text-white">Download PDF</p>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-light mb-2 text-gray-400 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-900 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-light mb-2 text-gray-400 uppercase tracking-wider"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-900 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="intro"
                className="block text-sm font-light mb-2 text-gray-400 uppercase tracking-wider"
              >
                Intro Note
              </label>
              <textarea
                id="intro"
                name="intro"
                required
                rows={6}
                value={formData.intro}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-900 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors resize-none"
                placeholder="A little about the project, timeline, and what kind of help you need..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black font-light tracking-wide hover:bg-gray-100 transition-colors duration-200 uppercase text-sm"
              >
                Open Email Draft
              </button>
              <a
                href="mailto:aorton@mac.com"
                className="px-8 py-4 border border-gray-900 text-white font-light tracking-wide hover:border-gray-700 transition-colors duration-200 uppercase text-sm text-center"
              >
                Email Directly
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              This opens your default mail app addressed to <span className="text-gray-300">aorton@mac.com</span> with your details already filled in.
            </p>
          </motion.form>
        </div>
      </section>

      <Footer email="aorton@mac.com" />
    </main>
  );
}
