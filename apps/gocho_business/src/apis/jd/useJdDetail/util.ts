import { ResponseObjDef } from "./type";

export const jdDetailSelector = ({ data: jd }: ResponseObjDef) => {
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
    applyDocumentArr: jd.apply_document_arr,
    applyRouteArr: jd.apply_route_arr,
    applyUrl: jd.apply_url,
    etcArr: jd.etc_arr,
    title: jd.title,
    cut: jd.cut,
    view: jd.view,
    bookmark: jd.bookmark,
    click: jd.click,
    requiredExp: {
      type: jd.career.type,
      maxYear: jd.career.max_year,
      minYear: jd.career.min_year,
    },
    requiredEtcArr: jd.required_etc_arr,
    contractType: {
      type: jd.contract.type,
      conversionRate: jd.contract.conversion_rate,
    },
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
      high: jd.education.high,
      college: jd.education.college,
      four: jd.education.four,
    },
    task: {
      mainTask: jd.task.task_main,
      subTaskArr: jd.task.task_sub_arr,
      detailArr: jd.task.task_detail_arr,
    },
  };
};
