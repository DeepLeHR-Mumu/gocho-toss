import { FunctionComponent } from "react";
import { wrapper } from "./style";
import { CertificateBoxProps } from "./type";

export const CertificateBox: FunctionComponent<CertificateBoxProps> = ({
  value,
}) => {
  return <li css={wrapper}>{value}</li>;
};
