import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";
import { ErrorResponseDef } from "@/types";

import { jdDetailKeyObj, PostEditJdDef, RequestObjDef, useEditJdProps } from "./type";

export const putEditJd: PostEditJdDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useEditJd: useEditJdProps = () => {
  const queryClient = useQueryClient();

  return useMutation<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: (requestObj) => {
      const newRequestObj = {
        ...requestObj,
        dto: {
          ...requestObj.dto,
          start_time: new Date(requestObj.dto.start_time).getTime(),
          end_time: new Date(requestObj.dto.end_time).getTime(),
          process_arr: requestObj.dto.process_arr?.split("\n"),
          apply_route_arr: requestObj.dto.apply_route_arr?.split("\n"),
          etc_arr: requestObj.dto.etc_arr ? requestObj.dto.etc_arr.split("\n") : null,
          position_arr: requestObj.dto.position_arr.map((position) => ({
            ...position,
            rotation_arr: position.rotation_arr?.length !== 0 ? position.rotation_arr : null,
            required_etc_arr: position.required_etc_arr ? position.required_etc_arr.split("\n") : null,
            task_detail_arr: position.task_detail_arr.split("\n"),
            pay_arr: position.pay_arr?.split("\n"),
            place: {
              type: position.place.type,
              address_arr: position.place.address_arr?.length === 0 ? null : position.place.address_arr,
              factory_arr: position.place.factory_arr?.length === 0 ? null : position.place.factory_arr,
              etc: position.place.type === "일반" ? null : position.place.etc,
            },
            preferred_certi_arr: position.preferred_certi_arr?.length !== 0 ? position.preferred_certi_arr : null,
            preferred_etc_arr:
              position.preferred_etc_arr && position.preferred_etc_arr?.length !== 0
                ? position.preferred_etc_arr?.split("\n")
                : null,
          })),
        },
      };
      return putEditJd(newRequestObj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(jdDetailKeyObj.all);
    },
  });
};
