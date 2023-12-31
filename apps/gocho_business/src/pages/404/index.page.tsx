import { useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";

import { HiddenH2 } from "shared-ui/deeple-ds";

import jobi_404 from "@/public/image/jobi_404.svg";
import { notFoundPageErrorEvent } from "@/ga";

import { cssObj } from "./style";
import { PageHead } from "./pageHead";

const NotFoundPage: NextPage = () => {
  useEffect(() => {
    const prevUrl = sessionStorage.getItem("prevUrl");
    notFoundPageErrorEvent(prevUrl || "/");
  }, []);

  return (
    <main css={cssObj.container}>
      <PageHead />
      <HiddenH2 title="없는 페이지" />
      <div css={cssObj.jobiImage}>
        <Image src={jobi_404} alt="" fill priority />
      </div>
      <p css={cssObj.title}>죄송합니다. 해당 페이지를 찾을 수 없습니다.</p>
      <div css={cssObj.catchPhraseContainer}>
        <p css={cssObj.catchPhrase}>생산/기능직 No.1 취업 플랫폼</p>
        <p css={cssObj.catchPhrase}>고초대졸 닷컴</p>
      </div>
    </main>
  );
};

export default NotFoundPage;
