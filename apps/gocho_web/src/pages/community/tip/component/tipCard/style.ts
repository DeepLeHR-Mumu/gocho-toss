import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cardContainer = css`
  display: flex;
  padding: 2rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const infoContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.875rem;
`;

export const tagListCSS = css`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const tagCSS = css`
  margin-right: 0.5rem;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 500;
  font-size: 0.875rem;

  :before {
    content: "#";
  }

  :last-of-type {
    margin-right: 0;
  }
`;

export const thumbnailBox = css`
  border-radius: 2rem;
  overflow: hidden;
  margin-right: 3.75rem;
  min-width: 16rem;
  height: 12rem;
  position: relative;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const titleCSS = css`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const bodyCSS = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 2rem;
  line-height: 1.8;
  word-break: break-all;
  ${shorten(4)}
`;

export const infoBox = css`
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY40};
`;

export const info = css`
  margin-right: 1rem;
  color: ${COLORS.GRAY40};

  :after {
    content: " · ";
    margin-left: 1rem;
  }
`;

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

export const tipCardSkeleton = css`
  overflow: hidden;
  width: 100%;
  border-radius: 2rem;
  height: 16rem;
  margin-bottom: 1rem;
`;