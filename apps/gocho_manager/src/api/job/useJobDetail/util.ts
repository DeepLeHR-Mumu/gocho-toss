import { JobDetailObjDef } from "../type";

export const selector = (jobDetailObj: JobDetailObjDef) => {
  const positionCamelArr = jobDetailObj.position_arr.map((position) => {
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
      edu_summary: {
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
    jobDetailObj.company.factories === null
      ? null
      : jobDetailObj.company.factories?.map((factory) => {
          return {
            id: factory.id,
            address: factory.address,
            factoryName: factory.name,
          };
        });

  return {
    id: jobDetailObj.id,
    startTime: jobDetailObj.start_time,
    endTime: jobDetailObj.end_time,
    processArr: jobDetailObj.process_arr,
    applyRouteArr: jobDetailObj.apply_route_arr,
    applyUrl: jobDetailObj.apply_url,
    etcArr: jobDetailObj.etc_arr,
    title: jobDetailObj.title,
    cut: jobDetailObj.cut,
    positionArr: positionCamelArr,
    companyId: jobDetailObj.company.id,
    companyName: jobDetailObj.company.name,
    companyLogoUrl: jobDetailObj.company.logo_url,
    companyFactories: companyFactoryArr,
  };
};
