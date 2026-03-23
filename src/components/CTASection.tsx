import React from "react";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundColor?: "light" | "dark" | "gradient";
}

export default function CTASection({
  title,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundColor = "gradient",
}: CTASectionProps) {
  const bgClasses = {
    light: "bg-gray-50 dark:bg-gray-800",
    dark: "bg-gray-900 dark:bg-black",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  };

  const textColor =
    backgroundColor === "gradient" ? "text-white" : "text-gray-900 dark:text-white";

  return (
    <section className={`${bgClasses[backgroundColor]} py-20 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-xl mb-8 ${textColor} opacity-90`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCtaLink}
            className={`px-8 py-4 rounded-lg font-semibold transition-colors duration-200 ${
              backgroundColor === "gradient"
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {primaryCtaText}
          </Link>
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className={`px-8 py-4 rounded-lg font-semibold transition-colors duration-200 ${
                backgroundColor === "gradient"
                  ? "bg-white/10 text-white hover:bg-white/20 border-2 border-white"
                  : "bg-transparent text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-900 dark:border-white"
              }`}
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}





