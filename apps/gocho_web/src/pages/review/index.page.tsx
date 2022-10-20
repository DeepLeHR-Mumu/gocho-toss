import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import jobiJobless from "shared-image/global/jobi/jobless.png";
import { LinkButton } from "shared-ui/common/atom/button";
import { GOCHO_DESKTOP_URL, SPEC_LIST_URL } from "shared-constant/internalURL";

import { buttonBox, catchphrase, errorWrapper, jobiImageContainer, logoContainer, title, wrapper } from "./style";

const NoutFound: NextPage = () => {
  const router = useRouter();

  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <article css={errorWrapper}>
        <h1 css={title}>종료된 이벤트입니다</h1>
        <div css={catchphrase}>
          <p>
            곧 리뷰 공개와 함께 다시 돌아오겠습니다 😎
            <br />
            기다리는 동안 스펙등록 하고 평가도 받아보시겠어요?
          </p>
        </div>
        <div css={buttonBox}>
          <LinkButton text="스펙페이지로 이동" variant="filled" linkTo={SPEC_LIST_URL} />
        </div>
        <div css={logoContainer}>
          <Image src={deepLeLogo} alt="디플 회사 로고" objectFit="contain" layout="fill" draggable="false" />
        </div>
      </article>
      <div css={jobiImageContainer}>
        <Image src={jobiJobless} objectFit="contain" alt="" layout="fill" draggable="false" />
      </div>
    </main>
  );
};

export default NoutFound;
