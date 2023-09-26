import { NextPage } from "next";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { unknownErrorEvent, unknownErrorFunnelEvent } from "@/ga/error";

import jobiError from "@/public/jobi/jobi_500.png";

import { Layout } from "@/components";
import { INTERNAL_URL } from "@/pages/constants";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const NotFoundPage: NextPage = () => {
  useEffect(() => {
    unknownErrorFunnelEvent();
    unknownErrorEvent();
  }, []);

  return (
    <main css={cssObj.mainContainer}>
      <PageHead />
      <Layout>
        <article css={cssObj.errorContainer}>
          <h1 css={cssObj.title}>열심히 고치고 있습니다.</h1>
          <p css={cssObj.desc}>불편사항이 있을 시 고객센터로 문의 부탁드립니다.</p>
          <div css={cssObj.companyWrapper}>
            <p css={cssObj.companyDesc}>
              생산 기능직 <span>No.1</span> 취업 플랫폼
            </p>
            <div css={cssObj.companyLogoBox}>
              <Image src={deepLeLogo} alt="" fill sizes="1" />
            </div>
          </div>
          <Link css={cssObj.link} href={INTERNAL_URL.MAIN} passHref>
            홈으로 이동
          </Link>
          <div css={cssObj.jobiImageBox}>
            <Image src={jobiError} alt="" />{" "}
          </div>
        </article>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
