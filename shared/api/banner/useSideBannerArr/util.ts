import { SideBannerDef } from "../type";

export const selector = (bannerArr: SideBannerDef[], count: number) => {
  const bannerDataArr = bannerArr.map((banner) => {
    return {
      id: banner.id,
      startTime: banner.start_time,
      endTime: banner.end_time,
      imageUrl: banner.image_url,
    };
  });
  return { bannerDataArr, count };
};
