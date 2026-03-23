"use client";

import { WorkItem } from "../content/work";
import VideoHoverCard from "./VideoHoverCard";

interface WorkGridProps {
  items: WorkItem[];
  columns?: 2 | 3 | 4;
  onItemClick?: (item: WorkItem) => void;
}

export default function WorkGrid({ items, columns = 3, onItemClick }: WorkGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8 lg:gap-10`}>
      {items.map((item) => (
        <VideoHoverCard
          key={item.id}
          title={item.title}
          type={item.type}
          thumb={item.thumb}
          hoverVideo={item.hoverVideo}
          href={item.href}
          onClick={item.href ? undefined : () => onItemClick?.(item)}
        />
      ))}
    </div>
  );
}
