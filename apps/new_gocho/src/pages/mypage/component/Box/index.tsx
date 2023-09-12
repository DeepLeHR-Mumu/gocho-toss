import { AllHTMLAttributes } from "react";

import { cssObj } from "./style";

export const Box = ({ ...props }: AllHTMLAttributes<HTMLDivElement>) => <div css={cssObj.wrapper} {...props} />;
