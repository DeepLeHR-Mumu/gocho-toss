export interface TipCardProps {
  tipData: {
    id: number;
    thumbnailSrc: string;
    title: string;
    uploaderName: string;
    description: string;
    tagArr: string[];
    createdTime: number;
    likeCount: number;
    viewCount: number;
    imgPageCount: number;
  };
  isSkeleton?: never;
}

export interface TipCardSkeleton {
  tipData?: never;
  isSkeleton: boolean;
}
