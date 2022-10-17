import { BannerObjDef } from "../type";

export const selector = (bannerArr: BannerObjDef[], count: number, type: number) => {
  const bannerDataArr = bannerArr.map((banner) => {
    if (type === 0)
      return {
        id: banner.id,
        jdid: banner.jd_id,
        image: banner.image,
        companyName: banner.company_name,
        title: banner.jd_title,
        color: banner.color,
        startTime: banner.start_time,
        endTime: banner.end_time,
      };

    if (type === 1)
      return {
        id: banner.id,
        jdid: banner.jd_id,
        companyLogo: banner.company_logo,
        companyName: banner.company_name,
        title: banner.jd_title,
        color: banner.color,
        startTime: banner.start_time,
        endTime: banner.end_time,
      };

    return {
      id: banner.id,
      image: banner.image,
      startTime: banner.start_time,
      endTime: banner.end_time,
    };
  });
  return { bannerDataArr, count };
};
