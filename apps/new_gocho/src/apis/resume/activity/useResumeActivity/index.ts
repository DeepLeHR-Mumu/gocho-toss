import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeActivityKeyObj } from "@/constants/queryKeyFactory/resume/resumeActivityKeyObj";

import { GetResumeActivityDef } from "./type";
import { selector } from "./util";

export const getResumeActivity: GetResumeActivityDef = async (resumeId, activityId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/activities/${activityId}`);
  return data;
};

export const useResumeActivity = (resumeId?: number, activityId?: number) =>
  useQuery({
    queryKey: resumeId && activityId ? resumeActivityKeyObj.activity(resumeId, activityId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId, activityId: queryKeyActivityId }] }) =>
      getResumeActivity(queryKeyResumeId, queryKeyActivityId),
    select: ({ data }) => selector(data),
  });
