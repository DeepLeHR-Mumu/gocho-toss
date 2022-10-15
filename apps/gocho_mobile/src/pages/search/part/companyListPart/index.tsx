import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { CompanyCardList } from "../../component/companyCardList";
import { title } from "./style";
import { CompanyListPartProps } from "./type";

export const CompanyListPart: FunctionComponent<CompanyListPartProps> = ({
  companyDataArr,
  isLoading,
  total,
  limit,
}) => {
  const totalPage = Math.ceil(total / limit);
  const router = useRouter();

  return (
    <section>
      <p css={title}>기업 정보 🏢</p>
      <CompanyCardList companyDataArr={companyDataArr} isLoading={isLoading} />
      <BottomPagination totalPage={totalPage} linkObj={{ pathname: "/search", q: router.query.q as string }} />
    </section>
  );
};
