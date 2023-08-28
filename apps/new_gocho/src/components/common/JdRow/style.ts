import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: (half?: boolean) => {
    return css`
      border: 1px solid ${NEWCOLORS.GRAY200};
      border-radius: 1rem;
      display: flex;
      flex-direction: row;
      padding: 1.25rem ${half ? "1.5rem" : "2.5rem"} 1.375rem 1.5rem;
      justify-content: space-between;
      align-items: center;
      background-color: ${NEWCOLORS.WHITE};
    `;
  },

  descriptionWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  jdCompanyName: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE4}
  `,

  jdTitleWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
  `,

  jdTitle: css`
    ${NEWTEXTS.TITLE12}
  `,

  jdDueDateWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-item: center;
  `,

  jdDueDate: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE4}
  `,

  expired: css`
    color: ${NEWCOLORS.BLUEGRAY300} !important;
    border-color: ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.GRAY100};
  `,
};
