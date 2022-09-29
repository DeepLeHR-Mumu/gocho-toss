import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { COLORS } from "shared-style/color";

export const InfoPart: FunctionComponent = () => {
  return (
    <article
      css={css`
        width: 100%;
        background-color: ${COLORS.GRAY100};
      `}
    >
      회사이름
    </article>
  );
};
