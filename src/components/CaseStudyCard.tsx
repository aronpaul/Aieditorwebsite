import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "../content/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <motion.div
        className="group block overflow-hidden rounded-sm bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors duration-300 h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={caseStudy.media.hero}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-7 md:p-8">
          {(caseStudy.client || caseStudy.year) && (
            <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-3">
              {[caseStudy.client, caseStudy.year].filter(Boolean).join(" • ")}
            </p>
          )}
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors tracking-tight">
            {caseStudy.title}
          </h3>
          <p className="text-[14px] text-gray-400 line-clamp-3 leading-relaxed max-w-[40ch]">
            {caseStudy.summary}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
