export interface DetailCommentProps {
  userInfo?: {
    id: number;
    email: string;
    nickname: string;
    badge: "default" | "early_bird" | "admin";
    image: string;
  };
  company: {
    name: string;
    logoUrl: string | null;
    id: number;
  };
  commentDataArr?: {
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
