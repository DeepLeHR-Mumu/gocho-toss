import { CompanyRowProps } from "@/components/common/CompanyRow/type";

import { DetailSubContainerProps } from "../DetailSubContainer/type";

export type CompanyInfoProps = Omit<DetailSubContainerProps, "title"> & CompanyRowProps;
