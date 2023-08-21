import { MouseEventHandler } from "react";

export interface CompanyCardProps {
  logoSrc: string;
  name: string;
  hashTagArr?: string[];
  buttonHandler?: MouseEventHandler<HTMLButtonElement>;
}
