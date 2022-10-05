export interface CommentProps {
  nickname: string;
  commentData: {
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
  };
}
