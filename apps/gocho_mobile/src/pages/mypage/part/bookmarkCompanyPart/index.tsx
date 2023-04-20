import { FunctionComponent } from "react";

import { useUserProfile } from "shared-api/auth";
import { useInfiniteUserCompanyBookmarkArr } from "shared-api/company";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { CompanyCardList } from "../../component/companyCardList";

import { emptyBox, warningCSS } from "./style";

export const BookmarkCompanyPart: FunctionComponent = () => {
  const { data: userInfoData } = useUserProfile();
  const { data: userBookmarkCompanyData } = useInfiniteUserCompanyBookmarkArr({
    userId: userInfoData?.id,
  });

  if (!userBookmarkCompanyData) {
    return (
      <section>
        <InvisibleH2 title="기업 북마크" />
        <div css={emptyBox}>
          <p css={warningCSS}>
            기업 북마크를 이용하시면
            <br />
            추천기업이 더 정교해져요 😳
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <InvisibleH2 title="기업 북마크" />
      {userBookmarkCompanyData.pages[0].pageResult.totalElements === 0 && (
        <div css={emptyBox}>
          <p css={warningCSS}>
            기업 북마크를 이용하시면
            <br />
            추천기업이 더 정교해져요 😳
          </p>
        </div>
      )}

      <CompanyCardList />
    </section>
  );
};
