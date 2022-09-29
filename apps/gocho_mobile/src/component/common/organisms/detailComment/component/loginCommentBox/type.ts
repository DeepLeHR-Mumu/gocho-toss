export interface LoginCommentBoxProps {
  commentArr: {
    nickname: string;
    jdTitle: string;
    createdTime: number;
    description: string;
    like: number;
    dislike: number;
    id: number;
    badge: "default" | "early_bird" | "admin";
  }[];
  userData: {
    id: number;
    badge: "default" | "early_bird" | "admin";
    nickname: string;
  };
}
