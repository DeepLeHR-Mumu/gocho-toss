import { ResponseObjDef } from "./type";

export const noticeDetailSelector = ({ data: notice, page_result }: ResponseObjDef) => {
  const pageResult = {
    prev: {
      id: page_result?.prev.id,
      title: page_result?.prev.title,
      created_time: page_result?.prev.created_time,
    },

    next: {
      id: page_result?.next.id,
      title: page_result?.next.title,
      created_time: page_result?.next.created_time,
    },
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
