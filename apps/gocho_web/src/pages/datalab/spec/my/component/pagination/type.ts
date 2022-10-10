import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
  setActiveCardIndex: Dispatch<SetStateAction<number | null>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
