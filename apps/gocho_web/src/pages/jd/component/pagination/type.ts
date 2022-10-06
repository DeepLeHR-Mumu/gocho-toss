export interface PaginationProps {
  linkObj: {
    pathname: string;
    query: {
      order: "recent" | "popular" | "view" | "end" | "name";
    };
  };
  totalPage: number;
}
