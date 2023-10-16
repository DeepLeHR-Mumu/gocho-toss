import { FunctionComponent } from "react";

import { titleCSS } from "./style";
import { HiddenH2Props } from "./type";

export const HiddenH2: FunctionComponent<HiddenH2Props> = ({ title }) => <h2 css={titleCSS}>{title}</h2>;
