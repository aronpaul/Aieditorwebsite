"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface VideoHoverCardProps {
  title: string;
  type: string;
  thumb: string;
  hoverVideo?: string;
  onClick?: () => void;
  href?: string; // For navigation links (e.g., to case studies)
}

export default function VideoHoverCard({
  title,
  type,
  thumb,
  hoverVideo,
  onClick,
  href,
}: VideoHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && hoverVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, hoverVideo]);

  const content = (
    <motion.div
      className="group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={!href ? onClick : undefined}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm bg-gray-900 cursor-pointer w-full">
        {/* Video or Image */}
        {hoverVideo && isHovered ? (
          <video
            ref={videoRef}
            src={hoverVideo}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setIsVideoLoaded(true)}
            style={{ opacity: isVideoLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          />
        ) : (
          <Image
            src={thumb}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="pt-3 text-left">
        <h3 className="text-sm md:text-[15px] font-medium text-white tracking-[0.02em]">
          {title}
        </h3>
      </div>
    </motion.div>
  );

  // If href is provided, wrap in Link for navigation
  if (href) {
    return (
      <Link href={href} aria-label={`View ${title}`}>
        {content}
      </Link>
    );
  }

  // Otherwise, use button for modal interaction
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left"
      aria-label={`Play ${title}`}
    >
      {content}
    </button>
  );
}


