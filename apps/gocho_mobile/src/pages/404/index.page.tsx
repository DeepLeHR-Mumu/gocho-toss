import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

import { LinkButton } from "shared-ui/common/atom/button";
import smallMonoGochoLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { notFoundEvent, notFoundFunnelEvent } from "shared-ga/error";

import jobi from "@public/image/page/errorpage/404_jobi.png";

import { catchPhrase, errorMsgContainer, errorMsgWrapper, gochoLogoBox, jobiContainer, wrapper } from "./style";
import { PageHead } from "./pageHead";

const NotFoundPage: NextPage = () => {
  useEffect(() => {
    notFoundFunnelEvent();
    notFoundEvent();
  }, []);

  return (
    <main css={wrapper}>
      <PageHead />
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
          <Image alt="" src={smallMonoGochoLogo} fill sizes="1" />
        </div>
      </div>
      <div css={jobiContainer}>
        <div>
          <Image alt="" src={jobi} fill />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
