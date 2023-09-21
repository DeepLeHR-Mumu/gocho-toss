import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiCheck, FiChevronRight, FiSmartphone } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { loginSuccessEvent, registerCompleteClickEvent, registerPhoneValidationClickEvent } from "@/ga";
import { getPass, getPassCheck, useManagerRegister, useDoLogin } from "@/apis";
import { useModal } from "@/globalStates";
import { INTERNAL_URL } from "@/constants";
import { commonCssObj } from "@/styles";

import { AuthPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";
import { isSpecObj } from "./util";

export const AuthPart: FunctionComponent<AuthPartProps> = () => {
  const router = useRouter();
  const { setModal } = useModal();
  const queryClient = useQueryClient();

  const [flag, setFlag] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const tokenVersionId = useRef<string | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { mutate: postManagersRegister, isLoading } = useManagerRegister();
  const { mutate: postLogin } = useDoLogin();

  useEffect(() => {
    const changeCallback = () => {
      if (document.visibilityState === "visible" && flag && tokenVersionId.current !== null) {
        getPassCheck(tokenVersionId.current)
          .then((res) => {
            setFlag(false);
            setPassState(res.data.data.is_exist);
          })
          .catch(() => {
            // 400 처리
            setPassState(false);
          });
      }
    };
    document.addEventListener("visibilitychange", changeCallback);

    return () => {
      document.removeEventListener("visibilitychange", changeCallback);
    };
  }, [flag]);

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    if (!isLoading) {
      registerCompleteClickEvent();

      const newFormData = {
        ...formData,
        token_version_id: tokenVersionId.current !== null ? tokenVersionId.current : undefined,
        manager_agreement: {
          terms: formData.manager_agreement.terms && 1,
          privacy: formData.manager_agreement.privacy && 1,
        },
      };

      const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
      const currentSpecObj = Object.assign(prevSpecObj, newFormData);
      sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));

      postManagersRegister(currentSpecObj, {
        onSuccess: () => {
          if (isSpecObj(currentSpecObj)) {
            const { email, password } = currentSpecObj;

            postLogin(
              { email, password, auto_login: false },
              {
                onSuccess: (response) => {
                  loginSuccessEvent(false);
                  localStorage.setItem("accessToken", response.data.access_token);
                  localStorage.setItem("refreshToken", response.data.refresh_token);
                  queryClient.invalidateQueries();

                  router.push(INTERNAL_URL.HOME);
                },

                onError: () => {
                  router.push(INTERNAL_URL.LOGIN);
                },
              }
            );
          } else {
            router.push(INTERNAL_URL.LOGIN);
          }
          sessionStorage.removeItem("specObj");
          tokenVersionId.current = null;
        },
        onError: (error) => {
          const errorResponse = error.response?.data as ErrorResponseDef;
          setErrorMessage(errorResponse.error_message);
        },
      });
    }
  };

  const handleIdentityCheck = async () => {
    const response = await getPass();

    if (response.data) {
      const { data } = response.data;
      const { token_version_id, enc_data, integrity_value } = data;

      tokenVersionId.current = token_version_id;

      const popUp = window.open("", "");
      if (popUp) {
        const form = popUp.document.createElement("form");
        form.setAttribute("action", "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb");

        const serviceInput = popUp.document.createElement("input");
        const tokenVersionIdInput = popUp.document.createElement("input");
        const encDataInput = popUp.document.createElement("input");
        const ivInput = popUp.document.createElement("input");

        form.appendChild(serviceInput);
        form.appendChild(tokenVersionIdInput);
        form.appendChild(encDataInput);
        form.appendChild(ivInput);
        popUp.document.body.appendChild(form);

        serviceInput.id = "m";
        serviceInput.name = "m";
        serviceInput.value = "service";
        serviceInput.type = "hidden";

        tokenVersionIdInput.id = "token_version_id";
        tokenVersionIdInput.name = "token_version_id";
        tokenVersionIdInput.value = token_version_id;
        tokenVersionIdInput.type = "hidden";

        encDataInput.id = "enc_data";
        encDataInput.name = "enc_data";
        encDataInput.value = enc_data;
        encDataInput.type = "hidden";

        ivInput.id = "integrity_value";
        ivInput.name = "integrity_value";
        ivInput.value = integrity_value;
        ivInput.type = "hidden";

        form.submit();
        setFlag(true);
      }
    }
  };

  const isDepartment = Boolean(watch("department"));
  const isPosition = Boolean(watch("position"));
  const isTerm = Boolean(watch("manager_agreement.terms") && watch("manager_agreement.privacy"));

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
      <div css={cssObj.formWrapper}>
        <div css={cssObj.authWrapper}>
          <button
            type="button"
            css={cssObj.authLink}
            onClick={() => {
              registerPhoneValidationClickEvent();
              if (!passState) handleIdentityCheck();
            }}
          >
            <span css={cssObj.icon}>
              <FiSmartphone />
            </span>
            휴대폰 인증 {passState ? <FiCheck /> : <FiChevronRight />}
          </button>
          <p css={cssObj.desc}>
            {passState
              ? "휴대폰 인증이 완료되었습니다."
              : "휴대폰 인증을 진행해 주세요. 본인 인증 시 제공되는 정보는 인증이외 용도로 이용 또는 저장되지 않습니다."}
          </p>
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>부서명</p>
          <input
            css={commonCssObj.input(25.5, Boolean(errors.department))}
            type="text"
            placeholder="담당자의 부서를 기입해 주세요"
            {...register("department")}
          />
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>직급</p>
          <input
            css={commonCssObj.input(25.5, Boolean(errors.position))}
            type="position"
            placeholder="담당자의 직급을 기입해 주세요"
            {...register("position")}
          />
        </div>
        <label css={cssObj.termBox} htmlFor="usageTerm">
          <input type="checkbox" id="usageTerm" {...register("manager_agreement.terms")} />
          <CheckBox isChecked={watch("manager_agreement.terms")} />
          [필수]
          <button
            type="button"
            css={cssObj.termLink}
            onClick={() => {
              setModal("usageTermModal");
            }}
          >
            이용약관 동의
          </button>
        </label>
        <label css={cssObj.termBox} htmlFor="privacy">
          <input type="checkbox" id="privacy" {...register("manager_agreement.privacy")} />
          <CheckBox isChecked={watch("manager_agreement.privacy")} />
          [필수]
          <button
            type="button"
            css={cssObj.termLink}
            onClick={() => {
              setModal("privacyTermModal");
            }}
          >
            개인정보 수집 및 이용 동의
          </button>
        </label>
        <p css={cssObj.errorMessage}>{errorMessage && errorMessage}</p>
      </div>
      <NewSharedButton
        buttonType={
          !passState ||
          !isDepartment ||
          !isPosition ||
          !isTerm ||
          isLoading ||
          errors.department?.message ||
          errors.position?.message
            ? "disabled"
            : "fillBlue"
        }
        width={25.5}
        text="가입하기"
        onClickHandler="submit"
        isLong
      />
    </form>
  );
};
