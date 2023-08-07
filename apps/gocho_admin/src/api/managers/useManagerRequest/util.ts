import { ResponseObjDef } from "./type";

export const managerRequestSelector = ({ data: managerRequest }: ResponseObjDef) => {
  const managerData = {
    id: managerRequest.id,
    status: managerRequest.status,
    isFirst: managerRequest.is_first,
    name: managerRequest.name,
    gender: managerRequest.gender,
    isForeigner: managerRequest.is_foreigner,
    birthDate: managerRequest.birth_date,
    phoneNumber: managerRequest.phone_numer,
    telecom: managerRequest.telecom,
    department: managerRequest.department,
    position: managerRequest.position,
    certificationUrl: managerRequest.certification_url,
    company: {
      id: managerRequest.company.id,
      name: managerRequest.company.name,
      status: { ...managerRequest.company.status },
      logoUrl: managerRequest.company.logo_url,
      backgroundImageUrl: managerRequest.company.background_image_url,
      businessNumber: managerRequest.company.business_number,
      youtubeUrl: managerRequest.company.youtube_url,
      industry: managerRequest.company.industry,
      size: managerRequest.company.size,
      employeeNumber: managerRequest.company.employee_number,
      foundDate: managerRequest.company.found_date,
      location: { ...managerRequest.company.location },
      intro: managerRequest.company.intro,
      payAvg: managerRequest.company.pay_avg,
      payStart: managerRequest.company.pay_start,
      payDesc: managerRequest.company.pay_desc,
      bookmark: managerRequest.company.bookmark,
      view: managerRequest.company.view,
      welfare: { ...managerRequest.company.welfare },
      nozo: {
        ...managerRequest.company.nozo,
      },
      factoryArr: managerRequest.company.factory_arr,
    },
  };
  return managerData;
};
