import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  currentDate: Date;
  setTwoWeek: Dispatch<SetStateAction<{ date: Date }[]>>;
}

export interface changeWeekDef {
  (direction: "prev" | "next"): void;
}
