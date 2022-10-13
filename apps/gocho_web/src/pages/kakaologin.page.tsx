import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDoKakaoLogin } from "shared-api/auth/useDoKakaoLogin";
import { loginSuccessEvent } from "shared-ga/auth";
import { tokenDecryptor } from "shared-util/tokenDecryptor";

const KakaoLogin: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { code } = router.query;
  const { mutate: kakaologinMutation } = useDoKakaoLogin();

  useEffect(() => {
    if (code && queryClient && router) {
      kakaologinMutation(
        { code: code as string },
        {
          onSuccess: (response) => {
            if (response.data.result === "NEW_USER") {
              return;
            }
            queryClient.invalidateQueries();
            const { id } = tokenDecryptor(response.data.token as string);
            const kakaopath = sessionStorage.getItem("kakaopath");
            loginSuccessEvent(id, "kakao", kakaopath);
            localStorage.setItem("token", `${response.data.token}`);
            router.back();
          },
        }
      );
    }
  }, [kakaologinMutation, code, queryClient, router]);
  return <> </>;
};

export default KakaoLogin;
