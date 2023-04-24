interface CompanyCommentDef {
  id: number;
  uploader: {
    id: number;
    nickname: string;
    image: string;
  };
  description: string;
  created_time: string;
  like_count: number;
  is_liked: boolean;
  dislike_count: number;
  is_disliked: boolean;
}

export interface CompanyCommentArrDef {
  company: {
    name: string;
    id: number;
    logo_url: string;
  };
  comment_arr: CompanyCommentDef[];
}
