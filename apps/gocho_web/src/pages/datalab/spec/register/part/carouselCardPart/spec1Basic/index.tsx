import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "@api/auth";

import {
  SpecCardTitle,
  MoveCardButtons,
  SelectRadioForm,
  Desc,
  WarningText,
  CheckBox,
  ContainerBox,
} from "../common/component";
import { MultiSelectRadioForm } from "./component/multiSelectRadioForm";

import { genderArr, militaryArr, desiredTaskArr, desiredIndustryArr } from "./constant";
import { Spec1BasicProps, PostSubmitValues } from "./type";
import { specCardWrapper, formCSS } from "../common/style";
import { disabledWrapper, inputTextCSS, labelCSS, hide, desc, ageFormBox } from "./style";

export const Spec1Basic: FunctionComponent<Spec1BasicProps> = ({ moveNextCard }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { data: userInfoData, isSuccess } = useUserInfo();
  const secretWatch = watch("secret");

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    sessionStorage.setItem("specObj", JSON.stringify(formData));
    moveNextCard(15);
  };

  if (!isSuccess) {
    return <div css={specCardWrapper} />;
  }

  return (
    <div css={specCardWrapper}>
      <SpecCardTitle title={userInfoData.nickname} desc="간단하게 스펙 등록하고 평가를 받아보세요" />

      <form css={formCSS}>
        <ContainerBox optionObj={{ location: "bottom", marginValue: 1.7 }}>
          <div css={disabledWrapper}>
            <input css={inputTextCSS} defaultValue={userInfoData.nickname} readOnly />
            <label htmlFor="secret" css={labelCSS}>
              <input css={hide} type="checkbox" {...register("secret")} id="secret" />
              <CheckBox isChecked={secretWatch} />
              <p css={desc}>체크시 닉네임이 비공개됩니다</p>
            </label>
          </div>
        </ContainerBox>

        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 1.7,
          }}
        >
          <input
            css={ageFormBox}
            type="number"
            {...register("age", {
              required: "나이를 입력해주세요.",
              min: {
                value: 15,
                message: "최소 나이는 15세 이상입니다.",
              },
              max: {
                value: 99,
                message: "최대 나이는 99세 이상입니다.",
              },
            })}
            placeholder="나이를 숫자로만 적어주세요 예시: 32"
          />

          {errors.age?.message && <WarningText msg={errors.age.message} />}
        </ContainerBox>

        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 1.7,
          }}
        >
          <SelectRadioForm
            registerObj={register("gender", {
              required: "성별을 선택해주세요.",
            })}
            backgroundStyle="blue02"
            itemArr={genderArr}
          />
          {errors.gender?.message && <WarningText msg={errors.gender.message} />}
        </ContainerBox>

        <ContainerBox optionObj={{ location: "bottom", marginValue: 4 }}>
          <SelectRadioForm
            registerObj={register("military", {
              required: "병역사항을 선택해주세요.",
            })}
            itemArr={militaryArr}
          />
          {errors.military?.message && <WarningText msg={errors.military.message} />}
        </ContainerBox>

        <ContainerBox optionObj={{ location: "bottom", marginValue: 4, maxWidth: 52 }}>
          <Desc desc="희망하는 직무를 선택해주세요 (최대 3개)" />
          <MultiSelectRadioForm
            registerObj={register("desiredTask", {
              required: "하나 이상의 직무를 선택해주세요.",
            })}
            maxCount={3}
            itemArr={desiredTaskArr}
          />
          {errors.desiredTask?.message && <WarningText msg={errors.desiredTask.message} />}
        </ContainerBox>

        <Desc desc="희망하는 업종을 선택해주세요 (최대 3개)" />
        <MultiSelectRadioForm
          registerObj={register("desiredIndustry", {
            required: "하나 이상의 업종을 선택해주세요.",
          })}
          moreActive
          maxCount={3}
          itemArr={desiredIndustryArr}
        />
        {errors.desiredIndustry?.message && <WarningText msg={errors.desiredIndustry.message} />}
        <MoveCardButtons prev={false} postSubmit={handleSubmit(postSubmit)} />
      </form>
    </div>
  );
};
