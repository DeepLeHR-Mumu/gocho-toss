export interface UserInfoObjDef {
  id: number;
  email: string;
  nickname: string;
  badge: "default" | "early_bird" | "admin";
  alarm_config: {
    bookmark_jd_end_time: boolean;
    bookmark_company_new_jd: boolean;
    community_new_comment: boolean;
    benefit_event: boolean;
  };
  image: string;
  is_pass: boolean;
}
