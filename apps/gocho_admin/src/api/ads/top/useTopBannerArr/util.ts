import { ResponseObjDef } from "./type";

export const topBannerSelector = ({ data: bannerArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const bannerDataArr = bannerArr.map((banner) => ({
    id: banner.id,
    pcImageUrl: banner.pc_image_url,
    mobileImageUrl: banner.mobile_image_url,
    link: banner.link,
    startTime: banner.start_time,
    endTime: banner.end_time,
  }));
  return { bannerDataArr, pageResult };
};
