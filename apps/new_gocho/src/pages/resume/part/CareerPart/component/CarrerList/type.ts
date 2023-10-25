import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";
import { SelectorResumeCareerArr } from "@/apis/resume/career/useResumeCareerArr/type";

export interface CarrerListProps {
  resumeId: number;
  selectCarrer: (carrer: SelectorResumeCareer) => void;
  myCarrerList: SelectorResumeCareerArr;
}
