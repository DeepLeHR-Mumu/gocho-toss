import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiChevronRight, FiSmartphone } from "react-icons/fi";
import axios from "axios";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { CheckBox } from "shared-ui/common/atom/checkbox";

import { useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";

import { AuthPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const AuthPart: FunctionComponent<AuthPartProps> = () => {
  const { setModal } = useModal();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const newFormData = {
      ...formData,
      manager_agreement: {
        terms: formData.manager_agreement.terms && 1,
        privacy: formData.manager_agreement.privacy && 1,
      },
    };
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, newFormData);
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
  };

  const handleIdentityCheck = async () => {
    const serverHost = process.env.NEXT_PUBLIC_SERVER_HOST;
    const returnUrl = `http://localhost:3000/signup/success`;
    const redirectUrl = `http://localhost:3000/signup/fail`;

    const response = await axios.get(`${serverHost}/nice/encrypt/data`, {
      params: { returnUrl, redirectUrl },
      withCredentials: true,
    });

    const encodeData = response.data;
    const form = document.forms.namedItem("form_chk") as HTMLFormElement;
    form.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
    form.EncodeData.value = encodeData;
    form.submit();
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
              handleIdentityCheck();
            }}
          >
            <span css={cssObj.icon}>
              <FiSmartphone />
            </span>
            휴대폰 인증 <FiChevronRight />
          </button>
          <p css={cssObj.desc}>
            휴대폰 인증을 진행해 주세요. 본인 인증 시 제공되는 정보는 인증이외 용도로 이용 또는 저장되지 않습니다.
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
      </div>
      <NewSharedButton
        buttonType={
          !isDepartment || !isPosition || !isTerm || errors.department?.message || errors.position?.message
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
