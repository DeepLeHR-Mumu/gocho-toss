import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { commonCssObj } from "@/styles";

import { AuthPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const AuthPart: FunctionComponent<AuthPartProps> = ({ sliderRef }) => {
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

  const isDepartment = Boolean(watch("department"));
  const isPosition = Boolean(watch("position"));

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
      <div css={cssObj.formWrapper}>
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
      </div>
      <NewSharedButton
        buttonType={
          !isDepartment || !isPosition || errors.department?.message || errors.position?.message
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
