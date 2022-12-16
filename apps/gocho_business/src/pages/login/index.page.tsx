import { NextPage } from "next";
// import { useRouter } from "next/router";
import { useState } from "react";
// import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { SubmitHandler, useForm } from "react-hook-form";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
// import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import gochoColorSrc from "shared-image/global/deepLeLogo/smallColor.svg";

// import { LoginFormValues } from "./type";
import { cssObj } from "./style";

const LoginPage: NextPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  // const router = useRouter();
  // const queryClient = useQueryClient();

  // const { register, handleSubmit } = useForm<LoginFormValues>({ mode: "onChange" });

  // const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
  // mutate(loginObj, {
  //   onSuccess: (response) => {
  //     localStorage.setItem("accessToken", `${response.data.access_token}`);
  //     localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
  //     const { email, role, exp: accessExp } = adminTokenDecryptor(response.data.access_token);
  //     const { exp: refreshExp } = adminTokenDecryptor(response.data.refresh_token);
  //     localStorage.setItem("email", email);
  //     localStorage.setItem("role", role);
  //     localStorage.setItem("accessExp", String(accessExp));
  //     localStorage.setItem("refreshExp", String(refreshExp));
  //     queryClient.invalidateQueries();
  //     router.push("/");
  //   },
  // });
  // };
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
        {/* onSubmit={handleSubmit(loginSubmit)} */}
        <form css={cssObj.formCSS}>
          <ul css={cssObj.inputBox}>
            <li>
              <input
                type="email"
                placeholder="아이디(이메일)"
                css={cssObj.inputCSS}
                // {...register("email", {
                //   required: "아이디 입력해라!",
                // })}
              />
            </li>
            <li>
              <input type={isShowPassword ? "text" : "password"} placeholder="비밀번호" css={cssObj.inputCSS} />
              <button
                type="button"
                aria-label="비밀번호 확인"
                // {...register("password", {
                //   required: "비밀번호 입력해라!",
                // })}
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
            {/* <CheckBoxWithDesc
              desc="자동 로그인"
              id="auto_login"
              registerObj={() => undefined}
              // registerObj={register("auto_login")}
            /> */}

            <button type="button" css={cssObj.findPasswordButton}>
              비밀번호 찾기
            </button>
          </div>
          <button css={cssObj.loginButton} type="submit">
            로그인
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
