import { Fragment, createElement } from "react";

import { NEWCOLORS } from "shared-style/color";
import { dateConverter } from "shared-util";

import { JdDetailObjDef } from "@/apis/jd/type/jdDetail";
import { DetailContents } from "./component/DetailSubContainer/type";
import { TaskContensType } from "./type";

const createSpanTag = (children: string) => createElement("span", {}, children);

export const getTaskContents = (task: TaskContensType): DetailContents => {
  const taskContents: DetailContents = {};
  const { main_task, sub_task_arr, task_detail_arr } = task;

  if (main_task) {
    taskContents["채용 직무"] = createSpanTag(`${main_task} > ${sub_task_arr.join(", ")}`);
  }
  if (task_detail_arr.length !== 0) {
    taskContents["세부 직무"] = createSpanTag(task_detail_arr.join(", "));
  }

  return taskContents;
};

const getTextFromPossibleEdu = (possibleEdu: JdDetailObjDef["possible_edu"]) => {
  const educationText: string[] = [];

  const { college, high, middle, four } = possibleEdu;

  if (four) educationText.push("4년제");
  if (college) educationText.push("초대졸");
  if (high) educationText.push("고졸");
  if (middle) educationText.push("중졸");

  return educationText.join(", ");
};

const getTextFromRequiredExp = (requiredExp: JdDetailObjDef["required_exp"]) => {
  let requiredExpText = "";

  const { type, min_year, max_year } = requiredExp;
  requiredExpText += type;

  if (min_year && max_year) {
    return `(${min_year}년 이상 ${max_year}년 이하)`;
  }

  if (min_year) {
    requiredExpText += `(${min_year}년 이상)`;
  }

  if (max_year) {
    requiredExpText += `(${max_year}년 이하)`;
  }

  return requiredExpText;
};

export const getJobQualificationContents = (jobQualification: {
  possibleEdu: JdDetailObjDef["possible_edu"];
  requiredExp: JdDetailObjDef["required_exp"];
  requiredEtcArr: JdDetailObjDef["required_etc_arr"];
}): DetailContents => {
  const jobQualificationContents: DetailContents = {};
  const { possibleEdu, requiredExp, requiredEtcArr } = jobQualification;

  if (possibleEdu) {
    const educationText = getTextFromPossibleEdu(possibleEdu);
    jobQualificationContents["학력"] = createSpanTag(educationText);
  }

  if (requiredExp) {
    const requiredExpText = getTextFromRequiredExp(requiredExp);
    jobQualificationContents["경력"] = createSpanTag(requiredExpText);
  }

  if (requiredEtcArr.length !== 0) {
    jobQualificationContents["기타"] = createElement(
      "ul",
      {},
      requiredEtcArr.map((etc) => createElement("li", { key: `RequiredEtc${etc}` }, etc))
    );
  }

  return jobQualificationContents;
};

export const getRecruitDetailContents = (recruitDetail: {
  contractType: JdDetailObjDef["contract_type"];
  payArr: JdDetailObjDef["pay_arr"];
  hireNumber: JdDetailObjDef["hire_number"];
  rotationArr: JdDetailObjDef["rotation_arr"];
}): DetailContents => {
  const recruitDetailContents: DetailContents = {};
  const { contractType, payArr, hireNumber, rotationArr } = recruitDetail;

  if (contractType) {
    // TODO 전환율 추가해야함!
    recruitDetailContents["계약형태"] = createSpanTag(contractType.type);

    if (contractType.type === "계약>정규") {
      recruitDetailContents["계약형태"] = createElement(Fragment, {}, [
        createElement("span", {}, contractType.type),
        createElement(
          "span",
          {
            style: { marginLeft: "0.75rem", color: NEWCOLORS.BLUEGRAY400 },
          },
          contractType.conversion_rate ? `(전환율 ${contractType.conversion_rate}%)` : ""
        ),
      ]);
    }
  }

  if (payArr.length !== 0) {
    recruitDetailContents["급여"] = createSpanTag(payArr.join(" "));
  }

  if (hireNumber.length !== 0) {
    recruitDetailContents["채용인원"] = createSpanTag(`${hireNumber}명`);
  }

  if (rotationArr.length !== 0) {
    recruitDetailContents["교대형태"] = createSpanTag(rotationArr.join(", "));
  }

  return recruitDetailContents;
};

export const getWelfareContents = (welfare: JdDetailObjDef["company"]["welfare"]): DetailContents => {
  const welfareContents: DetailContents = {};
  const { money, health, life, holiday, facility, vacation, growth, etc } = welfare;

  if (money && money.length !== 0) {
    welfareContents["급여"] = createSpanTag(money.join(", "));
  }

  if (health && health.length !== 0) {
    welfareContents["의료"] = createSpanTag(health.join(", "));
  }

  if (life && life.length !== 0) {
    welfareContents["생활"] = createSpanTag(life.join(", "));
  }

  if (holiday && holiday.length !== 0) {
    welfareContents["명절/경조사"] = createSpanTag(holiday.join(", "));
  }

  if (facility && facility.length !== 0) {
    welfareContents["시설"] = createSpanTag(facility.join(", "));
  }

  if (vacation && vacation.length !== 0) {
    welfareContents["휴가"] = createSpanTag(vacation.join(", "));
  }

  if (growth && growth.length !== 0) {
    welfareContents["자기계발"] = createSpanTag(growth.join(", "));
  }

  if (etc && etc.length !== 0) {
    welfareContents["기타"] = createSpanTag(etc.join(", "));
  }

  return welfareContents;
};

export const getPreferentialTreatmentContents = (preferentialTreatment: {
  preferredCertiArr: JdDetailObjDef["preferred_certi_arr"];
  preferredEtcArr: JdDetailObjDef["preferred_etc_arr"];
}): DetailContents => {
  const preferentialTreatmentContents: DetailContents = {};
  const { preferredCertiArr, preferredEtcArr } = preferentialTreatment;

  if (preferredCertiArr.length !== 0) {
    preferentialTreatmentContents["자격증"] = createSpanTag(preferredCertiArr.join(", "));
  }

  if (preferredEtcArr.length !== 0) {
    preferentialTreatmentContents["기타"] = createSpanTag(preferredEtcArr.join(", "));
  }

  return preferentialTreatmentContents;
};

export const getReceptionGuideContents = (receptionGuide: {
  applyRouteArr: JdDetailObjDef["apply_route_arr"];
  etcArr: JdDetailObjDef["etc_arr"];
}): DetailContents => {
  const receptionGuideContents: DetailContents = {};
  const { applyRouteArr, etcArr } = receptionGuide;

  if (applyRouteArr.length !== 0) {
    receptionGuideContents["지원방법"] = createSpanTag(applyRouteArr.join(", "));
  }

  if (etcArr.length !== 0) {
    receptionGuideContents["기타사항"] = createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "1rem" } },
      etcArr.map((etc) => createElement("p", { key: `ReceptionGuide${etc}` }, etc))
    );
  }

  return receptionGuideContents;
};

export const getCompanyInfoContents = (company: JdDetailObjDef["company"]): DetailContents => {
  const companyInfoContents: DetailContents = {};
  const { name, industry, employee_number, found_date } = company;

  companyInfoContents["기업명"] = createSpanTag(name);
  companyInfoContents["업종"] = createSpanTag(industry);
  companyInfoContents["사원수"] = createSpanTag(employee_number.toString());
  companyInfoContents["설립일"] = createSpanTag(dateConverter(found_date).date);

  return companyInfoContents;
};
