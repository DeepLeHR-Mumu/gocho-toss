import { RequestObjDef } from "@/apis/company/useWriteCompanyComment/type";

export interface ReviewPartProps {
  title: string;
  company: { id: number; logoUrl: string | null; name: string };
  jdId: number;
}

export type CompanyCommentFormValues = Pick<RequestObjDef, "description">;
