import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { unknownErrorEvent, unknownErrorFunnelEvent } from "shared-ga/error";

import jobiError from "@public/images/global/errrorPage/jobi_500.png";

import { catchphrase, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";
import { PageHead } from "./pageHead";

const NoticePage: NextPage = () => {
  useEffect(() => {
    unknownErrorFunnelEvent();
    unknownErrorEvent();
  }, []);

  return (
    <main css={wrapper}>
      <PageHead />
      <article css={errorWrapper}>
        <h1 css={title}>⚠️ 서버 점검 중입니다 ⚠️</h1>
        <div css={catchphrase}>
          <p>
            현재 앱 출시에 대비하여 서비스를 점검 중에 있습니다. 점검 시간 완료 시간은 오후 9~10시로 예상되며,
            <br />
            최대한 빠르게 점검 후 더 좋은 서비스로 찾아 뵙겠습니다. 다시 한 번 사용에 불편드려 죄송합니다 😢
            <br />
          </p>
          <Link href="mailto:help@deeplehr.com">help@deeplehr.com</Link>
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

export default NoticePage;
