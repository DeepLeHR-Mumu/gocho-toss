import { Dispatch, SetStateAction } from "react";

export interface SettingProps {
  size: "S" | "M" | "L";
  parentScore?: undefined;
  parentSetState: Dispatch<SetStateAction<number>>;
}

export interface DisplayProps {
  size: "S" | "M" | "L";
  parentScore: number | null;
  parentSetState?: undefined;
}
