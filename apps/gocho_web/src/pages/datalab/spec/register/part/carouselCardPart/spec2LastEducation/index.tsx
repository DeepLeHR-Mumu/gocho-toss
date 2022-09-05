import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useSpecRegisterObj, useLastEdu } from "@recoil/hook/spec";

import { SpecCardTitle, MoveCardButtons, WarningText, ContainerBox } from "../common/component";

import { Spec2lastEducationProps, PostSubmitValues } from "./type";
import { specCardWrapper, formCSS } from "../common/style";
import { container, title, imageBox } from "./style";

export const Spec2lastEducation: FunctionComponent<Spec2lastEducationProps> = ({ movePrevCard, moveNextCard }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { setCurrentSpecObj } = useSpecRegisterObj();
  const { currentLastEdu, setCurrentLastEdu } = useLastEdu();

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    setCurrentSpecObj(formData);
    moveNextCard(25);
  };

  return (
    <div css={specCardWrapper}>
      <SpecCardTitle
        title="최종 학력이 어떻게 되시나요?"
        desc="대학교 재학중이거나 졸업예정이라면 대학교를 선택해주세요"
      />

      <form css={formCSS}>
        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 3,
          }}
        >
          <ul css={container}>
            <li>
              <h3 css={title(currentLastEdu === "고졸")}>고등학교</h3>
              <label htmlFor="highSchool">
                <div css={imageBox(currentLastEdu === "고졸", "고졸")} />
                <input
                  type="radio"
                  value="고졸"
                  id="highSchool"
                  {...register("lastEducation", {
                    required: "최종 학력을 선택해주세요.",
                  })}
                  onChange={(onChangeEvent) => {
                    register("lastEducation").onChange(onChangeEvent);
                    setCurrentLastEdu("고졸");
                  }}
                />
              </label>
            </li>
            <li>
              <h3 css={title(currentLastEdu === "초대졸")}>대학교</h3>
              <label htmlFor="university">
                <div css={imageBox(currentLastEdu === "초대졸", "초대졸")} />
                <input
                  type="radio"
                  value="초대졸"
                  id="university"
                  {...register("lastEducation", {
                    required: "최종 학력을 선택해주세요.",
                  })}
                  onChange={(onChangeEvent) => {
                    register("lastEducation").onChange(onChangeEvent);
                    setCurrentLastEdu("초대졸");
                  }}
                />
              </label>
            </li>
          </ul>
          {errors.lastEducation?.message && <WarningText msg={errors.lastEducation.message} />}
        </ContainerBox>
        <MoveCardButtons postSubmit={handleSubmit(postSubmit)} movePrevCard={movePrevCard} />
      </form>
    </div>
  );
};
