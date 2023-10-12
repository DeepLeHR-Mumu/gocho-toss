import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    padding: 2rem 0;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  headerWrapper: css`
    display: flex;
    justify-content: space-between;
  `,

  iconWrapper: css`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  `,

  require: css`
    color: ${NEWCOLORS.RED200};
  `,

  titleHeader: css`
    ${NEWTEXTS.TITLE5_M1620};
    display: flex;
    align-item: center;
    gap: 0.5rem;
  `,

  image: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  icon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.GRAY450};
  `,

  titleWrapper: css`
    display: flex;
    padding: 0.75rem 0;
  `,

  title: css`
    ${NEWTEXTS.TITLE4_B1822};
    line-height: 1.375rem;
    margin-right: 1rem;
  `,

  titelDes: css`
    ${NEWTEXTS.BODY2_R1624};
    color: ${NEWCOLORS.GRAY500};
    line-height: 1.25rem;
    margin-right: 0.5rem;
  `,

  // TODO: 2줄 바꿈 글자 수 넘으면 ... 추가하기
  description: css`
    ${NEWTEXTS.BODY2_R1624};
    color: ${NEWCOLORS.GRAY700};
    margin-bottom: 1rem;
  `,

  date: css`
    ${NEWTEXTS.BODY2_R1624};
    color: ${NEWCOLORS.GRAY700};
  `,
};
