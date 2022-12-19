import { FunctionComponent } from "react";

import { nameCSS, wrapper } from "./style";

interface Props {
  name: string;
}

export const FactoryCardPart: FunctionComponent<Props> = ({ name }) => (
  <div css={wrapper}>
    <p css={nameCSS}>{name}</p>
  </div>
);
