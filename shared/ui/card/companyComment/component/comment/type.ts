export interface CommentProps {
  commentData: {
    id: number;
    uploader: {
      id: number;
      nickname: string;
      image: string;
    };
    description: string;
    createdTime: string;
    likeCount: number;
    isLiked: boolean;
    dislikeCount: number;
    isDisliked: boolean;
  };
  company: {
    name: string;
    id: number;
    logoUrl: string;
  };
}
