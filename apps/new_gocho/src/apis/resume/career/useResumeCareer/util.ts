import { ResumeCareerDef } from "../type";

export const selector = (career: ResumeCareerDef) => ({
  id: career.id,
  name: career.name,
  isWorking: career.is_working,
  startDate: career.start_date,
  endDate: career.end_date,
  contractType: career.contract_type,
  department: career.department,
  position: career.position,
  jobDescription: career.job_description,
  pay: career.pay,
  retireDescription: career.retire_description,
});
