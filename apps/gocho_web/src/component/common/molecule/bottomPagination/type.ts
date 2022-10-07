export interface BottomPaginationProps {
  linkObj: {
    pathname: string;
    query?: {
      order?: "recent" | "popular" | "view" | "end" | "name";
    };
  };
  q?: string | string[] | undefined;
  totalPage: number;
}
