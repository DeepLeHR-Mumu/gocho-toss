import { MouseEventHandler } from "react";

export interface CompanyRowProps {
  logo: string;
  name: string;
  size: string;
  industry: string;
  follow: { state: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  onClick?: MouseEventHandler<HTMLDivElement>;
}
