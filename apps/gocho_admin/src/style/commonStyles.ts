import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const mainContainer = css`
  flex-grow: 1;
  padding: 1.5rem 0 1.5rem 1.5rem;
`;

export const pageTitle = css`
  font-weight: 700;
  font-size: 1.75rem;
  color: ${COLOR.GRAY900};
  margin-bottom: 2rem;
`;

export const subPageTitle = css`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${COLOR.GRAY900};
  margin-bottom: 2rem;
`;
