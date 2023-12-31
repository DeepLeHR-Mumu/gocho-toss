import { ResponseObjDef } from "./type";

export const companyDetailEditSelector = ({ data: company }: ResponseObjDef) => ({
  id: company.id,
  name: company.name,
  businessNumber: company.business_number,
  industry: company.industry,
  size: company.size,
  catchUrl: company.catch_url,
  youtubeUrl: company.youtube_url,
  logoUrl: company.logo_url,
  bgImageUrl: company.background_image_url,
  employeeNumber: company.employee_number,
  foundDate: company.found_date,
  location: {
    address: company.location.address,
    x: company.location.x,
    y: company.location.y,
  },
  intro: company.intro,
  payAvg: company.pay_avg,
  payStart: company.pay_start,
  payDesc: company.pay_desc,
  bookmark: company.bookmark,
  view: company.view,
  welfare: company.welfare
    ? {
        money: company.welfare.money,
        health: company.welfare.health,
        life: company.welfare.life,
        holiday: company.welfare.holiday,
        facility: company.welfare.facility,
        vacation: company.welfare.vacation,
        growth: company.welfare.growth,
        etc: company.welfare.etc,
      }
    : null,
  nozo: {
    exists: company.nozo.exists,
    desc: company.nozo.desc,
  },
  factoryArr: company.factory_arr
    ? company.factory_arr.map((factory) => ({
        name: factory.name,
        id: factory.id,
        companyId: factory.company_id,
        address: factory.address,
        maleNumber: factory.male_number,
        femaleNumber: factory.female_number,
        product: factory.product,
        bus: {
          exists: factory.bus.exists,
          desc: factory.bus.desc,
        },
        dormitory: {
          exists: factory.dormitory.exists,
          desc: factory.dormitory.desc,
        },
      }))
    : null,
});
