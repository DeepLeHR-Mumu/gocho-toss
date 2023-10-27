import { FC } from "react";

import { useDeleteResumeEducation } from "@/apis/resume/education/useDeleteResumeEducation";

import { ListItem } from "@/pages/resume/component";
import { useToast } from "@/globalStates";

import { cssObj } from "./style";
import { EducationListProps } from "./type";
import { attendanceHeaderArr, attendanceHeaderItem } from "../EducationForm/component/AttendanceForm/constants";

type SelectorAttendance =
  | "diseaseSchoolAbsent"
  | "diseaseTardy"
  | "diseaseLeave"
  | "diseaseSubjectAbsent"
  | "unauthorizedSchoolAbsent"
  | "unauthorizedTardy"
  | "unauthorizedLeave"
  | "unauthorizedSubjectAbsent"
  | "extraSchoolAbsent"
  | "extraTardy"
  | "extraLeave"
  | "extraSubjectAbsent";

const attendanceArr: SelectorAttendance[] = [
  "diseaseSchoolAbsent",
  "diseaseTardy",
  "diseaseLeave",
  "diseaseSubjectAbsent",
  "unauthorizedSchoolAbsent",
  "unauthorizedTardy",
  "unauthorizedLeave",
  "unauthorizedSubjectAbsent",
  "extraSchoolAbsent",
  "extraTardy",
  "extraLeave",
  "extraSubjectAbsent",
];

export const EducationList: FC<EducationListProps> = ({ resumeId, myEducationList, selectEducation }) => {
  const { mutate: deleteEducation } = useDeleteResumeEducation(resumeId);
  const { setToastMessage } = useToast();

  const onDeleteSuccess = {
    onSuccess: () => {
      setToastMessage("학력 정보가 삭제되었습니다.");
    },
  };

  return (
    <>
      {myEducationList.map((education) => {
        const {
          id,
          name,
          educationType,
          graduateType,
          etc,
          major,
          grade,
          maxGrade,
          startDate,
          endDate,
          isUturn,
          firstAttendance,
          secondAttendance,
          thirdAttendance,
        } = education;

        const attendanceKeyArr = [firstAttendance, secondAttendance, thirdAttendance];

        return (
          <ListItem
            key={id}
            title={name}
            titleDes={`${educationType} ${graduateType}`}
            date={!["재학", "중퇴"].includes(graduateType) ? [startDate, endDate || ""] : [startDate]}
            isUturn={education.educationType === "대학교(4년제)" || isUturn}
            editHandler={() => {
              selectEducation(education);
            }}
            deleteHandler={() => {
              deleteEducation(
                {
                  resumeId,
                  educationId: id,
                },
                onDeleteSuccess
              );
            }}
          >
            <div css={cssObj.wrapper}>
              <div css={cssObj.titleWrapper}>
                <p>{major}</p>
                {grade && (
                  <p>
                    학점 {grade} {maxGrade ? ` / ${maxGrade}` : ""}
                  </p>
                )}
              </div>
              <p css={cssObj.describe}>{etc}</p>
            </div>

            {educationType === "고등학교" && (firstAttendance || secondAttendance || thirdAttendance) && (
              <div css={cssObj.attendanceBox}>
                <div css={cssObj.attendanceWrapper}>
                  <div css={cssObj.gradeHeader}>학년</div>
                  <div css={cssObj.dayHeader}>수업일수</div>
                  {attendanceHeaderArr.map((attendanceHeader) => (
                    <div key={attendanceHeader} css={cssObj.headerWrapper}>
                      <div css={cssObj.header}>{attendanceHeader}</div>
                      <div css={cssObj.headerFlexBox}>
                        <p>{attendanceHeaderItem.disease}</p>
                        <p>{attendanceHeaderItem.unauthorized}</p>
                        <p>{attendanceHeaderItem.extra}</p>
                      </div>
                    </div>
                  ))}
                  <div css={cssObj.special}>특기사항</div>
                </div>

                {attendanceKeyArr.map((gradeAttendance, index) => {
                  const attendanceGrade = index + 1;

                  return (
                    <div css={cssObj.inputWrapper} key={grade}>
                      <div css={cssObj.grade}>{attendanceGrade}</div>
                      <div css={cssObj.dayInput}>
                        <p>{gradeAttendance.totalClassDays}</p>
                      </div>
                      {attendanceArr.map((attendance) => (
                        <div key={attendance} css={cssObj.dataInput}>
                          <p>{gradeAttendance[attendance] ? gradeAttendance[attendance] : "-"}</p>
                        </div>
                      ))}

                      <div css={cssObj.specialInput}>{gradeAttendance.description}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </ListItem>
        );
      })}
    </>
  );
};
