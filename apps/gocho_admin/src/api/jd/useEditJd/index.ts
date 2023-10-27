import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { AxiosResponse, AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { jdDetailKeyObj, PostEditJdDef, RequestObjDef, useEditJdProps } from "./type";

export const putEditJd: PostEditJdDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, formData);
  return data;
};

export const useEditJd: useEditJdProps = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: (requestObj) => {
      const newRequestObj = {
        ...requestObj,
        dto: {
          ...requestObj.dto,
          start_time: dayjs(new Date(requestObj.dto.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
          end_time: dayjs(new Date(requestObj.dto.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
          process_arr: requestObj.dto.process_arr?.split("\n"),
          apply_url:
            requestObj.dto.apply_url.includes("@") && !requestObj.dto.apply_url.includes("mailto")
              ? `mailto:${requestObj.dto.apply_url}`
              : requestObj.dto.apply_url,
          apply_route_arr: requestObj.dto.apply_route_arr?.split("\n"),
          apply_document_arr: requestObj.dto.apply_document_arr ? requestObj.dto.apply_document_arr.split("\n") : null,
          etc_arr: requestObj.dto.etc_arr ? requestObj.dto.etc_arr.split("\n") : null,
          rotation_arr: requestObj.dto.rotation_arr?.length !== 0 ? requestObj.dto.rotation_arr : null,
          required_etc_arr: requestObj.dto.required_etc_arr ? requestObj.dto.required_etc_arr.split("\n") : null,
          task_detail_arr: requestObj.dto.task_detail_arr.split("\n"),
          pay_arr: requestObj.dto.pay_arr?.split("\n"),
          place: {
            type: requestObj.dto.place.type,
            address_arr: requestObj.dto.place.address_arr?.length === 0 ? null : requestObj.dto.place.address_arr,
            factory_arr: requestObj.dto.place.factory_arr?.length === 0 ? null : requestObj.dto.place.factory_arr,
            etc: requestObj.dto.place.type === "일반" ? null : requestObj.dto.place.etc,
          },
          preferred_certi_arr:
            requestObj.dto.preferred_certi_arr?.length !== 0 ? requestObj.dto.preferred_certi_arr : null,
          preferred_etc_arr:
            requestObj.dto.preferred_etc_arr && requestObj.dto.preferred_etc_arr?.length !== 0
              ? requestObj.dto.preferred_etc_arr?.split("\n")
              : null,
        },
      };
      return putEditJd(newRequestObj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(jdDetailKeyObj.all);
    },
  });
};
