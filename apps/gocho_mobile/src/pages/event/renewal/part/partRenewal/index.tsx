import { FunctionComponent } from "react";
import Image from "next/image";

import drawPoint1 from "shared-image/event/renewal/draw_point.svg";
import drawPoint2 from "shared-image/event/renewal/draw_point2.svg";
import gochoLogoColor from "shared-image/global/deepLeLogo/smallColor.svg";
import renewal01Src from "shared-image/event/renewal/renewal_01.png";
import renewal02Src from "shared-image/event/renewal/renewal_02.png";
import renewal03Src from "shared-image/event/renewal/renewal_03.png";

import { NormalButton } from "shared-ui/common/atom/button";
import { useUserInfo } from "shared-api/auth";
import { Layout } from "@component/layout";

import { useModal } from "@/globalStates";

import {
  buttonBox,
  desc,
  iconCSS,
  listCSS,
  logoBox,
  pointImgBox1,
  pointImgBox2,
  subDesc,
  title,
  titleBox,
  wrapper,
} from "./style";

export const PartRenewal: FunctionComponent = () => {
  const { setModal } = useModal();
  const { isSuccess } = useUserInfo();

  const openLoginModal = () => {
    setModal("loginModal", { button: "close" });
  };

  return (
    <section css={wrapper}>
      <Layout>
        <div css={titleBox}>
          <strong css={title}>
            <span css={iconCSS}>🤗</span>대대적인 디자인 리뉴얼이
            <br />
            진행되었습니다
          </strong>
          <p css={desc}>
            이전보다 깔끔하고
            <br />
            이전보다 직관적인 형태로 돌아왔습니다
          </p>

          <div css={pointImgBox1}>
            <Image src={drawPoint1} alt="" fill />
          </div>
          <div css={pointImgBox2}>
            <Image src={drawPoint2} alt="" fill />
          </div>
        </div>

        <ul css={listCSS}>
          <li>
            <Image alt="" src={renewal01Src} fill />
          </li>
          <li>
            <Image alt="" src={renewal02Src} fill />
          </li>
          <li>
            <Image alt="" src={renewal03Src} fill />
          </li>
        </ul>

        <p css={subDesc}>
          뿐만 아니라,
          <br />
          좀더 편하게 이용하기 위한 모바일 서비스도 열심히 준비중입니다 <span css={iconCSS}>🤓 🥕🥕🥕</span>
        </p>

        <div css={logoBox}>
          <Image alt="" src={gochoLogoColor} fill />
        </div>

        {!isSuccess && (
          <div css={buttonBox}>
            <NormalButton buttonClick={openLoginModal} text="지금 로그인 하기" variant="filled" wide />
          </div>
        )}
      </Layout>
    </section>
  );
};
