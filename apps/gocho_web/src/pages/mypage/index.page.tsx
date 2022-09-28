import { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

import { Layout } from "@component/layout";
import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_MYPAGE } from "shared-constant/meta";

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
      <MetaHead metaData={META_MYPAGE} />
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
