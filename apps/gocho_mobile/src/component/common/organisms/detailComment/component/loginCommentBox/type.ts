export interface LoginCommentBoxProps {
  userData: {
    id: number;
    badge: "default" | "early_bird" | "admin";
    nickname: string;
  };
  companyId: number;
  commentArr: {
    id: number;
    uploader: {
      id: number;
      nickname: string;
      image: string;
    };
    description: string;
    createdTime: string;
    likeCount: number;
    isLiked: boolean;
    dislikeCount: number;
    isDisliked: boolean;
  }[];
}

export interface CommentFormValues {
  description: string;
  companyId: number;
}
