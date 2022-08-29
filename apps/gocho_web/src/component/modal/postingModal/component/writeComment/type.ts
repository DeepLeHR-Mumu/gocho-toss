export interface CommentFormValues {
  description: string;
  parentCommentId: null | number;
  postingId: number;
}

export interface WriteCommentProps {
  postingId: number;
  parentCommentId: null | number;
}
