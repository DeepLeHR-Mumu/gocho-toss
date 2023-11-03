import { JdDetailObjDef } from "../type/jdDetail";

export const selector = (jdDetailObj: JdDetailObjDef) => {
  const { id, title, is_expired, view, bookmark, is_bookmark, company, detail, qualification, apply } = jdDetailObj;
  return {
    id,
    title,
    isExpired: is_expired,
    view,
    bookmark,
    isBookmark: is_bookmark,
    company: {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
      size: company.size,
      industry: company.industry,
      employeeNumber: company.employee_number,
      foundData: company.found_date,
      isBookmark: company.is_bookmark,
      welfare: company.welfare,
    },
    detail: {
      taskMain: detail.task_main,
      taskSub: detail.task_sub,
      taskDescription: detail.task_description,
      contractType: detail.contract_type,
      conversionRate: detail.conversion_rate,
      hireNumber: detail.hire_number,
      pay: detail.pay,
      shift: detail.shift,
      place: {
        isUndefined: detail.place.is_undefined,
        data: detail.place.data,
        etc: detail.place.etc,
      },
    },
    qualification: {
      highschool: qualification.highschool,
      college: qualification.college,
      university: qualification.university,
      requiredExperience: qualification.required_experience,
      requiredMinYear: qualification.required_min_year,
      requiredMaxYear: qualification.required_max_year,
      requiredEtc: qualification.required_etc,
      preferredCertification: qualification.preferred_certification,
      preferredEtc: qualification.preferred_etc,
    },
    apply: {
      startTime: apply.start_time,
      endTime: apply.end_time,
      cut: apply.cut,
      process: apply.process,
      document: apply.document,
      route: { isDirect: apply.route.is_direct, email: apply.route.email, link: apply.route.link },
      isAlreadyApply: apply.is_already_apply,
      etc: apply.etc,
    },
  };
};
