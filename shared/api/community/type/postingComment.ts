export interface PostingCommentObjDef {
  id: number;
  posting_id: number;
  user_id: number;
  created_time: number;
  description: string;
  parent_comment_id: null | number;
  nickname: string;
  badge: string;
  image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
}
