import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/useAxiosInterceptor";
import { PostCompanyDef, RequestObjDef, useAddCompanyProps } from "./type";

export const postAddCompany: PostCompanyDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);
  if (requestObj.logo) formData.append("logo", requestObj.logo);

  const { data } = await axiosInstance.post("/companies", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddCompany: useAddCompanyProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>((requestObj) => {
    const newRequestObj = {
      dto: {
        ...requestObj.dto,
        welfare: {
          money: requestObj.dto.welfare.money ? requestObj.dto.welfare.money.split("\n") : null,
          health: requestObj.dto.welfare.health ? requestObj.dto.welfare.health.split("\n") : null,
          life: requestObj.dto.welfare.life ? requestObj.dto.welfare.life.split("\n") : null,
          holiday: requestObj.dto.welfare.holiday ? requestObj.dto.welfare.holiday.split("\n") : null,
          facility: requestObj.dto.welfare.facility ? requestObj.dto.welfare.facility.split("\n") : null,
          vacation: requestObj.dto.welfare.vacation ? requestObj.dto.welfare.vacation.split("\n") : null,
          growth: requestObj.dto.welfare.growth ? requestObj.dto.welfare.growth.split("\n") : null,
          etc: requestObj.dto.welfare.etc ? requestObj.dto.welfare.etc.split("\n") : null,
        },
      },
      logo: requestObj.logo,
    };
    return postAddCompany(newRequestObj);
  });
};
