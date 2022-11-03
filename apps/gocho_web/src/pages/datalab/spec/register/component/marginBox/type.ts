import { ReactNode } from "react";

export interface ContainerBoxProps {
  optionObj: {
    marginLocation: "top" | "bottom";
    marginValue: number;
    maxWidth?: number;
  };
  children: ReactNode;
}
