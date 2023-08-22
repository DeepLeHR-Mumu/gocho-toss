import { JdDetailObjDef } from "../type/jdDetail";

export const selector = (jdDetailObj: JdDetailObjDef) => {
  const factoryCamelArr = jdDetailObj.place.factory_arr?.map((factory) => {
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
    id: jdDetailObj.id,
    company: {
      id: jdDetailObj.company.id,
      name: jdDetailObj.company.name,
      logoUrl: jdDetailObj.company.logo_url,
      youtubeUrl: jdDetailObj.company.youtube_url,
      commentCount: jdDetailObj.company.comment_count,
    },
    title: jdDetailObj.title,
    cut: jdDetailObj.cut,
    startTime: jdDetailObj.start_time,
    endTime: jdDetailObj.end_time,
    processArr: jdDetailObj.process_arr,
    applyRouteArr: jdDetailObj.apply_route_arr,
    applyDocumentArr: jdDetailObj.apply_document_arr,
    applyUrl: jdDetailObj.apply_url,
    etcArr: jdDetailObj.etc_arr,
    bookmark: jdDetailObj.bookmark,
    isBookmark: jdDetailObj.is_bookmark,
    view: jdDetailObj.view,
    click: jdDetailObj.click,
    possibleEdu: jdDetailObj.possible_edu,
    requiredExp: {
      type: jdDetailObj.required_exp.type,
      minYear: jdDetailObj.required_exp.min_year,
      maxYear: jdDetailObj.required_exp.max_year,
    },
    requiredEtcArr: jdDetailObj.required_etc_arr,
    contractType: {
      type: jdDetailObj.contract_type.type,
      conversionRate: jdDetailObj.contract_type.conversion_rate,
    },
    task: {
      mainTask: jdDetailObj.task.main_task,
      subTaskArr: jdDetailObj.task.sub_task_arr,
    },
    taskDetailArr: jdDetailObj.task_detail_arr,
    rotationArr: jdDetailObj.rotation_arr,
    place: {
      type: jdDetailObj.place.type,
      addressArr: jdDetailObj.place.address_arr,
      factoryArr: factoryCamelArr,
      etc: jdDetailObj.place.etc,
    },
    hireNumber: jdDetailObj.hire_number,
    payArr: jdDetailObj.pay_arr,
    preferredCertiArr: jdDetailObj.preferred_certi_arr,
    preferredEtcArr: jdDetailObj.preferred_etc_arr,
  };
};
