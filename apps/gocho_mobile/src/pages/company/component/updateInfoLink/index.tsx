import { FunctionComponent } from "react";
import { container } from "./style";

interface UpdateInfoLinkProps {
  infoName: string;
}

export const UpdateInfoLink: FunctionComponent<UpdateInfoLinkProps> = ({ infoName }) => {
  return (
    <div css={container}>
      <p>혹시 재직자/인사 담당자이신가요?</p>
      <a target="_blank" href="https://pf.kakao.com/_xgEFxms" rel="noreferrer">
        {infoName} 정보 수정 요청하기 +
      </a>
    </div>
  );
};
