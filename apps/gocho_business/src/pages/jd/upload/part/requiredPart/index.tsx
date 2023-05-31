import { FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { DeleteInputButton, GuideChip, AddFieldButton } from "../../component";
import { focusedArrOnBlurHandler, focusedArrOnFocusHandler } from "../util";
import { RequiredPartProps } from "./type";
import { REQUIRED_ETC_GUIDE_ARR, CERTI_ARR, PREFERRED_ETC_GUIDE_ARR } from "./constant";
import { cssObj } from "./style";

export const RequiredPart: FunctionComponent<RequiredPartProps> = ({ jobForm, control }) => {
  const [requiredEtcIsFocusedArr, setRequiredEtcIsFocusedArr] = useState<boolean[]>([false]);

  const [randomRequiredEtcGuideArr, setRandomRequiredEtcGuideArr] = useState<string[]>([]);
  const [preferredEtcIsFocusedArr, setPreferredEtcIsFocusedArr] = useState<boolean[]>([false]);
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isCertiSearchFocused, setIsCertiSearchFocused] = useState<boolean>(false);
  const [randomPreferredEtcGuideArr, setRandomPreferredEtcGuideArr] = useState<string[]>([]);

  const { watch, setValue, clearErrors, trigger, formState, register } = jobForm;

  const requiredEtcArr = useFieldArray({
    control,
    name: `required_etc_arr`,
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: `preferred_etc_arr`,
  });

  const certiClickHandler = (certi: string) => {
    const totalNumber = watch("preferred_certi_arr")?.length || 0;
    const isInList = watch("preferred_certi_arr")?.includes(certi);

    if (totalNumber < 10) {
      if (isInList) {
        setValue(`preferred_certi_arr`, [
          ...(watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
        ]);
      } else {
        setValue(`preferred_certi_arr`, [...(watch("preferred_certi_arr") || []), certi]);
      }
    }
  };

  useEffect(() => {
    setRandomRequiredEtcGuideArr(REQUIRED_ETC_GUIDE_ARR.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  useEffect(() => {
    setRandomPreferredEtcGuideArr(PREFERRED_ETC_GUIDE_ARR.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  return (
    <div css={cssObj.partContainer}>
      <div css={cssObj.container}>
        <p>지원 가능 학력</p>
        <div css={cssObj.labelContainer}>
          <label css={cssObj.label} htmlFor="middle">
            <input type="checkbox" id="middle" {...register(`middle`)} />
            <CheckBox isChecked={watch("middle")} />
            중졸
          </label>
          <label css={cssObj.label} htmlFor="high">
            <input type="checkbox" id="high" {...register(`high`)} />
            <CheckBox isChecked={watch("high")} />
            고졸
          </label>
          <label css={cssObj.label} htmlFor="college">
            <input type="checkbox" id="college" {...register(`college`)} />
            <CheckBox isChecked={watch("college")} />
            초대졸
          </label>
          <label css={cssObj.label} htmlFor="four">
            <input type="checkbox" id="four" {...register(`four`)} />
            <CheckBox isChecked={watch("four")} />
            4년제
          </label>
          <p css={cssObj.desc}>
            <span css={cssObj.icon}>
              <AiOutlineExclamationCircle />
            </span>
            중복 체크 가능
          </p>
        </div>
        <p css={cssObj.errorMessage} />
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(Boolean(formState.errors?.required_etc_arr))}>기타 지원 조건</p>
        <div css={cssObj.inputContainerWithGuide}>
          {requiredEtcArr.fields.map((item, index) => (
            <div key={`requiredEtcArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`requiredEtcArr${item.id}`}>
                <input
                  id={`requiredEtcArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="군필 여부, 나이, 성별 등의 기타 조건을 적어주세요 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    clearErrors(`required_etc_arr.${index}`);
                    focusedArrOnFocusHandler(setRequiredEtcIsFocusedArr, index);
                  }}
                  {...register(`required_etc_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue("title", "");
                      }
                      trigger(`required_etc_arr`);
                      focusedArrOnBlurHandler(setRequiredEtcIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      requiredEtcArr.remove(index);
                      setRequiredEtcIsFocusedArr((prev) =>
                        prev.filter((stateItem, stateIndex) => stateIndex !== index)
                      );
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.required_etc_arr?.[index] &&
                  formState?.errors?.required_etc_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {requiredEtcIsFocusedArr[index] &&
                  randomRequiredEtcGuideArr.map((requiredEtcGuide) => (
                    <GuideChip
                      key={`${requiredEtcGuide}${item.id}`}
                      text={requiredEtcGuide}
                      onClickHandler={() => {
                        setValue(`required_etc_arr.${index}.value`, requiredEtcGuide);
                        const filteredArr = REQUIRED_ETC_GUIDE_ARR.filter(
                          (element) =>
                            !randomRequiredEtcGuideArr.includes(element) &&
                            !jobForm
                              .watch("required_etc_arr")
                              .some((elem) => JSON.stringify({ value: element }) === JSON.stringify(elem))
                        )[0];
                        if (filteredArr) {
                          setRandomRequiredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== requiredEtcGuide),
                            filteredArr,
                          ]);
                        } else {
                          setRandomRequiredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== requiredEtcGuide),
                          ]);
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
          {requiredEtcArr.fields.length < 10 && (
            <AddFieldButton
              onClickHandler={() => {
                requiredEtcArr.append({ value: "" });
                setRequiredEtcIsFocusedArr((prev) => [...prev, false]);
              }}
            />
          )}
        </div>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(false)}>우대 자격증(선택)</p>
        <div css={cssObj.optionContainer}>
          <input
            css={cssObj.input(20)}
            type="text"
            onFocus={() => {
              setIsCertiSearchFocused(true);
            }}
            onBlur={() => {
              setIsCertiSearchFocused(false);
            }}
            placeholder="자격증 검색"
            onChange={(e) => {
              setCertiSearchWord(e.target.value);
            }}
          />
          <div css={cssObj.optionList(isCertiSearchFocused)}>
            {CERTI_ARR.filter((prevCerti) => prevCerti.includes(certiSearchWord)).map((certi) => (
              <button
                type="button"
                css={cssObj.option}
                key={certi}
                value={certi}
                onMouseDown={(event) => {
                  event.preventDefault();
                  certiClickHandler(certi);
                }}
              >
                <CheckBox isChecked={watch("preferred_certi_arr")?.includes(certi) || false} />
                {certi}
              </button>
            ))}
          </div>
        </div>

        <div css={cssObj.selectedCertiContainer}>
          {watch("preferred_certi_arr")?.map((certi) => (
            <div key={certi} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  setValue(`preferred_certi_arr`, [
                    ...(jobForm.watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(Boolean(formState.errors?.preferred_etc_arr))}>기타 우대 사항(선택)</p>
        <div css={cssObj.inputContainerWithGuide}>
          {preferredEtcArr.fields.map((item, index) => (
            <div key={`${preferredEtcArr}${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`${preferredEtcArr}${item.id}`}>
                <input
                  id={`${preferredEtcArr}${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="기타 우대 사항 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    focusedArrOnFocusHandler(setPreferredEtcIsFocusedArr, index);
                  }}
                  {...register(`preferred_etc_arr.${index}.value`, {
                    onBlur: () => {
                      trigger(`preferred_etc_arr`);
                      focusedArrOnBlurHandler(setPreferredEtcIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      if (preferredEtcArr.fields.length > 1) {
                        preferredEtcArr.remove(index);
                        setPreferredEtcIsFocusedArr((prev) => prev.filter((_, stateIndex) => stateIndex !== index));
                      }
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.preferred_etc_arr?.[index] &&
                  formState?.errors?.preferred_etc_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {preferredEtcIsFocusedArr[index] &&
                  randomPreferredEtcGuideArr.map((preferredEtcGuide) => (
                    <GuideChip
                      key={`${preferredEtcGuide}${item.id}`}
                      text={preferredEtcGuide}
                      onClickHandler={() => {
                        setValue(`preferred_etc_arr.${index}.value`, preferredEtcGuide);
                        const filteredArr = PREFERRED_ETC_GUIDE_ARR.filter(
                          (element) =>
                            !randomPreferredEtcGuideArr.includes(element) &&
                            !jobForm
                              .watch("preferred_etc_arr")
                              .some((elem) => JSON.stringify({ value: element }) === JSON.stringify(elem))
                        )[0];
                        if (filteredArr) {
                          setRandomPreferredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== preferredEtcGuide),
                            filteredArr,
                          ]);
                        } else {
                          setRandomPreferredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== preferredEtcGuide),
                          ]);
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
          <AddFieldButton
            onClickHandler={() => {
              preferredEtcArr.append({ value: "" });
              setPreferredEtcIsFocusedArr((prev) => [...prev, false]);
            }}
          />
        </div>
      </div>
    </div>
  );
};
