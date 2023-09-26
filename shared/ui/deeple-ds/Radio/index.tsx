import { ForwardRefRenderFunction, forwardRef } from "react";

import { RadioProps } from "./type";
import { cssObj } from "./style";

const ForwardedRadio: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (props, ref) => (
  <input type="radio" css={cssObj.radio} {...props} ref={ref} />
);

export const Radio = forwardRef(ForwardedRadio);
