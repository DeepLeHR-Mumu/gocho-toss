import { TopBannerDef } from "../type";

export const selector = (bannerArr: TopBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => {
    return {
      id: banner.id,
      startTime: banner.end_time,
      endTime: banner.end_time,
      color: banner.color,
      company: {
        id: banner.company.id,
        logoUrl: banner.company.logo_url,
        name: banner.company.name,
      },
      jd: {
        id: banner.jd.id,
        title: banner.jd.title,
        startTime: banner.jd.start_time,
        endTime: banner.jd.end_time,
      },
    };
  });
  return { bannerDataArr, count };
};
