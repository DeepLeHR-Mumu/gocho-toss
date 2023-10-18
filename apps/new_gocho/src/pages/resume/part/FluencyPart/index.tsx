import { FC, useState } from "react";

import { useResumeFluencyArr } from "@/apis/resume";

import { ListCard } from "../../component";
import { FluencyForm, FluencyList } from "./component";
import { SelectorResumeFluency } from "@/apis/resume/fluency/useResumeFluency/type";

interface FluencyPartProps {
  userId: number;
  resumeId: number;
}

export const FluencyPart: FC<FluencyPartProps> = ({ userId, resumeId }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentFluency, setCurrentFluency] = useState<SelectorResumeFluency>();

  const { data: myFluencyList } = useResumeFluencyArr(resumeId);

  const selectFluency = (certi: SelectorResumeFluency) => {
    setCurrentFluency(certi);
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setCurrentFluency(undefined);
    setEditMode(!editMode);
  };

  return (
    <div>
      <ListCard title="어학" userId={userId} iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
        {editMode ? (
          <FluencyForm resumeId={resumeId} handleEditMode={handleEditMode} currentFluency={currentFluency} />
        ) : (
          myFluencyList && (
            <FluencyList resumeId={resumeId} myFluencyList={myFluencyList} selectFluency={selectFluency} />
          )
        )}
      </ListCard>
    </div>
  );
};
