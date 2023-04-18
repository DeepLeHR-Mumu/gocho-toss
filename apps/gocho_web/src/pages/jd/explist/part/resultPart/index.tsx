import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";
import { JOBS_EXPLIST_URL } from "shared-constant";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { ExpJobCardList } from "./component/expJobCardList";
import { OrderDef } from "../../type";
import { noDataBox, noDataDesc } from "./style";

export const ResultPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyData, isLoading } = useCompanyArr({
    q: router.query.q as string,
    order: router.query.order as OrderDef,
    page: Number(router.query.page),
    size: 10,
  });

  return (
    <div>
      {companyData?.pageResult.totalElements === 0 ? (
        <div css={noDataBox}>
          <p css={noDataDesc}>검색결과가 없습니다 👀</p>
        </div>
      ) : (
        <>
          <ExpJobCardList companyDataArr={companyData?.companyDataArr} isLoading={isLoading} />
          {companyData && (
            <BottomPagination
              linkObj={{
                pathname: JOBS_EXPLIST_URL,
              }}
              totalPage={companyData?.pageResult.totalPages}
            />
          )}
        </>
      )}
    </div>
  );
};
