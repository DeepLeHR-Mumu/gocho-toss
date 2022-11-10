export interface CommentProps {
  isRecomment: boolean;
  commentData: {
    id: number;
    userId: number;
    description: string;
    nickname: string;
    badge: "default" | "early_bird" | "admin";
    image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
    createdTime: number;
  };
  postingId: number;
  loginUserId: number | undefined;
}
