import { TopBannerDef } from "../type";

export const selector = (bannerArr: TopBannerDef[]) => {
  const bannerDataArr = bannerArr.map((banner) => ({
    id: banner.id,
    color: banner.color,
    startTime: banner.jd.start_time,
    endTime: banner.jd.end_time,
    jd: {
      company: {
        id: banner.jd.company.id,
        name: banner.jd.company.name,
        logoUrl: banner.jd.company.logo_url,
      },
      id: banner.jd.id,
      title: banner.jd.title,
      startTime: banner.jd.start_time,
      endTime: banner.jd.end_time,
      high: banner.jd.high,
      college: banner.jd.college,
      isBookmark: banner.jd.is_bookmark,
    },
  }));
  return { bannerDataArr };
};
