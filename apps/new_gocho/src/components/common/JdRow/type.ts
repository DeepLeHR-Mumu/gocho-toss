export interface JdRowProps {
  jd?: {
    jdId: number;
    companyName: string;
    jdTitle: string;
    dueDate: string;
    bookmarked: boolean;
    cut?: boolean;
  };
  half?: boolean; // NOTE 불필요해 보임.
}
