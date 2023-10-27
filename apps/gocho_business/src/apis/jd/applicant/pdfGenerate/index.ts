import axios, { AxiosError } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";
import { GetApplicantFileDef } from "./type";

export const getApplicantsFile: GetApplicantFileDef = async (jdId, applicantIdArr) => {
  try {
    const response = await axiosInstance.get(
      `/jds/${jdId}/applicants/pdf-generate${
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
