export type AlarmText = "bookmark_jd_end_time" | "bookmark_company_new_jd" | "community_new_comment" | "benefit_event";

export interface AlarmItem {
  key: number;
  alarmText: AlarmText;
  itemTitle: string;
  itemDes: string;
}
