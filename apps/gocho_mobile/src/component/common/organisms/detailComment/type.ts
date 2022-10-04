import { Dispatch, SetStateAction } from "react";

export interface DetailCommentProps {
  detailData: {
    companyId: number;
    name: string;
    logoUrl: string;
  } | null;
  setOpenComment: Dispatch<SetStateAction<boolean>>;
}
