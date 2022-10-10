import { NextPage } from "next";
import Image from "next/image";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import jobiAttention from "shared-image/global/jobi/attention.png";
import { LinkButton } from "shared-ui/common/atom/button";
import { SPEC_URL } from "shared-constant/internalURL";

import { buttonBox, catchphrase, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";

const NoutFound: NextPage = () => {
  return (
    <main css={wrapper}>
      <article css={errorWrapper}>
        <h1 css={title}>최신 합격데이터 수집 중...</h1>
        <div css={catchphrase}>
          <p>
            곧 돌아오겠습니다 🥸
            <br />
            기다리는 동안 스펙등록 하고 평가도 받아보시겠어요?
          </p>
        </div>
        <div css={buttonBox}>
          <LinkButton text="스펙페이지로 이동" variant="filled" linkTo={SPEC_URL} />
        </div>
        <div css={logoContainer}>
          <Image src={deepLeLogo} alt="디플 회사 로고" objectFit="contain" layout="fill" draggable="false" />
        </div>
      </article>
      <div css={jobiImageContainer}>
        <Image src={jobiAttention} objectFit="contain" alt="" layout="fill" draggable="false" />
      </div>
    </main>
  );
};

export default NoutFound;
