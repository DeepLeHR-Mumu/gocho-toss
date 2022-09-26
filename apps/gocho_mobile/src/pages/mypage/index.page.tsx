import { NextPage } from "next";
import { useState } from "react";

import { Layout } from "@component/layout";

import { BookmarkCompanyPart } from "./part/bookmarkCompanyPart";
import { BookmarkJobPart } from "./part/bookmarkJobPart";
import { setBookmarkViewButtonArr } from "./constant";
import { mainContainer, headerContainer, title, buttonArrContainer, setBookmarkViewButton } from "./style";
import { activeButtonDef } from "./type";

const MyPage: NextPage = () => {
  const [activeButton, setActiveButton] = useState<activeButtonDef>("채용공고");

  return (
    <main css={mainContainer}>
      <Layout>
        <div css={headerContainer}>
          <h2 css={title}>MY 북마크</h2>
          <div css={buttonArrContainer}>
            {setBookmarkViewButtonArr.map((text) => {
              return (
                <button
                  type="button"
                  key={text}
                  css={setBookmarkViewButton(text === activeButton)}
                  onClick={() => {
                    setActiveButton(text);
                  }}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </div>

        {activeButton === "채용공고" ? <BookmarkJobPart /> : <BookmarkCompanyPart />}
      </Layout>
    </main>
  );
};

export default MyPage;
