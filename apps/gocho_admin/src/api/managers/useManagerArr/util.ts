import { ResponseObjDef } from "./type";

export const managerArrSelector = ({ data: managerArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const managerDataArr = managerArr.map((manager) => ({
    id: manager.id,
    status: manager.status,
    isFirst: manager.is_first,
    name: manager.name,
    gender: manager.gender,
    isForeigner: manager.is_foreigner,
    birthDate: manager.birth_date,
    phoneNumber: manager.phone_numer,
    telecom: manager.telecom,
    department: manager.department,
    position: manager.position,
    company: {
      id: manager.company.id,
      name: manager.company.name,
      logoUrl: manager.company.logo_url,
    },
  }));
  return { managerDataArr, pageResult };
};
