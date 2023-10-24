import { FC, useState } from "react";

import { useResumeEducationArr } from "@/apis/resume";
import { SelectorResumeEducation } from "@/apis/resume/education/useResumeEducationArr/type";

import { EducationPartProps } from "./type";
import { ListCard } from "../../component";
import { EducationForm, EducationList } from "./component";

export const EducationPart: FC<EducationPartProps> = ({ resumeId }) => {
  const { data: myEducationList } = useResumeEducationArr(resumeId);

  const [currentEducation, setCurrentEducation] = useState<SelectorResumeEducation>();
  const [editMode, setEditMode] = useState(false);

  const selectEducation = (education: SelectorResumeEducation) => {
    setCurrentEducation(education);
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
    setCurrentEducation(undefined);
  };

  return (
    <ListCard title="학력" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <EducationForm resumeId={resumeId} handleEditMode={handleEditMode} currentEducation={currentEducation} />
      ) : (
        myEducationList && (
          <EducationList resumeId={resumeId} myEducationList={myEducationList} selectEducation={selectEducation} />
        )
      )}
    </ListCard>
  );
};
