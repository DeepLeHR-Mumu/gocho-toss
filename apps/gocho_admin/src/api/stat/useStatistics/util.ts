import { ResponseObjDef } from "./type";

export const statSelector = ({ data: statistics }: ResponseObjDef) => {
  return {
    allUsers: statistics.user.all_users,
    todayUser: statistics.user.today_user,
    userGraphData: statistics.user.user_graph,
    todayComments: statistics.site.today_comments,
    todayJds: statistics.site.today_jds,
    todayJdBookmarks: statistics.site.today_jd_bookmarks,
    todayCompanyBookmarks: statistics.site.today_company_bookmarks,
    commentGraphData: statistics.site.comment_graph,
    postingGraphData: statistics.site.posting_graph,
    jdBookmarkGraphData: statistics.site.jd_bookmark_graph,
    companyBookmarkGraphData: statistics.site.company_bookmark_graph,
  };
};
