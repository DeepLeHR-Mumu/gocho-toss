import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
