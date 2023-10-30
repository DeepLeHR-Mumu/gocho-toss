import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";
import { SelectorResumeCareerArr } from "@/apis/resume/career/useResumeCareerArr/type";

export interface CareerListProps {
  resumeId: number;
  selectCareer: (career: SelectorResumeCareer) => void;
  myCareerList: SelectorResumeCareerArr;
}
