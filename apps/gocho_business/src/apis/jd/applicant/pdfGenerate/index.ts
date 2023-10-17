import { axiosInstance } from "@/apis/axiosInstance";
import { GetJdApplicantPdfDef } from "./type";

export const getJdApplicantPdf: GetJdApplicantPdfDef = async (jdId, applicantIdArr) => {
  const { data } = await axiosInstance.get(
    `/jds/${jdId}/applicants/pdf-generate${
      applicantIdArr && applicantIdArr.length !== 0 ? `?applyIds=${applicantIdArr.join(",")}` : ""
    }`
  );
  return data;
};
