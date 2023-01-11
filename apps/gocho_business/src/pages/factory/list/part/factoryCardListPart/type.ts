import { Dispatch, SetStateAction } from "react";

export interface FactoryCardListPartProps {
  setEditingIndex: Dispatch<SetStateAction<number | null>>;
  editingIndex: number | null;
  setRejectedMessage: Dispatch<SetStateAction<string | null>>;
}
