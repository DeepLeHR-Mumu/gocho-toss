import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const inputCSS = css`
  :checked + label {
    > p {
      ::after {
        opacity: 1;
      }
    }
  }
`;

const defaultBeforeAfter = css`
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export const labelCSS = css`
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    color: ${COLORS.GRAY40};
    font-size: 0.875rem;
    font-weight: 400;
    position: relative;
    padding-left: 1.5rem;

    ::before {
      ${defaultBeforeAfter};
      border: 1px solid ${COLORS.GRAY60};
      background-color: ${COLORS.GRAY100};
    }

    ::after {
      ${defaultBeforeAfter};
      border: 1px solid ${COLORS.GRAY60};
      background-image: url('data:image/svg+xml;utf8,<svg stroke="skyblue" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>');
      background-position: center;
      background-size: 1rem;
      background-repeat: no-repeat;
      opacity: 0;
    }
  }
`;
