import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 8rem 0;
  text-align: center;
`;

export const title = css`
  text-align: center;
  line-height: 1.6;
  word-break: keep-all;
  white-space: nowrap;
  font-size: 1.5rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: block;
`;

export const desc = css`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 3rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const imgBox = css`
  position: relative;
  width: 90%;
  height: 40rem;
  > img {
    object-fit: contain;
  }
`;

export const infoBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const infoDesc = css`
  font-size: 1rem;
  font-weight: 400;
  word-break: keep-all;
  color: ${COLORS.GRAY10};
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const linkCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 1rem;
  background-color: ${COLORS.GRAY90};
  height: 2.5rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY10};
`;
