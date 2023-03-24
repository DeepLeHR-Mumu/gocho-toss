import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

import { LinkButton } from "shared-ui/common/atom/button";
import smallMonoGochoLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { unknownErrorEvent, unknownErrorFunnelEvent } from "shared-ga/error";

import jobiError from "@public/image/page/errorpage/500_jobi.png";

import { catchPhrase, errorMsgContainer, errorMsgWrapper, gochoLogoBox, jobiContainer, wrapper } from "./style";
import { PageHead } from "./pageHead";

const ErrorPage: NextPage = () => {
  useEffect(() => {
    unknownErrorFunnelEvent();
    unknownErrorEvent();
  }, []);

  return (
    <main css={wrapper}>
      <PageHead />
      <div css={errorMsgWrapper}>
        <div css={errorMsgContainer}>
          <h1>열심히 고치고 있습니다</h1>
        </div>
        <div css={catchPhrase}>
          <p>고장, 불편신고는 아래 메일로 부탁드려요 😢</p>
          <a href="mailto:help@deeplehr.com">help@deeplehr.com</a>
        </div>
        <LinkButton text="메인 페이지로 이동" variant="filled" linkTo="/" />
        <div css={gochoLogoBox}>
          <Image alt="" src={smallMonoGochoLogo} fill sizes="1" />
        </div>
      </div>
      <div css={jobiContainer}>
        <div>
          <Image alt="" src={jobiError} fill />
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
