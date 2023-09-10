export interface CommentThumbsProps {
  type: "likes" | "dislikes";
  size: "large" | "small";
  companyId?: number;
  commentId?: number;
  count: number;
  isClicked: boolean;
}
