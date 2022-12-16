export interface LinkProps {
  text: string;
  type: "externalLink" | "internalLink";
  url: string;
  onClick?: never;
}

export interface ButtonProps {
  text: string;
  type: "button";
  url?: never;
  onClick: () => void;
}
