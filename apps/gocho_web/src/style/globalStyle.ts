import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { DESKTOP, TABLET } from "shared-style/mediaQuery";

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
    font-family: "Noto Sans KR", Verdana, sans-serif;
    min-width: 768px;
    /* overflow-x: hidden; */
    font-size: 16px;
    ${DESKTOP} {
      font-size: 14px;
    }
    ${TABLET} {
      font-size: 12px;
    }
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
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;

    :focus {
      outline: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong {
    word-break: keep-all;
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
    font-family: "Noto Sans KR", Verdana, sans-serif;
  }
`;
