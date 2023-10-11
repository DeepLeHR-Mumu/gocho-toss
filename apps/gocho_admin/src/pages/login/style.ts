import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const title = css`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const inputTitle = css`
  color: ${COLOR.GRAY600};
  margin-right: 1rem;
`;

export const inputBox = css`
  width: 30%;
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  background-color: ${COLOR.WHITE};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const submitButton = css`
  font-size: 1.25rem;
  margin: 2rem auto 0;
  padding: 0.5rem;
  width: 30%;
  border: 2px solid ${COLOR.GRAY900};
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;
