import { ReactNode } from "react";

export interface DetailContents {
  [key: string]: ReactNode;
}

export interface DetailSubContainerProps {
  title: string;
  contents: DetailContents;
}
