export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: string[];
  media: {
    hero: string;
    gallery?: string[];
    video?: string;
    btsVideo?: string;
    btsThumbnail?: string;
    // Inline side-by-side: human performance reference vs. final generated frame
    performanceVideo?: string;
    performancePoster?: string;
    performanceCaption?: string;
  };
  accolade?: string;
  client?: string;
  year?: string;
  // Optional new structure fields
  brief?: string;
  constraint?: string;
  direction?: string;
  execution?: string;
  outcome?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-chubbies-fall-into-my-arms",
    title: 'The Chubbies - "Fall Into My Arms"',
    summary: "An award-winning, cutting-edge exploration of where AI meets the human condition. \"Fall Into My Arms\" is a fully AI-generated music video about a mother and son pulled apart, and it lands because the emotion at its center is human. Every key beat began as a real performance captured on an iPhone, then was carried through a reference-driven AI pipeline across 61 shots, so the machine renders the world while a person supplies the heart.",
    problem: "The song lives in a mother-son dynamic that moves into painful emotional territory. The central challenge was getting a performance to transition inside a single shot, from anger to frustration to breakdown, without flattening into a single readable note. Prompted emotion consistently came back wooden and over-described, while multi-character reaction scenes introduced another layer of instability around power dynamics, eyelines, and group behavior.",
    approach: "The solution was to stop asking the model to invent the emotional arc from text alone. Jeannette performed each beat to her iPhone from specific planned framings, and those videos became reference-driven inputs for Seedance 2.0's performance replacement. The broader workflow paired character reference sheets, still-first shot development, model selection based on physics and control, Topaz upscaling for reframing latitude, and a traditional Resolve finishing pass to make the film feel coherent rather than generated.",
    deliverables: [
      "Final 3:25 music video built from 61 fully generated shots",
      "Reference-driven performance replacement workflow",
      "4K finished master upscaled from 1080 sources",
      "Case-study breakdown and BTS comparison assets",
    ],
    brief: "Create a 100% AI-generated music video for The Chubbies' \"Fall Into My Arms\" that could hold emotional weight, not just visual novelty. The piece needed to work as a finished film first, while also proving a serious AI pipeline could carry nuanced performance, continuity, and editorial rhythm over a full song.",
    constraint: "Prompting emotion directly was dead on arrival. The model could express one feeling at a time, but not transition cleanly between them inside a take. Performance references also needed to match the intended final framing; because the film was boarded after those references were recorded, weeks were lost working around angle, eyeline, and distance mismatches. Multi-character reaction scenes pushed the difficulty further, with four-person emotional dynamics remaining far less controllable than single-subject performance work.",
    direction: "The creative goal was to make the work feel emotionally inhabited rather than technically impressive. Every major choice leaned toward grounded performance, consistent character identity, and a finished-film sensibility instead of the default AI look. That meant designing shots from stills first, treating model choice as a creative decision rather than a brand preference, and finishing the piece with the same editorial and grading discipline used on live-action work.",
    execution: "The pipeline was character reference sheets to lock identity, iPhone performance reference to supply emotional timing, Seedance 2.0 for reference-driven video generation after an initial Veo 3.0 start, Topaz upscaling from 1080 to 4K for extra reframing room, then editorial and color finishing in DaVinci Resolve. Still images were used to lock composition, lighting, and wardrobe before expensive video generations. Seedance proved stronger for performance replacement and physical behavior, especially in demanding shots like the boy falling through black space. Resolve was essential for shaping continuity across the cut, softening the overly clean generative house look, and making 61 generated shots feel like one piece of cinema.",
    outcome: "The finished film was named an Official Selection of the 2026 Austin AI Film Festival, and it makes a clear argument about where this technology is headed: emotionally credible AI work depends less on clever prompting than on a real human performance at the core, the right framing logic, and post-production discipline. The side-by-side above is the proof. Every glance, hesitation, and breakdown in the final frame traces back to an actor's choice, not a text prompt. The hard lessons were blunt: board the film before collecting performance reference, lock identity with images early, and budget extra time for scenes with more than two people reacting in frame. The result stands as both a finished music video and a working blueprint for AI filmmaking that treats human performance as the load-bearing element.",
    media: {
      hero: "/images/the-chubbies-fall-into-my-arms-hero-v2.jpg",
      gallery: [
        "/images/the-chubbies-fall-into-my-arms-gallery-03.jpg",
        "/images/the-chubbies-fall-into-my-arms-gallery-04.jpg",
        "/images/the-chubbies-fall-into-my-arms-gallery-05.jpg",
        "/images/the-chubbies-fall-into-my-arms-gallery-06.jpg",
        "/images/the-chubbies-fall-into-my-arms-hero-v2.jpg",
        "/images/the-chubbies-fall-into-my-arms-gallery-02.jpg",
      ],
      video: "https://www.youtube.com/watch?v=qLtgGLj__Go",
      btsVideo: "https://d2ol7oe51mr4n9.cloudfront.net/user_2vJShxds21sGvyfsUDfkIPnjsrP/26b8ecd5-0cf3-465b-9454-5029afe24342.mp4",
      btsThumbnail: "/images/the-chubbies-fall-into-my-arms-gallery-02.jpg",
      performanceVideo: "/videos/fall-into-my-arms-performance-vs-generation.mp4",
      performancePoster: "/images/the-chubbies-fall-into-my-arms-performance-poster.jpg",
      performanceCaption: "Left: the final generated frame. Right: the iPhone performance it was built from. The emotional timing, gesture, and intensity all come from the actor; the AI pipeline carries that performance into the world of the film.",
    },
    client: "The Chubbies",
    year: "2026",
    accolade: "Official Selection · 2026 Austin AI Film Festival",
  },
  {
    slug: "reign-storm-energy-drink",
    title: "Reign Storm",
    summary: "A premium commercial proof-of-capability built with AI-driven worldbuilding, custom character consistency, and editorial discipline. Designed to show how a cinematic spot can scale beyond practical production limits without losing finish quality.",
    problem: "Client needed dramatic mountain environment enhancement for a high-energy commercial. Traditional VFX pipeline would require extensive compositing time and budget. Needed to maintain photorealistic quality while meeting tight deadlines.",
    approach: "Developed a fully AI-driven production pipeline with custom character LoRA training for consistent celebrity likeness. Environments, action beats, and performance moments were designed using traditional editorial principles with attention to continuity, pacing, and commercial-grade finish.",
    deliverables: [
      "Final commercial cut (30s, 15s, 6s versions)",
      "AI-enhanced environment plates",
      "Color-graded master files (Rec.709, HDR)",
      "Delivery package for broadcast and digital",
    ],
    brief: "Demonstrate the commercial potential of AI-driven visual production by creating a fully realized spot built around a high-profile celebrity and an environment that would be impractical to execute through traditional production due to time, cost, and logistical constraints.",
    constraint: "The concept required a cinematic world, controlled action, and a recognizable celebrity presence that would be extremely difficult to stage practically within realistic production limitations. The project also demanded consistent character likeness and performance continuity to meet the expectations associated with a globally known public figure.",
    direction: "The creative goal was to deliver a world-class, story-driven commercial that felt intentional and cinematic rather than experimental. Particular emphasis was placed on maintaining believable scale, grounded physicality, and consistent likeness for Hafþór Björnsson, ensuring the spot read as premium commercial storytelling rather than a technical demonstration.",
    execution: "A fully AI-driven production pipeline was developed and directed to support narrative control and visual consistency. To ensure reliable character likeness across all shots, a custom character LoRA was trained specifically for the project, allowing for consistent facial structure, proportions, and identity throughout the sequence. Environments, action beats, and performance moments were then designed and refined using traditional editorial principles, with close attention paid to continuity, pacing, and commercial-grade finish.",
    outcome: "The finished spot successfully demonstrated a production-ready application of AI for high-end commercial storytelling. Following delivery, the project was met with strong enthusiasm from the client, who ultimately acquired the spot. The result served as a proof-of-capability execution, validating AI as a viable tool for delivering premium commercial concepts that would otherwise be impossible to produce within conventional production constraints.",
    media: {
      hero: "/images/_ARONUPREZV2GWeightlifter_wide heroe_CLEANpng.png",
      gallery: [
        "/images/_ARONUPREZV2GWeightlifter_wide heroe_CLEANpng.png",
        "/images/Thor website Loop_01_00_36_23.jpg",
        "/images/Thor website Loop_01_00_39_00.jpg",
        "/images/Thor website Loop_01_00_50_21.jpg",
      ],
      video: "https://player.vimeo.com/video/1150867893",
    },
    year: "2024",
  },
  {
    slug: "b2k-concert-promo",
    title: "B2K Concert Promo",
    summary: "A concert promo built by layering AI-assisted VFX into locked editorial material without losing authenticity, rhythm, or broadcast discipline. The goal was not spectacle for its own sake, but a stronger, more elevated final piece.",
    problem: "Promo needed to capture high-energy concert atmosphere with limited original footage. Required visual enhancement that felt authentic to the live event while elevating the production value. Needed to work within established editorial timeline.",
    approach: "Integrated AI-generated particle effects and light treatments into live-action concert footage. Maintained editorial rhythm and pacing while adding visual interest. All effects were rendered through standard post pipeline to ensure broadcast compliance.",
    deliverables: [
      "Final promo cut (60s, 30s versions)",
      "AI-enhanced VFX elements",
      "Color-graded masters",
      "Social media adaptations",
    ],
    brief: "Create a high-energy concert promo that elevated production value while maintaining editorial integrity and broadcast compliance, using limited source material.",
    constraint: "Available live-action film and concert footage was limited and editorially locked. Visual enhancements needed to integrate seamlessly with the live performance, maintaining rhythm, authenticity, and broadcast compliance.",
    direction: "Under the creative direction of Chris Robinson, the goal was to push visual energy beyond traditional concert coverage while preserving authenticity. His foresight and openness to experimentation made it possible to responsibly introduce AI-assisted visual augmentation within a traditional post-production framework.",
    execution: "AI-driven VFX were strategically integrated with live-action footage to expand scope without expanding budget. Working within real production and time constraints, generative visuals were developed to enhance, not replace, the filmed material. AI car environments were created around the practical vehicle plates to elevate scale and atmosphere beyond what was captured on set. When the creative called for heightened psychological moments, such as pushing into a character's eye to reveal what was happening inside their mind, AI-generated internal visuals were designed and composited seamlessly into the editorial pipeline. All AI elements were treated as part of the cut, not post add-ons. Every effect was integrated, color-managed, refined, and delivered through standard post-production workflows to maintain cinematic quality and technical reliability.",
    outcome: "Delivered polished 60-second and 30-second promo cuts with elevated visual impact that amplified the energy of the live performance. The final pieces preserved editorial pacing and broadcast standards while demonstrating how emerging visual tools can be thoughtfully integrated into conventional film and television pipelines.",
    media: {
      hero: "/images/aronpaul_A_highly_realistic_wide_profile_shot_captures_a_vibr_49f9336b-6c66-41d2-944a-281253e70392_3 (1).png",
      gallery: [
        "/images/aronpaul_A_highly_realistic_wide_profile_shot_captures_a_vibr_49f9336b-6c66-41d2-944a-281253e70392_3 (1).png",
        "/images/70585b60-1020-4102-96f9-cd6f61bc33bf_ARON.png",
        "/images/a_cinematic_wide_drone_shot_with_the_camera_held_static_high_in_the_sky_and_tilted_downward_capturi_hdh1qagziuusp6yef4vf_1_ARON.png",
      ],
      video: "https://player.vimeo.com/video/1142431409",
    },
    year: "2024",
  },
  {
    slug: "film-title-sequences",
    title: "The Long Game",
    summary: "An AI-enhanced title sequence designed to establish neo-noir tone, place, and narrative pressure from the first frame. Built to make Silver Lake feel like part of the story, not just a location, while preserving editorial cohesion and cinematic restraint.",
    problem: "The title sequence had to accomplish two things immediately: Define the film's neo-noir tone. Establish Silver Lake as a character, not just a backdrop. The difficulty was avoiding exposition while still communicating genre, place, and emotional atmosphere. It needed to feel intentional and cinematic, not decorative. The sequence also had to integrate seamlessly into the existing editorial rhythm without disrupting pacing.",
    approach: "Developed a stylized neo-noir visual language using AI-assisted design elements refined through traditional editorial workflows. Focused on architectural texture, shadow contrast, controlled color palettes, and subtle motion to evoke East LA's tension and character. Typography and pacing were built to move with the edit, allowing the titles to breathe inside the cut rather than sit on top of it. The result is a sequence that sets tone, signals genre, and locates the audience geographically before dialogue begins.",
    deliverables: [
      "Title sequence masters (various formats)",
      "Typography and motion design assets",
      "Integration files for editorial",
      "Delivery packages per project specifications",
    ],
    media: {
      hero: "/images/THE_Method_6_30_2023-BETALOCK_COLORPREP_00_01_26_14.jpg",
      gallery: [
        "/images/THE_Method_6_30_2023-BETALOCK_COLORPREP_00_01_39_21.jpg",
        "/images/THE_Method_6_30_2023-BETALOCK_COLORPREP_00_01_51_03.jpg",
        "/images/THE_Method_6_30_2023-BETALOCK_COLORPREP_00_02_27_15.jpg",
      ],
      video: "https://player.vimeo.com/video/1068905537",
    },
    client: "Various Studios",
    year: "2023-2024",
  },
];
