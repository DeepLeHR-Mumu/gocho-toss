import { forwardRef, useState } from "react";

import { useResumeActivityArr } from "@/apis/resume/activity/useResumeActivityArr";
import { SelectorResumeActivity } from "@/apis/resume/activity/useResumeActivity/type";

import { ListCard } from "../../component";
import { ActivityList, ActivityForm } from "./component";
import { ActivityPartProps } from "./type";

export const ActivityPart = forwardRef<HTMLDivElement, ActivityPartProps>(({ resumeId }, ref) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentActivity, setCurrentActivity] = useState<SelectorResumeActivity | null>(null);

  const handleEditMode = () => {
    setCurrentActivity(null);
    setEditMode(!editMode);
  };

  const selectActivity = (activity: SelectorResumeActivity) => {
    setCurrentActivity(activity);
    setEditMode(!editMode);
  };

  const { data: myActivityList } = useResumeActivityArr(resumeId);

  return (
    <ListCard title="대외활동" iconHandler={handleEditMode} ref={ref} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <ActivityForm handleEditMode={handleEditMode} resumeId={resumeId} currentActivity={currentActivity} />
      ) : (
        myActivityList && (
          <ActivityList resumeId={resumeId} myActivityList={myActivityList} selectActivity={selectActivity} />
        )
      )}
    </ListCard>
  );
});
