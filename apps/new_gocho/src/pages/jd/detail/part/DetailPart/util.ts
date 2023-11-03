import { Fragment, createElement } from "react";

import { COLOR } from "shared-style/color";
import { dateConverter } from "shared-util";

import { SelectorJdDetailObj } from "@/apis/jd/useJdDetail/type";

import { DetailContents } from "./component/DetailSubContainer/type";

const createSpanTag = (children: string) => createElement("span", {}, children);

export const getTaskContents = (detail: SelectorJdDetailObj["detail"]): DetailContents => {
  const taskContents: DetailContents = {};
  const { taskMain, taskSub, taskDescription } = detail;

  if (taskMain.length !== 0) {
    taskContents["채용 직무"] = createSpanTag(`${taskMain} > ${taskSub.join(", ")}`);
  }
  if (taskDescription.length !== 0) {
    taskContents["세부 직무"] = createSpanTag(taskDescription.join(", "));
  }

  return taskContents;
};

const getEducationFromQualication = (qualification: SelectorJdDetailObj["qualification"]) => {
  const educationText: string[] = [];

  const { college, highschool, university } = qualification;

  if (university) educationText.push("4년제");
  if (college) educationText.push("초대졸");
  if (highschool) educationText.push("고졸");

  return educationText.join(", ");
};

const getRequiredExpFromQualification = (qualification: SelectorJdDetailObj["qualification"]) => {
  let requiredExpText = "";

  const { requiredExperience, requiredMinYear, requiredMaxYear } = qualification;
  requiredExpText += requiredExperience;

  if (requiredMinYear && requiredMaxYear) {
    return `(${requiredMinYear}년 이상 ${requiredMaxYear}년 이하)`;
  }

  if (requiredMinYear) {
    requiredExpText += `(${requiredMinYear}년 이상)`;
  }

  if (requiredMaxYear) {
    requiredExpText += `(${requiredMaxYear}년 이하)`;
  }

  return requiredExpText;
};

export const getJobQualificationContents = (qualification: SelectorJdDetailObj["qualification"]): DetailContents => {
  const jobQualificationContents: DetailContents = {};
  const { requiredExperience, requiredEtc } = qualification;

  const educationText = getEducationFromQualication(qualification);
  jobQualificationContents["학력"] = createSpanTag(educationText);

  if (requiredExperience && requiredExperience.length !== 0) {
    const requiredExpText = getRequiredExpFromQualification(qualification);
    jobQualificationContents["경력"] = createSpanTag(requiredExpText);
  }

  if (requiredEtc.length !== 0) {
    jobQualificationContents["기타"] = createElement(
      "ul",
      {},
      requiredEtc.map((etc) => createElement("li", { key: `RequiredEtc${etc}` }, etc))
    );
  }

  return jobQualificationContents;
};

export const getRecruitDetailContents = (detail: SelectorJdDetailObj["detail"]): DetailContents => {
  const recruitDetailContents: DetailContents = {};
  const { contractType, pay, hireNumber, shift, conversionRate } = detail;

  if (contractType) {
    recruitDetailContents["계약형태"] = createSpanTag(contractType);

    if (contractType === "계약>정규" || contractType === "인턴") {
      recruitDetailContents["계약형태"] = createElement(Fragment, {}, [
        createElement("span", {}, contractType),
        createElement(
          "span",
          {
            style: { marginLeft: "0.75rem", color: COLOR.GRAY600 },
          },
          conversionRate ? `(전환율 ${conversionRate}%)` : ""
        ),
      ]);
    }
  }

  if (pay.length !== 0) {
    recruitDetailContents["급여"] = createSpanTag(pay.join(" "));
  }

  if (hireNumber.length !== 0) {
    recruitDetailContents["채용인원"] = createSpanTag(`${hireNumber}명`);
  }

  if (shift.length !== 0) {
    recruitDetailContents["교대형태"] = createSpanTag(shift.join(", "));
  }

  return recruitDetailContents;
};

export const getWelfareContents = (welfare: SelectorJdDetailObj["company"]["welfare"]): DetailContents => {
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

export const getPreferentialTreatmentContents = (
  qualification: SelectorJdDetailObj["qualification"]
): DetailContents => {
  const preferentialTreatmentContents: DetailContents = {};
  const { preferredCertification, preferredEtc } = qualification;

  if (preferredCertification.length !== 0) {
    preferentialTreatmentContents["자격증"] = createSpanTag(preferredCertification.join(", "));
  }

  if (preferredEtc.length !== 0) {
    preferentialTreatmentContents["기타"] = createSpanTag(preferredEtc.join(", "));
  }

  return preferentialTreatmentContents;
};

export const getReceptionGuideContents = (apply: SelectorJdDetailObj["apply"]): DetailContents => {
  const receptionGuideContents: DetailContents = {};
  const { route, etc } = apply;

  if (route.isDirect) {
    receptionGuideContents["지원방법"] = createSpanTag("고초대졸닷컴으로 지원");
  }

  if (route.email) {
    receptionGuideContents["지원방법"] = createSpanTag("이메일");
  }

  if (route.link) {
    receptionGuideContents["지원방법"] = createSpanTag("외부링크");
  }

  if (etc.length !== 0) {
    receptionGuideContents["기타사항"] = createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "1rem" } },
      etc.map((eachEtc) => createElement("p", { key: `ReceptionGuide${eachEtc}` }, eachEtc))
    );
  }

  return receptionGuideContents;
};

export const getCompanyInfoContents = (company: SelectorJdDetailObj["company"]): DetailContents => {
  const companyInfoContents: DetailContents = {};
  const { name, industry, employeeNumber, foundData } = company;

  companyInfoContents["기업명"] = createSpanTag(name);
  companyInfoContents["업종"] = createSpanTag(industry.join(", "));
  companyInfoContents["사원수"] = createSpanTag(employeeNumber.toString());
  companyInfoContents["설립일"] = createSpanTag(dateConverter(foundData).date);

  return companyInfoContents;
};
