import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const formContainer = css`
  background-color: ${COLOR.BLUE50};
  padding: 1rem;
`;

export const inputLabel = css`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const addFactoryButton = css`
  margin: 0 0 1.5rem auto;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLOR.GRAY900};
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;

export const submitButton = css`
  font-size: 1.75rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  width: 50%;
  border: 2px solid ${COLOR.GRAY900};
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;

export const checkMsgBox = css`
  color: ${COLOR.BLUE300};
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`;
