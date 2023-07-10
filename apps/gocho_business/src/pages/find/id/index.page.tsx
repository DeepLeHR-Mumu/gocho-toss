import { useState } from "react";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowLeft, FiX } from "react-icons/fi";
import Link from "next/link";
import { router } from "next/client";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { useSendAuthNumber, useCheckAuthNumber, useFindEmail } from "@/apis";
import { AuthNav } from "@/components/global/authNav";
import { commonCssObj } from "@/styles";
import { INTERNAL_URL } from "@/constants";

import { FindEmailFormValues } from "./type";
import { cssObj } from "./style";

const FindEmail: NextPage = () => {
  const [didfoundEmail, setDidFoundEmail] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const { mutate: postSendAuthNumber } = useSendAuthNumber();
  const { mutate: postCheckAuthNumber } = useCheckAuthNumber();
  const { mutate: postFindEmail } = useFindEmail();
  const {
    register,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FindEmailFormValues>({ mode: "onChange" });

  const sendAuthNumberHandler = (phoneNumber: string) => {
    postSendAuthNumber(
      { phone_number: phoneNumber },
      {
        onSuccess: () => {
          window.alert("인증번호가 발송되었습니다.");
        },
      }
    );
  };

  const findEmailHandler: SubmitHandler<FindEmailFormValues> = (findEmailObj) => {
    postCheckAuthNumber(
      { phone_number: findEmailObj.phone_number, auth_number: findEmailObj.auth_number },
      {
        onError: (error) => {
          const errorResponse = error.response?.data;
          if (errorResponse?.error_code === "NOT_MATCHED_SMS") {
            setError("auth_number", { type: "custom", message: "인증번호가 다릅니다." });
          }
          if (errorResponse?.error_code === "EXCEED_TIME_SMS") {
            setError("auth_number", {
              type: "custom",
              message: "인증번호 유효기간이 초과되었습니다. 새로운 번호를 발급받아주세요.",
            });
          }
        },
        onSuccess: () => {
          postFindEmail(
            { name: findEmailObj.name, phone_number: findEmailObj.phone_number },
            {
              onSuccess: (response) => {
                setDidFoundEmail(true);
                setEmail(response.data.email);
              },
            }
          );
        },
      }
    );
  };

  const isName = Boolean(watch("name"));
  const isPhoneNumber = Boolean(watch("phone_number"));

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.backIcon}>
            <FiArrowLeft />
          </Link>
          <p css={cssObj.title}>아이디 찾기</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        {didfoundEmail ? (
          <div>
            {email ? (
              <div css={cssObj.resultContainer}>
                회원님의 가입 당시 이메일(아이디)은
                <br />
                <p css={cssObj.result}>{email} 입니다</p>
              </div>
            ) : (
              <p css={cssObj.resultContainer}>입력하신 정보와 일치하는 아이디가 존재하지 않습니다.</p>
            )}
            <div css={cssObj.buttonContainer}>
              {email ? (
                <>
                  <NewSharedButton
                    buttonType="outLineGray"
                    width={12}
                    text="비밀번호 찾기"
                    isLong
                    onClickHandler={() => {
                      router.push(INTERNAL_URL.FIND_PASSWORD);
                    }}
                  />
                  <NewSharedButton
                    buttonType="fillBlue"
                    width={12}
                    text="로그인 하기"
                    isLong
                    onClickHandler={() => {
                      router.push(INTERNAL_URL.LOGIN);
                    }}
                  />
                </>
              ) : (
                <NewSharedButton
                  buttonType="fillBlue"
                  width={25.5}
                  text="회원가입 하기"
                  isLong
                  onClickHandler={() => {
                    router.push(INTERNAL_URL.SIGNUP);
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(findEmailHandler)}>
            <div css={cssObj.formWrapper}>
              <div css={cssObj.inputWrapper}>
                <p css={cssObj.inputTitle}>담당자 명(이름)</p>
                <input
                  placeholder="이름을 입력해 주세요"
                  css={commonCssObj.input(25.5, Boolean(errors.name))}
                  {...register("name", {
                    required: "이름을 입력해 주세요",
                  })}
                  onFocus={() => {
                    if (errors.name?.message === "asdf") {
                      clearErrors("name");
                      clearErrors("phone_number");
                    }
                    clearErrors("name");
                  }}
                />
              </div>
              <div css={cssObj.inputWrapper}>
                <p css={cssObj.inputTitle}>휴대폰 번호</p>
                <div css={cssObj.inputBox}>
                  <input
                    placeholder="숫자만 입력해 주세요"
                    css={commonCssObj.input(19.75, Boolean(errors.phone_number))}
                    {...register("phone_number", {
                      required: "전화번호를 입력해 주세요",
                    })}
                    onFocus={() => {
                      if (errors.phone_number?.message === "asdf") {
                        clearErrors("name");
                        clearErrors("phone_number");
                      }
                      clearErrors("phone_number");
                    }}
                  />
                  <NewSharedButton
                    buttonType={isPhoneNumber ? "fillBlue" : "disabled"}
                    width={5}
                    text="인증요청"
                    onClickHandler={() => {
                      sendAuthNumberHandler(watch("phone_number"));
                    }}
                  />
                </div>
              </div>
              <input
                placeholder="인증번호를 입력해 주세요"
                css={commonCssObj.input(25.5, Boolean(errors.auth_number))}
                {...register("auth_number", {
                  required: "인증번호를 입력해 주세요",
                })}
              />
              <p css={cssObj.errorMsg}>{errors.name?.message || errors.phone_number?.message}</p>
            </div>
            <NewSharedButton
              buttonType={
                !isName || !isPhoneNumber || errors.name?.message || errors.phone_number?.message
                  ? "disabled"
                  : "fillBlue"
              }
              width={25.5}
              text="다음"
              onClickHandler="submit"
              isLong
            />
          </form>
        )}
      </section>
    </main>
  );
};

export default FindEmail;
