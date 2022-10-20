import { Dispatch, SetStateAction } from "react";

export interface HeaderPartProps {
  setCurrentPositionId: Dispatch<SetStateAction<number | null>>;
  currentPositionId: number | null;
  userId: number | undefined;
  isSkeleton?: never;
}

export interface HeaderPartSkeleton {
  isSkeleton: boolean;
  setCurrentPositionId?: never;
  currentPositionId?: never;
  userId?: never;
}
