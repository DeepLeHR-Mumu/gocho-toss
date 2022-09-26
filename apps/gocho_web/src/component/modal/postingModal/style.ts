import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";
import { PC_HOVER } from "shared-style/mediaQuery";

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 100%;
  max-width: 60rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  text-align: left;
`;

export const modalWrapperSkeleton = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 100%;
  max-width: 60rem;
  padding: 1.875rem 6.25rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
`;

export const overviewYBox = css`
  max-height: 70vh;
  overflow: hidden;
  overflow-y: scroll;
  padding: 1.875rem 6.25rem;
`;

export const flexBox = css`
  display: flex;
  justify-content: flex-end;
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export const writerProfile = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY90};
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  position: relative;
`;

export const writerProfileImage = css`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 0;
`;

export const writerNickname = css`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  width: calc(100% - 2.25rem);
  ${shorten(1)};
`;

export const titleCSS = css`
  display: block;
  width: 100%;
  color: ${COLORS.GRAY10};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY70};

  ::placeholder {
    color: ${COLORS.GRAY60};
  }
`;

export const bodyCSS = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  padding: 2.5rem 0 7.5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
  margin-bottom: 1rem;
  line-height: 1.8;
  word-break: break-all;
`;

export const infoContainer = css`
  display: flex;
  justify-content: space-between;
  min-height: 2.25rem;
  color: ${COLORS.GRAY40};
  margin-bottom: 1rem;
`;

export const infoBox = css`
  display: flex;
  align-items: center;
  list-style: disc;
  margin-left: 2rem;

  > li {
    margin: 0 1rem;

    :first-of-type {
      margin-left: 0;
    }
  }
`;

export const infoCSS = css`
  margin-right: 1rem;
  color: ${COLORS.GRAY40};
`;

interface SetPostingTypeDef {
  (type: "자유" | "진로" | "기업" | "자격증"): SerializedStyles;
}

const typeColor = {
  진로: "#5429cd",
  자유: "#09a434",
  기업: `${COLORS.GRAY10}`,
  자격증: "#f06500",
};

export const setPostingType: SetPostingTypeDef = (type) => {
  return css`
    margin-right: 1rem;
    color: ${typeColor[type]};
  `;
};

export const numInfo = css`
  color: ${COLORS.GRAY40};
`;

export const settingButtonList = css`
  display: flex;
  border-radius: 1.5rem;
  padding: 0.375rem 2rem;
  margin-right: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const settingButton = css`
  color: ${COLORS.GRAY60};

  ${PC_HOVER} {
    &:hover {
      color: ${COLORS.BLUE_FIRST40};
    }
  }

  :first-of-type {
    margin-right: 0.5rem;
  }

  :last-of-type {
    margin-left: 0.5rem;
  }
`;

export const settingMenu = css`
  color: ${COLORS.GRAY40};
`;

export const commentListWrapper = css`
  margin-top: 2.5rem;
`;
