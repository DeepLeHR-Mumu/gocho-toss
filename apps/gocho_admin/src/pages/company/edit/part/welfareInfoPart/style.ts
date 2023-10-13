import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const sectionContainer = css`
  margin-bottom: 2rem;
`;

export const sectionTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

export const inputTitle = css`
  color: ${COLOR.GRAY600};
  margin-right: 1rem;
`;

export const flexBox = css`
  display: flex;
`;

export const welfareWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const welfareBox = css`
  width: 49%;
  display: flex;
  align-items: center;
`;

export const welfareInputBox = css`
  font-family: Noto Sans KR, sans-serif;
  flex-grow: 1;
  font-size: 16px;
  height: 5rem;
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const enterNotice = css`
  font-size: 0.875rem;
  color: ${COLOR.BLUE300};
  line-height: 1.5;
`;
