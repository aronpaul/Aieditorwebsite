import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  videoUrl?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage,
  videoUrl,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      {videoUrl && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {subtitle && (
          <p className="text-lg md:text-xl mb-4 font-medium tracking-wide uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            {description}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaLink}
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}





