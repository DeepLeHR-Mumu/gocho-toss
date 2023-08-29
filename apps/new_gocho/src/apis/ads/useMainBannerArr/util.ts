import { MainBannerDef } from "../type";

export const selector = (bannerArr: MainBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => {
    return {
      id: banner.id,
      pcImageUrl: banner.pc_image_url,
      mobileImageUrl: banner.mobile_image_url,
      type: banner.type,
      link: banner.link,
      startTime: banner.start_time,
      endTime: banner.end_time,
    };
  });
  return { bannerDataArr, count };
};
