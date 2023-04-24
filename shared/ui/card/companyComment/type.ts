export interface CommentCardProps {
  companyData: {
    id: number;
    commentCount: number;
    logoUrl: string;
    name: string;
  };
  setCurrentModal: {
    (modalName: "loginModal", modalContentObj: { button: "home" | "close" }): void;
  };
  isMobile: boolean;
  isSkeleton?: never;
}

export interface CommentCardSkeleton {
  companyData?: never;
  setCurrentModal?: never;
  isMobile: boolean;
  isSkeleton: boolean;
}
