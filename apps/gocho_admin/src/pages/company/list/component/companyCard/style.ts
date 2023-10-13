import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLOR } from "shared-style/color";

export const companyContainer = css`
  height: 3rem;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > th {
    font-size: 1.25rem;
  }
`;

export const companyIdBox = css``;

export const companyNameBox = css`
  max-width: 12rem;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0 0.125rem;
  ${shorten()};
`;

export const flexBox = css`
  display: flex;
  gap: 0 0.5rem;
  align-items: center;
  ${shorten()};
`;

export const fixButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 2px solid ${COLOR.GRAY900};
  padding: 0.25rem 1rem;
  height: 2.25rem;
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;

export const deleteButton = css`
  font-weight: 500;
  border: 2px solid ${COLOR.GRAY900};
  padding: 0.25rem 1rem;
  height: 2.25rem;
  background-color: #b32100;
  color: ${COLOR.WHITE};
`;
