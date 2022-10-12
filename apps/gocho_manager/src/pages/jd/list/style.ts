import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const jobContainer = css`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
`;

export const mainInfoContainer = css`
  width: 40%;
  ${shorten()};
`;

export const companyName = css``;

export const jobTitle = css`
  ${shorten()};
`;

export const taskContainer = css`
  width: 20%;
  display: flex;
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

export const buttonContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const buttonBox = css`
  width: 48%;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.125rem 0.25rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;
