export type ColorType = "lightGray" | "gray" | "lightBlue" | "blue";

export interface InternalLinkProps {
  colorVariation: ColorType;
  text: string;
  internalUrl: string;
  externalUrl?: never;
  iconLocation: "left" | "right";
  isFullWidth?: boolean;
}

export interface ExternalLinkProps {
  colorVariation: ColorType;
  text: string;
  internalUrl?: never;
  externalUrl: string;
  iconLocation?: never;
  isFullWidth?: boolean;
}
