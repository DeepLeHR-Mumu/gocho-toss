export interface DetailCommentProps {
  jdId: number | null;
  userInfo:
    | {
        id: number;
        email: string;
        nickname: string;
        badge: "default" | "early_bird" | "admin";
        image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      }
    | undefined;
  commentDataArr: {
    company: {
      name: string;
      logoUrl: string | null;
      id: number;
    };
    commentArr:
      | {
          id: number;
          title: string | null;
          companyId: number;
          jdId: number;
          description: string;
          userId: number | null;
          createdTime: number;
          liked: boolean;
          disLiked: boolean;
          disLikeCount: number;
          nickname: string;
          badge: "default" | "early_bird" | "admin";
          likeCount: number;
        }[]
      | null;
  };
}
