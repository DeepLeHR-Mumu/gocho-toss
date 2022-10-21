import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { useUserInfo } from "shared-api/auth";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_MYPAGE } from "shared-constant/meta";
import { myPageFunnelEvent } from "shared-ga/myPage";

import { Layout } from "@component/layout";
import { useModal } from "@recoil/hook/modal";

import { BookmarkCompanyPart } from "./part/bookmarkCompanyPart";
import { BookmarkJobPart } from "./part/bookmarkJobPart";

import { setBookmarkViewButtonArr } from "./constant";
import { mainContainer, headerContainer, title, buttonArrContainer, setBookmarkViewButton } from "./style";
import { activeButtonDef } from "./type";

const MyPage: NextPage = () => {
  const [activeButton, setActiveButton] = useState<activeButtonDef>("채용공고");
  const { setCurrentModal, currentModal, closeModal } = useModal();
  const { error } = useUserInfo();

  const router = useRouter();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
    return () => {
      closeModal();
    };
  }, [error, closeModal, setCurrentModal, currentModal?.activatedModal]);

  useEffect(() => {
    myPageFunnelEvent();
  }, []);
  return (
    <main css={mainContainer}>
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      <MetaHead metaData={META_MYPAGE} />
      <Layout>
        <div css={headerContainer}>
          <strong css={title}>MY 북마크</strong>

          <div css={buttonArrContainer}>
            {setBookmarkViewButtonArr.map((text) => {
              const isActive = text === activeButton;
              return (
                <button
                  type="button"
                  key={text}
                  css={setBookmarkViewButton(isActive)}
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
