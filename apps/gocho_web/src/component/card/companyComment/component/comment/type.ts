export interface CommentProps {
  commentData: {
    nickname: string;
    createdTime: number | null;
    jdTitle: string | null;
    description: string;
    like: number;
    dislike: number;
  };
}
