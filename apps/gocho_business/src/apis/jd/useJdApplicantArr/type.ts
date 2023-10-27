import { PageResultDef } from "shared-type/api/paginationType";

import { JdApplicant } from "../type";
import { selector } from "./util";

export interface RequestObjDef {
  jdId?: number;
  order?: "recent" | "read" | "unread";
  page?: number;
  size?: number;
}

export interface ResponseObjDef {
  data: JdApplicant[];
  page_result: PageResultDef;
}

export interface GetJdApplicantArrDef {
  (requestObj: RequestObjDef): Promise<ResponseObjDef>;
}

export const jdApplicantArrKeyObj = {
  all: [{ data: "jdApplicantArr" }] as const,
  applicantArr: (requestObj: RequestObjDef) => [{ data: "jdApplicantArr", requestObj }] as const,
};

export type SelectorJdApplicant = ReturnType<typeof selector>;
