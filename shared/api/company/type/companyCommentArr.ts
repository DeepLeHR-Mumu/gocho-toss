interface CompanyCommentDef {
  user_id: number | null;
  nickname: string;
  badge: "default" | "admin" | "early_bird";
  id: number;
  company_id: number;
  jd_id: number;
  description: string;
  created_time: number;
  liked: boolean;
  disliked: boolean;
  title: string | null;
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
