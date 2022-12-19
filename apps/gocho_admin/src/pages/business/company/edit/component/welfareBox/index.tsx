import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { WelfareBoxProps } from "./type";

export const WelfareBox: FunctionComponent<WelfareBoxProps> = ({ welfare }) => {
  return (
    <div css={cssObj.dataContainer}>
      <strong css={cssObj.dataTitle}>{welfare.name}</strong>
      <div>
        {welfare.data?.map((text) => {
          return (
            <p css={cssObj.dataBox} key={`${welfare.name}${text}`}>
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};
