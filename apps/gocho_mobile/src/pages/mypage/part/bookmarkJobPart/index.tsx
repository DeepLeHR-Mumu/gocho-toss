import { FunctionComponent } from "react";

import { useInfiniteUserJobBookmarkArr } from "shared-api/job";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useUserProfile } from "shared-api/auth";
import { JobCardList } from "../../component/jobCardList";
import { emptyBox, warningCSS } from "./style";

export const BookmarkJobPart: FunctionComponent = () => {
  const { data: userInfoData } = useUserProfile();
  const { data: userBookmarkJobData } = useInfiniteUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  if (!userBookmarkJobData) {
    return (
      <section>
        <InvisibleH2 title="채용공고 북마크" />
        <div css={emptyBox}>
          <p css={warningCSS}>
            공고 북마크를 이용하시면
            <br />
            추천공고가 더 정교해져요 😳
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <InvisibleH2 title="채용공고 북마크" />
      {userBookmarkJobData.pages[0].pageResult.totalElements === 0 && (
        <div css={emptyBox}>
          <p css={warningCSS}>
            공고 북마크를 이용하시면
            <br />
            추천공고가 더 정교해져요 😳
          </p>
        </div>
      )}

      <JobCardList />
    </section>
  );
};
