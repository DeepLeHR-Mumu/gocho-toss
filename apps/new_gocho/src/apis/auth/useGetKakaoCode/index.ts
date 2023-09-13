import axios, { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import { ResponseObjDef, RequestObjDef, getKakaoCodeDef, useGetKakaoCodeProps } from "./type";

const getKakaoCode: getKakaoCodeDef = async (requestObj) => {
  const url = "https://kauth.kakao.com/oauth/token";
  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("client_id", requestObj.APIKey);
  params.append("redirect_uri", requestObj.uri);
  params.append("code", requestObj.code);

  return axios.post(url, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const useGetKakaoCode: useGetKakaoCodeProps = () => useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: getKakaoCode });
