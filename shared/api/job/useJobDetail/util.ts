import { JobDetailObjDef } from "../type/jobDetail";

export const selector = (jobDetailObj: JobDetailObjDef) => {
  const factoryCamelArr = jobDetailObj.place.factory_arr?.map((factory) => {
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
    applyDocumentArr: jobDetailObj.apply_document_arr,
    applyUrl: jobDetailObj.apply_url,
    etcArr: jobDetailObj.etc_arr,
    bookmark: jobDetailObj.bookmark,
    isBookmark: jobDetailObj.is_bookmark,
    view: jobDetailObj.view,
    click: jobDetailObj.click,
    possibleEdu: jobDetailObj.possible_edu,
    requiredExp: {
      type: jobDetailObj.required_exp.type,
      minYear: jobDetailObj.required_exp.min_year,
      maxYear: jobDetailObj.required_exp.max_year,
    },
    requiredEtcArr: jobDetailObj.required_etc_arr,
    contractType: {
      type: jobDetailObj.contract_type.type,
      conversionRate: jobDetailObj.contract_type.conversion_rate,
    },
    task: {
      mainTask: jobDetailObj.task.main_task,
      subTaskArr: jobDetailObj.task.sub_task_arr,
    },
    taskDetailArr: jobDetailObj.task_detail_arr,
    rotationArr: jobDetailObj.rotation_arr,
    place: {
      type: jobDetailObj.place.type,
      addressArr: jobDetailObj.place.address_arr,
      factoryArr: factoryCamelArr,
      etc: jobDetailObj.place.etc,
    },
    hireNumber: jobDetailObj.hire_number,
    payArr: jobDetailObj.pay_arr,
    preferredCertiArr: jobDetailObj.preferred_certi_arr,
    preferredEtcArr: jobDetailObj.preferred_etc_arr,
  };
};
