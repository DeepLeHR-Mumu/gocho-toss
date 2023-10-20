import { FC, useState } from "react";

// import { useResumeEducationArr } from "@/apis/resume/education/useResumeEducationArr";

import { ListCard } from "../../component";
import { EducationForm, EducationList } from "./component";

interface EducationPartProps {
  resumeId: number;
}

export const EducationPart: FC<EducationPartProps> = ({ resumeId }) => {
  // const { data: myEducationList } = useResumeEducationArr(resumeId);

  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => setEditMode(!editMode);

  return (
    <div>
      <ListCard title="학력" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
        {editMode ? <EducationForm resumeId={resumeId} handleEditMode={handleEditMode} /> : <EducationList />}
      </ListCard>
    </div>
  );
};
