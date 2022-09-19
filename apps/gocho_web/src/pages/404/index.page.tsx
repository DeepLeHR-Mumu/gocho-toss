import { NextPage } from "next";
import Image from "next/image";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import jobiError from "@public/images/global/errrorPage/jobi_404.png";
import { LinkButton } from "shared-ui/common/atom/button";
import { MAIN_URL } from "@constant/internalURL";

import { catchphrase, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";

const NoutFound: NextPage = () => {
  return (
    <main css={wrapper}>
      <article css={errorWrapper}>
        <h1 css={title}>죄송합니다 해당 페이지를 띄울 수 없습니다.</h1>
        <div css={catchphrase}>
          <p>생산 기능직 No.1 취업 플랫폼</p>
          <p>고초대졸 닷컴</p>
        </div>
        <LinkButton text="메인페이지로 이동" variant="filled" linkTo={MAIN_URL} />
        <div css={logoContainer}>
          <Image src={deepLeLogo} alt="디플 회사 로고" objectFit="contain" />
        </div>
        <div css={jobiImageContainer}>
          <Image src={jobiError} objectFit="contain" alt="" />
        </div>
      </article>
    </main>
  );
};

export default NoutFound;
