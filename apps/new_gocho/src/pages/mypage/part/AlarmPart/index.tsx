import { AlarmItem } from "./component/AlarmItem";
import { cssObj } from "./style";

import { alarmItemArr } from "./constants";
import { useUserInfo } from "@/apis/auth/useUserInfo";

export const AlarmPart = () => {
  const { data: userInfo } = useUserInfo();

  if (!userInfo) return null;

  const { alarmConfig } = userInfo;

  return (
    <div css={cssObj.wrapper}>
      {alarmItemArr.map(({ itemTitle, itemDesc, alarmText }) => {
        return (
          <AlarmItem
            key={alarmText}
            itemTitle={itemTitle}
            itemDesc={itemDesc}
            userId={userInfo.id}
            alarmText={alarmText}
            isAlarmReceive={alarmConfig[alarmText]}
          />
        );
      })}
    </div>
  );
};
