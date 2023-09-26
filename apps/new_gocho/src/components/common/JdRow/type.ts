export interface JdRowProps {
  jd?: {
    jdId: number;
    companyName: string;
    jdTitle: string;
    dueDate: string;
    bookmarked: boolean;
    cut?: boolean;
  };
  half?: boolean;
  replace?: boolean;
  callback?: () => void;
}
