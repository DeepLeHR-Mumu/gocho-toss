import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

import { cssObj as modalWithTitleCssObj } from "@/components/common/ModalWithTitle/style";

export const cssObj = {
  wrapper: css`
    ${modalWithTitleCssObj.wrapper(34.5)}
    padding: 2rem;
  `,

  header: css`
    ${modalWithTitleCssObj.header}
    margin-bottom: 2rem;
  `,

  title: css`
    ${modalWithTitleCssObj.title}
  `,

  close: css`
    ${modalWithTitleCssObj.close}
  `,

  infoWrapper: css`
    padding: 1.25rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
  `,

  infoTitleWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `,

  mapIcon: css`
    width: 1.5rem;
    height: 1.5rem;
  `,

  infoTitle: css`
    ${TEXT.TITLE2_B2428}
  `,

  infoSubtitle: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE4_M1822}
  `,

  contentWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    margin-bottom: 1.75rem;
  `,

  descriptionList: css`
    ${TEXT.TITLE4_M1822}
  `,
};
