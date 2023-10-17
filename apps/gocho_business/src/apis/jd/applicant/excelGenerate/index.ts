import { axiosInstance } from "@/apis/axiosInstance";
import { GetJdApplicantExcelDef } from "./type";

export const getJdApplicantExcel: GetJdApplicantExcelDef = async (jdId, applicantIdArr) => {
  const response = await axiosInstance.get(
    `/jds/${jdId}/applicants/excel-generate${
      applicantIdArr && applicantIdArr.length !== 0 ? `?applyIds=${applicantIdArr.join(",")}` : ""
    }`,
    { responseType: "blob" }
  );
  return response;
};
