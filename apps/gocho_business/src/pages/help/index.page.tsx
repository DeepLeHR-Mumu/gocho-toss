import Image from "next/image";

import helpBackground from "@/public/image/help/help_background.svg";
import chatIcon from "@/public/image/help/chat.svg";
import { NextPageWithLayout } from "@/types";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const HelpPage: NextPageWithLayout = () => (
  <main css={cssObj.wrapper}>
    <PageHead />

    <div>
      <h2 css={cssObj.title}>고객센터</h2>
      <p css={cssObj.desc}>
        페이지 오른쪽 하단의 채널톡에서
        <br />
        담당자가 기다립니다
      </p>
      <strong css={cssObj.strongDesc}>무엇이든 문의해주세요!</strong>
      <div css={cssObj.chatIconBox}>
        <Image src={chatIcon} alt="" fill />
      </div>
    </div>

    <div css={cssObj.backgroundBox}>
      <Image src={helpBackground} alt="" fill priority />
    </div>
  </main>
);

export default HelpPage;
