interface CompanyCommentDef {
  id: number;
  company_id: number;
  jd_id: number;
  description: string;
  user_id: number | null;
  created_time: number;
  liked: boolean;
  disliked: boolean;
  nickname: string;
  title: string | null;
  badge: "default" | "admin" | "early_bird";
  like_count: number;
  dislike_count: number;
}

export interface CompanyCommentArrDef {
  company: {
    name: string;
    id: number;
    logo_url: string;
  };
  comment_arr: CompanyCommentDef[] | null;
}
