import { ResponseObjDef } from "./type";

export const managerArrSelector = ({ data, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const managerDataArr = data.map((manager) => ({
    email: manager.email,
    name: manager.name,
    department: manager.department,
    createdTime: manager.created_time,
  }));

  return { managerDataArr, pageResult };
};
