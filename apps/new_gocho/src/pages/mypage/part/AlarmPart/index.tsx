import { AlarmItem } from "./component/AlarmItem";
import { cssObj } from "./style";

import { AlarmItemArr } from "./constants";
import { useUserInfo } from "@/apis/auth/useUserInfo";

export const AlarmPart = () => {
  const { data: userInfo } = useUserInfo();

  if (!userInfo) return null;

  // const { alarmConfig } = userInfo;

  // console.log("alarmConfig", alarmConfig);

  return (
    <div css={cssObj.wrapper}>
      {AlarmItemArr.map(({ key, itemTitle, itemDes }) => {
        return <AlarmItem key={key} itemTitle={itemTitle} itemDes={itemDes} />;
      })}
    </div>
  );
};
