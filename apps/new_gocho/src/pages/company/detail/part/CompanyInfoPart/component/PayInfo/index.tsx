import { Divider } from "shared-ui/deeple-ds";

import { commonCssObj } from "@/pages/company/detail/style";

import { PayInfoProps } from "./type";
import { cssObj } from "./style";

export const PayInfo = ({ payStart, payAvg, payDesc }: PayInfoProps) => (
    <section css={commonCssObj.box}>
      <h3 css={commonCssObj.title}>연봉 정보</h3>
      <Divider />
      <div css={cssObj.contentsWrapper}>
        <div css={cssObj.rowWrapper}>
          <span>평균 초봉</span>
          <span css={cssObj.pay}>{payStart} 만원</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>평균 연봉</span>
          <span css={cssObj.pay}>{payAvg} 만원</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>기타정보</span>
          <span>{payDesc}</span>
        </div>
      </div>
    </section>
  );
