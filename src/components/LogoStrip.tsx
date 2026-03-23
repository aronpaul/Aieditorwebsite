"use client";

import { motion } from "framer-motion";
import Shell from "./Shell";

interface LogoStripProps {
  logos: string[];
  title?: string;
}

export default function LogoStrip({ logos, title }: LogoStripProps) {
  return (
    <section className="py-12 md:py-16 bg-black border-y border-gray-900">
      <Shell>
        {title && (
          <h2 className="text-center text-[11px] font-medium text-gray-500 mb-10 md:mb-12 tracking-[0.28em] uppercase">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 lg:gap-x-20">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="text-gray-500 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="text-[13px] md:text-[15px] font-light tracking-[0.14em] uppercase">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
