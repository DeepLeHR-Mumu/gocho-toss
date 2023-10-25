import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";

export interface CarrerFormProps {
  handleEditMode: () => void;
  resumeId: number;
  currentCarrer?: SelectorResumeCareer;
}
