import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  margin-bottom: 3.4375rem;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const payStartContainer = css`
  display: flex;
  padding-bottom: 1.6875rem;
`;

export const asideContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const imageBox = css`
  width: 5rem;
  height: 5rem;
`;

export const menuBox = css`
  padding: 0.5rem;
  width: 7.25rem;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(123, 123, 123, 0.2);
  border-radius: 1.5rem;
`;

export const menuText = css`
  color: ${COLORS.BLUE_NEON40};
  font-weight: 700;
  font-size: 0.875rem;
`;

export const moneyInfoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    font-size: 1.375rem;
    > span {
      color: ${COLORS.BLUE_NEON40};
      font-weight: 700;
      margin-right: 0.2rem;
    }
  }
`;
