"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WorkGrid from "../../src/components/WorkGrid";
import Footer from "../../src/components/Footer";
import VideoModal from "../../src/components/VideoModal";
import { workItems, WorkItem } from "../../src/content/work";

export default function WorkPage() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWorkItemClick = (item: WorkItem) => {
    if (item.videoUrl) {
      setSelectedWork(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay to allow modal animation to complete before clearing selected work
    setTimeout(() => {
      setSelectedWork(null);
    }, 200);
  };

  return (
    <main className="page-offset min-h-screen bg-black text-white">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-4 tracking-tight"
          >
            Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-12 text-lg"
          >
            A selection of recent projects and collaborations.
          </motion.p>
          <WorkGrid items={workItems} columns={3} onItemClick={handleWorkItemClick} />
        </div>
      </section>
      <Footer email="aorton@mac.com" />
      
      {/* Video Modal */}
      {selectedWork && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedWork.title}
          videoUrl={selectedWork.videoUrl}
          poster={selectedWork.thumb}
        />
      )}
    </main>
  );
}
