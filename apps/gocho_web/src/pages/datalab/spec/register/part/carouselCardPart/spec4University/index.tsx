import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { NUMBER_REGEXP } from "shared-constant/regExp";
import {
  SpecCardTitle,
  MoveCardButtons,
  SelectRadioForm,
  Desc,
  NumberInputForm,
  TextInputForm,
  Toggle,
  WarningText,
  ContainerBox,
} from "../common/component";
import { GradeInputForm } from "./component/gradeInputForm";

import { highschoolType } from "./constant";
import { Spec4UniversityProps, PostSubmitValues } from "./type";
import { specCardWrapper, formCSS } from "../common/style";
import { flex, arrContainer } from "./style";

export const Spec4University: FunctionComponent<Spec4UniversityProps> = ({ moveNextCard, movePrevCard }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const uturnWatch = watch("college.uturn");
  const maxGradeWatch = watch("college.maxGrade");
  const gradeWatch = watch("college.grade");

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const { department, uturn, grade, maxGrade } = formData.college;

    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, {
      ...formData,
      college: {
        department,
        uturn,
        grade: Number(grade).toFixed(2),
        maxGrade: Number(maxGrade),
      },
    });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(40);
  };

  return (
    <div css={specCardWrapper}>
      <SpecCardTitle title="고등학교 학력정보" desc="정확하게 입력할 수록 스펙평가의 적중도는 올라갑니다." />

      <form css={formCSS}>
        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 3.5,
            maxWidth: 40,
          }}
        >
          <SelectRadioForm
            registerObj={register("highschool.type", {
              required: "고등학교 정보를 선택해주세요.",
            })}
            backgroundStyle="blue02"
            itemArr={highschoolType}
          />
          {errors.highschool?.type && <WarningText msg="고등학교 정보를 선택해주세요." />}
        </ContainerBox>

        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 4,
            maxWidth: 58,
          }}
        >
          <Desc desc="출결사항도 중요하죠!" />
          <ul css={arrContainer}>
            <li>
              <NumberInputForm
                registerObj={register("highschool.absent", {
                  min: {
                    value: 0,
                    message: "최소 일수는 0입니다.",
                  },
                  pattern: {
                    value: NUMBER_REGEXP,
                    message: "숫자만 기입할 수 있습니다.",
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
                  pattern: {
                    value: NUMBER_REGEXP,
                    message: "숫자만 기입할 수 있습니다.",
                  },
                  required: "무단지각 일수를 입력해주세요.",
                })}
                placeholder="?"
                id="tardy"
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
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  pattern: {
                    value: NUMBER_REGEXP,
                    message: "숫자만 기입할 수 있습니다.",
                  },
                  required: "무단 조퇴 일수를 입력해주세요.",
                })}
                placeholder="?"
                id="leaveEarly"
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
                  max: {
                    value: 365,
                    message: "최대 일수는 365입니다.",
                  },
                  pattern: {
                    value: NUMBER_REGEXP,
                    message: "숫자만 기입할 수 있습니다.",
                  },
                  required: "무단결과 일수를 입력해주세요.",
                })}
                placeholder="?"
                id="classMiss"
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

        <ContainerBox
          optionObj={{
            location: "bottom",
            marginValue: 2,
            maxWidth: 23.25,
          }}
        >
          <Desc desc="내신등급도 알려주시겠어요?" />
          <NumberInputForm
            registerObj={register("highschool.naesin", {
              required: "등급을 작성해주세요.",
              min: {
                value: 1,
                message: "최소 등급은 1입니다.",
              },
              max: {
                value: 9,
                message: "최대 등급은 9입니다.",
              },
            })}
            id="naesin"
            firstDesc="내신:"
            lastDesc="등급"
            placeholder="?"
          />
          {errors.highschool?.naesin?.message && <WarningText msg={errors.highschool.naesin.message} />}
        </ContainerBox>

        <ContainerBox
          optionObj={{
            location: "top",
            marginValue: 4.5,
            maxWidth: 35,
          }}
        >
          <SpecCardTitle title="대학교 학력정보" />
          <div css={flex}>
            <TextInputForm
              registerObj={register("college.department", {
                required: "전공계열을 작성해주세요.",
              })}
              minWidth={20}
              activeBorderStyle="blue"
              placeholder="전공계열은 무엇이었나요?"
            />
            <GradeInputForm
              selectArr={[4.3, 4.5]}
              gradeValue={gradeWatch}
              maxGradeValue={maxGradeWatch}
              gradeObj={register("college.grade", {
                min: {
                  value: 1,
                  message: "최소학점은 1입니다.",
                },
                max: {
                  value: maxGradeWatch,
                  message: `최대 학점은 ${maxGradeWatch}입니다.`,
                },
                required: "학점을 입력해주세요.",
              })}
              maxGradeObj={register("college.maxGrade", {
                required: "학점 최대점수를 입력해주세요.",
              })}
            />
          </div>
          {errors.college?.department?.message && <WarningText msg={errors.college?.department?.message} />}
          {errors.college?.grade?.message && <WarningText msg={errors.college?.grade?.message} />}
          {errors.college?.maxGrade?.message && <WarningText msg={errors.college?.maxGrade?.message} />}
        </ContainerBox>

        <ContainerBox
          optionObj={{
            location: "top",
            marginValue: 3.5,
          }}
        >
          <Desc desc="잠깐, 혹시 U - 턴 하셨나요?" />
          <Toggle registerObj={register("college.uturn")} value={uturnWatch} id="uTurn" yesDesc="네" noDesc="아니오" />
        </ContainerBox>

        <MoveCardButtons movePrevCard={movePrevCard} postSubmit={handleSubmit(postSubmit)} />
      </form>
    </div>
  );
};
