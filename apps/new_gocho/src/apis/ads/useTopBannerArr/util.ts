import { TopBannerDef } from "../type";

export const selector = (bannerArr: TopBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => {
    return {
      id: banner.id,
      startTime: banner.end_time,
      endTime: banner.end_time,
      color: banner.color,
      jd: {
        company: {
          id: banner.jd.company.id,
          logoUrl: banner.jd.company.logo_url,
          name: banner.jd.company.name,
        },
        id: banner.jd.id,
        title: banner.jd.title,
        startTime: banner.jd.start_time,
        endTime: banner.jd.end_time,
      },
    };
  });
  return { bannerDataArr, count };
};
