import { forwardRef, useState } from "react";

import { useResumeFluencyArr } from "@/apis/resume";
import { SelectorResumeFluency } from "@/apis/resume/fluency/useResumeFluency/type";

import { ListCard } from "../../component";
import { FluencyForm, FluencyList } from "./component";
import { FluencyPartProps } from "./type";

export const FluencyPart = forwardRef<HTMLDivElement, FluencyPartProps>(({ resumeId }, ref) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentFluency, setCurrentFluency] = useState<SelectorResumeFluency | null>(null);

  const { data: myFluencyList } = useResumeFluencyArr(resumeId);

  const selectFluency = (fluency: SelectorResumeFluency) => {
    setCurrentFluency(fluency);
    setEditMode((prev) => !prev);
  };

  const handleEditMode = () => {
    setCurrentFluency(null);
    setEditMode((prev) => !prev);
  };

  return (
    <ListCard title="어학" iconHandler={handleEditMode} ref={ref} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <FluencyForm resumeId={resumeId} handleEditMode={handleEditMode} currentFluency={currentFluency} />
      ) : (
        myFluencyList && <FluencyList resumeId={resumeId} myFluencyList={myFluencyList} selectFluency={selectFluency} />
      )}
    </ListCard>
  );
});
