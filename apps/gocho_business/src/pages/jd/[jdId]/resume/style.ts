import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
  `,

  applicantListWrapper: css`
    flex-basis: 12.5rem;
    flex-shrink: 0;
  `,

  resumeWrapper: css`
    flex-grow: 1;
    background-color: ${COLOR.WHITE};

    > iframe {
      border: 3px solid ${COLOR.WHITE};
    }
  `,

  resumeMargin: css`
    height: 1.5rem;
    background-color: #f2f2f5;
  `,

  resumeLoading: css`
    height: 20rem;
    display: grid;
    place-items: center;
  `,

  buttonWrapper: css``,

  saving: css`
    span {
      background-color: ${COLOR.BLUE300};
      font-size: 50px;
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }

    span:nth-child(2) {
      animation-delay: 0.2s;
    }

    span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes blink {
      0% {
        background-color: ${COLOR.BLUE100};
      }
      20% {
        background-color: ${COLOR.BLUE200};
      }
      100% {
        background-color: ${COLOR.BLUE300};
      }
    }
  `,
};
