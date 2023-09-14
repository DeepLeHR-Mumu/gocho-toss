import { AlarmText } from "../../type";

export interface AlarmItemProps {
  userId: number;
  itemTitle: string;
  itemDesc: string;
  alarmText: AlarmText;
  isAlarmReceive: boolean;
}
