import { AlarmItem } from "./component/AlarmItem";
import { cssObj } from "./style";

import { alarmItemArr } from "./constants";
import { useUserInfo } from "@/apis/auth/useUserInfo";

export const AlarmPart = () => {
  const { data: userInfo } = useUserInfo();

  if (!userInfo) return null;

  const { alarmConfig } = userInfo;

  const alarmFetchedArr = alarmItemArr.map(({ key, itemTitle, itemDes, alarmText }) => {
    return {
      key,
      itemTitle,
      itemDes,
      alarmText,
      isAlarmReceive: alarmConfig[alarmText],
    };
  });

  return (
    <div css={cssObj.wrapper}>
      {alarmFetchedArr.map(({ key, itemTitle, itemDes, isAlarmReceive, alarmText }) => {
        return (
          <AlarmItem
            key={key}
            itemTitle={itemTitle}
            itemDes={itemDes}
            userId={userInfo.id}
            alarmText={alarmText}
            isAlarmReceive={isAlarmReceive}
          />
        );
      })}
    </div>
  );
};
