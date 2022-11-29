import { CompanyObjDef } from "../type/company";

// import { UseCompanyDetailResultDef } from "./type";

export const selector = (data: CompanyObjDef) => {
  return {
    id: data.id,
    name: data.name,
    industry: data.industry,
    size: data.size,
    catchUrl: data.catch_url,
    youtubeUrl: data.youtube_url,
    logoUrl: data.logo_url,
    employeeNumber: data.employee_number,
    foundDate: data.found_date,
    address: data.address,
    intro: data.intro,
    payAvg: data.pay_avg,
    payStart: data.pay_start,
    payDesc: data.pay_desc,
    bookmark: data.bookmark,
    view: data.view,
    welfare: {
      money: data.welfare.money,
      health: data.welfare.health,
      life: data.welfare.life,
      holiday: data.welfare.holiday,
      facility: data.welfare.facility,
      vacation: data.welfare.vacation,
      growth: data.welfare.growth,
      etc: data.welfare.etc,
    },
    nozo: {
      exists: data.nozo.exists,
      desc: data.nozo.desc,
    },
    factoryArr: data.factory_arr.map((factory) => {
      return {
        factoryName: factory.name,
        id: factory.id,
        companyId: factory.company_id,
        place1: factory.place_1,
        place2: factory.place_2,
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
      };
    }),
  };
};
