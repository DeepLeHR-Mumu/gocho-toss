import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  html {
    font-family: Pretendard Variable, serif;
    font-size: 16px;
    min-width: 1440px;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  p,
  strong,
  ul,
  button,
  a,
  h1,
  h2,
  h3,
  h4,
  span,
  h5 {
    line-height: 1.6;
    word-break: keep-all;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  p,
  strong,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${COLORS.GRAY10};
  }
  a {
    text-decoration: none;
    color: ${COLORS.GRAY10};

    :focus {
      outline: none;
    }
    :focus-visible {
      outline-color: ${COLORS.BLUE_FIRST40};
      outline-offset: 0.3rem;
      outline-style: solid;
      outline-width: 3px;
    }
  }
  input,
  select,
  button {
    cursor: pointer;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;

    :focus {
      outline: none;
    }
    :focus-visible {
      outline-color: ${COLORS.BLUE_FIRST40};
      outline-offset: 0.3rem;
      outline-style: solid;
      outline-width: 3px;
    }
  }
  input[type="checkbox"],
  input[type="radio"] {
    :focus {
      outline: none;
    }
    :focus-visible {
      outline: none;
    }
  }
  textarea {
    font-family: Pretendard Variable, serif;
  }
  input[type="number"] {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      appearance: none;
    }
  }
`;
