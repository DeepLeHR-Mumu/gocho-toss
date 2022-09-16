import { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

import { Layout } from "@component/layout";
import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";

import { SettingPart } from "./part/settingPart";
import { CalendarPart } from "./part/calendarPart";
import { BookmarkPart } from "./part/bookmarkPart";
import { mainContainer, title, colorPoint, mypagePosition, mypageBody } from "./style";

const MypageHome: NextPage = () => {
  const { setCurrentModal, closeModal } = useModal();

  const { error } = useUserInfo();
  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal");
    }
    return () => {
      closeModal();
    };
  }, [error, closeModal, setCurrentModal]);

  return (
    <main css={mainContainer}>
      <Layout>
        <h2 css={title}>
          마이페이지 <span css={colorPoint}>홈</span>
        </h2>
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
