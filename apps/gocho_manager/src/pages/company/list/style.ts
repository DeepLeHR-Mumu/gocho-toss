import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const sectionContainer = css`
  margin: 0 2rem;
`;

export const tableContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

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
  font-weight: 500;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.25rem 1rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const deleteButton = css`
  font-weight: 500;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.25rem 1rem;
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;
