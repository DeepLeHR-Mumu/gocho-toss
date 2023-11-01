export type AlarmText = "bookmarkJdEndTime" | "bookmarkCompanyNewJd" | "communityNewComment" | "benefitEvent";

export interface AlarmItemObj {
  alarmText: AlarmText;
  itemTitle: string;
  itemDesc: string;
}
