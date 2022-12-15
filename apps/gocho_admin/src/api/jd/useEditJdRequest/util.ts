import { ResponseObjDef } from "./type";

export const jdDetailSelector = ({ data: jd }: ResponseObjDef) => {
  const positionCamelArr = jd.position_arr.map((position) => {
    const positionFactoryArr =
      position.place.factory_arr === null
        ? null
        : position.place.factory_arr?.map((factory) => {
            return {
              id: factory.id,
              address: factory.address,
              factoryName: factory.name,
            };
          });
    return {
      id: position.id,
      requiredExp: {
        type: position.required_exp.type,
        maxYear: position.required_exp.max_year,
        minYear: position.required_exp.min_year,
      },
      requiredEtcArr: position.required_etc_arr,
      contractType: {
        type: position.contract_type.type,
        conversionRate: position.contract_type.conversion_rate,
      },
      taskDetailArr: position.task_detail_arr,
      rotationArr: position.rotation_arr,
      rotationEtc: position.rotation_etc,
      place: {
        addressArr: position.place.address_arr,
        factoryArr: positionFactoryArr,
        etc: position.place.etc,
        type: position.place.type,
      },
      hireCount: position.hire_number,
      payArr: position.pay_arr,
      preferredCertiArr: position.preferred_certi_arr,
      preferredEtcArr: position.preferred_etc_arr,
      eduSummary: {
        middle: position.edu_summary.middle,
        high: position.edu_summary.high,
        college: position.edu_summary.college,
        four: position.edu_summary.four,
      },
      task: {
        mainTask: position.task.main_task,
        subTaskArr: position.task.sub_task_arr,
      },
    };
  });

  const companyFactoryArr =
    jd.company.factories === null
      ? null
      : jd.company.factories?.map((factory) => {
          return {
            id: factory.id,
            address: factory.address,
            factoryName: factory.name,
          };
        });

  return {
    id: jd.id,
    startTime: jd.start_time,
    endTime: jd.end_time,
    processArr: jd.process_arr,
    applyRouteArr: jd.apply_route_arr,
    applyUrl: jd.apply_url,
    etcArr: jd.etc_arr,
    title: jd.title,
    cut: jd.cut,
    positionArr: positionCamelArr,
    company: {
      companyId: jd.company.id,
      name: jd.company.name,
      logoUrl: jd.company.logo_url,
      factories: companyFactoryArr,
    },
  };
};
