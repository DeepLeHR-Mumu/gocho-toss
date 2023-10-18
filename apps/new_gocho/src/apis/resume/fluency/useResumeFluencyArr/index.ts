import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeFluencyKeyObj } from "@/constants/queryKeyFactory/resume/resumeFluencyKeyObj";

import { GetResumeFluencyArrDef } from "./type";
import { selector } from "./util";

export const getResumeFluencyArr: GetResumeFluencyArrDef = async (resumeId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/fluencies`);
  return data;
};

export const useResumeFluencyArr = (resumeId: number) =>
  useQuery({
    enabled: !!resumeId,
    queryKey: resumeFluencyKeyObj.fluencyArr(resumeId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeFluencyArr(queryKeyResumeId),
    select: ({ data }) => selector(data),
  });
