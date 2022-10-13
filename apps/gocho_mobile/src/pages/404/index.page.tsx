import { NextPage } from "next";
import Image from "next/image";

import { LinkButton } from "shared-ui/common/atom/button";
import smallMonoGochoLogo from "shared-image/global/deepLeLogo/smallMono.svg";

import jobi from "@public/image/page/errorpage/404_jobi.png";

import { catchPhrase, errorMsgContainer, errorMsgWrapper, gochoLogoBox, jobiContainer, wrapper } from "./style";

const ErrorPage: NextPage = () => {
  return (
    <main css={wrapper}>
      <div css={errorMsgWrapper}>
        <div css={errorMsgContainer}>
          <h1>
            죄송합니다.
            <br />
            해당 페이지를 찾을 수 없습니다.
          </h1>
        </div>
        <div css={catchPhrase}>
          <p>생산직 취업의 새로운 기준</p>
          <p>고초대졸 닷컴</p>
        </div>
        <LinkButton text="메인 페이지로 이동" variant="filled" linkTo="/" />
        <div css={gochoLogoBox}>
          <Image src={smallMonoGochoLogo} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div css={jobiContainer}>
        <div>
          <Image src={jobi} layout="fill" objectFit="contain" />
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
