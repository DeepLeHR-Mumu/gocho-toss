import { FC } from "react";

import { ListActivityItem } from "@/pages/resume/component";

import { useDeleteResumeActivity } from "@/apis/resume/activity/useDeleteResumeActivity";

import { ActivityListProps } from "./type";

export const ActivityList: FC<ActivityListProps> = ({ resumeId, selectActivity, myActivityList }) => {
  const { mutate: deleteActivity } = useDeleteResumeActivity(resumeId);

  return (
    <>
      {myActivityList.map((activity) => {
        const { id, activityDate, activityDescription, organizer, activityType, name } = activity;

        return (
          <ListActivityItem
            key={id}
            type={activityType}
            title={name}
            titleDes={organizer}
            description={activityDescription}
            date={[activityDate]}
            editHandler={() => {
              selectActivity(activity);
            }}
            deleteHandler={() => {
              deleteActivity({
                resumeId,
                activityId: activity.id,
              });
            }}
          />
        );
      })}
    </>
  );
};
