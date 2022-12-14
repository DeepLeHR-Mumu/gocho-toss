import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostJobDef, RequestObjDef, useAddJobProps } from "./type";

export const postJob: PostJobDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.post("/jds", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddJob: useAddJobProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>((requestObj) => {
    const newRequestObj = {
      ...requestObj,
      start_time: new Date(requestObj.start_time).getTime(),
      end_time: new Date(requestObj.end_time).getTime(),
      process_arr: requestObj.process_arr?.split("\n"),
      apply_route_arr: requestObj.apply_route_arr?.split("\n"),
      etc_arr: requestObj.etc_arr ? requestObj.etc_arr.split("\n") : null,
      position_arr: requestObj.position_arr.map((position) => {
        return {
          ...position,
          required_etc_arr: position.required_etc_arr ? position.required_etc_arr.split("\n") : null,
          task_detail_arr: position.task_detail_arr.split("\n"),
          pay_arr: position.pay_arr?.split("\n"),
          preferred_etc_arr: position.preferred_etc_arr ? position.preferred_etc_arr.split("\n") : null,
        };
      }),
    };
    return postJob(newRequestObj);
  });
};
