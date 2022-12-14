import { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { adminTokenDecryptor } from "shared-util/tokenDecryptor";

import { useDoLogin } from "@api/auth/useDoLogin";
import { mainContainer } from "@style/commonStyles";

import { inputBox, inputContainer, inputTitle, title, submitButton } from "./style";
import { LoginFormValues } from "./type";

export const Login: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useDoLogin();
  const { register, handleSubmit } = useForm<LoginFormValues>({ mode: "onChange" });

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response.data.access_token}`);
        localStorage.setItem("refreshToken", `${response.data.refresh_token}`);

        const { email, role, exp: accessExp } = adminTokenDecryptor(response.data.access_token);
        const { exp: refreshExp } = adminTokenDecryptor(response.data.refresh_token);

        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("accessExp", String(accessExp));
        localStorage.setItem("refreshExp", String(refreshExp));

        queryClient.invalidateQueries();
        window.location.href = (router.query.lastPage as string) || "/";
      },
    });
  };

  return (
    <main css={mainContainer}>
      <h2 css={title}>로그인이 필요합니다.</h2>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <div css={inputContainer}>
          <strong css={inputTitle}>아이디</strong>
          <input
            css={inputBox}
            {...register("email", {
              required: true,
            })}
          />
        </div>
        <div css={inputContainer}>
          <strong css={inputTitle}>비밀번호</strong>
          <input
            css={inputBox}
            type="password"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <button type="submit" css={submitButton}>
          로그인
        </button>
      </form>
    </main>
  );
};

export default Login;
