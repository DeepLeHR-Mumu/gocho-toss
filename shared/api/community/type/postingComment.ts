export interface PostingCommentObjDef {
  id: number;
  posting_id: number;
  user_id: number;
  created_time: number;
  description: string;
  parent_comment_id: null | number;
  nickname: string;
  badge: string;
}
