import { FunctionComponent } from "react";
import Link from "next/link";

import { kakaoChannelUrl } from "shared-constant/help";
import { flexBox, workingInfo, requestChangeButton } from "./style";
import { WorkingNoticeProps } from "./type";

export const WorkingNotice: FunctionComponent<WorkingNoticeProps> = ({ info }) => {
  return (
    <div css={flexBox}>
      <p css={workingInfo}>혹시 재직자/인사 담당자이신가요?</p>
      <Link href={kakaoChannelUrl} passHref>
        <a target="_blank" css={requestChangeButton}>
          {info} 정보 수정 요청하기 +
        </a>
      </Link>
    </div>
  );
};
