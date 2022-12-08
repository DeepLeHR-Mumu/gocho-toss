export interface LoginCommentBoxProps {
  jdId: number | null;
  userData: {
    id: number;
    badge: "default" | "early_bird" | "admin";
    nickname: string;
  };
  companyId: number;
  commentArr: {
    id: number;
    title: string | null;
    companyId: number;
    jdId: number;
    description: string;
    userId: number | null;
    createdTime: number;
    liked: boolean;
    disLiked: boolean;
    disLikeCount: number;
    nickname: string;
    badge: "default" | "early_bird" | "admin";
    likeCount: number;
  }[];
}

export interface CommentFormValues {
  description: string;
  companyId: number;
  jdId: number | null;
}
