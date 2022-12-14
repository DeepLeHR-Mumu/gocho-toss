import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { PostJobDef, RequestObjDef, useAddJobProps } from "./type";

export const postAddJob: PostJobDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
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
      dto: {
        ...requestObj.dto,
        start_time: new Date(requestObj.dto.start_time).getTime(),
        end_time: new Date(requestObj.dto.end_time).getTime(),
        process_arr: requestObj.dto.process_arr?.split("\n"),
        apply_route_arr: requestObj.dto.apply_route_arr?.split("\n"),
        etc_arr: requestObj.dto.etc_arr ? requestObj.dto.etc_arr.split("\n") : null,
        position_arr: requestObj.dto.position_arr.map((position) => {
          return {
            ...position,
            required_etc_arr: position.required_etc_arr ? position.required_etc_arr.split("\n") : null,
            task_detail_arr: position.task_detail_arr.split("\n"),
            pay_arr: position.pay_arr?.split("\n"),
            preferred_etc_arr: position.preferred_etc_arr ? position.preferred_etc_arr.split("\n") : null,
          };
        }),
      },
    };
    return postAddJob(newRequestObj);
  });
};
