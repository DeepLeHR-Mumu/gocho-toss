import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { managerTokenDecryptor } from "shared-util/tokenDecryptor";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import gochoColorSrc from "shared-image/global/deepLeLogo/logoIconColor.svg";

import { useModal } from "@/globalStates/useModal";
import { INTERNAL_URL } from "@/constants/url";
import { useUserState } from "@/globalStates/useUserState";
import { TopBar } from "@/components/global/layout/topBar";
import { useDoLogin } from "@/apis/auth/useDoLogin";
import { tokenService } from "@/utils/tokenService";

import { LoginFormValues } from "./type";
import { cssObj } from "./style";

const LoginPage: NextPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { setUserInfoData } = useUserState();
  const { mutate: postLogin } = useDoLogin();
  const { setCurrentModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data;
        setErrorMsg(errorResponse?.error_message as string);
      },
      onSuccess: (response) => {
        tokenService.updateAllToken(`${response.data.access_token}`, `${response.data.refresh_token}`);
        const { id, company_id, company_name, company_logo, iat, exp, email, name, department } = managerTokenDecryptor(
          response.data.access_token
        );
        setUserInfoData({
          id,
          companyId: company_id,
          companyName: company_name,
          companyLogo: company_logo,
          email,
          name,
          department,
          iat,
          exp,
        });
        queryClient.invalidateQueries();
        router.push(INTERNAL_URL.JD_LIST);
      },
    });
  };

  return (
    <>
      <TopBar />
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
            <ul>
              <li css={cssObj.inputBox(errors.email?.type === "required")}>
                <input
                  type="email"
                  placeholder="아이디(이메일)"
                  css={cssObj.inputCSS}
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                  })}
                />
              </li>
              <li css={cssObj.inputBox(errors.password?.type === "required")}>
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

              <button
                type="button"
                css={cssObj.findPasswordButton}
                onClick={() => {
                  setCurrentModal("findPasswordModal");
                }}
              >
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
    </>
  );
};

export default LoginPage;
