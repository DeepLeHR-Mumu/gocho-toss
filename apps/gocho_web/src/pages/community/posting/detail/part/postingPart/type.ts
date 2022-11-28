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
    image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
  };
}
