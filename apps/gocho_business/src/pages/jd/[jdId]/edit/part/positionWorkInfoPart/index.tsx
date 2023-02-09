import { FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiChevronUp, FiX, FiRotateCw, FiChevronDown, FiPlus } from "react-icons/fi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { useFieldArray } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { useQueryClient } from "@tanstack/react-query";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { SharedTextLink } from "shared-ui/business/sharedTextLink";

import { useFactoryArr } from "@/apis/factory/useFactoryArr";
import { factoryArrKeyObj } from "@/apis/factory/useFactoryArr/type";
import { INTERNAL_URL, POSTCODE_SCRIPT_URL } from "@/constants/url";

import { DeleteInputButton } from "../../component/deleteInputButton";
import { AddFieldButton } from "../../component/addFieldButton";
import { GuideChip } from "../../component/guideChip";
import { focusedArrOnBlurHandler, focusedArrOnFocusHandler } from "../util";
import { PositionWorkInfoPartProps } from "./type";
import { rotationArr, placeTypeArr, certificateArr, preferredEtcGuideArr } from "./constant";
import { cssObj } from "./style";

export const PositionWorkInfoPart: FunctionComponent<PositionWorkInfoPartProps> = ({
  id,
  positionIndex,
  jdForm,
  control,
}) => {
  const [payIsFocusedArr, setPayIsFocusedArr] = useState<boolean[]>([false]);
  const [preferredEtcIsFocusedArr, setPreferredEtcIsFocusedArr] = useState<boolean[]>([false]);
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isCertiSearchFocused, setIsCertiSearchFocused] = useState<boolean>(false);
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);
  const [isFactoryListOpen, setIsFactoryListOpen] = useState<boolean>(false);
  const [randomPreferredEtcGuideArr, setRandomPreferredEtcGuideArr] = useState<string[]>([]);

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jdForm;

  const queryClient = useQueryClient();
  const openPostCodePopup = useDaumPostcodePopup(POSTCODE_SCRIPT_URL);

  // TODO: factories/find로 변경하기, params 추가
  const { data: factoryDataArr } = useFactoryArr();

  const payArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.pay_arr`,
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.preferred_etc_arr`,
  });

  const rotationClickHandler = (rotation: string) => {
    const isInList = watch("position_arr")[positionIndex].rotation_arr.includes(rotation);
    clearErrors(`position_arr.${positionIndex}.rotation_arr`);
    if (isInList) {
      setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...watch("position_arr")[positionIndex].rotation_arr.filter((element) => element !== rotation),
      ]);
    } else {
      setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...watch("position_arr")[positionIndex].rotation_arr,
        rotation,
      ]);
    }
  };

  const factoryClickHandler = (factory: number) => {
    const totalNumber =
      (watch("position_arr")[positionIndex].place.factory_arr?.length || 0) +
      (watch("position_arr")[positionIndex].place.address_arr?.length || 0);
    const isInList = watch("position_arr")[positionIndex].place.factory_arr?.includes(factory);
    clearErrors(`position_arr.${positionIndex}.place`);

    if (totalNumber < 10) {
      if (isInList) {
        setValue(`position_arr.${positionIndex}.place.factory_arr`, [
          ...(watch("position_arr")[positionIndex].place.factory_arr?.filter((element) => element !== factory) || []),
        ]);
      } else {
        setValue(`position_arr.${positionIndex}.place.factory_arr`, [
          ...(watch("position_arr")[positionIndex].place.factory_arr || []),
          factory,
        ]);
      }
    }
  };

  const certiClickHandler = (certi: string) => {
    const totalNumber = watch("position_arr")[positionIndex].preferred_certi_arr?.length || 0;
    const isInList = watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi);

    if (totalNumber < 10) {
      if (isInList) {
        setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
          ...(watch("position_arr")[positionIndex].preferred_certi_arr?.filter((element) => element !== certi) || []),
        ]);
      } else {
        setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
          ...(watch("position_arr")[positionIndex].preferred_certi_arr || []),
          certi,
        ]);
      }
    }
  };

  const rotationTextMaker = (selectedRotation: string[]) => {
    if (selectedRotation.length === 0) return "교대 형태 선택";
    return selectedRotation
      .map((rotation) => rotationArr.find((rotationObj) => rotationObj.data === rotation)?.name)
      .join(", ");
  };

  useEffect(() => {
    setRandomPreferredEtcGuideArr(preferredEtcGuideArr.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  return (
    <>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.rotation_arr))}>교대 형태</p>
        <div css={cssObj.optionContainer}>
          <button
            css={cssObj.input(20)}
            type="button"
            onClick={() => {
              if (isRotationOpen && watch("position_arr")[positionIndex].rotation_arr.length === 0) {
                setError(`position_arr.${positionIndex}.rotation_arr`, {
                  type: "required",
                  message: "교대 형태는 필수 입력 사항입니다",
                });
              }
              setIsRotationOpen((prev) => !prev);
            }}
            onBlur={() => {
              setIsRotationOpen(false);
            }}
          >
            <p css={cssObj.rotationInnerText}>{rotationTextMaker(watch("position_arr")[positionIndex].rotation_arr)}</p>
            {isRotationOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <div css={cssObj.optionList(isRotationOpen)}>
            {rotationArr.map((rotation) => (
              <button
                type="button"
                css={cssObj.option}
                key={`${id}${rotation.data}`}
                value={rotation.data}
                onMouseDown={(event) => {
                  event.preventDefault();
                  rotationClickHandler(rotation.data);
                }}
              >
                <CheckBox
                  isChecked={watch("position_arr")[positionIndex].rotation_arr?.includes(rotation.data) || false}
                />
                {rotation.name}
              </button>
            ))}
          </div>
        </div>
        <p css={cssObj.errorMessage}>
          {formState.errors.position_arr?.[positionIndex]?.rotation_arr &&
            `${formState.errors.position_arr?.[positionIndex]?.rotation_arr?.message}`}
        </p>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(false)}>근무지 종류</p>
        <div css={cssObj.labelContainer}>
          {placeTypeArr.map((placeType) => (
            <div key={`${placeType.name}${positionIndex}`}>
              <label key={`${placeType.name}${id}`} htmlFor={`${placeType.name}${id}`} css={cssObj.label}>
                <input
                  type="radio"
                  id={`${placeType.name}${id}`}
                  css={cssObj.radio}
                  {...register(`position_arr.${positionIndex}.place.type`, {
                    required: true,
                  })}
                  value={placeType.data}
                  onClick={() => {
                    if (watch("position_arr")[positionIndex].place.type !== placeType.data) {
                      clearErrors(`position_arr.${positionIndex}.place`);
                      clearErrors(`position_arr.${positionIndex}.place.etc`);
                    }
                  }}
                />
                <div css={cssObj.radioBox} />
                <p css={cssObj.placeTypeLabelData(placeType.data === watch("position_arr")[positionIndex].place.type)}>
                  {placeType.name}
                  <span css={cssObj.placeTypeLabelIcon}>
                    <placeType.icon />
                  </span>
                </p>
              </label>
            </div>
          ))}
          <p css={cssObj.desc}>
            <span css={cssObj.icon}>
              <AiOutlineExclamationCircle />
            </span>
            근무지 종류는 하나만 선택 가능 합니다
          </p>
        </div>
        <div css={cssObj.placeInputContainer}>
          {watch("position_arr")[positionIndex].place.type === "일반" && (
            <>
              <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.place))}>공장 근무지</p>
              <div css={cssObj.factoryInputWrapper}>
                <div css={cssObj.optionContainer}>
                  <button
                    css={cssObj.input(20)}
                    type="button"
                    disabled={factoryDataArr?.length === 0}
                    onClick={() => {
                      if (
                        isFactoryListOpen &&
                        (watch("position_arr")[positionIndex].place.factory_arr?.length || 0) +
                          (watch("position_arr")[positionIndex].place.address_arr?.length || 0) ===
                          0
                      ) {
                        setError(`position_arr.${positionIndex}.place`, {
                          type: "required",
                          message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                        });
                      }
                      setIsFactoryListOpen((prev) => !prev);
                    }}
                    onBlur={() => {
                      setIsFactoryListOpen(false);
                    }}
                  >
                    {factoryDataArr?.length === 0 ? "등록된 공장이 없습니다" : "해당하는 공장을 모두 선택해주세요"}
                    {isFactoryListOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  <div css={cssObj.optionList(isFactoryListOpen)}>
                    {factoryDataArr?.map((factory) => (
                      <button
                        type="button"
                        css={cssObj.option}
                        key={`${factory.id}${id}`}
                        value={factory.id}
                        onMouseDown={(event) => {
                          event.preventDefault();
                          factoryClickHandler(factory.id);
                        }}
                      >
                        <CheckBox
                          isChecked={
                            watch("position_arr")[positionIndex].place.factory_arr?.includes(factory.id) || false
                          }
                        />
                        {factory.name}
                      </button>
                    ))}
                  </div>
                </div>
                <SharedButton
                  radius="round"
                  fontColor={COLORS.GRAY10}
                  backgroundColor={COLORS.GRAY100}
                  borderColor={COLORS.GRAY70}
                  size="medium"
                  iconObj={{ icon: FiRotateCw, location: "left" }}
                  text="목록 새로고침"
                  onClickHandler={() => {
                    queryClient.invalidateQueries(factoryArrKeyObj.all);
                  }}
                />
                <p css={cssObj.uploadFactoryDesc}>잠깐, 미등록 공장이 있나요</p>
                <SharedTextLink externalUrl={INTERNAL_URL.FACTORY_LIST} fontColor="blue" text="공장 등록하러 가기" />
              </div>
              <div css={cssObj.placeContainer}>
                {watch("position_arr")[positionIndex].place.factory_arr?.map((factory) => (
                  <div key={`${factory}${id}`} css={cssObj.factoryBox}>
                    <TbBuildingFactory2 />
                    {factoryDataArr?.find((factoryObj) => factoryObj.id === factory)?.name}
                    <button
                      type="button"
                      css={cssObj.smallDeleteButton}
                      onClick={() => {
                        const totalNumber =
                          (watch("position_arr")[positionIndex].place.factory_arr?.length || 0) +
                          (watch("position_arr")[positionIndex].place.address_arr?.length || 0);
                        if (totalNumber === 1)
                          setError(`position_arr.${positionIndex}.place`, {
                            type: "required",
                            message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                          });
                        setValue(`position_arr.${positionIndex}.place.factory_arr`, [
                          ...(jdForm
                            .watch("position_arr")
                            [positionIndex].place.factory_arr?.filter((element) => element !== factory) || []),
                        ]);
                      }}
                    >
                      <FiX />
                    </button>
                  </div>
                ))}
              </div>
              <SharedButton
                radius="round"
                fontColor={COLORS.GRAY10}
                backgroundColor={COLORS.GRAY100}
                borderColor={COLORS.GRAY70}
                size="medium"
                iconObj={{ icon: FiPlus, location: "left" }}
                text="공장 외 일반 근무지 추가하기"
                onClickHandler={() =>
                  openPostCodePopup({
                    onComplete: (addressObj: Address) => {
                      clearErrors(`position_arr.${positionIndex}.place`);
                      setValue(`position_arr.${positionIndex}.place.address_arr`, [
                        ...(watch("position_arr")[positionIndex].place.address_arr || []),
                        addressObj.address,
                      ]);
                    },

                    onClose: () => {
                      const totalNumber =
                        (watch("position_arr")[positionIndex].place.factory_arr?.length || 0) +
                        (watch("position_arr")[positionIndex].place.address_arr?.length || 0);
                      if (totalNumber === 0)
                        setError(`position_arr.${positionIndex}.place`, {
                          type: "required",
                          message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                        });
                    },
                  })
                }
              />
              <br />
              {watch("position_arr")[positionIndex].place.address_arr?.length !== 0 && (
                <>
                  <p css={cssObj.inputTitle(false)}>일반 근무지</p>
                  <div css={cssObj.placeContainer}>
                    {watch("position_arr")[positionIndex].place.address_arr?.map((address) => (
                      <div key={`${address}${id}`}>
                        <div css={cssObj.addressBox}>
                          {address}
                          <DeleteInputButton
                            onClickHandler={() => {
                              const totalNumber =
                                (watch("position_arr")[positionIndex].place.factory_arr?.length || 0) +
                                (watch("position_arr")[positionIndex].place.address_arr?.length || 0);
                              if (totalNumber === 1)
                                setError(`position_arr.${positionIndex}.place`, {
                                  type: "required",
                                  message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                                });
                              setValue(`position_arr.${positionIndex}.place.address_arr`, [
                                ...(jdForm
                                  .watch("position_arr")
                                  [positionIndex].place.address_arr?.filter((element) => element !== address) || []),
                              ]);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <p css={cssObj.errorMessage}>
                {formState.errors.position_arr?.[positionIndex]?.place &&
                  formState.errors.position_arr?.[positionIndex]?.place?.message}
              </p>
            </>
          )}
          {watch("position_arr")[positionIndex].place.type === "해외" && (
            <>
              <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.place?.etc))}>
                해외 근무지
              </p>
              <input
                css={cssObj.input(47)}
                placeholder="근무지를 작성해주세요"
                {...register(`position_arr.${positionIndex}.place.etc`, {
                  required: "근무지는 필수 입력 사항입니다",
                  validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                })}
              />
              <p css={cssObj.errorMessage}>
                {formState.errors.position_arr?.[positionIndex]?.place?.etc &&
                  formState.errors.position_arr?.[positionIndex]?.place?.etc?.message}
              </p>
            </>
          )}
          {watch("position_arr")[positionIndex].place.type === "기타" && (
            <>
              <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.place?.etc))}>
                기타 근무지
              </p>
              <input
                css={cssObj.input(47)}
                placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                {...register(`position_arr.${positionIndex}.place.etc`, {
                  required: "근무지는 필수 입력 사항입니다",
                  validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                })}
              />
              <p css={cssObj.errorMessage}>
                {formState.errors.position_arr?.[positionIndex]?.place?.etc &&
                  formState.errors.position_arr?.[positionIndex]?.place?.etc?.message}
              </p>
            </>
          )}
        </div>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.pay_arr))}>급여</p>
        <div css={cssObj.inputContainerWithGuide}>
          {payArr.fields.map((item, index) => (
            <div key={`payArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`payArr${item.id}`}>
                <input
                  id={`payArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="급여 정보 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    clearErrors(`position_arr.${positionIndex}.pay_arr.${index}`);
                    focusedArrOnFocusHandler(setPayIsFocusedArr, index);
                  }}
                  {...register(`position_arr.${positionIndex}.pay_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`position_arr.${positionIndex}.pay_arr.${index}.value`, "");
                      }
                      trigger(`position_arr.${positionIndex}.pay_arr`);
                      focusedArrOnBlurHandler(setPayIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                <DeleteInputButton
                  onClickHandler={() => {
                    payArr.remove(index);
                    setPayIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                  }}
                />
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.position_arr?.[positionIndex]?.pay_arr?.[index] &&
                  formState?.errors?.position_arr?.[positionIndex]?.pay_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {payIsFocusedArr[index] && (
                  <GuideChip
                    text="회사 내규에 따름"
                    onClickHandler={() => {
                      setValue(`position_arr.${positionIndex}.pay_arr.${index}.value`, "회사 내규에 따름");
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          <AddFieldButton
            onClickHandler={() => {
              payArr.append({ value: "" });
              setPayIsFocusedArr((prev) => [...prev, false]);
            }}
          />
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
            {certificateArr
              .filter((prevCerti) => prevCerti.includes(certiSearchWord))
              .map((certi) => (
                <button
                  type="button"
                  css={cssObj.option}
                  key={`${id}${certi}`}
                  value={certi}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    certiClickHandler(certi);
                  }}
                >
                  <CheckBox
                    isChecked={watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi) || false}
                  />
                  {certi}
                </button>
              ))}
          </div>
        </div>

        <div css={cssObj.selectedCertiContainer}>
          {watch("position_arr")[positionIndex].preferred_certi_arr?.map((certi) => (
            <div key={`${id}${certi}`} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
                    ...(jdForm
                      .watch("position_arr")
                      [positionIndex].preferred_certi_arr?.filter((element) => element !== certi) || []),
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
        <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.preferred_etc_arr))}>
          기타 우대 사항(선택)
        </p>
        <div css={cssObj.inputContainerWithGuide}>
          {preferredEtcArr.fields.map((item, index) => (
            <div key={`preferredEtcArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`preferredEtcArr${item.id}`}>
                <input
                  id={`preferredEtcArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="기타 우대 사항 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    focusedArrOnFocusHandler(setPreferredEtcIsFocusedArr, index);
                  }}
                  {...register(`position_arr.${positionIndex}.preferred_etc_arr.${index}.value`, {
                    onBlur: () => {
                      trigger(`position_arr.${positionIndex}.preferred_etc_arr`);
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
                {formState?.errors?.position_arr?.[positionIndex]?.preferred_etc_arr?.[index] &&
                  formState?.errors?.position_arr?.[positionIndex]?.preferred_etc_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {preferredEtcIsFocusedArr[index] &&
                  randomPreferredEtcGuideArr.map((preferredEtcGuide) => (
                    <GuideChip
                      key={`${preferredEtcGuide}${item.id}`}
                      text={preferredEtcGuide}
                      onClickHandler={() => {
                        setValue(`position_arr.${positionIndex}.preferred_etc_arr.${index}.value`, preferredEtcGuide);
                        const filteredArr = preferredEtcGuideArr.filter(
                          (element) =>
                            !randomPreferredEtcGuideArr.includes(element) &&
                            !jdForm
                              .watch("position_arr")
                              [positionIndex].preferred_etc_arr.some(
                                (elem) => JSON.stringify({ value: element }) === JSON.stringify(elem)
                              )
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
    </>
  );
};
