export interface LinkProps {
  text: string;
  type: "externalLink" | "internalLink";
  url: string;
  onClickHandler?: never;
}

export interface ButtonProps {
  text: string;
  type: "button";
  url?: never;
  onClickHandler: () => void;
}
