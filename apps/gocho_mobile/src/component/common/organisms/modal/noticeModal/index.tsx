import { FunctionComponent } from "react";
import Image from "next/image";

import gochoMonoSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import constructionSrc from "shared-image/global/jobi/construction.png";
import { NormalButton } from "shared-ui/common/atom/button";

import { BottomPopup } from "@component/bottomPopup";
import { useModal } from "@/globalStates";

import {
  bottomContainer,
  colorPoint,
  desc,
  flexBox,
  jobiBox,
  logoBox,
  mailInfo,
  title,
  topContainer,
  wrapper,
} from "./style";

const NoticeBox: FunctionComponent = () => {
  const { closeModal } = useModal();

  const hideNoticeModalDuringTodayHandler = () => {
    localStorage.setItem("hideNoticeModalCreateTime", `${new Date()}`);
    closeModal();
  };

  return (
    <div css={wrapper}>
      <div css={topContainer}>
        <strong css={title}>서버 점검 안내</strong>
        <p css={desc}>
          안녕하세요. 고초대졸닷컴입니다.
          <br />
          회원분들께 더 나은 서비스를 제공해드리기 위해
          <br />
          <span css={colorPoint}> 11월 19일 토요일 01:00AM 부터 04:00AM 까지 고초대졸닷컴이 일시 중단</span> 됩니다.
        </p>
        <p css={desc}>
          <span css={colorPoint}>서버점검 시간에는 사이트 이용이 불가한 점 양해 부탁드리며</span> 더 나은 서비스로
          찾아뵙겠습니다.
        </p>
        <a css={mailInfo} href="mailto:help@deeplehr.com">
          문의 : help@deeplehr.com
        </a>
        <div css={flexBox}>
          <p css={desc}>
            이용에 불편을 드려 죄송하며, 더욱 편리한 서비스를 위해 최선을 다하겠습니다.
            <br />
            <span css={colorPoint}>항상 고초대졸닷컴을 사랑해주셔서 감사합니다.</span>
          </p>
          <div css={jobiBox}>
            <Image src={constructionSrc} alt="" fill />
          </div>
        </div>
        <div css={logoBox}>
          <Image src={gochoMonoSrc} alt="" fill />
        </div>
      </div>
      <div css={bottomContainer}>
        <NormalButton
          text="오늘 하루 안보기"
          variant="outlined"
          wide={false}
          buttonClick={hideNoticeModalDuringTodayHandler}
        />
        <NormalButton text="닫기" variant="filled" wide={false} buttonClick={closeModal} />
      </div>
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
