import { FunctionComponent } from "react";
import { FiInfo } from "react-icons/fi";

import { InformDescProps } from "./type";
import { cssObj } from "./style";

export const InformDesc: FunctionComponent<InformDescProps> = ({ Icon, desc }) => {
  if (Icon) {
    const iconWithDescArr = desc.split("$icon");
    return (
      <div css={cssObj.wrapper}>
        <FiInfo />
        <strong css={cssObj.desc}>
          {iconWithDescArr[0]}
          <Icon />
          {iconWithDescArr[1]}
        </strong>
      </div>
    );
  }
  return (
    <div css={cssObj.wrapper}>
      <FiInfo />
      <strong css={cssObj.desc}>{desc}</strong>
    </div>
  );
};
