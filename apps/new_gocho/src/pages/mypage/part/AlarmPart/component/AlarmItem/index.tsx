import { FC } from "react";
import { Divider, Switch } from "shared-ui/deeple-ds";

import { cssObj } from "./style";

export interface AlarmItemProps {
  itemTitle: string;
  itemDes: string;
}

export const AlarmItem: FC<AlarmItemProps> = ({ itemTitle, itemDes }) => {
  return (
    <>
      <div css={cssObj.boxWrapper}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.titleText}>{itemTitle}</h3>
          <p css={cssObj.desText}>{itemDes}</p>
        </div>
        <Switch
          checked
          onClick={() => {
            alert("123");
          }}
        />
      </div>
      <Divider />
    </>
  );
};
