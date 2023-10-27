import { AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";

export const getResumeGenerate = async (resumeId: number): Promise<AxiosResponse> => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/pdf-generate`);
  return data;
};
