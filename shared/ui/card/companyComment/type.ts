export interface CommentCardProps {
  companyData: {
    id: number;
    logoUrl: string;
    name: string;
    commentCount: number;
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
  isMobile?: never;
  isSkeleton: boolean;
}
