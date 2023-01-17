export type ColorType = "lightGray" | "gray" | "blue";

export interface InternalLinkProps {
  fontColor: ColorType;
  text: string;
  internalUrl: string;
  externalUrl?: never;
  iconLocation: "left" | "right";
}

export interface ExternalLinkProps {
  fontColor: ColorType;
  text: string;
  internalUrl?: never;
  externalUrl: string;
  iconLocation?: never;
}
