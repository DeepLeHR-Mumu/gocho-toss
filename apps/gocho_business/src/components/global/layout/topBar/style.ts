import { css } from "@emotion/react";

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`;
export const container = css`
  display: flex;
  align-items: center;
`;

export const logo = css`
  height: 2rem;
  width: 2rem;
  background-color: pink;
  margin-right: 1rem;
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const logoutButton = css`
  padding: 0.75rem 1rem;
  border: 1px solid #000000;
  font-weight: 400;
`;
