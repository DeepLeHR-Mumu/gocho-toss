import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TopTitle, BottomButton, WarningDesc, MarginBox } from "@pages/datalab/spec/register/component";

import { specCardWrapper, formCSS } from "../style";

import { Spec2lastEducationProps, PostSubmitValues } from "./type";
import { container, title, imageBox } from "./style";

export const Spec2lastEducation: FunctionComponent<Spec2lastEducationProps> = ({
  movePrevCard,
  moveNextCard,
  setUserLastEdu,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const lastEdu = watch("lastEducation");

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, formData);
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(25);
  };

  return (
    <div css={specCardWrapper}>
      <TopTitle title="최종 학력이 어떻게 되시나요?" desc="대학교 재학중이거나 졸업예정이라면 대학교를 선택해주세요" />

      <form css={formCSS}>
        <MarginBox
          optionObj={{
            marginLocation: "bottom",
            marginValue: 3,
          }}
        >
          <ul css={container}>
            <li>
              <label htmlFor="highSchool">
                <strong css={title(lastEdu === "고졸")}>고등학교</strong>
                <div css={imageBox(lastEdu === "고졸", "고졸")} />
                <input
                  type="radio"
                  value="고졸"
                  id="highSchool"
                  {...register("lastEducation", {
                    required: "최종 학력을 선택해주세요.",
                  })}
                  onChange={(onChangeEvent) => {
                    register("lastEducation").onChange(onChangeEvent);
                    setUserLastEdu("고졸");
                  }}
                />
              </label>
            </li>
            <li>
              <label htmlFor="university">
                <strong css={title(lastEdu === "초대졸")}>대학교</strong>
                <div css={imageBox(lastEdu === "초대졸", "초대졸")} />
                <input
                  type="radio"
                  value="초대졸"
                  id="university"
                  {...register("lastEducation", {
                    required: "최종 학력을 선택해주세요.",
                  })}
                  onChange={(onChangeEvent) => {
                    register("lastEducation").onChange(onChangeEvent);
                    setUserLastEdu("초대졸");
                  }}
                />
              </label>
            </li>
          </ul>
          {errors.lastEducation?.message && <WarningDesc msg={errors.lastEducation.message} />}
        </MarginBox>
        <BottomButton postSubmit={handleSubmit(postSubmit)} movePrevCard={movePrevCard} />
      </form>
    </div>
  );
};
