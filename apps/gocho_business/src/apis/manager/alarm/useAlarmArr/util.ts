import { ResponseObjDef } from "./type";

export const alarmArrSelector = ({ data: alarmArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const alarmDataArr = alarmArr.map((alarm) => ({
    id: alarm.id,
    category: alarm.category,
    description: alarm.description,
    isRead: alarm.is_read,
    createdTime: alarm.created_time,
    updatedTime: alarm.updated_time,
    link: alarm.link,
  }));

  return { alarmDataArr, pageResult };
};
