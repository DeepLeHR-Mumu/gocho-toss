import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import { adminTokenDecryptor } from "shared-util/tokenDecryptor";
import gochoColorSrc from "shared-image/global/deepLeLogo/largeColor.svg";

import { INTERNAL_URL } from "@/constants/index";
import { useDoLogin } from "@/api/auth/useDoLogin";
import { useUserInfo } from "@/api/auth/useUserInfo";

import { LoginFormValues } from "./type";
import { cssObj } from "./style";

const LoginPage: NextPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const router = useRouter();

  const queryClient = useQueryClient();
  const { isSuccess } = useUserInfo();
  const { mutate: postLogin } = useDoLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data.error[0];
        setErrorMsg(errorResponse?.error_message);
      },
      onSuccess: (response) => {
        const { exp: accessExp } = adminTokenDecryptor(response.data.access_token);
        const { exp: refreshExp } = adminTokenDecryptor(response.data.refresh_token);
        localStorage.setItem("accessToken", `${response.data.access_token}`);
        localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
        localStorage.setItem("accessExp", `${accessExp}`);
        localStorage.setItem("refreshExp", `${refreshExp}`);
        queryClient.invalidateQueries();
        router.push("/");
      },
    });
  };

  useEffect(() => {
    if (isSuccess) router.push("/");

    const routeChangeStart = (url: string) => {
      if (url !== INTERNAL_URL.LOGIN && !isSuccess) {
        router.events.emit("routeChangeError");
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    };
    router.events.on("routeChangeStart", routeChangeStart);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [isSuccess, router]);

  return (
    <main css={cssObj.wrapper}>
      <InvisibleH2 title="고초대졸닷컴 로그인하기" />
      <div css={cssObj.container}>
        <div css={cssObj.titleBox}>
          <div css={cssObj.gochoLogoBox}>
            <Image src={gochoColorSrc} alt="고초대졸닷컴" layout="fill" objectFit="contain" />
          </div>
          <strong css={cssObj.title}>생산직 채용의 새로운 기준</strong>
        </div>

        <form css={cssObj.formCSS} onSubmit={handleSubmit(loginSubmit)}>
          <ul css={cssObj.inputBox}>
            <li>
              <input
                type="email"
                placeholder="아이디(이메일)"
                css={cssObj.inputCSS}
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                })}
              />
            </li>
            <li>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="비밀번호"
                css={cssObj.inputCSS}
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
              />
              <button
                type="button"
                aria-label="비밀번호 확인"
                css={cssObj.eyeButtonCSS}
                onClick={() => {
                  setIsShowPassword((prev) => !prev);
                }}
              >
                {isShowPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </li>
          </ul>
          <div css={cssObj.bottomBox}>
            <CheckBoxWithDesc desc="자동 로그인" id="auto_login" registerObj={register("auto_login")} />

            <button type="button" css={cssObj.findPasswordButton}>
              비밀번호 찾기
            </button>
          </div>
          <p css={cssObj.errorMsg}>{errors.email?.message || errors.password?.message || errorMsg}</p>
          <button css={cssObj.loginButton} type="submit">
            로그인
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
