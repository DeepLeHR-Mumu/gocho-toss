import { NextPage } from "next";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import deepLeLogo from "shared-image/global/deepLeLogo/smallMono.svg";
import { notFoundEvent, notFoundFunnelEvent } from "shared-ga/error";

import jobiError from "@/public/jobi/jobi_500.png";

import { Layout } from "@/components";
import { INTERNAL_URL } from "@/pages/constants";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const NotFoundPage: NextPage = () => {
  useEffect(() => {
    notFoundFunnelEvent();
    notFoundEvent();
  }, []);

  return (
    <main css={cssObj.mainContainer}>
      <PageHead />
      <Layout>
        <article css={cssObj.errorContainer}>
          <h1 css={cssObj.title}>열심히 고치고 있습니다.</h1>
          <p css={cssObj.desc}>계속해서 오류 발생 시 아래 고객센터로 연락 부탁드려요.</p>
          <div css={cssObj.companyWrapper}>
            <p css={cssObj.companyDesc}>
              생산 기능직 <span>No.1</span> 취업 플랫폼
            </p>
            <div css={cssObj.companyLogoBox}>
              <Image src={deepLeLogo} alt="" fill sizes="1" />
            </div>
          </div>
          <Link css={cssObj.link} href={INTERNAL_URL.MAIN} passHref>
            메인페이지로 이동
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
