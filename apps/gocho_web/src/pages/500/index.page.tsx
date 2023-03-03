import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { LinkButton } from "shared-ui/common/atom/button";
import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { MAIN_URL } from "shared-constant";
import { unknownErrorEvent, unknownErrorFunnelEvent } from "shared-ga/error";

import jobiError from "@public/images/global/errrorPage/jobi_500.png";

import { catchphrase, buttonBox, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";
import { PageHead } from "./pageHead";

const UnKnownErrorPage: NextPage = () => {
  useEffect(() => {
    unknownErrorFunnelEvent();
    unknownErrorEvent();
  }, []);

  return (
    <main css={wrapper}>
      <PageHead />
      <article css={errorWrapper}>
        <h1 css={title}>열심히 고치고 있습니다.</h1>
        <div css={catchphrase}>
          <p>고장, 불편 신고는 아래 메일로 부탁드려요.</p>
          <Link href="mailto:help@deeplehr.com">help@deeplehr.com</Link>
        </div>
        <div css={buttonBox}>
          <LinkButton text="메인페이지로 이동" variant="filled" linkTo={MAIN_URL} />
        </div>
        <div css={logoContainer}>
          <Image src={deepLeLogo} alt="" fill />
        </div>
      </article>
      <div css={jobiImageContainer}>
        <Image src={jobiError} alt="" />
      </div>
    </main>
  );
};

export default UnKnownErrorPage;
