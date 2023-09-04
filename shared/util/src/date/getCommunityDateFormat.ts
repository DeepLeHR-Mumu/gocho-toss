import dayjs from "dayjs";

export const getCommunityDateFormat = (date: string) => {
  const dayjsObj = dayjs(date);

  const now = dayjs();

  const diffInSeconds = now.diff(dayjsObj, "second");
  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = now.diff(dayjsObj, "minute");
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = now.diff(dayjsObj, "hour");
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = now.diff(dayjsObj, "day");
  if (diffInDays < 24) {
    return `${diffInDays}일 전`;
  }

  return dayjsObj.format("YYYY년 M월 D일");
};
