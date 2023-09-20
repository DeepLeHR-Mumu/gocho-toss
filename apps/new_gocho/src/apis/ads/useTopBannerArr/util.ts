import { TopBannerDef } from "../type";

export const selector = (bannerArr: TopBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => ({
    id: banner.id,
    company: {
      name: banner.jd.company.name,
      logoUrl: banner.jd.company.logo_url,
    },
    startTime: banner.jd.start_time,
    endTime: banner.jd.end_time,
    high: banner.jd.high,
    college: banner.jd.college,
    title: banner.jd.title,
    placeArr: [""],
    isBookmark: banner.jd.is_bookmark,
  }));
  return { bannerDataArr, count };
};
