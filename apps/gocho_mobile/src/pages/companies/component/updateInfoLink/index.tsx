import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { COLORS } from "shared-style/color";

interface UpdateInfoLinkProps {
  infoName: string;
}

export const UpdateInfoLink: FunctionComponent<UpdateInfoLinkProps> = ({ infoName }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <p
        css={css`
          color: ${COLORS.GRAY30};
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        `}
      >
        혹시 재직자이신가요?
      </p>
      <a
        css={css`
          border-radius: 1.5rem;
          background-color: ${COLORS.GRAY90};
          color: ${COLORS.GRAY30};
          font-size: 0.75rem;
          padding: 1rem;
        `}
      >
        {infoName} 정보 수정 요청하기 +
      </a>
    </div>
  );
};
