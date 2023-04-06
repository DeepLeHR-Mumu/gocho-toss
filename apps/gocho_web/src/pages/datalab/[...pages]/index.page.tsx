import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "shared-ui/common/atom/button";
import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { MAIN_URL } from "shared-constant";

import jobiError from "@public/images/global/errrorPage/jobi_500.png";

import { catchphrase, buttonBox, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";
import { PageHead } from "./pageHead";

const DatalabRenewalPage: NextPage = () => {
  return (
    <main css={wrapper}>
      <PageHead />
      <article css={errorWrapper}>
        <h1 css={title}>스펙평가와 작성을 Q&A 게시판과 통합하여 다시 돌아오겠습니다!</h1>
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

export default DatalabRenewalPage;
