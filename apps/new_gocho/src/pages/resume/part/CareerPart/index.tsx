import { forwardRef, useState } from "react";
import { useResumeCareerArr } from "@/apis/resume/career/useResumeCareerArr";
import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";

import { ListCard } from "../../component";
import { CareerForm, CareerList } from "./component";
import { CareerPartProps } from "./type";

export const CareerPart = forwardRef<HTMLDivElement, CareerPartProps>(({ resumeId }, ref) => {
  const [editMode, setEditMode] = useState(false);
  const [currentCareer, setCurrentCareer] = useState<SelectorResumeCareer | null>(null);

  const { data: myCareerList } = useResumeCareerArr(resumeId);

  const selectCareer = (career: SelectorResumeCareer) => {
    setCurrentCareer(career);
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setCurrentCareer(null);
    setEditMode(!editMode);
  };

  return (
    <ListCard title="경력" ref={ref} iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <CareerForm currentCareer={currentCareer} handleEditMode={handleEditMode} resumeId={resumeId} />
      ) : (
        myCareerList && <CareerList selectCareer={selectCareer} myCareerList={myCareerList} resumeId={resumeId} />
      )}
    </ListCard>
  );
});
