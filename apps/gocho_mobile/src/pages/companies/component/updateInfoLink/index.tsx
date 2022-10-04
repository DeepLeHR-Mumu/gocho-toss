import { FunctionComponent } from "react";
import { container } from "./style";

interface UpdateInfoLinkProps {
  infoName: string;
}

export const UpdateInfoLink: FunctionComponent<UpdateInfoLinkProps> = ({ infoName }) => {
  return (
    <div css={container}>
      <p>혹시 재직자이신가요?</p>
      <a href="https://pf.kakao.com/_xgEFxms">{infoName} 정보 수정 요청하기 +</a>
    </div>
  );
};
