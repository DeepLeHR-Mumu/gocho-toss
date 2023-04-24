import { CompanyDef, PageResultDef } from "../type/companyArr";

export const selector = (companyArr: CompanyDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };
  const companyDataArr = companyArr.map((data) => {
    return {
      id: data.id,
      logoUrl: data.logo_url,
      name: data.name,
      businessNumber: data.business_number,
      youtubeUrl: data.youtube_url,
      industry: data.industry,
      size: data.size,
      employeeNumber: data.employee_number,
      foundDate: data.found_date,
      address: data.address,
      intro: data.intro,
      payAvg: data.pay_avg,
      payStart: data.pay_start,
      payDesc: data.pay_desc,
      bookmark: data.bookmark,
      isBookmark: data.is_bookmark,
      view: data.view,
      commentCount: data.comment_count,
      welfare: {
        money: data.welfare.money,
        health: data.welfare.health,
        life: data.welfare.life,
        holiday: data.welfare.holiday,
        facility: data.welfare.facility,
        vacation: data.welfare.vacation,
        growth: data.welfare.growth,
        etc: data.welfare.etc,
      },
      nozo: {
        exists: data.nozo.exists,
        desc: data.nozo.desc,
      },
    };
  });
  return { companyDataArr, pageResult };
};
