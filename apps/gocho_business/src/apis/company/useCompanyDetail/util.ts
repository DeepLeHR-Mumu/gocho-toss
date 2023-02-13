import { ResponseObjDef } from "./type";

export const companyDetailSelector = ({ data }: ResponseObjDef) => ({
  id: data.id,
  status: data.status,
  name: data.name,
  size: data.size,
  logo: data.logo_url,
  uploader: {
    name: data.uploader.name,
    department: data.uploader.department,
    isMine: data.uploader.is_mine,
  },
  industry: data.industry,
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
