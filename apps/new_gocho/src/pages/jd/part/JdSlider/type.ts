export interface JdSliderProps {
  title: string;
  order: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter: "todayUpload" | "deadline" | "valid";
}
