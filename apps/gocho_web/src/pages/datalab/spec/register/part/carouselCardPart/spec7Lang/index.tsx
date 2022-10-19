import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { FiX } from "react-icons/fi";

import { SpecCardTitle, MoveCardButtons, TextInputForm, WarningText } from "../common/component";
import { SelectChipForm } from "./component/selectChipForm";

import { Spec7LangProps, PostSubmitValues } from "./type";
import { langArr, langTestArr } from "./constant";
import { specCardWrapper, formCSS } from "../common/style";
import { appendButton, errorBox, langContainer, removeButton, animationSlide, hideAllSelectBox } from "./style";

export const Spec7Lang: FunctionComponent<Spec7LangProps> = ({ moveNextCard, movePrevCard }) => {
  const [activeButtonDesc, setActiveButtonDesc] = useState<string | null>(null);
  const [isShowActive, setIsShowActive] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "language",
  });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const { language } = formData;

    const prevSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const currentSpecObj = Object.assign(prevSpecObj, { language });
    sessionStorage.setItem("specObj", JSON.stringify(currentSpecObj));
    moveNextCard(80);
  };

  return (
    <div css={animationSlide}>
      <div css={specCardWrapper}>
        <SpecCardTitle title="어학" desc="혹시.. 외국어 능력자…?" />

        <form css={formCSS}>
          <ul css={langContainer}>
            {fields.map((field, index) => {
              const languageWatch = watch(`language.${index}.language`);
              const testWatch = watch(`language.${index}.test`);

              return (
                <li key={field.id}>
                  <SelectChipForm
                    showActiveObj={{
                      active: activeButtonDesc,
                      setActive: setActiveButtonDesc,
                      setIsShowActive,
                    }}
                    value={languageWatch}
                    selectArr={langArr}
                    index={index}
                    desc="언어"
                    registerObj={register(`language.${index}.language`, {
                      required: "언어를 선택해주세요.",
                    })}
                  />

                  {watch(`language.${index}.language`) === "기타" ? (
                    <TextInputForm
                      placeholder="시험명을 작성해주세요."
                      registerObj={register(`language.${index}.test`, {
                        required: "시험명을 작성해주세요.",
                      })}
                    />
                  ) : (
                    <SelectChipForm
                      showActiveObj={{
                        active: activeButtonDesc,
                        setActive: setActiveButtonDesc,
                        setIsShowActive,
                      }}
                      value={testWatch}
                      selectArr={languageWatch ? langTestArr[languageWatch] : []}
                      desc="시험명"
                      index={index}
                      registerObj={register(`language.${index}.test`, {
                        required: "시험명을 선택해주세요.",
                      })}
                    />
                  )}

                  <TextInputForm
                    placeholder="예시 점수/등급"
                    registerObj={register(`language.${index}.score`, {
                      required: "점수를 작성해주세요.",
                    })}
                  />

                  <button
                    css={removeButton}
                    type="button"
                    onClick={() => {
                      return remove(index);
                    }}
                    aria-label="어학 추가 제거"
                  >
                    <FiX />
                  </button>

                  <div css={errorBox}>
                    {errors.language?.[index]?.language?.message && (
                      <WarningText msg={errors.language?.[index]?.language?.message} />
                    )}
                    {errors.language?.[index]?.test?.message && (
                      <WarningText msg={errors.language?.[index]?.test?.message} />
                    )}
                    {errors.language?.[index]?.score?.message && (
                      <WarningText msg={errors.language?.[index]?.score?.message} />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {isShowActive && (
            <button
              onClick={() => {
                setActiveButtonDesc(null);
                setIsShowActive(false);
              }}
              css={hideAllSelectBox}
              type="button"
              aria-label="활성화된 선택창 닫기"
            />
          )}

          <button
            type="button"
            css={appendButton}
            onClick={() => {
              return append({
                language: undefined,
                test: undefined,
                score: undefined,
              });
            }}
          >
            어학 추가하기
          </button>

          <MoveCardButtons movePrevCard={movePrevCard} postSubmit={handleSubmit(postSubmit)} />
        </form>
      </div>
    </div>
  );
};
