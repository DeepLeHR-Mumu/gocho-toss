import axios, { AxiosError } from "axios";
import { axiosInstance } from "@/apis/axiosInstance";
import { GetJdApplicantExcelDef } from "./type";

export const getJdApplicantExcel: GetJdApplicantExcelDef = async (jdId, applicantIdArr) => {
  try {
    const response = await axiosInstance.get(
      `/jds/${jdId}/applicants/excel-generate${
        applicantIdArr && applicantIdArr.length !== 0 ? `?applicantIds=${applicantIdArr.join(",")}` : ""
      }`,
      { responseType: "blob" }
    );
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e;
    }

    return new AxiosError("Unknown Error occured");
  }
};
