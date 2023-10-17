import { ResumeActivityDef } from "../type";

export const selector = (activity: ResumeActivityDef) => ({
  id: activity.id,
  activityType: activity.activity_type,
  name: activity.name,
  organizer: activity.organizer,
  activityDate: activity.activity_date,
  activityDescription: activity.activity_description,
});
