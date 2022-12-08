import { Dispatch, SetStateAction } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

export interface HeaderPartProps {
  setCurrentPositionId: Dispatch<SetStateAction<number>>;
  currentPositionId: number;
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface HeaderPartSkeleton {
  isSkeleton: boolean;
  setCurrentPositionId?: never;
  currentPositionId?: never;
  isBookmarked?: never;
  userId?: never;
  refetchUserBookmark?: never;
}
