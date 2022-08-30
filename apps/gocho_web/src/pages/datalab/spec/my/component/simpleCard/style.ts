import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "@style/constant";

export const cardBox = css`
  border-bottom: 1px solid ${COLORS.GRAY60};
`;

export const listCSS = css`
  display: flex;
  align-items: center;

  > li {
    width: 25%;
    text-align: center;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const dateCSS = css`
  color: ${COLORS.GRAY40};
  font-size: 0.75rem;
  font-weight: 500;
`;

export const noEval = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
`;

export const countCSS = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  font-weight: 500;
`;

export const moreButton = css`
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
  font-weight: 500;
`;

export const evalBox = css`
  display: flex;
  align-items: center;
`;

interface scoreTextDef {
  (score: number | null): SerializedStyles;
}

export const scoreText: scoreTextDef = (score) => {
  const defaultScoreTextCSS = css`
    font-size: 0.75rem;
    font-weight: 500;
    width: 5rem;
    white-space: nowrap;
  `;
  if (!score) {
    return css`
      color: ${COLORS.GRAY60};
      ${defaultScoreTextCSS};
    `;
  }
  return css`
    ${defaultScoreTextCSS};
    color: ${COLORS.GRAY10};
  `;
};
