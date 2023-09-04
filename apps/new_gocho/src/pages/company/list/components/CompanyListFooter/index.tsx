import { FunctionComponent } from "react";
import { Pagination } from "@/components";

import { cssObj } from "./style";

interface CompanyListFooterProps {
  totalPages: number | undefined;
}

export const CompanyListFooter: FunctionComponent<CompanyListFooterProps> = ({ totalPages }) => {
  return (
    <div css={cssObj.footerBox}>
      <Pagination totalPage={totalPages || 0} />
    </div>
  );
};
