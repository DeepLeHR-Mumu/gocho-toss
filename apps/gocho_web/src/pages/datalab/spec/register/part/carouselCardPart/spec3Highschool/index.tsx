import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  TopTitle,
  BottomButton,
  RadioForm,
  Desc,
  NumberInputForm,
  WarningDesc,
} from "@pages/datalab/spec/register/component";

import { specCardWrapper, formCSS } from "../style";

import { Spec3HighschoolProps, PostSubmitValues } from "./type";
import { highSchoolTypeArr } from "./constant";
import { arrContainer, classInfoBox, naesinBox, typeBox } from "./style";

export const Spec3Highschool: FunctionComponent<Spec3HighschoolProps> = ({ movePrevCard, moveNextCard }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const movePrevSlider = () => {
    movePrevCard("2");
  };

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, { ...formData, college: null });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard("4");
  };

  return (
    <div css={specCardWrapper}>
      <TopTitle title="고등학교 학력정보" desc="정확하게 입력할 수록 스펙평가의 적중도는 올라갑니다." />

      <form css={formCSS}>
        <div css={typeBox}>
          <RadioForm
            registerObj={register("highschool.type", {
              required: "고등학교 정보를 선택해주세요.",
            })}
            backgroundStyle="blue02"
            itemArr={highSchoolTypeArr}
          />
          {errors.highschool?.type && <WarningDesc msg="고등학교 정보를 선택해주세요." />}
        </div>

        <div css={classInfoBox}>
          <Desc desc="출결사항도 중요하죠!" />
          <ul css={arrContainer}>
            <li>
              <NumberInputForm
                registerObj={register("highschool.absent", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  required: "무단결석 일수를 입력해주세요.",
                })}
                id="absent"
                placeholder="?"
                firstDesc="#무단 결석:"
                lastDesc="/일"
              />
              {errors.highschool?.absent?.message && <WarningDesc msg={errors.highschool.absent.message} />}
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.tardy", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  required: "무단지각 일수를 입력해주세요.",
                })}
                id="tardy"
                placeholder="?"
                firstDesc="#무단 지각:"
                lastDesc="/일"
              />
              {errors.highschool?.tardy?.message && <WarningDesc msg={errors.highschool.tardy.message} />}
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.leaveEarly", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  required: "무단 조퇴 일수를 입력해주세요.",
                })}
                id="leaveEarly"
                placeholder="?"
                firstDesc="#무단 조퇴:"
                lastDesc="/일"
              />
              {errors.highschool?.leaveEarly?.message && <WarningDesc msg={errors.highschool.leaveEarly.message} />}
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.classMiss", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  required: "무단결과 일수를 입력해주세요.",
                })}
                placeholder="?"
                id="classMiss"
                firstDesc="#무단 결과:"
                lastDesc="/일"
              />
              {errors.highschool?.classMiss?.message && <WarningDesc msg={errors.highschool.classMiss.message} />}
            </li>
          </ul>
        </div>

        <div css={naesinBox}>
          <Desc desc="내신등급도 알려주시겠어요?" />
          <NumberInputForm
            registerObj={register("highschool.naesin", {
              min: {
                value: 1,
                message: "최소 등급은 1입니다.",
              },
              max: {
                value: 9,
                message: "최대 등급은 9입니다.",
              },
              required: "등급을 작성해주세요.",
            })}
            id="naesin"
            firstDesc="내신:"
            lastDesc="등급"
            placeholder="?"
          />
          {errors.highschool?.naesin?.message && <WarningDesc msg={errors.highschool.naesin.message} />}
        </div>

        <BottomButton postSubmit={handleSubmit(postSubmit)} movePrevCard={movePrevSlider} />
      </form>
    </div>
  );
};
