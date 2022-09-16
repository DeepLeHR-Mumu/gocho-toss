import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 0 15rem;
`;

export const errorWrapper = css`
  position: relative;
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1.5rem;
  width: 50%;
  min-width: 55rem;
  width: 50%;
  height: 25rem;
  ::after {
    content: "";
    left: 60%;
    position: absolute;
    bottom: -1.75rem;
    border-top: 1.875rem solid ${COLORS.GRAY100};
    border-left: 1.875rem solid transparent;
  }
`;

export const title = css`
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const catchphrase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    font-size: 0.8rem;
    :last-of-type {
      margin-bottom: 3rem;
    }
  }
`;

export const logoContainer = css`
  width: 7.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const jobiImageContainer = css`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(10%, 30%);
  width: 20rem;
`;
