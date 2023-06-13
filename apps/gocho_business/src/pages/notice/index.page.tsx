import { NextPage } from "next";

import { SideNav } from "@/components/global/sideNav";
import { PageLayout } from "@/components";

import { cssObj } from "./style";

const Notice: NextPage = () => (
  <div>
    <PageLayout>
      <div css={cssObj.contentWrapper}>
        <SideNav />
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
