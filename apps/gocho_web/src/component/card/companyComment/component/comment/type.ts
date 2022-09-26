export interface CommentProps {
  nickname: string;
  commentData: {
    nickname: string;
    createdTime: number | null;
    jdTitle: string | null;
    description: string;
    like: number;
    dislike: number;
    badge: "default" | "early_bird" | "admin";
  };
}
