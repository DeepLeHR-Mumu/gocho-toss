export interface LoginCommentBoxProps {
  jdId: number | null;
  companyData: {
    name: string;
    logoUrl: string;
    id: number;
  };
  commentArr: {
    id: number;
    companyId: number;
    jdId: number;
    description: string;
    userId: number | null;
    createdTime: number;
    liked: boolean;
    disLiked: boolean;
    nickname: string;
    title: string;
    badge: "default" | "admin" | "early_bird";
    likeCount: number;
    disLikeCount: number;
  }[];
  userData: {
    id: number;
    badge: "default" | "early_bird" | "admin";
    nickname: string;
  };
}

export interface CommentFormValues {
  description: string;
  companyId: number;
  jdId: number | null;
}
