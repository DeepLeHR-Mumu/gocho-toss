export interface ResumeDropDownProps {
  placeholder?: string;
  menuArr: { content: string }[];
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClickCallback?: () => void;
}
