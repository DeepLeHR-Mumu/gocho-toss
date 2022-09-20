import { FunctionComponent } from "react";
import { H2HeadingProps } from "./type";

export const H2Heading: FunctionComponent<H2HeadingProps> = ({ title }) => {
  return <h2>{title}</h2>;
};
