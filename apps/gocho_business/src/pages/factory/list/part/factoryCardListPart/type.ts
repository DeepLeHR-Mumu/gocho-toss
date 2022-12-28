import { Dispatch, SetStateAction } from "react";

export interface FactoryCardListPartProps {
  setIsEditing: Dispatch<SetStateAction<number | false>>;
  isEditing: number | false;
}
