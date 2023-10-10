import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCollegeKeyObj } from "@/constants/queryKeyFactory/resume/resumeCollegeKeyObj";
import { GetResumeCollegeDef } from "./type";
import { selector } from "./util";

export const getResumeCollege: GetResumeCollegeDef = async (resumeId, collegeId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/colleges/${collegeId}`);
  return data;
};

export const useResumeCollege = (resumeId: number, collegeId: number) =>
  useQuery({
    enabled: Boolean(resumeId && collegeId),
    queryKey: resumeCollegeKeyObj.college(resumeId, collegeId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId, collegeId: queryKeyCertificationId }] }) =>
      getResumeCollege(queryKeyResumeId, queryKeyCertificationId),
    select: ({ data }) => selector(data),
  });
