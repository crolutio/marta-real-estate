/** About Spain hero — Barcelona clips (`public/videos/barcelona`). */

export const BARCELONA_HORIZONTAL_CLIPS = [
  "/videos/barcelona/barcelona-horizontal-1.mp4",
  "/videos/barcelona/barcelona-horizontal-2.mp4",
] as const;

export const BARCELONA_VERTICAL_CLIPS = [
  "/videos/barcelona/Barcelona-Vertical-1.mp4",
  "/videos/barcelona/Barcelona-Vertical-2.mp4",
] as const;

export type BarcelonaVideoPair = readonly [string, string];
