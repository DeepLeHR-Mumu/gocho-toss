import { FC } from "react";

import { useDeleteResumeEducation } from "@/apis/resume/education/useDeleteResumeEducation";

import { SelectorResumeEducatioArr, SelectorResumeEducation } from "@/apis/resume/education/useResumeEducationArr/type";

import { SelectorResumeExtra } from "@/apis/resume/education/useResumeExtra/type";
import { SelectorResumeHighSchool } from "@/apis/resume/education/useResumeHighSchool/type";
import { SelectorResumeUniversity } from "@/apis/resume/education/useResumeUniversity/type";
import { SelectorResumeCollege } from "@/apis/resume/education/useResumeCollege/type";

import { ListItem } from "@/pages/resume/component";
import { useToast } from "@/globalStates";

interface EducationListProps {
  resumeId: number;
  myEducationList: SelectorResumeEducatioArr;
  selectEducation: (education: SelectorResumeEducation) => void;
}

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
        if (education.educationType === "기타") {
          const extra = education as SelectorResumeExtra;

          return (
            <ListItem
              key={extra.id}
              title={extra.name}
              titleDes={education.educationType + extra.graduateType}
              desciption={[extra.grade, extra.maxGrade, extra.etc].join("/")}
              date={[extra.startDate]}
              editHadnler={() => {
                selectEducation(education);
              }}
              deleteHandler={() => {
                deleteEducation(
                  {
                    resumeId,
                    educationId: extra.id,
                  },
                  onDeleteSuccess
                );
              }}
            />
          );
        }

        if (education.educationType === "고등학교") {
          const highSchool = education as SelectorResumeHighSchool;

          return (
            <ListItem
              key={highSchool.id}
              title={highSchool.name}
              titleDes={education.educationType + highSchool.graduateType}
              desciption={[highSchool.etc].join("/")}
              date={[highSchool.startDate]}
              editHadnler={() => {
                selectEducation(education);
              }}
              deleteHandler={() => {
                deleteEducation(
                  {
                    resumeId,
                    educationId: education.id,
                  },
                  onDeleteSuccess
                );
              }}
            />
          );
        }

        if (education.educationType === "대학교(2,3년제)") {
          const college = education as SelectorResumeCollege;

          return (
            <ListItem
              key={college.id}
              title={college.name}
              titleDes={education.educationType + college.graduateType}
              desciption={[college.etc].join("/")}
              date={[college.startDate]}
              editHadnler={() => {
                selectEducation(education);
              }}
              deleteHandler={() => {
                deleteEducation(
                  {
                    resumeId,
                    educationId: college.id,
                  },
                  onDeleteSuccess
                );
              }}
            />
          );
        }

        if (education.educationType === "대학교(4년제)") {
          const university = education as SelectorResumeUniversity;

          return (
            <ListItem
              key={university.id}
              title={university.name}
              titleDes={education.educationType + university.graduateType}
              desciption={[university.etc].join("/")}
              date={[university.startDate]}
              isUturn={university.isUturn}
              editHadnler={() => {
                selectEducation(education);
              }}
              deleteHandler={() => {
                deleteEducation(
                  {
                    resumeId,
                    educationId: university.id,
                  },
                  onDeleteSuccess
                );
              }}
            />
          );
        }

        return <> </>;
      })}
    </>
  );
};
