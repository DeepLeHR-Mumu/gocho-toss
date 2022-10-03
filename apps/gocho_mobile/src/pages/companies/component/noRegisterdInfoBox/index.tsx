import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { COLORS } from "shared-style/color";

interface NoRegisteredInfoBoxProps {
  infoName: string;
}
export const NoRegisteredInfoBox: FunctionComponent<NoRegisteredInfoBoxProps> = ({ infoName }) => {
  return (
    <div
      css={css`
        background-color: ${COLORS.BLUE_SECOND90};
        padding: 2rem 0;
        width: 100%;
        text-align: center;
        margin-bottom: 1.25rem;
      `}
    >
      <p
        css={css`
          font-size: 0.875rem;
          color: ${COLORS.GRAY40};
        `}
      >
        등록된 {infoName}정보가 없습니다
      </p>
    </div>
  );
};
