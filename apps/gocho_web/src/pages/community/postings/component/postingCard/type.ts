export interface PostingCardProps {
  postingData: {
    userID: number;
    type: "진로" | "자유" | "기업" | "자격증";
    title: string;
    description: string;
    nickname: string;
    createdTime: number;
    like: number;
    view: number;
    commentCount: number;
  };
  modalOpen: () => void;
  isSkeleton?: never;
}

export interface PostingCardSkeleton {
  postingData?: never;
  modalOpen?: never;
  isSkeleton: boolean;
}
