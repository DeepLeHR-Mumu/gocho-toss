import { NextPage } from "next";

import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout } from "@/components";

import { cssObj } from "./style";

const AlarmList: NextPage = () => (
  <div>
    <PageLayout>
      <div css={cssObj.contentWrapper}>
        <EtcSideNav />
        <div css={cssObj.partContainer}>
          <h2 css={cssObj.pageTitle}>알림</h2>
          <p css={cssObj.pageDesc}>받은지 90일이 지난 알림은 사라집니다.</p>
        </div>
      </div>
    </PageLayout>
  </div>
);

export default AlarmList;
