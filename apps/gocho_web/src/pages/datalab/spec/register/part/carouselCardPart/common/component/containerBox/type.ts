import { ReactNode } from "react";

export interface ContainerBoxProps {
  optionObj: {
    location: "top" | "bottom";
    marginValue: number;
    maxWidth?: number;
  };
  children: ReactNode;
}
