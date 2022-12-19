import { css } from "@emotion/react";

export const wrapper = css`
  width: 18rem;
  padding: 1.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #cccccc;
`;

export const container = css`
  margin: 0 1rem;
`;

export const linkCSS = css`
  display: block;
  font-weight: 400;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  :hover {
    background-color: pink;
    color: white;
    font-weight: 700;
  }
`;

export const iconCSS = css`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
`;
