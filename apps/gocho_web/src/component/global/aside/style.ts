import { css, SerializedStyles } from "@emotion/react";

interface asideWrapperCreatorDef {
  (isScrollTop: boolean): SerializedStyles;
}

export const asideWrapperCreator: asideWrapperCreatorDef = (isScrollTop) => {
  return css`
    position: fixed;
    top: 9rem;
    width: 100%;
    max-width: 1400px;
    left: 50%;
    transform: translate(-50%, 0);
    transition: opacity 0.3s ease-in;
    display: ${isScrollTop ? "none" : "block"};
    z-index: 10;

    /* 양 사이즈 배너 100px 기준 1400px - 200px = layout : 1200px  */
    @media (max-width: 1400px) {
      display: none;
    }
  `;
};
