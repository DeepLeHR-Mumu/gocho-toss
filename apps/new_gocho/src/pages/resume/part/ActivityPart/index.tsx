import { FC, useState } from "react";

import { useResumeActivityArr } from "@/apis/resume/activity/useResumeActivityArr";
import { SelectorResumeActivity } from "@/apis/resume/activity/useResumeActivity/type";

import { ListCard } from "../../component";
import { ActivityList, ActivityForm } from "./component";
import { ActivityPartProps } from "./type";

export const ActivityPart: FC<ActivityPartProps> = ({ resumeId }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentActivity, setCurrentActivity] = useState<SelectorResumeActivity>();

  const handleEditMode = () => {
    setCurrentActivity(undefined);
    setEditMode(!editMode);
  };

  const selectActivity = (activity: SelectorResumeActivity) => {
    setCurrentActivity(activity);
    setEditMode(!editMode);
  };

  const { data: myActivityList } = useResumeActivityArr(resumeId);

  return (
    <ListCard title="대외활동" iconHandler={handleEditMode} iconType={editMode ? "none" : "add"}>
      {editMode ? (
        <ActivityForm handleEditMode={handleEditMode} resumeId={resumeId} currentActivity={currentActivity} />
      ) : (
        myActivityList && (
          <ActivityList resumeId={resumeId} myActivityList={myActivityList} selectActivity={selectActivity} />
        )
      )}
    </ListCard>
  );
};
