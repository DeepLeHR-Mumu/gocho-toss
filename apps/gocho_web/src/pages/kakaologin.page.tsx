import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";
import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDoKakaoLogin } from "shared-api/auth/useDoKakaoLogin";
import { useGetKakaoCode } from "shared-api/auth/useGetKakaoCode";
import { loginSuccessEvent } from "shared-ga/auth";
import { tokenDecryptor } from "shared-util";
import { KAKAO_API_KEY } from "shared-user/src/constants";

const KakaoLogin: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { code } = router.query;
  const { setCurrentToast } = useToast();
  const { mutate: kakaoCodeMutation } = useGetKakaoCode();
  const { mutate: kakaologinMutation } = useDoKakaoLogin();
  const { setCurrentModal } = useModal();

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
                  if (response.data.result === "NEW_USER") {
                    const { email } = tokenDecryptor(response.data.access_token as string);
                    sessionStorage.setItem("kakaoId", email);
                    setCurrentModal("writeKakaoInfoModal");
                    return;
                  }
                  queryClient.invalidateQueries();
                  const { id, nickname } = tokenDecryptor(response.data.access_token as string);
                  const kakaopath = sessionStorage.getItem("kakaopath");
                  loginSuccessEvent(id, "kakao", kakaopath);
                  router.push(kakaopath as string);
                  setCurrentToast("님 환영합니다.", nickname);
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
