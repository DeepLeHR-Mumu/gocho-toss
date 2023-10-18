import { SelectorResumeActivityArr } from "@/apis/resume/activity/useResumeActivityArr/type";
import { SelectorResumeActivity } from "@/apis/resume/activity/useResumeActivity/type";

export interface ActivityListProps {
  resumeId: number;
  selectActivity: (activity: SelectorResumeActivity) => void;
  myActivityList: SelectorResumeActivityArr;
}
