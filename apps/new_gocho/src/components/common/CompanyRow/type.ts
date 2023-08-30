import { MouseEventHandler } from "react";

export interface CompanyRowProps {
  id: number;
  logo: string;
  name: string;
  size: string;
  industry: string;
  follow?: { state: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  border?: boolean;
}
