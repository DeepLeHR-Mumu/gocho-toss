import { Dispatch, SetStateAction } from "react";

export interface DetailCommentProps {
  jdId: number | null;
  detailData: {
    companyId: number;
    name: string;
    title: string;
    logoUrl: string;
  } | null;
  setOpenComment: Dispatch<SetStateAction<boolean>>;
}
