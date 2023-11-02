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
          detail: {
            ...requestObj.dto.detail,
            task_description: requestObj.dto.detail.task_description.split("\n"),
            pay: requestObj.dto.detail.pay?.split("\n"),
            place: {
              ...requestObj.dto.detail.place,
            },
          },
          qualification: {
            ...requestObj.dto.qualification,
            required_etc: requestObj.dto.qualification.required_etc
              ? requestObj.dto.qualification.required_etc.split("\n")
              : null,
            preferred_certification:
              requestObj.dto.qualification.preferred_certification?.length !== 0
                ? requestObj.dto.qualification.preferred_certification
                : null,
            preferred_etc:
              requestObj.dto.qualification.preferred_etc && requestObj.dto.qualification.preferred_etc?.length !== 0
                ? requestObj.dto.qualification.preferred_etc?.split("\n")
                : null,
          },
          apply: {
            ...requestObj.dto.apply,
            start_time: dayjs(new Date(requestObj.dto.apply.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
            end_time: dayjs(new Date(requestObj.dto.apply.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
            document: requestObj.dto.apply.document ? requestObj.dto.apply.document.split("\n") : null,
            etc: requestObj.dto.apply.etc ? requestObj.dto.apply.etc.split("\n") : null,
            process: requestObj.dto.apply.process?.split("\n"),
          },
        },
      };
      return putEditJd(newRequestObj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(jdDetailKeyObj.all);
    },
  });
};
