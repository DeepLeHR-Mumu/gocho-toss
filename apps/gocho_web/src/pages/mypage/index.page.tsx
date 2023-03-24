import { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

import { useUserInfo } from "shared-api/auth";
import { myPageFunnelEvent } from "shared-ga/myPage";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { SettingPart } from "./part/settingPart";
import { CalendarPart } from "./part/calendarPart";
import { BookmarkPart } from "./part/bookmarkPart";
import { PageHead } from "./pageHead";
import { mainContainer, title, colorPoint, mypagePosition, mypageBody } from "./style";

const MypageHome: NextPage = () => {
  const { setCurrentModal, currentModal, closeModal } = useModal();

  const { error } = useUserInfo();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
    if (currentModal?.activatedModal === "findPasswordModal") {
      setCurrentModal("findPasswordModal");
    }
  }, [error, closeModal, setCurrentModal, currentModal?.activatedModal]);

  useEffect(() => {
    myPageFunnelEvent();
  }, []);
  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="마이페이지 - 고초대졸닷컴" />

      <Layout>
        <strong css={title}>
          마이페이지 <span css={colorPoint}>홈</span>
        </strong>
        <div css={mypagePosition}>
          <SettingPart />
          <div css={mypageBody}>
            <CalendarPart />
            <BookmarkPart />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default MypageHome;
