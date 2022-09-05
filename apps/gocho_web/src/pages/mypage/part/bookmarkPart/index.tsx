import { FunctionComponent, useState } from "react";

import { BookmarkJobArr } from "@pages/mypage/component/bookmarkJobArr";
import { BookmarkCompanyArr } from "@pages/mypage/component/bookmarkCompanyArr";

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
      <div css={headerContainer}>
        <h2 css={title}>MY 북마크</h2>
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
