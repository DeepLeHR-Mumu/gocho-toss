import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  margin-bottom: 2rem;
`;

export const headerBox = css`
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  padding: 1rem 0;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const menuList = css`
  display: flex;
  font-size: 1rem;
  > li {
    flex-shrink: 0;
    margin: 0 2rem;
    display: flex;
    justify-content: center;
  }
`;

export const informationWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1.5rem 0;
  margin-bottom: 1.5625rem;
`;

export const infoBox = css`
  width: 16.25rem;
  background-color: ${COLORS.GRAY100};
  padding: 1rem;
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  > p {
    margin-bottom: 0.5rem;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
