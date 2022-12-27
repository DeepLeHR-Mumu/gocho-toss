import { ResponseObjDef } from "./type";

export const companyDetailSelector = ({ data }: ResponseObjDef) => ({
  id: data.id,
  status: data.status,
  logoUrl: data.logo_url,
  name: data.name,
  catchUrl: data.catch_url,
  youtubeUrl: data.youtube_url,
  industry: data.industry,
  size: data.size,
  businessNumber: data.business_number,
  employeeNumber: data.employee_number,
  foundNumber: data.found_date,
  address: data.address,
  intro: data.intro,
  payAvg: data.pay_avg,
  payStart: data.pay_start,
  payDesc: data.pay_desc,
  bookmark: data.bookmark,
  view: data.view,
  welfare: data.welfare,
  nozo: data.nozo,
});
