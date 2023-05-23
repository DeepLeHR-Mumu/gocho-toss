export interface BannerFormValues {
  type: number;
  link: string | null;
  start_time: string;
  end_time: string;
}

export const TYPE_ARR = [
  { text: "링크 없는 배너", data: 0 },
  { text: "웹 링크 배너", data: 1 },
  { text: "앱 링크 배너", data: 2 },
];
