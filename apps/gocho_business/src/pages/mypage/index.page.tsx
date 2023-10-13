import { useRef, useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import { PWD_REGEXP } from "shared-constant";

import { SharedButton } from "shared-ui/common/sharedButton";
import { PageLayout } from "@/components";
import { mypageFunnelEvent } from "@/ga";
import { useEditUserPassword, useManagerProfile } from "@/apis";
import { useToast } from "@/globalStates";
import { commonCssObj } from "@/styles";
import { INTERNAL_URL } from "@/constants";

import { PageHead } from "./pageHead";
import { EDIT_PASSWORD_MESSAGE } from "./constants";
import { EditFormValues, PasswordShowObjDef } from "./type";
import { cssObj } from "./style";

const MyPage: NextPage = () => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [passwordShowObj, setPasswordShowObj] = useState<PasswordShowObjDef>({
    isOriginPassword: false,
    isNewPassword: false,
    isCheckPassword: false,
  });
  const isLoading = useRef(false);

  const { setToast } = useToast();
  const { data: userInfoData } = useManagerProfile();
  const { mutate: editUserPassword } = useEditUserPassword();

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
    editUserPassword(
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

  useEffect(() => {
    mypageFunnelEvent();
  }, []);

  return (
    <>
      <PageHead />
      <PageLayout>
        <form onSubmit={handleSubmit(editSubmit)}>
          <section css={commonCssObj.partContainer} data-testid="company/edit/editPart">
            <h2 css={commonCssObj.partTitle}>내 계정 관리</h2>
            <ul css={cssObj.userInfoContainer}>
              <li css={cssObj.infoWrapper}>
                <strong css={cssObj.infoTitle}>아이디</strong>
                <p css={cssObj.infoDesc}>{userInfoData?.email}</p>
              </li>
              <li css={cssObj.infoWrapper}>
                <strong css={cssObj.infoTitle}>이름</strong>
                <p css={cssObj.infoDesc}>{userInfoData?.name}</p>
              </li>
              <li css={cssObj.infoWrapper}>
                <strong css={cssObj.infoTitle}>부서</strong>
                <p css={cssObj.infoDesc}>{userInfoData?.department}</p>
              </li>
            </ul>
            <div css={cssObj.infoWrapper}>
              <strong css={cssObj.infoTitle}>비밀번호</strong>
              <SharedButton
                buttonType="outLineGray"
                text="비밀번호 변경"
                width={7}
                onClickHandler={() => setIsShowForm((prev) => !prev)}
              />
            </div>
            {isShowForm && (
              <ul>
                <li css={cssObj.inputWrapper}>
                  <strong css={cssObj.inputTitle}>기존 비밀번호</strong>
                  <label htmlFor="origin_password" css={cssObj.label}>
                    <input
                      css={commonCssObj.input(20, false)}
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
                  <p css={cssObj.errorDesc}>{errors.origin_password?.message}</p>
                </li>
                <li css={cssObj.inputWrapper}>
                  <strong css={cssObj.inputTitle}>새로운 비밀번호</strong>
                  <label htmlFor="new_password" css={cssObj.label}>
                    <input
                      css={commonCssObj.input(20, false)}
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
                  <p css={cssObj.errorDesc}>{errors.new_password?.message}</p>
                </li>
                <li css={cssObj.inputWrapper}>
                  <strong css={cssObj.inputTitle}>비밀번호 확인</strong>
                  <label htmlFor="check_password" css={cssObj.label}>
                    <input
                      css={commonCssObj.input(20, false)}
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
                  <p css={cssObj.errorDesc}>{errors.check_password?.message}</p>
                </li>
              </ul>
            )}
          </section>
          <p css={cssObj.desc}>
            · 내 계정 관리에서 변경이 불가능한 정보 수정 및 회원 탈퇴는
            <span>
              <Link href={INTERNAL_URL.HELP} css={cssObj.link}>
                고객센터
              </Link>
            </span>
            로 문의 부탁드립니다
          </p>
          <div css={cssObj.buttonWrapper}>
            <SharedButton
              buttonType={
                isOriginPassword && isNewPassword && isCheckPassword && Object.keys(errors).length === 0
                  ? "fillBlue"
                  : "disabled"
              }
              width={25}
              text="저장하기"
              onClickHandler="submit"
            />
          </div>
        </form>
      </PageLayout>
    </>
  );
};

export default MyPage;
