import { css } from "@emotion/react";

export const bannerWrapper = css`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 6.25rem;

  > li {
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
