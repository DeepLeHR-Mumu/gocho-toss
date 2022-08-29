export interface CommunityPostingCardProps {
  communityPostingData: {
    type: "진로" | "자유" | "기업" | "자격증";
    title: string;
    description: string;
    nickname: string;
    commentArr: { nickname: string; description: string }[];
  };
}
