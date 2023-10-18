import { FC } from "react";

import { ListActivityItem } from "@/pages/resume/component";

import { useDeleteResumeActivity } from "@/apis/resume/activity/useDeleteResumeActivity";
import { useToast } from "@/globalStates";

import { ActivityListProps } from "./type";

export const ActivityList: FC<ActivityListProps> = ({ resumeId, selectActivity, myActivityList }) => {
  const { mutate: deleteActivity } = useDeleteResumeActivity(resumeId);
  const { setToastMessage } = useToast();

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
            desciption={activityDescription}
            date={[activityDate]}
            editHadnler={() => {
              selectActivity(activity);
            }}
            deleteHandler={() => {
              deleteActivity(
                {
                  resumeId,
                  activityId: activity.id,
                },
                {
                  onSuccess: () => {
                    setToastMessage("대외활동이 삭제되었습니다.");
                  },
                }
              );
            }}
          />
        );
      })}
    </>
  );
};
