import { UserInfoObjDef } from "../type/userInfo";

export const selector = (data: UserInfoObjDef) => ({
  id: data.id,
  type: data.type,
  email: data.email,
  nickname: data.nickname,
  badge: data.badge,
  image: data.image,
  alarmConfig: {
    benefitEvent: data.alarm_config.benefit_event,
    bookmarkJdEndTime: data.alarm_config.bookmark_jd_end_time,
    bookmarkCompanyNewJd: data.alarm_config.bookmark_company_new_jd,
    communityNewComment: data.alarm_config.community_new_comment,
  },
  isPass: data.is_pass,
});
