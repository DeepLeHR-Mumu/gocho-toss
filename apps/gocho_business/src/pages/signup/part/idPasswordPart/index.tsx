import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";
import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { commonCssObj } from "@/styles";

import { LOGIN_ERROR_MESSAGES } from "@/pages/login/constant";
import { FindCompanyPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const IdPasswordPart: FunctionComponent<FindCompanyPartProps> = ({ sliderRef }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, formData);
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    sliderRef.current?.slickNext();
  };

  const isEmail = Boolean(watch("email"));
  const isPassword = Boolean(watch("password"));

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
      <div css={cssObj.formWrapper}>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>아이디(이메일)</p>
          <input
            css={commonCssObj.input(25.5, Boolean(errors.email))}
            type="text"
            {...register("email", {
              required: LOGIN_ERROR_MESSAGES.BLANK_EMAIL,
              maxLength: {
                value: 30,
                message: LOGIN_ERROR_MESSAGES.EXCEED_LENGTH_EMAIL,
              },
              pattern: {
                value: EMAIL_REGEXP,
                message: LOGIN_ERROR_MESSAGES.WRONG_EMAIL,
              },
            })}
          />
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>비밀번호</p>
          <input
            css={commonCssObj.input(25.5, Boolean(errors.password))}
            type="password"
            {...register("password", {
              required: LOGIN_ERROR_MESSAGES.BLANK_PWD,
              pattern: {
                value: PWD_REGEXP,
                message: LOGIN_ERROR_MESSAGES.NO_SPACE,
              },
              minLength: {
                value: 8,
                message: LOGIN_ERROR_MESSAGES.MIN_PASSWORD,
              },
              maxLength: {
                value: 20,
                message: LOGIN_ERROR_MESSAGES.MAX_PASSWORD,
              },
            })}
          />
        </div>
        <p css={cssObj.errorMsg}>{errors.email?.message || errors.password?.message}</p>
      </div>
      <NewSharedButton
        buttonType={
          !isEmail || !isPassword || errors.email?.message || errors.password?.message ? "disabled" : "fillBlue"
        }
        width={25.5}
        text="다음"
        onClickHandler="submit"
        isLong
      />
    </form>
  );
};
