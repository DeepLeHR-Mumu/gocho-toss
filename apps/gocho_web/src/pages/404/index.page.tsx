import { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { LinkButton } from "shared-ui/common/atom/button";
import { MAIN_URL } from "shared-constant";
import { notFoundEvent, notFoundFunnelEvent } from "shared-ga/error";

import jobiError from "@public/images/global/errrorPage/jobi_404.png";

import { PageHead } from "./pageHead";
import { buttonBox, catchphrase, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";

const NotFoundPage: NextPage = () => {
  useEffect(() => {
    notFoundFunnelEvent();
    notFoundEvent();
  }, []);

  return (
    <main css={wrapper}>
      <PageHead />
      <article css={errorWrapper}>
        <h1 css={title}>죄송합니다 해당 페이지를 띄울 수 없습니다.</h1>
        <div css={catchphrase}>
          <p>생산 기능직 No.1 취업 플랫폼</p>
          <p>고초대졸 닷컴</p>
        </div>
        <div css={buttonBox}>
          <LinkButton text="메인페이지로 이동" variant="filled" linkTo={MAIN_URL} />
        </div>
        <div css={logoContainer}>
          <Image src={deepLeLogo} alt="" fill sizes="1" />
        </div>
      </article>
      <div css={jobiImageContainer}>
        <Image src={jobiError} alt="" />
      </div>
    </main>
  );
};

export default NotFoundPage;
