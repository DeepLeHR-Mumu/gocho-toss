import { SelectorResumeActivity } from "@/apis/resume/activity/useResumeActivity/type";

export interface ActivityFormProps {
  resumeId: number;
  handleEditMode: () => void;
  currentActivity?: SelectorResumeActivity;
}
