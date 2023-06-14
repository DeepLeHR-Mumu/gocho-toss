import { NextPage } from "next";

import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout } from "@/components";

import { cssObj } from "./style";

const Notice: NextPage = () => (
  <div>
    <PageLayout>
      <div css={cssObj.contentWrapper}>
        <EtcSideNav />
        <div css={cssObj.partContainer}>
          <h2 css={cssObj.pageTitle}>공지사항</h2>
          <p css={cssObj.pageDesc}>
            총<span css={cssObj.noticeCount}>{Intl.NumberFormat("kr").format(1234)}</span>건
          </p>
        </div>
      </div>
    </PageLayout>
  </div>
);

export default Notice;
