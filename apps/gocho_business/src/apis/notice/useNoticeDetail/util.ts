import { ResponseObjDef } from "./type";

export const noticeDetailSelector = ({ data: notice, page_result }: ResponseObjDef) => {
  const prevObj = page_result?.prev
    ? {
        id: page_result?.prev.id,
        title: page_result?.prev.title,
        createdTime: page_result?.prev.created_time,
      }
    : null;

  const nextObj = page_result?.next
    ? {
        id: page_result?.next.id,
        title: page_result?.next.title,
        createdTime: page_result?.next.created_time,
      }
    : null;

  const pageResult = {
    prev: prevObj,
    next: nextObj,
  };

  const noticeData = {
    id: notice.id,
    type: notice.type,
    title: notice.title,
    description: notice.description,
    view: notice.view,
    createdTime: notice.created_time,
  };

  return { noticeData, pageResult };
};
