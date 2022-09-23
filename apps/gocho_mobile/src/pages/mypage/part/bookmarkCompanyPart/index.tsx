import { FunctionComponent, useState } from "react";

import { useCompanyArr } from "shared-api/company";

import { BottomPagination } from "@component/molecule/bottomPagination";
import { CompanyCardList } from "../../component/companyCardList";

export const BookmarkCompanyPart: FunctionComponent = () => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const { data: companyDataArr, isLoading } = useCompanyArr({
    order: "recent",
    limit,
    offset: (page - 1) * limit,
  });

  return (
    <section>
      <CompanyCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isLoading} />
      <BottomPagination total={companyDataArr?.count || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
