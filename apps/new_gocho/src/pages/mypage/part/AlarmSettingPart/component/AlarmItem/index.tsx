import { FC, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Divider, Switch } from "shared-ui/deeple-ds";

import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";
import { usePatchAlarmSetting } from "@/apis/auth/usePatchAlarmSetting";

import { AlarmItemProps } from "./type";
import { cssObj } from "./style";

export const AlarmItem: FC<AlarmItemProps> = ({ userId, itemTitle, itemDesc, alarmText, isAlarmReceive }) => {
  const queryClient = useQueryClient();

  const { mutate: patchAlarmSetting } = usePatchAlarmSetting();
  const [isReceive, setIsReceive] = useState<boolean>(isAlarmReceive);

  const handlerSettingAlarm = () => {
    patchAlarmSetting({
      userId,
      alarmSetting: {
        alarmText,
        alarmReceive: !isReceive,
      },
    });
    setIsReceive((prev) => !prev);
  };

  useEffect(
    () => () => {
      queryClient.invalidateQueries(userInfoKeyObj.userInfo);
    },
    [queryClient]
  );

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
