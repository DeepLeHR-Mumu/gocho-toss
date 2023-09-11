export interface CompanyCommentDef {
  id: number;
  uploader: {
    id: number;
    nickname: string;
    image: string;
  };
  description: string;
  created_time: string;
  like: number;
  is_liked: boolean;
  dislike: number;
  is_disliked: boolean;
  jd: { id: number; title: string } | null;
}

export interface CompanyCommentArrDef {
  company: {
    name: string;
    id: number;
    logo_url: string;
  };
  comment_arr: CompanyCommentDef[];
}
