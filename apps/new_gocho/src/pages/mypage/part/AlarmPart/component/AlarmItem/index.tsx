import { FC, useState } from "react";
import { Divider, Switch } from "shared-ui/deeple-ds";

import { usePatchAlarmSetting } from "@/apis/auth/usePatchAlarmSetting";

import { AlarmItemProps } from "./type";

import { cssObj } from "./style";

export const AlarmItem: FC<AlarmItemProps> = ({ userId, itemTitle, itemDesc, alarmText, isAlarmReceive }) => {
  const { mutate: patchAlarmSetting } = usePatchAlarmSetting();
  const [isReceive, setIsReceive] = useState<boolean>(isAlarmReceive);

  const handlerSettingAlarm = () => {
    setIsReceive(!isReceive);
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
          <p css={cssObj.desText}>{itemDesc}</p>
        </div>
        <Switch checked={isReceive} onChange={handlerSettingAlarm} />
      </div>
      <Divider />
    </>
  );
};
