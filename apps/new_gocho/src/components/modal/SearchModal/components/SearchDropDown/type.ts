import { MouseEventHandler } from "react";

export interface SearchDropDownProps {
  defaultValue?: string;
  recentWordArr?: string[];
  searchHandler?: (searchText: string) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
}
