import { css } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  display: flex;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  overflow: hidden;
`;

export const infoBox = css`
  background-color: ${COLORS.BLUE_SECOND70};
  width: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem 0;
  box-sizing: border-box;
`;

export const infoTitle = css`
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  margin-bottom: 1.625rem;
`;

export const beforeAfterDateBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.75rem;

  > li {
    color: ${COLORS.GRAY10};
    font-size: 0.875rem;
    line-height: 1.2;
  }
`;

export const cutBox = css`
  font-size: 0.75rem;
  white-space: nowrap;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  border-radius: 1rem;
  width: fit-content;
  height: 1.625rem;
  background-color: #f2f2f2;
  color: #1553cd;
`;

export const applyButton = css`
  width: 7.875rem;
  height: 3rem;
  background-color: ${COLORS.BLUE_FIRST40};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY100};
  border-radius: 2rem;
  margin-top: 1.375rem;
`;

// 채용프로세스

export const infoDetailBox = css`
  width: calc(100% - 17rem);
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const detailTitle = css`
  white-space: nowrap;
  background-color: ${COLORS.BLUE_SECOND40};
  width: fit-content;
  padding: 0 1.125rem;
  height: 3rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const processBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 4rem 0;
  width: 100%;
  max-width: 40rem;
  position: relative;

  :after {
    content: "";
    width: 96%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -1rem;
    border-radius: 1rem;
    height: 0.5rem;
    background-color: ${COLORS.GRAY70};
  }

  > li {
    color: ${COLORS.GRAY60};
    font-size: 0.75rem;
    font-weight: 500;
    position: relative;

    :first-of-type {
      color: ${COLORS.GRAY10};

      ::after {
        border: 1px solid ${COLORS.BLUE_NEON40};
        box-sizing: border-box;
      }
    }

    ::after {
      content: "";
      border-radius: 50%;
      width: 0.5rem;
      height: 0.5rem;
      background-color: ${COLORS.GRAY100};
      left: 50%;
      bottom: -1rem;
      z-index: 10;
      transform: translate(-50%, 0);
      position: absolute;
    }
  }
`;

export const desc = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  line-height: 1.5;
`;

export const goBackButton = css`
  border: 1px solid ${COLORS.BLUE_FIRST40};
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 2rem;
  width: 12.1875rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto;
  transition: all 0.2s ease;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.BLUE_FIRST40};
      color: ${COLORS.GRAY100};
    }
  }
`;

export const restPoint = css`
  margin-right: 0.5rem;

  ::after {
    content: ", ";
  }

  :last-of-type {
    margin-right: 0;
    ::after {
      content: "";
    }
  }
`;
