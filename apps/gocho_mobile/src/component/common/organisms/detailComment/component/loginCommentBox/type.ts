export interface LoginCommentBoxProps {
  commentArr: {
    nickname: string;
    title: string;
    createdTime: number;
    description: string;
    id: number;
    liked: boolean;
    disLiked: boolean;
    likeCount: number;
    disLikeCount: number;
    badge: "default" | "early_bird" | "admin";
  }[];
  userData: {
    id: number;
    badge: "default" | "early_bird" | "admin";
    nickname: string;
  };
}
