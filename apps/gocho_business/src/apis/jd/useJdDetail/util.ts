import { ResponseObjDef } from "./type";

export const jdDetailSelector = ({ data: jd }: ResponseObjDef) => {
  // const jdFactoryArr =
  //   jd.place.factory_arr === null
  //     ? null
  //     : jd.place.factory_arr?.map((factory) => ({
  //         id: factory.id,
  //         address: factory.address,
  //         factoryName: factory.name,
  //       }));

  return {
    id: jd.id,
    status: {
      name: jd.status.name,
      reason: jd.status.reason,
    },
    uploader: {
      name: jd.uploader.name,
      isMine: jd.uploader.is_mine,
    },
    title: jd.title,
    apply: {
      startTime: jd.apply.start_time,
      endTime: jd.apply.end_time,
      cut: jd.apply.cut,
      document: jd.apply.document,
      etc: jd.apply.etc,
      process: jd.apply.process,
      route: jd.apply.route,
    },
    detail: {
      taskMain: jd.detail.task_main,
      taskSubArr: jd.detail.task_sub_arr,
      taskDescription: jd.detail.task_description,
      contractType: jd.detail.contract_type,
      conversionRate: jd.detail.conversion_rate,
      hireNumber: jd.detail.hire_number,
      pay: jd.detail.pay,
      rotation: jd.detail.rotation,
      place: jd.detail.place,
    },
    qualification: {
      highschool: jd.qualification.highschool,
      college: jd.qualification.college,
      university: jd.qualification.university,
      requiredExperience: jd.qualification.required_experience,
      requiredMinYear: jd.qualification.required_min_year,
      requiredMaxYear: jd.qualification.required_max_year,
      requiredEtc: jd.qualification.required_etc,
      preferredCertification: jd.qualification.preferred_certification,
      preferredEtc: jd.qualification.preferred_etc,
    },
    createdTime: jd.created_time,
  };
};
