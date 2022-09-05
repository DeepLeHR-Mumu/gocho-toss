import { FunctionComponent } from "react";
import { ChipBoxProps } from "./type";
import { wrapper, numberBox } from "./style";

export const ChipBox: FunctionComponent<ChipBoxProps> = ({ string, number }) => {
  return (
    <div css={wrapper}>
      {string}
      <div css={numberBox}>{number}</div>
    </div>
  );
};
