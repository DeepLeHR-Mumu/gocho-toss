export interface NoticeFormValues {
  type: number;
  title: string;
  description: string;
}

export const TYPE_ARR = [
  { text: "공지", data: 0 },
  { text: "안내", data: 1 },
  { text: "기타", data: 2 },
];
