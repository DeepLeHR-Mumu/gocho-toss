import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { tokenDecryptor } from "shared-util";

import { useDoKakaoLogin } from "@/apis/auth/useDoKakaoLogin";
import { useGetKakaoCode } from "@/apis/auth/useGetKakaoCode";
import { useToast } from "@/globalStates";
import { loginSuccessEvent } from "@/ga/auth";

const KakaoLogin: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { code } = router.query;
  const { setToastMessage } = useToast();
  const { mutate: kakaoCodeMutation } = useGetKakaoCode();
  const { mutate: kakaologinMutation } = useDoKakaoLogin();
  const KAKAO_API_KEY = "562427e798f089a255bd9da44dfc29e6";

  useEffect(() => {
    if (code && queryClient && router) {
      kakaoCodeMutation(
        {
          code: code as string,
          uri: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
          APIKey: KAKAO_API_KEY,
        },
        {
          onSuccess: (codeResponse) => {
            kakaologinMutation(
              {
                access_token: codeResponse.data.access_token as string,
                refresh_token: codeResponse.data.refresh_token as string,
              },
              {
                onSuccess: (response) => {
                  localStorage.setItem("accessToken", `${response.data.access_token}`);
                  localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
                  queryClient.invalidateQueries();
                  const { id } = tokenDecryptor(response.data.access_token as string);
                  const kakaopath = sessionStorage.getItem("kakaopath");
                  loginSuccessEvent(id, "kakao", kakaopath);
                  router.push(kakaopath as string);
                  setToastMessage("고초대졸닷컴에 오신 것을 환영합니다.");
                },
              }
            );
          },
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kakaologinMutation, code, queryClient, router]);
  return <> </>;
};

export default KakaoLogin;
