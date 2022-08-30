import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const wrapper = css`
  display: flex;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0px 4px 12px #e9e9e9;
`;

export const profileBox = css`
  width: 20%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-right: 1px solid ${COLORS.GRAY80};
`;

export const specInfoBox = css`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  border-right: 1px solid ${COLORS.GRAY80};
`;

export const buttonBox = css`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const userInfoCSS = css`
  margin-left: 1rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  line-height: 1.6;

  > span {
    display: block;
    font-size: ${COLORS.GRAY20};
    font-size: 0.75rem;
  }
`;

export const eduInfoCSS = css`
  > li {
    font-size: 0.75rem;
    color: ${COLORS.GRAY40};
    font-weight: 400;
    margin-bottom: 1rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const highschoolInfoCSS = css`
  > li {
    font-size: 0.75rem;
    color: ${COLORS.GRAY40};
    font-weight: 400;
    margin-bottom: 0.5rem;

    :last-of-type {
      margin-bottom: 0;
    }

    > strong {
      background-color: ${COLORS.GRAY90};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
  }
`;

export const certiCSS = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    position: relative;
    width: fit-content;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.GRAY90};
    font-size: 0.75rem;
    color: ${COLORS.GRAY20};
    border-radius: 1.5rem;
    margin-right: 1rem;

    :last-of-type {
      margin-right: 0;
    }

    > strong {
      background-color: ${COLORS.BLUE_SECOND70};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
    }
  }
`;

export const strongPoint = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const circleBox = css`
  background-color: ${COLORS.GRAY90};
  margin-left: 1rem;
  padding: 0 0.5rem;
  border-radius: 1rem;
`;
