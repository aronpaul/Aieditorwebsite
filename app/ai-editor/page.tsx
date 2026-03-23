import { Metadata } from "next";
import Link from "next/link";
import Footer from "../../src/components/Footer";

export const metadata: Metadata = {
  title: "AI Editor | Aron Paul Orton",
  description:
    "AI editor for film, commercial, promo, and sequence-driven work. Aron Paul Orton combines veteran editorial judgment with AI-native workflows and premium post standards.",
};

export default function AIEditorPage() {
  return (
    <main className="page-offset min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-gray-900 min-h-[70vh] md:min-h-[78vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ai-editor-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/45 to-black/30" />

        <div className="relative z-10 flex min-h-[70vh] md:min-h-[78vh] items-center">
          <div className="max-w-5xl mx-auto w-full px-8 md:px-14 lg:px-20 xl:px-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-white/70">
                AI Editor · Editorial Direction · Premium Post Workflow
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[0.92]">
                AI Editor for Film, Commercial, and Sequence Work
              </h1>
              <p className="text-xl text-white/78 leading-relaxed max-w-3xl">
                I help brands, filmmakers, agencies, and creative teams use AI inside a serious editorial workflow — building cinematic work that still holds up to real post-production, finishing, and delivery standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-8 md:px-14 lg:px-20 xl:px-24 grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-light mb-5 tracking-tight">What I do as an AI editor</h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              My work sits between traditional editing craft and AI-native creative production. That includes sequence development, AI-assisted visual workflows, editorial shaping, pacing, shot-system design, and helping projects move from proof-of-concept into work that can survive client review and real-world delivery.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In practice, that means I am not using AI as a gimmick. I am using it to expand what a commercial, trailer, film sequence, or branded piece can become while still protecting taste, rhythm, clarity, and finish quality.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-light mb-5 tracking-tight">Who this is for</h2>
            <ul className="space-y-4 text-gray-400 leading-relaxed">
              <li>Brands that want AI-enhanced commercial work without losing premium finish.</li>
              <li>Filmmakers building proofs of concept, title sequences, visual systems, or hybrid post workflows.</li>
              <li>Agencies and creative teams that need an editor who understands both story and new tools.</li>
              <li>Projects that need AI-native direction but still require real editorial judgment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-8 md:px-14 lg:px-20 xl:px-24">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Why this approach works</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="border border-gray-900 p-8">
              <h3 className="text-xl font-light mb-4 tracking-tight">Editorial judgment</h3>
              <p className="text-gray-400 leading-relaxed">
                More than 25 years of film, television, promo, trailer, and commercial editing experience means the work starts with story, pacing, and performance — not just tools.
              </p>
            </div>
            <div className="border border-gray-900 p-8">
              <h3 className="text-xl font-light mb-4 tracking-tight">AI-native workflows</h3>
              <p className="text-gray-400 leading-relaxed">
                I build practical systems that use AI for image, sequence, and visual expansion while staying usable inside real production timelines.
              </p>
            </div>
            <div className="border border-gray-900 p-8">
              <h3 className="text-xl font-light mb-4 tracking-tight">Premium standards</h3>
              <p className="text-gray-400 leading-relaxed">
                The goal is not novelty. It is cinematic work that feels intentional, polished, and ready for client, brand, or release pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8 md:px-14 lg:px-20 xl:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Need an AI editor who still thinks like an editor?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            If your project needs a mix of editorial judgment, AI-native sequence thinking, and premium execution, let’s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white text-white uppercase text-sm tracking-[0.18em] hover:bg-white hover:text-black transition-colors"
          >
            Start a conversation <span>→</span>
          </Link>
        </div>
      </section>

      <Footer email="aorton@mac.com" />
    </main>
  );
}
