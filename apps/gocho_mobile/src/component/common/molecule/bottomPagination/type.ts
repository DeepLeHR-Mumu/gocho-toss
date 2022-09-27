import { Dispatch, SetStateAction } from "react";

export interface BottomPaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
