import { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

import { Layout } from "@component/layout";
import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { SettingPart } from "./part/settingPart";
import { CalendarPart } from "./part/calendarPart";
import { BookmarkPart } from "./part/bookmarkPart";
import { mainContainer, title, colorPoint, mypagePosition, mypageBody } from "./style";

const MypageHome: NextPage = () => {
  const { setCurrentModal, closeModal } = useModal();

  const { error } = useUserInfo();
  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    return () => {
      closeModal();
    };
  }, [error, closeModal, setCurrentModal]);

  return (
    <main css={mainContainer}>
      <Layout>
        <InvisibleH2 title="마이페이지" />
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
