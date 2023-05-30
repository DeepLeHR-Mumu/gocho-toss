import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";

import gochoLogoColor from "shared-image/global/deepLeLogo/smallColor.svg";

import { BottomPopup } from "@/component/bottomPopup";
import { useModal } from "@/globalStates";
import appIcon from "@public/image/app_icon.png";

import { cssObj } from "./style";

const NoticeBox: FunctionComponent = () => {
  const { closeModal } = useModal();

  const hideNoticeModalDuringTodayHandler = () => {
    localStorage.setItem("hideNoticeModalCreateTime", `${new Date()}`);
    closeModal();
  };

  return (
    <div css={cssObj.wrapper}>
      <button type="button" onClick={hideNoticeModalDuringTodayHandler} css={cssObj.closeTopButton}>
        <FiX />
      </button>
      <div css={cssObj.iconBox}>
        <Image src={appIcon} alt="" fill />
      </div>
      <div css={cssObj.logoBox}>
        <Image src={gochoLogoColor} alt="" fill />
      </div>
      <p css={cssObj.text}>
        생산직 채용 No.1 취업플랫폼 <br />
        고초대졸닷컴을 더 편리하게 이용해 보세요!
      </p>
      <Link href="https://gocho.onelink.me/9b1A/e458vvm8" passHref css={cssObj.linkButton}>
        앱 이용하기
      </Link>
      <button type="button" onClick={hideNoticeModalDuringTodayHandler} css={cssObj.closeButton}>
        오늘은 이대로 볼래요
      </button>
    </div>
  );
};

export const NoticeModal: FunctionComponent = () => {
  return (
    <BottomPopup>
      <NoticeBox />
    </BottomPopup>
  );
};
