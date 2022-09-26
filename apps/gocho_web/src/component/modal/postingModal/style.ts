import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "@style/common";
import { PC_HOVER } from "shared-style/mediaQuery";

interface typeColor {
  [key: string]: string;
}

const typeColor: typeColor = {
  진로: "#09A434",
  자유: "#5429CD",
  기업: `${COLORS.GRAY10}`,
  자격증: "#5429CD",
};

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 60rem;
  height: auto;
  padding: 2rem 7rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  text-align: left;
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
`;

export const writerProfile = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const writerProfileImage = css`
  position: relative;
  z-index: 10;
  margin-right: -1.75rem;
`;

export const writerNickname = css`
  display: flex;
  align-items: center;
  width: 8.5rem;
  height: 2rem;
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  padding: 0.5rem 0.5rem 0.5rem 2.25rem;
  border-radius: 1rem;
  ${shorten(1)}
`;

export const titleCSS = css`
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
`;

export const bodyCSS = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  padding: 2rem 0 5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
  margin-bottom: 1rem;
  line-height: 1.5;
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
`;

export const infoCSS = css`
  margin-right: 1rem;
  color: ${COLORS.GRAY40};

  :after {
    content: " · ";
    margin-left: 1rem;
  }
`;

export const likeButtonCSS = (isBookmark: boolean) => {
  return css`
    color: ${isBookmark ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
  `;
};

export const setPostingType = (type: string) => {
  return css`
    margin-right: 1rem;
    color: ${typeColor[type]};

    :after {
      content: " · ";
      margin-left: 1rem;
    }
  `;
};

export const numInfo = css`
  margin: 0 1rem 0 0.25rem;
  color: ${COLORS.GRAY10};

  :after {
    content: " · ";
    margin-left: 1rem;
  }

  :last-child:after {
    content: "";
  }
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
