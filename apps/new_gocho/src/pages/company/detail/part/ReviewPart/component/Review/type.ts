import { CompanyCommentDef } from "@/apis/company/type/companyCommentArr";

export interface ReviewProps {
  companyId: number;
  comment: CompanyCommentDef;
  isMyComment: boolean;
}
