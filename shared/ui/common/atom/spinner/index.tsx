import { FunctionComponent } from "react";

import { spinnerContainer } from "./style";
import { SpinnerProps } from "./type";

export const Spinner: FunctionComponent<SpinnerProps> = ({ backgroundColor }) => {
  return <div css={spinnerContainer(backgroundColor)} />;
};
