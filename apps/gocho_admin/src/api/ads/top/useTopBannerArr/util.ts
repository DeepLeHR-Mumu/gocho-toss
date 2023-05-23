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
  }));
  return { bannerDataArr, pageResult };
};
