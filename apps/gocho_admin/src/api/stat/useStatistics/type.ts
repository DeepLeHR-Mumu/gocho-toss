import { QueryFunctionContext } from "@tanstack/react-query";

export interface MonthlyDataObjDef {
  month: string;
  value: number;
}

interface StatisticsObjDef {
  user: {
    all_users: number;
    today_user: number;
    user_graph: MonthlyDataObjDef[];
  };
  site: {
    today_comments: number;
    today_jds: number;
    today_jd_bookmarks: number;
    today_company_bookmarks: number;
    comment_graph: MonthlyDataObjDef[];
    posting_graph: MonthlyDataObjDef[];
    jd_bookmark_graph: MonthlyDataObjDef[];
    company_bookmark_graph: MonthlyDataObjDef[];
  };
}

export interface ResponseObjDef {
  data: StatisticsObjDef;
  count: number;
}

export const statisticsKeyObj = {
  all: [{ data: "statistics" }] as const,
};

export interface GetStatisticsDef {
  ({ queryKey }: QueryFunctionContext<typeof statisticsKeyObj.all>): Promise<ResponseObjDef>;
}
