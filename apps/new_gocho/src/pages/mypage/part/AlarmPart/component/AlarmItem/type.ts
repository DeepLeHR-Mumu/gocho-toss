import { AlarmText } from "../../type";

export interface AlarmItemProps {
  userId: number;
  itemTitle: string;
  itemDes: string;
  alarmText: AlarmText;
  isAlarmReceive: boolean;
}
