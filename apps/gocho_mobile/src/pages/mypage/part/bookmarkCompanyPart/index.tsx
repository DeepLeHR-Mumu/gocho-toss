import { FunctionComponent, useState } from "react";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { CompanyCardList } from "../../component/companyCardList";

export const BookmarkCompanyPart: FunctionComponent = () => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const { data: userInfoData } = useUserInfo();
  const { data: userBookmarkCompanyDataArr, isLoading } = useUserCompanyBookmarkArr({
    userId: userInfoData?.id,
  });

  return (
    <section>
      <CompanyCardList companyDataArr={userBookmarkCompanyDataArr} isLoading={isLoading} />
      <BottomPagination total={userBookmarkCompanyDataArr?.length || 0} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};
