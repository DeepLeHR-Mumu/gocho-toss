import { FunctionComponent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { PWD_REGEXP } from "shared-constant/regExp";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useQueryClient } from "@tanstack/react-query";
import { COLORS } from "shared-style/color";
import { useEditUserInfo } from "@/apis/auth/useEditUserInfo";
import { useUserState } from "@/globalStates/useUserState";
import { useToast } from "@/globalStates/useToast";
import { tokenService } from "@/utils/tokenService";

import { EDIT_PASSWORD_MESSAGE } from "./constants";
import { EditFormValues, PasswordShowObjDef } from "./type";
import { cssObj } from "./style";

export const EditPart: FunctionComponent = () => {
  const [passwordShowObj, setPasswordShowObj] = useState<PasswordShowObjDef>({
    isOriginPassword: false,
    isNewPassword: false,
    isCheckPassword: false,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { setToast } = useToast();
  const { mutate: editUserInfo } = useEditUserInfo();
  const { userInfoData } = useUserState();

  const queryClient = useQueryClient();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormValues>({ mode: "onChange" });

  const editSubmit: SubmitHandler<EditFormValues> = (editObj) => {
    editUserInfo(
      {
        ...editObj,
        managerId: Number(userInfoData?.id),
      },
      {
        onError: (error) => {
          const errorResponse = error.response?.data;
          setErrorMsg(errorResponse?.error_message as string);
        },
        onSuccess: (response) => {
          reset({
            origin_password: "",
            new_password: "",
            check_password: "",
          });
          tokenService.updateAllToken(`${response.data.access_token}`, `${response.data.refresh_token}`);
          queryClient.invalidateQueries();
          setToast("변경되었습니다");
        },
      }
    );
  };

  return (
    <section css={cssObj.wrapper}>
      <h2 css={cssObj.title}>회원정보</h2>
      <ul css={cssObj.basicInfo}>
        <li>
          <strong css={cssObj.infoTitle}>아이디</strong>
          <p css={cssObj.infoDesc}>{userInfoData?.email}</p>
        </li>
        <li>
          <strong css={cssObj.infoTitle}>이름</strong>
          <p css={cssObj.infoDesc}>{`${userInfoData?.name}(${userInfoData?.department})`}</p>
        </li>
      </ul>

      <form
        onSubmit={handleSubmit(editSubmit)}
        onKeyDown={(onKeyDownEvent) => {
          if (onKeyDownEvent.key === "Enter") {
            onKeyDownEvent.preventDefault();
          }
        }}
        role="presentation"
      >
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.formTitle(errors.origin_password !== undefined || errorMsg !== null)}>
              현재 비밀번호
            </strong>
            <label
              htmlFor="origin_password"
              css={cssObj.label(errors.origin_password !== undefined || errorMsg !== null)}
            >
              <input
                css={cssObj.input}
                type={passwordShowObj.isOriginPassword ? "text" : "password"}
                placeholder="현재 비밀번호를 입력해주세요"
                id="origin_password"
                {...register("origin_password", { required: true, minLength: 8, maxLength: 20, pattern: PWD_REGEXP })}
                onFocus={() => setErrorMsg(null)}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label="현재 비밀번호 확인"
                onClick={() => {
                  setPasswordShowObj((prevObj) => ({
                    ...prevObj,
                    isOriginPassword: !prevObj.isOriginPassword,
                  }));
                }}
              >
                {passwordShowObj.isOriginPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>
            <div css={cssObj.errorBox}>
              {errors.origin_password?.type === "required" && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.ORIGIN_REQUIRED}</p>
              )}
              {(errors.origin_password?.type === "minLength" || errors.origin_password?.type === "maxLength") && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.PATTERN}</p>
              )}
              {errorMsg && <p css={cssObj.errorDesc}>{errorMsg}</p>}
            </div>
          </li>
          <li>
            <strong css={cssObj.formTitle(errors.new_password !== undefined)}>새 비밀번호</strong>
            <label htmlFor="new_password" css={cssObj.label(errors.new_password !== undefined)}>
              <input
                css={cssObj.input}
                type={passwordShowObj.isNewPassword ? "text" : "password"}
                id="new_password"
                placeholder="8~20자, 띄어쓰기 불가능"
                {...register("new_password", { required: true, minLength: 8, maxLength: 20, pattern: PWD_REGEXP })}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label="새 비밀번호 확인"
                onClick={() => {
                  setPasswordShowObj((prevObj) => ({
                    ...prevObj,
                    isNewPassword: !prevObj.isNewPassword,
                  }));
                }}
              >
                {passwordShowObj.isNewPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>
            <div css={cssObj.errorBox}>
              {errors.new_password?.type === "required" && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.NEW_REQUIRED}</p>
              )}
              {(errors.new_password?.type === "minLength" ||
                errors.new_password?.type === "maxLength" ||
                errors.new_password?.type === "pattern") && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.PATTERN}</p>
              )}
            </div>
          </li>
          <li>
            <strong css={cssObj.formTitle(errors.check_password !== undefined)}>비밀번호 확인</strong>
            <label htmlFor="check_password" css={cssObj.label(errors.check_password !== undefined)}>
              <input
                css={cssObj.input}
                type={passwordShowObj.isCheckPassword ? "text" : "password"}
                id="check_password"
                placeholder="새 비밀번호와 동일하게 작성해주세요"
                {...register("check_password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: PWD_REGEXP,
                  validate: (value) => watch("new_password") === value,
                })}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label="체크 비밀번호 확인"
                onClick={() => {
                  setPasswordShowObj((prevObj) => ({
                    ...prevObj,
                    isCheckPassword: !prevObj.isCheckPassword,
                  }));
                }}
              >
                {passwordShowObj.isCheckPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>
            <div css={cssObj.errorBox}>
              {errors.check_password?.type === "required" && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.CHECK_NEW_REQUIRED}</p>
              )}
              {(errors.check_password?.type === "minLength" ||
                errors.check_password?.type === "maxLength" ||
                errors.check_password?.type === "pattern") && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.PATTERN}</p>
              )}
              {errors.check_password?.type === "validate" && (
                <p css={cssObj.errorDesc}>{EDIT_PASSWORD_MESSAGE.VALIDATE}</p>
              )}
            </div>
          </li>
        </ul>

        <div css={cssObj.submitButtonBox}>
          <SharedButton
            radius="round"
            fontColor={COLORS.GRAY100}
            onClickHandler="submit"
            size="medium"
            isFullWidth
            text="회원정보 변경 저장"
            backgroundColor="#ccc"
          />
        </div>
      </form>
    </section>
  );
};
