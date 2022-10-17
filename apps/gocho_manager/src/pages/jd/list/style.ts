import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const sectionContainer = css`
  margin: 0 2rem;
`;

export const tableContainer = css`
  width: 100%;
`;

export const jobContainer = css`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > th {
    font-size: 1.25rem;
  }
`;

export const jobIdBox = css`
  width: 10%;
  text-align: center;
`;

export const mainInfoBox = css`
  width: 30%;
  text-align: center;
  ${shorten()};
`;

export const companyName = css`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const jobTitle = css`
  font-weight: 500;
  ${shorten()};
`;

export const taskContainer = css`
  width: 20%;
  display: flex;
  justify-content: center;
  ${shorten()};
`;

export const taskBox = css`
  :after {
    content: ",";
    margin-right: 0.25rem;
  }

  :last-of-type {
    :after {
      content: "";
      margin-right: 0;
    }
  }
`;

export const dateBox = css`
  width: 10%;
  text-align: center;
`;

export const buttonContainer = css`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const deleteButton = css`
  font-weight: 500;
  width: 48%;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.125rem 0.25rem;
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;

export const activeButton = css`
  font-weight: 500;
  width: 48%;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.125rem 0.25rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;
