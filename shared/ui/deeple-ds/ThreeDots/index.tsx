import { ThreeDotsProps } from "./type";
import { cssObj } from "./style";

export const ThreeDots = ({ config = { size: 0.5, gap: 0.625 } }: ThreeDotsProps) => (
  <div css={cssObj.wrapper(config.size ? config.size : 0.5, config.gap ? config.gap : 0.625)}>
    <div />
    <div />
    <div />
  </div>
);
