import { PostingCommentObjDef } from "./postingComment";

export interface PostingObjDef {
  id: number;
  title: string;
  description: string;
  created_time: number;
  type: "자유" | "진로" | "기업" | "자격증";
  user_id: number;
  like: number;
  view: number;
  nickname: string;
  badge: "default" | "early_bird" | "admin";
  comments: PostingCommentObjDef[];
  image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
}
