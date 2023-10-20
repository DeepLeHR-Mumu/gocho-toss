export interface ResumeDropDownProps<T extends string | number> {
  placeholder: string;
  value: T | null;
  setValue: (value: T) => void;
  menuArr: { content: T }[];
  onClickCallback?: () => void;
}
