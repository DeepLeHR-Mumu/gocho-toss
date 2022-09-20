import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 11.5rem 0 4.1875rem;
  height: calc(100vh - 20rem);
  box-sizing: border-box;
  background-color: ${COLORS.BLUE_SECOND40};
`;

export const title = css`
  font-size: 1px;
  opacity: 0;
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
`;

export const flexBox = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const container = css`
  position: relative;
  width: calc(100% - 6rem);
  padding-bottom: 2rem;
  border-radius: 0 0 2rem 2rem;
  background-color: ${COLORS.GRAY100};
  min-height: 18rem;
`;

export const tableHead = css`
  display: flex;
  align-items: center;
  box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.25);

  > li {
    width: 25%;
    padding: 0.5rem 0;
    text-align: center;
    color: ${COLORS.GRAY40};
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const cardBox = css`
  margin-bottom: 3.125rem;
`;
