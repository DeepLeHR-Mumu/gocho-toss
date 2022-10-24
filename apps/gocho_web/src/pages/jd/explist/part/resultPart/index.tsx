import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";
import { JOBS_EXPLIST_URL } from "shared-constant/internalURL";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { ExpJobCardList } from "./component/expJobCardList";
import { OrderDef } from "../../type";
import { noDataBox, noDataDesc } from "./style";

export const ResultPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDataArr, isLoading } = useCompanyArr({
    q: router.query.q as string,
    order: router.query.order as OrderDef,
    limit: 10,
    offset: (Number(router.query.page) - 1) * 10,
  });

  const totalPage = companyDataArr?.count ? Math.ceil(companyDataArr.count / 10) : 0;

  return (
    <div>
      {companyDataArr?.companyDataArr.length === 0 ? (
        <div css={noDataBox}>
          <p css={noDataDesc}>검색결과가 없습니다 👀</p>
        </div>
      ) : (
        <>
          <ExpJobCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isLoading} />
          <BottomPagination
            linkObj={{
              pathname: JOBS_EXPLIST_URL,
            }}
            totalPage={totalPage}
          />
        </>
      )}
    </div>
  );
};
