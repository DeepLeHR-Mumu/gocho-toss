import { Dispatch, SetStateAction } from "react";

export interface HeaderPartProps {
  setCurrentPositionId: Dispatch<SetStateAction<number>>;
  currentPositionId: number;
  isSkeleton?: never;
}

export interface HeaderPartSkeleton {
  isSkeleton: boolean;
  setCurrentPositionId?: never;
  currentPositionId?: never;
}
