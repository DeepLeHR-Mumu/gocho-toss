import { JobDetailObjDef } from "../type/jobDetail";

export const selector = (jobDetailObj: JobDetailObjDef) => {
  const positionCamelArr = jobDetailObj.position_arr.map((position) => {
    const factoryCamelArr =
      position.place.factory_arr === null
        ? null
        : position.place.factory_arr?.map((factory) => {
            return {
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
              factoryName: factory.name,
            };
          });
    return {
      id: position.id,
      jdId: position.jd_id,
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
      place: {
        addressArr: position.place.address_arr,
        factoryArr: factoryCamelArr,
        etc: position.place.etc,
        type: position.place.type,
      },
      hireCount: position.hire_number,
      payArr: position.pay_arr,
      preferredCertiArr: position.preferred_certi_arr,
      preferredEtcArr: position.preferred_etc_arr,
      createdTime: position.created_time,
      possibleEdu: {
        summary: position.possible_edu.summary,
        middle: position.possible_edu.middle,
        high: position.possible_edu.high,
        college: position.possible_edu.college,
        four: position.possible_edu.four,
      },
      task: {
        mainTask: position.task.main_task,
        subTaskArr: position.task.sub_task_arr,
      },
    };
  });
  return {
    id: jobDetailObj.id,
    createdTime: jobDetailObj.created_time,
    startTime: jobDetailObj.start_time,
    endTime: jobDetailObj.end_time,
    processArr: jobDetailObj.process_arr,
    applyRouteArr: jobDetailObj.apply_route_arr,
    applyUrl: jobDetailObj.apply_url,
    etcArr: jobDetailObj.etc_arr,
    title: jobDetailObj.title,
    cut: jobDetailObj.cut,
    bookmarkCount: jobDetailObj.bookmark,
    viewCount: jobDetailObj.view,
    positionArr: positionCamelArr,
    company: {
      companyId: jobDetailObj.company.id,
      name: jobDetailObj.company.name,
      logoUrl: jobDetailObj.company.logo_url,
      youtubeUrl: jobDetailObj.company.youtube_url,
    },
  };
};
