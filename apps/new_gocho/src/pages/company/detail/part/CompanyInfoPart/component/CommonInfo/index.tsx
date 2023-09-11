import { Divider } from "shared-ui/deeple-ds";

import { copyToClipboard } from "@/utils";
import { commonCssObj } from "@/pages/company/detail/style";

import { KakaoMap } from "./component/KakaoMap";
import { CommonInfoProps } from "./type";
import { cssObj } from "./style";

export const CommonInfo = ({ industry, size, foundDate, employeeNumber, nozoExists, address }: CommonInfoProps) => {
  const copyAddress = () => {
    copyToClipboard(address);
    // TODO 토스트 메시지 같은 거 추가해야할 듯?
  };

  return (
    <section css={commonCssObj.box}>
      <h3 css={commonCssObj.title}>일반 정보</h3>
      <Divider />
      <div css={cssObj.contentsWrapper}>
        <div css={cssObj.rowWrapper}>
          <span>업종</span>
          <span css={cssObj.content}>{industry}</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>기업형태</span>
          <span css={cssObj.content}>{size}</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>설립연도</span>
          <span css={cssObj.content}>{foundDate}</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>사원수</span>
          <span css={cssObj.content}>{employeeNumber}명</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>노조여부</span>
          <span css={cssObj.content}>{nozoExists ? "있음" : "없음"}</span>
        </div>
        <div css={cssObj.rowWrapper}>
          <span>주소</span>
          <span css={cssObj.content}>{address}</span>
          <button
            type="button"
            css={cssObj.copy}
            onClick={() => {
              copyAddress();
            }}
          >
            복사
          </button>
        </div>
      </div>
      <KakaoMap address={address} />
    </section>
  );
};
