import { FC, useState } from "react";

import { useResumeFluencyArr } from "@/apis/resume";
import { SelectorResumeFluency } from "@/apis/resume/fluency/useResumeFluency/type";

import { ListCard } from "../../component";
import { FluencyForm, FluencyList } from "./component";
import { FluencyPartProps } from "./type";

export const FluencyPart: FC<FluencyPartProps> = ({ resumeId }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentFluency, setCurrentFluency] = useState<SelectorResumeFluency | null>(null);

  const { data: myFluencyList } = useResumeFluencyArr(resumeId);

  const selectFluency = (certi: SelectorResumeFluency) => {
    setCurrentFluency(certi);
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setCurrentFluency(null);
    setEditMode(!editMode);
  };

  return (
    <ListCard title="어학" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <FluencyForm resumeId={resumeId} handleEditMode={handleEditMode} currentFluency={currentFluency} />
      ) : (
        myFluencyList && <FluencyList resumeId={resumeId} myFluencyList={myFluencyList} selectFluency={selectFluency} />
      )}
    </ListCard>
  );
};
