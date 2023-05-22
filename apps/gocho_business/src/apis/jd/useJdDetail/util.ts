import { ResponseObjDef } from "./type";

export const jdDetailSelector = ({ data: jd }: ResponseObjDef) => {
  const companyFactoryArr =
    jd.company.factories === null
      ? null
      : jd.company.factories?.map((factory) => ({
          id: factory.id,
          address: factory.address,
          factoryName: factory.name,
        }));

  const jdFactoryArr =
    jd.place.factory_arr === null
      ? null
      : jd.place.factory_arr?.map((factory) => ({
          id: factory.id,
          address: factory.address,
          factoryName: factory.name,
        }));

  return {
    id: jd.id,
    status: {
      name: jd.status.name,
      reason: jd.status.reason,
    },
    startTime: jd.start_time,
    endTime: jd.end_time,
    processArr: jd.process_arr,
    applyRouteArr: jd.apply_route_arr,
    applyUrl: jd.apply_url,
    etcArr: jd.etc_arr,
    title: jd.title,
    cut: jd.cut,
    view: jd.view,
    bookmark: jd.bookmark,
    click: jd.click,
    requiredExp: {
      type: jd.required_exp.type,
      maxYear: jd.required_exp.max_year,
      minYear: jd.required_exp.min_year,
    },
    requiredEtcArr: jd.required_etc_arr,
    contractType: {
      type: jd.contract_type.type,
      conversionRate: jd.contract_type.conversion_rate,
    },
    taskDetailArr: jd.task_detail_arr,
    rotationArr: jd.rotation_arr,
    place: {
      addressArr: jd.place.address_arr,
      factoryArr: jdFactoryArr,
      etc: jd.place.etc,
      type: jd.place.type,
    },
    hireCount: jd.hire_number,
    payArr: jd.pay_arr,
    preferredCertiArr: jd.preferred_certi_arr,
    preferredEtcArr: jd.preferred_etc_arr,
    eduSummary: {
      middle: jd.edu_summary.middle,
      high: jd.edu_summary.high,
      college: jd.edu_summary.college,
      four: jd.edu_summary.four,
    },
    task: {
      mainTask: jd.task.main_task,
      subTaskArr: jd.task.sub_task_arr,
    },
    company: {
      id: jd.company.id,
      name: jd.company.name,
      logoUrl: jd.company.logo_url,
      factories: companyFactoryArr,
    },
  };
};
