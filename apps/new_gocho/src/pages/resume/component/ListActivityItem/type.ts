export interface ListActivityItemProps {
  type: "수상" | "봉사" | "기타";
  title: string;
  titleDes?: string;
  desciption: string;
  date: string[];
  editHadnler?: () => void;
  deleteHandler?: () => void;
}
