interface CompanyCommentDef {
  id: number;
  company_id: number;
  job_id: number;
  description: string;
  user_id: number | null;
  created_time: number;
  like: number;
  dislike: number;
  // NOTMYFAULT 현재 서비스와 엮여있는 상태 - 추후 변경예정
  nickname: string;
  title: string;
  badge: "default" | "admin" | "early_bird";
  time: null | number;
}

export interface CompanyCommentArrDef {
  company: {
    name: string;
    id: number;
    logo_url: string;
  };
  comment_arr: CompanyCommentDef[];
}
