export interface ResumeDropDownProps<T extends string | number> {
  placeholder: string;
  value: T | null;
  setValue: (value: T) => void;
  menuArr: { content: T }[];
  isReqired?: boolean;
  onClickCallback?: () => void;
  state?: {
    state: "default" | "error";
    message?: string;
  };
}
