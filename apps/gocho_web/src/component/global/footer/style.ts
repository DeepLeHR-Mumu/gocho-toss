import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { TABLET } from "shared-style/mediaQuery";

export const footerWrapper = css`
  background-color: ${COLORS.GRAY10};
`;

export const footerContainer = css`
  display: flex;
  justify-content: space-between;

  ${TABLET} {
    flex-direction: column-reverse;
  }
`;

export const companyInfoWrapper = css`
  width: 55%;
  padding: 4.75rem 0;

  ${TABLET} {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const GDtitleBox = css`
  width: 9.5rem;
  height: 1.5rem;
  position: relative;
  margin-bottom: 2.5rem;
`;

export const companyInfoListCSS = css`
  display: flex;
  align-items: center;

  > li {
    position: relative;
    white-space: nowrap;
    color: ${COLORS.GRAY60};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 2;
    padding-right: 0.5rem;
    margin-right: 0.5rem;

    ::before {
      content: "";
      width: 1px;
      height: 1rem;
      background-color: ${COLORS.GRAY60};
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }

    :last-of-type {
      ::before {
        display: none;
      }
    }

    > a {
      :hover {
        color: ${COLORS.GRAY60};
      }
    }
  }
`;

export const copyrightTextCSS = css`
  color: ${COLORS.GRAY60};
  margin-top: 2.5rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const inquiryContainer = css`
  width: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-color: #282828;

  ${TABLET} {
    width: 100%;
    background-color: transparent;
    padding: 2rem 0;
    border-bottom: 1px solid ${COLORS.GRAY20};
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const inquiryBox = css`
  ${TABLET} {
    margin-right: 2rem;
  }
`;

export const inquiryTitle = css`
  display: block;
  font-size: 1.25rem;
  color: #ababab;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const inquiryText = css`
  color: ${COLORS.GRAY60};
  line-height: 1.6;
  font-size: 0.875rem;
  margin-bottom: 2rem;

  ${TABLET} {
    margin-bottom: 0;
  }
`;

export const notReadyText = css`
  color: ${COLORS.GRAY60};
  font-size: 0.875rem;
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  align-items: center;

  a {
    padding-right: 0.5rem;

    :last-of-type {
      padding: 0;
    }
  }
`;

export const kakaoBox = css`
  display: block;
  margin-left: 0.2rem;
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
`;
