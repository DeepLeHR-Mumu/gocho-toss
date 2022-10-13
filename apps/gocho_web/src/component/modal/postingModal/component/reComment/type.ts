export interface reCommentProps {
  reComment: {
    id: number;
    userId: number;
    description: string;
    nickname: string;
    badge: string;
    image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
  };
  postingId: number;
  loginUserId: number | undefined;
}
