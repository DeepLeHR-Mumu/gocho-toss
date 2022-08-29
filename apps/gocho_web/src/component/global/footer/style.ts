import { css } from "@emotion/react";

export const footerWrapper = css`
  background-color: #2d2d2d;
`;

export const footerContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const companyInfoWrapper = css`
  width: 55%;
  padding: 3rem 0;
`;

export const GDtitle = css`
  width: 12rem;
  height: 2.1875rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const companyInfoListCSS = css`
  display: flex;
  align-items: center;

  > li {
    position: relative;
    white-space: nowrap;
    color: #818181;
    font-size: 0.8rem;
    line-height: 2;
    padding-right: 0.5rem;
    margin-right: 0.5rem;

    ::before {
      content: "";
      width: 1px;
      height: 1rem;
      background-color: #818181;
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
        color: #9f9f9f;
      }
    }
  }
`;

export const copyrightTextCSS = css`
  color: #818181;
  margin-top: 1rem;
  font-size: 0.75rem;
`;

export const inquiryContainer = css`
  width: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-color: #282828;
`;

export const inquiryTitle = css`
  font-size: 1.25rem;
  color: #ababab;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const inquiryText = css`
  color: #818181;
  line-height: 1.6;
  font-size: 0.875rem;
  margin-bottom: 2rem;
`;

export const notReadyText = css`
  background-color: #333333;
  padding: 1rem;
  color: #818181;
  font-size: 0.875rem;
  border-radius: 0.5em;
  width: 100%;
`;
