import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
