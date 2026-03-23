"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
  poster?: string;
}

// Check if URL is a Vimeo URL
const isVimeoUrl = (url: string): boolean => {
  return /vimeo\.com/.test(url);
};

// Extract Vimeo video ID and create embed URL
const getVimeoEmbedUrl = (url: string): string => {
  const match = url.match(/(?:vimeo\.com\/)(?:.*\/)?(\d+)/);
  if (match && match[1]) {
    return `https://player.vimeo.com/video/${match[1]}?autoplay=1&muted=0&title=0&byline=0&portrait=0`;
  }
  return url;
};

export default function VideoModal({
  isOpen,
  onClose,
  title,
  videoUrl,
  poster,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Disable body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Reset video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoLoaded(false);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  if (!videoUrl) {
    return null;
  }

  const isVimeo = isVimeoUrl(videoUrl);
  const vimeoEmbedUrl = isVimeo ? getVimeoEmbedUrl(videoUrl) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Close video modal"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Title */}
              <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm px-4 py-2 rounded">
                <h2 id="video-modal-title" className="text-white text-lg font-semibold">
                  {title}
                </h2>
              </div>

              {/* Video Content */}
              <div className="relative aspect-video bg-black">
                {isVimeo && vimeoEmbedUrl ? (
                  <iframe
                    src={vimeoEmbedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={title}
                  />
                ) : (
                  <>
                    {poster && !isVideoLoaded && (
                      <div className="absolute inset-0">
                        <Image
                          src={poster}
                          alt={title}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      src={videoUrl}
                      controls
                      autoPlay
                      playsInline
                      poster={poster}
                      className="absolute inset-0 w-full h-full object-contain"
                      onLoadedData={() => setIsVideoLoaded(true)}
                      style={{ opacity: isVideoLoaded ? 1 : 0, transition: "opacity 0.3s" }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
