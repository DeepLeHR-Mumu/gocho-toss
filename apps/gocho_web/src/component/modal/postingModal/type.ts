export interface PostingBoxProps {
  postingData: {
    id: number;
    userID: number;
    nickname: string;
    title: string;
    description: string;
    createdTime: number;
    type: "진로" | "자유" | "기업" | "자격증";
    like: number;
    view: number;
  };
}
