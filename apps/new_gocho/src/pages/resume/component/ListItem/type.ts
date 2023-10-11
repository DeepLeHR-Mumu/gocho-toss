export interface ListItemProps {
  title: string;
  titleDes?: string;
  isUturn?: boolean;
  desciption: string;
  date: string[];
  editHadnler?: () => void;
  deleteHandler?: () => void;
}
