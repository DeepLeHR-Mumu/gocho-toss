import { FunctionComponent } from "react";

import { titleCSS } from "./style";
import { HiddenH1Props } from "./type";

export const HiddenH1: FunctionComponent<HiddenH1Props> = ({ title }) => <h1 css={titleCSS}>{title}</h1>;
