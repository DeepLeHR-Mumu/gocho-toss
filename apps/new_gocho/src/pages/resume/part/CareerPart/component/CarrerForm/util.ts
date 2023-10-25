import { SelectorResumeCareer } from "@/apis/resume/career/useResumeCareer/type";
import { dateToYYMM } from "@/utils";

export const carrerToDefaultValue = (currentCarrer: SelectorResumeCareer) => ({
  name: currentCarrer.name,
  position: currentCarrer.position,
  pay: currentCarrer.pay,
  department: currentCarrer.department,
  start_date: dateToYYMM(currentCarrer.startDate),
  end_date: dateToYYMM(currentCarrer.endDate || ""),
  contract_type: currentCarrer.contractType,
  job_description: currentCarrer.jobDescription,
  retire_description: currentCarrer.retireDescription,
  is_working: currentCarrer.isWorking,
});
