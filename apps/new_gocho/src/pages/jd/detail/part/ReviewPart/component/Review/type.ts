type Thumbs = { count: number; isClicked: boolean };

export interface ReviewProps {
  companyId?: number;
  commentId?: number;
  uploader: { id?: number; nickname: string };
  time: string;
  comment: string;
  thumbsUp: Thumbs;
  thumbsDown: Thumbs;
  isMyComment?: boolean;
}
