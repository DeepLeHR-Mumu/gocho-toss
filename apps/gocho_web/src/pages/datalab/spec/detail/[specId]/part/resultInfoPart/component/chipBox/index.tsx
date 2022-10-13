import { FunctionComponent } from "react";
import { ChipBoxProps } from "./type";
import { wrapper, numberBox } from "./style";

export const ChipBox: FunctionComponent<ChipBoxProps> = ({ string, number }) => {
  return (
    <li css={wrapper}>
      {string}
      <span css={numberBox}>{number}</span>
    </li>
  );
};
