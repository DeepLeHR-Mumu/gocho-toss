export interface ListItemProps {
  title: string;
  titleDes?: string;
  isUturn?: boolean;
  description?: string;
  date: string[];
  children?: React.ReactNode;
  editHandler?: () => void;
  deleteHandler?: () => void;
}
