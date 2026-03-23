export interface WorkItem {
  id: string;
  title: string;
  type: string;
  thumb: string;
  videoUrl?: string; // Full video URL (local MP4/WebM or Vimeo embed URL)
  hoverVideo?: string; // Short muted loop for hover preview
  href?: string; // Link to case study page (if provided, navigates instead of opening modal)
  featured?: boolean;
}

export const workItems: WorkItem[] = [
  // First row: Match case studies (open videos in modal)
  {
    id: "1",
    title: "Reign Storm",
    type: "Commercial",
    thumb: "/images/_ARONUPREZV2GWeightlifter_wide heroe_CLEANpng.png",
    videoUrl: "https://vimeo.com/1150867893",
    featured: true,
  },
  {
    id: "2",
    title: "B2K Concert Promo",
    type: "Promo",
    thumb: "/images/aronpaul_A_highly_realistic_wide_profile_shot_captures_a_vibr_49f9336b-6c66-41d2-944a-281253e70392_3 (1).png",
    videoUrl: "https://vimeo.com/1142431409",
    featured: true,
  },
  {
    id: "3",
    title: "The Long Game",
    type: "Titles",
    thumb: "/images/THE_Method_6_30_2023-BETALOCK_COLORPREP_00_01_26_14.jpg",
    videoUrl: "https://vimeo.com/1068905537",
    featured: true,
  },
  // Second row: Vimeo video (opens in modal)
  {
    id: "4",
    title: "Spec / Concept Sequence",
    type: "Video",
    thumb: "/images/Spec Sopt Image.jpg",
    videoUrl: "https://vimeo.com/1108484403",
    featured: true,
  },
];
