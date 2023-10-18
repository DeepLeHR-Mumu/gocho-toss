export interface ListActivityItemProps {
  type: string;
  title: string;
  titleDes?: string;
  desciption?: string;
  date: string[];
  editHadnler?: () => void;
  deleteHandler?: () => void;
}
