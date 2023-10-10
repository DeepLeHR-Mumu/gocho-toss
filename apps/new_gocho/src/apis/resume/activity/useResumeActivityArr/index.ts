import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeActivityKeyObj } from "@/constants/queryKeyFactory/resume/resumeActivityKeyObj";

import { GetResumeActivityArrDef } from "./type";
import { selector } from "./util";

export const getResumeActivityArr: GetResumeActivityArrDef = async (resumeId: number) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/activities`);
  return data;
};

export const useResumeActivityArr = (resumeId: number) =>
  useQuery({
    enabled: Boolean(resumeId),
    queryKey: resumeActivityKeyObj.activityArr(resumeId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeActivityArr(queryKeyResumeId),
    select: ({ data }) => selector(data),
  });
