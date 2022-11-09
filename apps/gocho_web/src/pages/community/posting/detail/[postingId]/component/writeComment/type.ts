export interface CommentFormValues {
  description: string;
  parentCommentId: null | number;
  postingId: number;
}

export interface WriteCommentProps {
  parentCommentId: null | number;
  isWriteReComment?: true;
}
