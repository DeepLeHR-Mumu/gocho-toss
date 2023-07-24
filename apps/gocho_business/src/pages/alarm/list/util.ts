export const alarmCategoryToLink = (category: string) => {
  switch (category) {
    case "공지":
      return "/notice/list?page=1";
    case "기업":
      return "/company/edit";
    case "공고":
      return "/jd/list?page=1&order=recent";
    default:
      return "/";
  }
};
