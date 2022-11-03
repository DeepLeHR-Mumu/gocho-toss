import { FunctionComponent, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "shared-api/auth";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { specRegisterStepEvent } from "shared-ga/spec";

import {
  TopTitle,
  RadioForm,
  Desc,
  WarningDesc,
  MarginBox,
  CheckboxForm,
  BottomButton,
} from "@pages/datalab/spec/register/component";

import { specCardWrapper, formCSS } from "../style";

import { genderArr, militaryArr, desiredTaskArr, desiredIndustryArr } from "./constant";
import { Spec1BasicProps, PostSubmitValues } from "./type";
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

  const { data: userInfoData } = useUserInfo();
  const watchSecret = watch("secret");

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    sessionStorage.setItem("specObj", JSON.stringify(formData));
    moveNextCard(15);
  };

  useEffect(() => {
    specRegisterStepEvent(1);
  }, []);

  return (
    <div css={specCardWrapper}>
      <TopTitle title={userInfoData?.nickname} desc="간단하게 스펙 등록하고 평가를 받아보세요" />

      <form css={formCSS}>
        <MarginBox optionObj={{ marginLocation: "bottom", marginValue: 1.7 }}>
          <div css={disabledWrapper}>
            <input css={inputTextCSS} defaultValue={userInfoData?.nickname} readOnly />
            <label htmlFor="secret" css={labelCSS}>
              <input css={hide} type="checkbox" {...register("secret")} id="secret" />
              <CheckBox isChecked={watchSecret} />
              <p css={desc}>체크시 닉네임이 비공개됩니다</p>
            </label>
          </div>
        </MarginBox>

        <MarginBox
          optionObj={{
            marginLocation: "bottom",
            marginValue: 1.7,
          }}
        >
          <input
            css={ageFormBox}
            type="number"
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            {...register("age", {
              required: "나이를 입력해주세요.",
              min: {
                value: 15,
                message: "최소 나이는 15세 이상입니다.",
              },
              max: {
                value: 99,
                message: "최대 나이는 99세 입니다.",
              },
            })}
            placeholder="나이를 숫자로만 적어주세요 예시: 32"
          />

          {errors.age?.message && <WarningDesc msg={errors.age.message} />}
        </MarginBox>

        <MarginBox
          optionObj={{
            marginLocation: "bottom",
            marginValue: 1.7,
          }}
        >
          <RadioForm
            registerObj={register("gender", {
              required: "성별을 선택해주세요.",
            })}
            backgroundStyle="blue02"
            itemArr={genderArr}
          />
          {errors.gender?.message && <WarningDesc msg={errors.gender.message} />}
        </MarginBox>

        <MarginBox optionObj={{ marginLocation: "bottom", marginValue: 4 }}>
          <RadioForm
            registerObj={register("military", {
              required: "병역사항을 선택해주세요.",
            })}
            itemArr={militaryArr}
          />
          {errors.military?.message && <WarningDesc msg={errors.military.message} />}
        </MarginBox>

        <MarginBox optionObj={{ marginLocation: "bottom", marginValue: 4, maxWidth: 52 }}>
          <Desc desc="희망하는 직무를 선택해주세요 (최대 3개)" />
          <CheckboxForm
            registerObj={register("desiredTask", {
              required: "하나 이상의 직무를 선택해주세요.",
            })}
            maxCount={3}
            itemArr={desiredTaskArr}
          />
          {errors.desiredTask?.message && <WarningDesc msg={errors.desiredTask.message} />}
        </MarginBox>

        <Desc desc="희망하는 업종을 선택해주세요 (최대 3개)" />
        <CheckboxForm
          registerObj={register("desiredIndustry", {
            required: "하나 이상의 업종을 선택해주세요.",
          })}
          backgroundStyle="blue02"
          moreActive
          maxCount={3}
          itemArr={desiredIndustryArr}
        />
        {errors.desiredIndustry?.message && <WarningDesc msg={errors.desiredIndustry.message} />}
        <BottomButton prev={false} postSubmit={handleSubmit(postSubmit)} />
      </form>
    </div>
  );
};
