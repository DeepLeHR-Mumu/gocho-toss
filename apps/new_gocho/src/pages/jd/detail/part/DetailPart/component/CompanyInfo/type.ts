import { CompanyRowProps } from "@/components/common/CompanyRow/type";

import { DetailSubContainerProps } from "../DetailSubContainer/type";

export interface CompanyInfoProps extends Omit<DetailSubContainerProps, "title"> {
  company: CompanyRowProps;
}
