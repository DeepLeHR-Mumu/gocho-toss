import { FunctionComponent, useState } from "react";

import { BookmarkJobArr } from "@pages/mypage/component/bookmarkJobArr";
import { BookmarkCompanyArr } from "@pages/mypage/component/bookmarkCompanyArr";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { setBookmarkViewButtonArr } from "./constant";
import { changeOrderDef } from "./type";
import { partContainer, headerContainer, title, buttonArrContainer, setBookmarkViewButton } from "./style";

export const BookmarkPart: FunctionComponent = () => {
  const [activeButtonType, setActiveButtonType] = useState("job");

  const changeView: changeOrderDef = (newType) => {
    setActiveButtonType(newType);
  };

  return (
    <section css={partContainer}>
      <InvisibleH2 title="북마크한 공고/기업 목록" />
      <div css={headerContainer}>
        <strong css={title}>MY 북마크</strong>
        <div css={buttonArrContainer}>
          {setBookmarkViewButtonArr.map((button) => {
            return (
              <button
                type="button"
                key={button.text}
                css={setBookmarkViewButton(button.show === activeButtonType)}
                onClick={() => {
                  changeView(button.show);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </div>
      {activeButtonType === "job" ? <BookmarkJobArr /> : <BookmarkCompanyArr />}
    </section>
  );
};
