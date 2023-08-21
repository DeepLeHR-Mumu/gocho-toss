import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { Input, Button } from "shared-ui/deeple-ds";
import { useDoLogin, useUserProfile } from "shared-api/auth";
import { RequestObjDef as LoginFormValues } from "shared-api/auth/useDoLogin/type";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE, EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";

import ActionBar from "../ActionBar";

import { EmailLoginProps } from "./type";
import { cssObj } from "./style";

const EmailLogin = ({ toFindPassword, toSignUp, ...actionBarHandlers }: EmailLoginProps) => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();
  const { mutate: postLogin } = useDoLogin();

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: () => {
        setError("email", { type: "custom", message: "" });
        setError("password", { type: "custom", message: "이메일 또는 비밀번호가 일치하지 않습니다." });
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response.data.access_token}`);
        localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
        queryClient.invalidateQueries();
        // TODO 로그인 성공 시 로직 추가

        // if (userInfoData) {
        //   loginSuccessEvent(userInfoData.id, "gocho");
        //   setToastMessage("님 반갑습니다.", userInfoData.nickname);
        // }
        // closeModal();
      },
    });
  };

  return (
    <div css={cssObj.wrapper}>
      <ActionBar title="로그인" {...actionBarHandlers} />
      <div css={cssObj.loginWrapper}>
        <form css={cssObj.form}>
          <Input
            label="이메일"
            {...register("email")}
            {...register("email", {
              pattern: {
                value: EMAIL_REGEXP,
                message: EMAIL_ERROR_MESSAGE.REGEX,
              },
            })}
            state={errors.email ? { state: "error", message: errors.email.message } : undefined}
          />
          <Input
            label="비밀번호"
            type="password"
            maxLength={20}
            {...register("password")}
            {...register("password", {
              minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
              pattern: {
                value: PWD_REGEXP,
                message: PWD_ERROR_MESSAGE.NOT_SPACE,
              },
            })}
            state={errors.password ? { state: "error", message: errors.password.message } : undefined}
          />
        </form>
      </div>
      <div css={cssObj.loginButtonWrapper}>
        <Button type="submit" size="large" onClick={handleSubmit(loginSubmit)}>
          로그인
        </Button>
      </div>
      <div css={cssObj.findPasswordButtonWrapper}>
        <Button size="small" css={cssObj.findPasswordButton} onClick={toFindPassword}>
          비밀번호를 잊어버리셨나요?
        </Button>
      </div>
      <div css={cssObj.signUpButtonWrapper}>
        <Button size="large" color="outlineGray" onClick={toSignUp}>
          이메일로 가입하기
        </Button>
      </div>
    </div>
  );
};

export default EmailLogin;
