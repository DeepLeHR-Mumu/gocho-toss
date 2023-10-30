import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";
import { dateToYYMM } from "@/utils";

export const careerToDefaultValue = (currentCareer: SelectorResumeCareer) => ({
  name: currentCareer.name,
  position: currentCareer.position,
  pay: currentCareer.pay,
  department: currentCareer.department,
  start_date: dateToYYMM(currentCareer.startDate),
  end_date: dateToYYMM(currentCareer.endDate || ""),
  contract_type: currentCareer.contractType,
  job_description: currentCareer.jobDescription,
  retire_description: currentCareer.retireDescription,
  is_working: currentCareer.isWorking,
});
