import { FunctionComponent } from "react";

import { InvisibleH3Props } from "./type";
import { titleCSS } from "./style";

export const InvisibleH3: FunctionComponent<InvisibleH3Props> = ({ title }) => <h3 css={titleCSS}>{title}</h3>;
