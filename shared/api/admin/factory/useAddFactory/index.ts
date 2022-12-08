import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";
import { PostFactoryDef, useAddFactoryProps } from "./type";
import { FactoryRequestObjDef } from "../type";

export const postFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/factories", { ...requestObj });
  return data;
};

export const useAddFactory: useAddFactoryProps = () => {
  return useMutation<AdminResponseDef, AxiosError, FactoryRequestObjDef>(postFactory);
};
