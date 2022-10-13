import { FunctionComponent } from "react";

import { spinnerContainer, spinnerWrapper } from "./style";
import { SpinnerProps } from "./type";

export const Spinner: FunctionComponent<SpinnerProps> = ({ backgroundColor }) => {
  return (
    <div css={spinnerWrapper(backgroundColor)}>
      <div css={spinnerContainer(backgroundColor)} />
    </div>
  );
};
