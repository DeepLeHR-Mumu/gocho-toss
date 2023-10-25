import { FC, useState } from "react";
import { useResumeCareerArr } from "@/apis/resume/career/useResumeCareerArr";
import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";

import { ListCard } from "../../component";
import { CarrerForm, CarrerList } from "./component";
import { CareerPartProps } from "./type";

export const CareerPart: FC<CareerPartProps> = ({ resumeId }) => {
  const [editMode, setEditMode] = useState(false);
  const [currentCarrer, setCurrentCarrer] = useState<SelectorResumeCareer>();

  const { data: myCarrerList } = useResumeCareerArr(resumeId);

  const selectCarrer = (carrer: SelectorResumeCareer) => {
    setCurrentCarrer(carrer);
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setCurrentCarrer(undefined);
    setEditMode(!editMode);
  };

  return (
    <ListCard title="경력" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <CarrerForm currentCarrer={currentCarrer} handleEditMode={handleEditMode} resumeId={resumeId} />
      ) : (
        myCarrerList && <CarrerList selectCarrer={selectCarrer} myCarrerList={myCarrerList} resumeId={resumeId} />
      )}
    </ListCard>
  );
};
