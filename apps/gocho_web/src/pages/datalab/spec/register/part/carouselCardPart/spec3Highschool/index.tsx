import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SpecCardTitle,
  MoveCardButtons,
  SelectRadioForm,
  Desc,
  NumberInputForm,
  WarningText,
  ContainerBox,
} from "../common/component";

import { Spec3HighschoolProps, PostSubmitValues } from "./type";
import { highSchoolTypeArr } from "./constant";
import { specCardWrapper, formCSS } from "../common/style";
import { arrContainer } from "./style";

export const Spec3Highschool: FunctionComponent<Spec3HighschoolProps> = ({ movePrevCard, moveNextCard }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, { ...formData, college: null });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(35);
  };

  return (
    <div css={specCardWrapper}>
      <SpecCardTitle title="고등학교 학력정보" desc="정확하게 입력할 수록 스펙평가의 적중도는 올라갑니다." />

      <form css={formCSS}>
        <ContainerBox optionObj={{ location: "bottom", marginValue: 3.5, maxWidth: 40 }}>
          <SelectRadioForm
            registerObj={register("highschool.type", {
              required: "고등학교 정보를 선택해주세요.",
            })}
            backgroundStyle="blue02"
            itemArr={highSchoolTypeArr}
          />
          {errors.highschool?.type && <WarningText msg={errors.highschool.type} />}
        </ContainerBox>

        <ContainerBox optionObj={{ location: "bottom", marginValue: 4, maxWidth: 58 }}>
          <Desc desc="출결사항도 중요하죠!" />
          <ul css={arrContainer}>
            <li>
              <NumberInputForm
                registerObj={register("highschool.absent", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  required: "무단결석 일수를 입력해주세요.",
                })}
                placeholder="0"
                id="absent"
                firstDesc="#무단 결석:"
                lastDesc="/일"
              />
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.tardy", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  required: "무단지각 일수를 입력해주세요.",
                })}
                id="tardy"
                placeholder="0"
                firstDesc="#무단 지각:"
                lastDesc="/일"
              />
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.leaveEarly", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  required: "무단 조퇴 일수를 입력해주세요.",
                })}
                id="leaveEarly"
                placeholder="0"
                firstDesc="#무단 조퇴:"
                lastDesc="/일"
              />
            </li>
            <li>
              <NumberInputForm
                registerObj={register("highschool.classMiss", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  required: "무단결과 일수를 입력해주세요.",
                })}
                id="classMiss"
                placeholder="0"
                firstDesc="#무단 결과:"
                lastDesc="/일"
              />
            </li>
          </ul>
          {errors.highschool?.absent?.message && <WarningText msg={errors.highschool.absent.message} />}
          {errors.highschool?.tardy?.message && <WarningText msg={errors.highschool.tardy.message} />}
          {errors.highschool?.leaveEarly?.message && <WarningText msg={errors.highschool.leaveEarly.message} />}
          {errors.highschool?.classMiss?.message && <WarningText msg={errors.highschool.classMiss.message} />}
        </ContainerBox>

        <ContainerBox optionObj={{ location: "bottom", marginValue: 2, maxWidth: 23.75 }}>
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
            placeholder="입력칸"
          />
          {errors.highschool?.naesin?.message && <WarningText msg={errors.highschool.naesin.message} />}
        </ContainerBox>

        <MoveCardButtons postSubmit={handleSubmit(postSubmit)} movePrevCard={movePrevCard} />
      </form>
    </div>
  );
};
