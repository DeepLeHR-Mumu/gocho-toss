import { FunctionComponent } from "react";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { CompanyCardList } from "../../component/companyCardList";
import { title } from "./style";
import { CompanyListPartProps } from "./type";

export const CompanyListPart: FunctionComponent<CompanyListPartProps> = ({
  companyDataArr,
  isLoading,
  total,
  limit,
  page,
  setPage,
}) => {
  return (
    <section>
      <p css={title}>기업 정보 🏢</p>
      <CompanyCardList companyDataArr={companyDataArr} isLoading={isLoading} />
      <BottomPagination total={total || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
