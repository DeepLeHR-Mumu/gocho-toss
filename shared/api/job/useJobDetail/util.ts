import { JobDetailObjDef } from "../type/jobDetail";

export const selector = (jobDetailObj: JobDetailObjDef) => {
  const positionCamelArr = jobDetailObj.position_arr.map((position) => {
    const factoryCamelArr = position.place.factory_arr?.map((factory) => {
      return {
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
      };
    });
    return {
      id: position.id,
      possibleEdu: position.possible_edu,
      requiredExp: {
        type: position.required_exp.type,
        minYear: position.required_exp.min_year,
        maxYear: position.required_exp.max_year,
      },
      requiredEtcArr: position.required_etc_arr,
      contractType: {
        type: position.contract_type.type,
        conversionRate: position.contract_type.conversion_rate,
      },
      task: {
        mainTask: position.task.main_task,
        subTaskArr: position.task.sub_task_arr,
      },
      taskDetailArr: position.task_detail_arr,
      rotationArr: position.rotation_arr,
      rotationEtc: position.rotation_etc,
      place: {
        type: position.place.type,
        addressArr: position.place.address_arr,
        factoryArr: factoryCamelArr,
        etc: position.place.etc,
      },
      hireNumber: position.hire_number,
      payArr: position.pay_arr,
      preferredCertiArr: position.preferred_certi_arr,
      preferredEtcArr: position.preferred_etc_arr,
    };
  });
  return {
    id: jobDetailObj.id,
    company: {
      id: jobDetailObj.company.id,
      name: jobDetailObj.company.name,
      logoUrl: jobDetailObj.company.logo_url,
      youtubeUrl: jobDetailObj.company.youtube_url,
      commentCount: jobDetailObj.company.comment_count,
    },
    title: jobDetailObj.title,
    cut: jobDetailObj.cut,
    startTime: jobDetailObj.start_time,
    endTime: jobDetailObj.end_time,
    processArr: jobDetailObj.process_arr,
    applyRouteArr: jobDetailObj.apply_route_arr,
    applyUrl: jobDetailObj.apply_url,
    etcArr: jobDetailObj.etc_arr,
    bookmark: jobDetailObj.bookmark,
    isBookmark: jobDetailObj.is_bookmark,
    view: jobDetailObj.view,
    click: jobDetailObj.click,
    positionArr: positionCamelArr,
  };
};
