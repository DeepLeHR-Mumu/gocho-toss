import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";

export interface CareerFormProps {
  handleEditMode: () => void;
  resumeId: number;
  currentCareer?: SelectorResumeCareer | null;
}
