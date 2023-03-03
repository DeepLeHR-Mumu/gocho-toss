import { FunctionComponent, useState, useRef } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { EMAIL_REGEXP, EMAIL_ERROR_MESSAGE } from "shared-constant";
import { NormalButton } from "shared-ui/common/atom/button";
import { useFocusTrap } from "shared-hooks/useFocusTrap";

import { FiCheckCircle, FiX } from "react-icons/fi";
import { useFindPassword } from "@/apis/auth/usefindPassword";
import { CommonCloseButton } from "@/components/common/commonCloseButton";
import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";

import { ModalComponent } from "../modalBackground";

import { FindEmailFormValues } from "./type";
import { cssObj } from "./style";

export const FindPasswordBox: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isSubmit = useRef(true);

  const [isFocus, setIsFocus] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FindEmailFormValues>({
    mode: "onChange",
  });

  const { setToast } = useToast();
  const { mutate: postFindPassword } = useFindPassword();
  const { closeModal } = useModal();

  useFocusTrap(modalRef);
  const findEmailSubmit: SubmitHandler<FindEmailFormValues> = (loginObj) => {
    if (isSubmit.current) {
      isSubmit.current = false;
      postFindPassword(loginObj, {
        onError: (error) => {
          if (error.response?.status === 404 && error.response?.data.error_code === "BLANK_MEMBER")
            return setError("email", { type: "custom", message: "가입되지 않은 이메일 입니다." });

          return null;
        },
        onSuccess: () => {
          setToast("메일이 전송됐습니다. 이메일을 확인해주세요.");
        },
        onSettled: () => {
          isSubmit.current = true;
        },
      });
    }
  };

  const closeFindPasswordModal = () => {
    closeModal();
  };

  const emailCSSObj = {
    isError: Boolean(errors.email),
    isFocus,
    isSuccess: Boolean(watch("email")) && Boolean(!errors.email),
  };

  return (
    <div css={cssObj.wrapper} ref={modalRef} tabIndex={-1}>
      <div css={cssObj.closeBtn}>
        <CommonCloseButton size="S" buttonClick={closeFindPasswordModal} />
      </div>
      <div css={cssObj.logoContainer}>
        <Image src={smallMono} alt="고초대졸닷컴" />
      </div>
      <p css={cssObj.desc}>가입한 이메일에서 비밀번호를 확인하세요</p>
      <form css={cssObj.formCSS} onSubmit={handleSubmit(findEmailSubmit)}>
        <ul css={cssObj.formArr}>
          <li>
            <p css={cssObj.label(emailCSSObj)}>이메일</p>
            <input
              css={cssObj.input(emailCSSObj)}
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email", {
                required: EMAIL_ERROR_MESSAGE.REQUIRED,
                pattern: {
                  value: EMAIL_REGEXP,
                  message: EMAIL_ERROR_MESSAGE.REGEX,
                },
                maxLength: {
                  value: 30,
                  message: EMAIL_ERROR_MESSAGE.LOGIN_MIN_MAX,
                },
                onBlur: () => {
                  setIsFocus(false);
                },
              })}
              onFocus={() => {
                clearErrors("email");
                setIsFocus(true);
              }}
            />
            {errors.email && (
              <button
                css={cssObj.deleteButton}
                type="button"
                aria-label="이메일 제거"
                onClick={() => {
                  setValue("email", "");
                  clearErrors("email");
                }}
              >
                <FiX />
              </button>
            )}
            {watch("email") && !errors.email && (
              <p css={cssObj.successIconBox}>
                <FiCheckCircle />
              </p>
            )}
          </li>
        </ul>

        <div css={cssObj.errorBox}>
          <p css={cssObj.errorMsgCSS}>{errors.email?.message}</p>
        </div>

        <div css={cssObj.loginButton}>
          <NormalButton wide variant="filled" text="비밀번호 찾기" isSubmit />
        </div>
      </form>
    </div>
  );
};

export const FindPasswordModal: FunctionComponent = () => (
  <ModalComponent>
    <FindPasswordBox />
  </ModalComponent>
);
