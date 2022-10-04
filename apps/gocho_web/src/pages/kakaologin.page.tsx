import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDoKakaoLogin } from "shared-api/auth/useDoKakaoLogin";

const KakaoLogin: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { code } = router.query;
  const { mutate: kakaologinMutation } = useDoKakaoLogin();
  useEffect(() => {
    if (code) {
      kakaologinMutation(
        { code: code as string },
        {
          onSuccess: (response) => {
            localStorage.setItem("token", `${response.data.token}`);
            queryClient.invalidateQueries();
            router.push("/");
          },
        }
      );
    }
  }, [kakaologinMutation, code, queryClient, router]);
  return <main>{code}</main>;
};

export default KakaoLogin;
