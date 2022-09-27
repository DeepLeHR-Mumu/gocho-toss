import { selector } from "shared-api/community/usePostingCommentArr/util";

export interface CommentProps {
  id: number;
  postingId: number;
  userId: number;
  loginUserId?: number;
  body: string;
  reCommentList: ReturnType<typeof selector> | [];
  nickname: string;
  emblem: string;
}
