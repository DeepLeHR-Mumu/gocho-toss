import { FunctionComponent, useRef, useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { PWD_REGEXP } from "shared-constant";

import { useEditUserInfo } from "@/apis";
import { useUserState, useToast } from "@/globalStates";

import { EDIT_PASSWORD_MESSAGE } from "./constants";
import { EditFormValues, PasswordShowObjDef } from "./type";
import { cssObj } from "./style";

export const EditPart: FunctionComponent = () => {
  const [passwordShowObj, setPasswordShowObj] = useState<PasswordShowObjDef>({
    isOriginPassword: false,
    isNewPassword: false,
    isCheckPassword: false,
  });
  const isLoading = useRef(false);

  const { setToast } = useToast();
  const { userInfoData } = useUserState();
  const { mutate: editUserInfo } = useEditUserInfo();

  const queryClient = useQueryClient();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditFormValues>({ mode: "onChange" });

  const editSubmit: SubmitHandler<EditFormValues> = (editObj) => {
    if (isLoading.current) return;
    isLoading.current = true;
    editUserInfo(
      {
        ...editObj,
        managerId: Number(userInfoData?.id),
      },
      {
        onError: (error) => {
          const errorResponse = error.response?.data;
          if (errorResponse?.error_code === "NOT_MATCHED_PWD") {
            setError("origin_password", { type: "custom", message: EDIT_PASSWORD_MESSAGE.ORIGIN_VALIDATE });
          }
        },
        onSuccess: (response) => {
          reset({
            origin_password: "",
            new_password: "",
            check_password: "",
          });
          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem("refreshToken", response.data.refresh_token);
          queryClient.invalidateQueries();
          setToast("변경되었습니다");
          isLoading.current = false;
        },
      }
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", (keyDownEvent) => {
      if (keyDownEvent.key === "Enter") {
        keyDownEvent.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("keydown", (keyDownEvent) => {
        if (keyDownEvent.key === "Enter") {
          keyDownEvent.preventDefault();
        }
      });
    };
  }, []);

  const isOriginPassword = Boolean(watch("origin_password"));
  const isNewPassword = Boolean(watch("new_password"));
  const isCheckPassword = Boolean(watch("check_password"));

  return (
    <section css={cssObj.wrapper} data-testid="company/edit/editPart">
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

      <form onSubmit={handleSubmit(editSubmit)}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.formTitle(Boolean(errors.origin_password))}>현재 비밀번호</strong>
            <label htmlFor="origin_password" css={cssObj.label(Boolean(errors.origin_password))}>
              <input
                css={cssObj.input}
                type={passwordShowObj.isOriginPassword ? "text" : "password"}
                placeholder="현재 비밀번호를 입력해주세요"
                id="origin_password"
                {...register("origin_password", {
                  required: EDIT_PASSWORD_MESSAGE.ORIGIN_REQUIRED,
                  minLength: {
                    value: 8,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  maxLength: {
                    value: 20,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  pattern: {
                    value: PWD_REGEXP,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                })}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label={passwordShowObj.isOriginPassword ? "현재 비밀번호 가리기" : "현재 비밀번호 보기"}
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
              <p css={cssObj.errorDesc}>{errors.origin_password?.message}</p>
            </div>
          </li>
          <li>
            <strong css={cssObj.formTitle(Boolean(errors.new_password))}>새 비밀번호</strong>
            <label htmlFor="new_password" css={cssObj.label(Boolean(errors.new_password))}>
              <input
                css={cssObj.input}
                type={passwordShowObj.isNewPassword ? "text" : "password"}
                id="new_password"
                placeholder="8~20자, 띄어쓰기 불가능"
                {...register("new_password", {
                  required: EDIT_PASSWORD_MESSAGE.NEW_REQUIRED,
                  minLength: {
                    value: 8,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  maxLength: {
                    value: 20,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  pattern: {
                    value: PWD_REGEXP,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                })}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label={passwordShowObj.isNewPassword ? "새로운 비밀번호 가리기" : "새로운 비밀번호 보기"}
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
              <p css={cssObj.errorDesc}>{errors.new_password?.message}</p>
            </div>
          </li>
          <li>
            <strong css={cssObj.formTitle(Boolean(errors.check_password))}>비밀번호 확인</strong>
            <label htmlFor="check_password" css={cssObj.label(Boolean(errors.check_password))}>
              <input
                css={cssObj.input}
                type={passwordShowObj.isCheckPassword ? "text" : "password"}
                id="check_password"
                placeholder="새 비밀번호와 동일하게 작성해주세요"
                {...register("check_password", {
                  required: EDIT_PASSWORD_MESSAGE.CHECK_NEW_REQUIRED,
                  minLength: {
                    value: 8,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  maxLength: {
                    value: 20,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  pattern: {
                    value: PWD_REGEXP,
                    message: EDIT_PASSWORD_MESSAGE.PATTERN,
                  },
                  validate: (value) => watch("new_password") === value || EDIT_PASSWORD_MESSAGE.VALIDATE,
                })}
              />
              <button
                css={cssObj.showButton}
                type="button"
                aria-label={passwordShowObj.isCheckPassword ? "확인용 비밀번호 가리기" : "확인용 비밀번호 보기"}
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
              <p css={cssObj.errorDesc}>{errors.check_password?.message}</p>
            </div>
          </li>
        </ul>

        <button
          css={cssObj.submitButton(
            isOriginPassword && isNewPassword && isCheckPassword && Object.keys(errors).length === 0
          )}
          type="submit"
          disabled={!isOriginPassword || !isNewPassword || !isCheckPassword || Object.keys(errors).length !== 0}
        >
          회원정보 변경 저장
        </button>
      </form>
    </section>
  );
};
