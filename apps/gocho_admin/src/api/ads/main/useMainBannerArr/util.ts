import { MainBannerDef } from "../../type";

export const selector = (bannerArr: MainBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => ({
    id: banner.id,
    imageUrl: banner.image_url,
    color: banner.color,
    startTime: banner.start_time,
    endTime: banner.end_time,
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
  }));
  return { bannerDataArr, count };
};
