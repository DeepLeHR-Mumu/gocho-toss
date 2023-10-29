import { axiosInstance } from "@/apis/axiosInstance";

export const getResumeGenerate = async (resumeId: number): Promise<Blob> => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/pdf-generate`, {
    responseType: "blob",
  });
  return data;
};
