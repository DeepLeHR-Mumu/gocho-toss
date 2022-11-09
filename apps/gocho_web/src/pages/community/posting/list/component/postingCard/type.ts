export interface PostingCardProps {
  postingData: {
    id: number;
    userID: number;
    type: "진로" | "자유" | "기업" | "자격증";
    title: string;
    description: string;
    nickname: string;
    createdTime: number;
    like: number;
    view: number;
    commentCount: number;
    image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
  };
  isSkeleton?: never;
}

export interface PostingCardSkeleton {
  postingData?: never;
  isSkeleton: boolean;
}
