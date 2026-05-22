export type Photo = {
  id: number;
  src: string;
  alt: string;
  caption?: string;
};

export type CarouselPosition =
  | "center"
  | "right-1"
  | "left-1"
  | "right-far"
  | "left-far";
