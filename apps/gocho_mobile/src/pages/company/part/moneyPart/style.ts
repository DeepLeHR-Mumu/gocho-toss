import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  margin-bottom: 3.4375rem;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const flexContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  > div {
    width: 22.5rem;
  }
`;

export const payContainer = css`
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
  line-height: 1.6;
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

export const payIconBox = css`
  width: 5rem;
  height: 5rem;
  position: relative;
`;

export const descContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const descMenuBox = css`
  padding: 0.5rem;
  box-shadow: 0px 2px 8px rgba(123, 123, 123, 0.2);
  border-radius: 1.5rem;
  width: 7.25rem;
  text-align: center;
  flex-shrink: 0;
`;

export const descMenuText = css`
  color: ${COLORS.GRAY60};
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
  line-height: 1.6;
`;

export const descText = css`
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  padding: 0.5rem 1rem;
  > p {
    line-height: 1.6;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    font-weight: 400;
  }
`;
