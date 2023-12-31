import { NextPage } from "next";

import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout } from "@/components";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const HelpPage: NextPage = () => (
  <>
    <PageHead />
    <PageLayout>
      <div css={cssObj.contentWrapper}>
        <EtcSideNav />
        <div css={cssObj.partContainer}>
          <h2 css={cssObj.pageTitle}>고객센터</h2>
          <div css={cssObj.descWrapper}>
            <strong css={cssObj.descTitle}>고객센터 운영시간</strong>
            <p css={cssObj.desc}>평일 10:00-19:00시 (주말 및 공휴일 휴무)</p>
          </div>
          <p css={cssObj.email}>
            채용공고 · 광고 등록 문의 <a href="mailto:register@deeplehr.com">register@deeplehr.com</a>
          </p>
          <p css={cssObj.email}>
            이메일 문의 <a href="mailto:cs@deeplehr.com">cs@deeplehr.com</a>
          </p>
        </div>
      </div>
    </PageLayout>
  </>
);

export default HelpPage;
