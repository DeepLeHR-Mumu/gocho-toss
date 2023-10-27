export interface ListActivityItemProps {
  type: string;
  title: string;
  titleDes?: string;
  description?: string;
  date: string[];
  editHandler?: () => void;
  deleteHandler?: () => void;
}
