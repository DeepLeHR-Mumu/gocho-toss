import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MYPAGE_URL } from "shared-constant";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { BookmarkJobArr } from "@pages/mypage/component/bookmarkJobArr";
import { BookmarkCompanyArr } from "@pages/mypage/component/bookmarkCompanyArr";

import { setBookmarkViewButtonArr } from "./constant";
import { partContainer, headerContainer, title, buttonArrContainer, setBookmarkViewButton } from "./style";

export const BookmarkPart: FunctionComponent = () => {
  const router = useRouter();

  return (
    <section css={partContainer}>
      <InvisibleH2 title="북마크한 공고/기업 목록" />
      <div css={headerContainer}>
        <strong css={title}>MY 북마크</strong>
        <div css={buttonArrContainer}>
          {setBookmarkViewButtonArr.map((button) => {
            return (
              <Link
                key={button.text}
                css={setBookmarkViewButton(button.show === router.query.type)}
                href={{
                  pathname: MYPAGE_URL,
                  query: {
                    page: 1,
                    type: button.show,
                  },
                }}
              >
                {button.text}
              </Link>
            );
          })}
        </div>
      </div>
      {router.query.type === "job" ? <BookmarkJobArr /> : <BookmarkCompanyArr />}
    </section>
  );
};
