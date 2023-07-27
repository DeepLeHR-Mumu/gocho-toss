import { ResponseObjDef } from "./type";

export const noticeDetailSelector = ({ data: notice }: ResponseObjDef) => ({
  id: notice.id,
  type: notice.type,
  title: notice.title,
  description: notice.description,
  view: notice.view,
  createdTime: notice.created_time,
});
