import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";
import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDoKakaoLogin } from "shared-api/auth/useDoKakaoLogin";
import { loginSuccessEvent } from "shared-ga/auth";
import { tokenDecryptor } from "shared-util";

const KakaoLogin: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { code } = router.query;
  const { setCurrentToast } = useToast();
  const { mutate: kakaologinMutation } = useDoKakaoLogin();
  const { setCurrentModal } = useModal();

  useEffect(() => {
    if (code && queryClient && router) {
      kakaologinMutation(
        { code: code as string },
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kakaologinMutation, code, queryClient, router]);
  return <> </>;
};

export default KakaoLogin;
