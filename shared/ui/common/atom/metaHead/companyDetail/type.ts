import { MetaHeadProps } from "../type";

export interface CompanyDetailMetaHeadProps extends MetaHeadProps {
  companyDetail: {
    asPath: string;
    companyName: string;
  };
}
