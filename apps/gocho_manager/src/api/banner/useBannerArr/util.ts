import { BannerObjDef } from "../type";

export const selector = (bannerArr: BannerObjDef[], count: number, type: string) => {
  const bannerDataArr = bannerArr.map((banner) => {
    if (type === "M")
      return {
        id: banner.id,
        color: banner.color,
        startTime: banner.start_time,
        endTime: banner.end_time,
        imageUrl: banner.image_url,
        companyName: banner.company.name,
        title: banner.jd.title,
      };

    if (type === "T")
      return {
        id: banner.id,
        color: banner.color,
        startTime: banner.start_time,
        endTime: banner.end_time,
        companyLogo: banner.company.logo_url,
        companyName: banner.company.name,
        title: banner.jd.title,
      };

    return {
      id: banner.id,
      image: banner.image_url,
      startTime: banner.start_time,
      endTime: banner.end_time,
    };
  });
  return { bannerDataArr, count };
};
