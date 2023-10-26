export interface ListItemProps {
  title: string;
  titleDes?: string;
  isUturn?: boolean;
  desciption?: string;
  date: string[];
  children?: React.ReactNode;
  editHadnler?: () => void;
  deleteHandler?: () => void;
}
