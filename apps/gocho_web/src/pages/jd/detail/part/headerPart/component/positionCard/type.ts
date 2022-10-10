import { Dispatch, SetStateAction } from "react";

export interface PositionCardProps {
  isDdayEnd: boolean;
  isSkeleton?: never;
  currentPositionId: number | null;
  setCurrentPositionId: Dispatch<SetStateAction<number | null>>;
  position: {
    id: number;
    requiredExp: {
      type: "신입" | "경력" | "무관";
    };
    rotationArr: string[];
    placeArr: string[];
    possibleEdu: {
      summary: string;
    };
    hireCount: number;
    task: {
      mainTask: string;
    };
    contractType: {
      type: string;
    };
  };
}

export interface PositionCardSkeleton {
  isDdayEnd?: never;
  isSkeleton: boolean;
  currentPositionId?: never;
  setCurrentPositionId?: never;
  position?: never;
  data?: never;
}
