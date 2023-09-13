import { FunctionComponent } from "react";
import { Pagination } from "@/components";

import { cssObj } from "./style";
import { CompanyListFooterProps } from "./type";

export const CompanyListFooter: FunctionComponent<CompanyListFooterProps> = ({ totalPages }) => (
    <div css={cssObj.footerBox}>
      <Pagination totalPage={totalPages || 0} />
    </div>
  );
