import { useUserInfo } from "@/apis/auth/useUserInfo";
import { AlarmItem } from "./component/AlarmItem";
import { cssObj } from "./style";

import { alarmItemArr } from "./constants";

export const AlarmPart = () => {
  const { data: userInfo } = useUserInfo();

  if (!userInfo) return null;

  const { alarmConfig } = userInfo;

  return (
    <div css={cssObj.wrapper}>
      {alarmItemArr.map(({ itemTitle, itemDesc, alarmText }) => (
        <AlarmItem
          key={alarmText}
          itemTitle={itemTitle}
          itemDesc={itemDesc}
          userId={userInfo.id}
          alarmText={alarmText}
          isAlarmReceive={alarmConfig[alarmText]}
        />
      ))}
    </div>
  );
};
