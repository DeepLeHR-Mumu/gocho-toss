import { FC, useState } from "react";
import { Divider, Switch } from "shared-ui/deeple-ds";

import { cssObj } from "./style";
import { usePatchAlarm } from "@/apis/auth/usePatchUserAlarm";
import { AlarmItemProps } from "./type";

export const AlarmItem: FC<AlarmItemProps> = ({ userId, itemTitle, itemDes, alarmText, isAlarmReceive }) => {
  const { mutate: patchAlarmSetting } = usePatchAlarm();
  const [isReceive, setReceive] = useState<boolean>(isAlarmReceive);

  const handlerSettingAlarm = () => {
    setReceive(!isReceive);
    patchAlarmSetting({
      userId,
      alarmSetting: {
        alarmText,
        alarmReceive: !isAlarmReceive,
      },
    });
  };

  return (
    <>
      <div css={cssObj.boxWrapper}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.titleText}>{itemTitle}</h3>
          <p css={cssObj.desText}>{itemDes}</p>
        </div>
        <Switch checked={isReceive} onChange={handlerSettingAlarm} />
      </div>
      <Divider />
    </>
  );
};
