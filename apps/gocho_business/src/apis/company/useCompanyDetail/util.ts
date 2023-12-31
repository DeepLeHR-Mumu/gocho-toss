import { ResponseObjDef } from "./type";

export const companyDetailSelector = ({ data }: ResponseObjDef) => {
  const factoryDataArr = data.factory_arr.map((factory) => ({
    id: factory.id,
    name: factory.name,
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
  }));

  return {
    id: data.id,
    status: data.status,
    name: data.name,
    size: data.size,
    logo: data.logo_url,
    backgroundImage: data.background_image_url,
    uploader: {
      name: data.uploader.name,
      department: data.uploader.department,
      isMine: data.uploader.is_mine,
      updatedTime: data.uploader.updated_time,
    },
    industry: data.industry,
    businessNumber: data.business_number,
    employeeNumber: data.employee_number,
    foundDate: data.found_date,
    location: {
      address: data.location.address,
      x: data.location.x,
      y: data.location.y,
    },
    intro: data.intro,
    payAvg: data.pay_avg,
    payStart: data.pay_start,
    payDesc: data.pay_desc,
    bookmark: data.bookmark,
    view: data.view,
    welfare: data.welfare,
    nozo: data.nozo,
    factory: factoryDataArr,
  };
};
