import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@/api/useAxiosInterceptor";
import { EditCompanyDef, RequestObjDef, useEditCompanyProps } from "./type";

export const editCompany: EditCompanyDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  if (requestObj.logo) formData.append("logo", requestObj.logo);
  if (requestObj.bgImage) formData.append("backgroundImage", requestObj.bgImage);

  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}`, formData);
  return data;
};

export const useEditCompany: useEditCompanyProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({
    mutationFn: (requestObj) => {
      const newRequestObj = {
        companyId: requestObj.companyId,
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
        bgImage: requestObj.bgImage,
      };
      return editCompany(newRequestObj);
    },
  });
