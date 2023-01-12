import { FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiChevronUp, FiMinus, FiX, FiRotateCw, FiChevronDown, FiPlus } from "react-icons/fi";
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

import { GuideChip } from "../../component/guideChip";
import { PositionWorkInfoPartProps } from "./type";
import { rotationArr, placeTypeArr, certificateArr, preferredEtcGuideArr } from "./constant";
import { cssObj } from "./style";

export const PositionWorkInfoPart: FunctionComponent<PositionWorkInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  control,
}) => {
  const [payIsFocusedArr, setPayIsFocusedArr] = useState<boolean[]>([false]);
  const [preferredEtcIsFocusedArr, setPreferredEtcIsFocusedArr] = useState<boolean[]>([false]);
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isCertiSearchFocused, setIsCertiSearchFocused] = useState<boolean>(false);
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);
  const [isFactoryListOpen, setIsFactoryListOpen] = useState<boolean>(false);
  const [randomPreferredEtcGuideArr, setRandomPreferredEtcGuideArr] = useState<string[]>([]);

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
    const isInList = jobForm.watch("position_arr")[positionIndex].rotation_arr.includes(rotation);
    jobForm.clearErrors(`position_arr.${positionIndex}.rotation_arr`);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr.filter((element) => element !== rotation),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr,
        rotation,
      ]);
    }
  };

  const factoryClickHandler = (factory: number) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].place.factory_arr?.includes(factory);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].place.factory_arr?.filter((element) => element !== factory) ||
          []),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].place.factory_arr || []),
        factory,
      ]);
    }
  };

  const certiClickHandler = (certi: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.filter((element) => element !== certi) ||
          []),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr || []),
        certi,
      ]);
    }
  };

  const rotationTextMaker = (selectedRotation: string[]) => {
    if (selectedRotation.length === 0) return "교대 형태 선택";
    return selectedRotation.join(", ");
  };

  useEffect(() => {
    setRandomPreferredEtcGuideArr(preferredEtcGuideArr.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  return (
    <>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(!!jobForm.formState.errors.position_arr?.[positionIndex]?.rotation_arr)}>교대 형태</p>
        <div css={cssObj.optionContainer}>
          <button
            css={cssObj.input(20)}
            type="button"
            onClick={() => {
              if (isRotationOpen && jobForm.watch("position_arr")[positionIndex].rotation_arr.length === 0) {
                jobForm.setError(`position_arr.${positionIndex}.rotation_arr`, {
                  type: "required",
                  message: "필수 입력 사항입니다",
                });
              }
              setIsRotationOpen((prev) => !prev);
            }}
            onBlur={() => {
              setIsRotationOpen(false);
            }}
          >
            <p css={cssObj.rotationInnerText}>
              {rotationTextMaker(jobForm.watch("position_arr")[positionIndex].rotation_arr)}
            </p>
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
                  isChecked={
                    jobForm.watch("position_arr")[positionIndex].rotation_arr?.includes(rotation.data) || false
                  }
                />
                {rotation.name}
              </button>
            ))}
          </div>
        </div>
        <p css={cssObj.errorMessage}>
          {!!jobForm.formState.errors.position_arr?.[positionIndex]?.rotation_arr &&
            `${jobForm.formState.errors.position_arr?.[positionIndex]?.rotation_arr?.message}`}
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
                  {...jobForm.register(`position_arr.${positionIndex}.place.type`, {
                    required: true,
                  })}
                  value={placeType.data}
                  onClick={() => {
                    if (jobForm.watch("position_arr")[positionIndex].place.type !== placeType.data) {
                      jobForm.clearErrors(`position_arr.${positionIndex}.place.etc`);
                    }
                  }}
                />
                <div css={cssObj.radioBox} />
                <p
                  css={cssObj.placeTypeLabelData(
                    placeType.data === jobForm.watch("position_arr")[positionIndex].place.type
                  )}
                >
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
          {jobForm.watch("position_arr")[positionIndex].place.type === "일반" && (
            <>
              <p css={cssObj.inputTitle(false)}>공장 근무지</p>
              <div css={cssObj.factoryInputWrapper}>
                <div css={cssObj.optionContainer}>
                  <button
                    css={cssObj.input(20)}
                    type="button"
                    onClick={() => {
                      setIsFactoryListOpen((prev) => !prev);
                    }}
                    onBlur={() => {
                      setIsFactoryListOpen(false);
                    }}
                  >
                    해당하는 공장을 모두 선택해주세요
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
                            jobForm.watch("position_arr")[positionIndex].place.factory_arr?.includes(factory.id) ||
                            false
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
                {jobForm.watch("position_arr")[positionIndex].place.factory_arr?.map((factory) => (
                  <div key={`${factory}${id}`} css={cssObj.factoryBox}>
                    <TbBuildingFactory2 />
                    {factory}
                    <button
                      type="button"
                      css={cssObj.smallDeleteButton}
                      onClick={() => {
                        jobForm.setValue(`position_arr.${positionIndex}.place.factory_arr`, [
                          ...(jobForm
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
                      jobForm.setValue(`position_arr.${positionIndex}.place.address_arr`, [
                        ...(jobForm.watch("position_arr")[positionIndex].place.address_arr || []),
                        addressObj.address,
                      ]);
                    },
                  })
                }
              />
              <div css={cssObj.placeContainer}>
                {jobForm.watch("position_arr")[positionIndex].place.address_arr?.map((address) => (
                  <div key={`${address}${id}`}>
                    <span>일반 근무지</span>
                    <div css={cssObj.addressBox}>
                      {address}
                      <button
                        type="button"
                        css={cssObj.deleteInputButton}
                        onClick={() => {
                          jobForm.setValue(`position_arr.${positionIndex}.place.address_arr`, [
                            ...(jobForm
                              .watch("position_arr")
                              [positionIndex].place.address_arr?.filter((element) => element !== address) || []),
                          ]);
                        }}
                      >
                        <FiMinus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "해외" && (
            <>
              <p
                css={cssObj.inputTitle(
                  jobForm.watch("position_arr")[positionIndex].place.type === "해외" &&
                    !!jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc
                )}
              >
                해외 근무지
              </p>
              <input
                css={cssObj.input(47)}
                placeholder="근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
              <p css={cssObj.errorMessage}>
                {!!jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc &&
                  `${jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc?.message}`}
              </p>
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "기타" && (
            <>
              <p
                css={cssObj.inputTitle(
                  jobForm.watch("position_arr")[positionIndex].place.type === "기타" &&
                    !!jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc
                )}
              >
                기타 근무지
              </p>
              <input
                css={cssObj.input(47)}
                placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
              <p css={cssObj.errorMessage}>
                {!!jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc &&
                  `${jobForm.formState.errors.position_arr?.[positionIndex]?.place?.etc?.message}`}
              </p>
            </>
          )}
        </div>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(!!jobForm.formState.errors.position_arr?.[positionIndex]?.pay_arr)}>급여</p>
        <div css={cssObj.inputContainerWithGuide}>
          {payArr.fields.map((item, index) => (
            <div key={`payArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`payArr${item.id}`}>
                <input
                  id={`payArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="급여 정보"
                  onFocus={() => {
                    setPayIsFocusedArr((prev) =>
                      prev.map((stateItem, stateIndex) => {
                        if (stateIndex === index) {
                          return true;
                        }
                        return stateItem;
                      })
                    );
                  }}
                  {...jobForm.register(`position_arr.${positionIndex}.pay_arr.${index}.value`, {
                    required: true,
                    maxLength: 70,
                    onBlur: () => {
                      setPayIsFocusedArr((prev) =>
                        prev.map((stateItem, stateIndex) => {
                          if (stateIndex === index) {
                            return false;
                          }
                          return stateItem;
                        })
                      );
                    },
                  })}
                />
                <button
                  type="button"
                  css={cssObj.deleteInputButton}
                  onClick={() => {
                    payArr.remove(positionIndex);
                    setPayIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                  }}
                >
                  <FiMinus />
                </button>
              </label>
              <div css={cssObj.guideChipContainer}>
                {payIsFocusedArr[index] && (
                  <GuideChip
                    text="회사 내규에 따름"
                    onClickHandler={() => {
                      jobForm.setValue(`position_arr.${positionIndex}.pay_arr.${index}.value`, "회사 내규에 따름");
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY10}`}
            backgroundColor={`${COLORS.GRAY100}`}
            borderColor={`${COLORS.GRAY70}`}
            size="medium"
            iconObj={{ icon: FiPlus, location: "left" }}
            text="입력칸 추가"
            onClickHandler={() => {
              payArr.append({ value: "" });
              setPayIsFocusedArr((prev) => [...prev, false]);
            }}
          />
        </div>
        <p css={cssObj.errorMessage}>
          {!!jobForm.formState.errors.position_arr?.[positionIndex]?.pay_arr && "추가한 모든 칸이 채워져야 합니다"}
        </p>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(false)}>우대 자격증</p>
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
                    isChecked={
                      jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi) || false
                    }
                  />
                  {certi}
                </button>
              ))}
          </div>
        </div>

        <div css={cssObj.selectedCertiContainer}>
          {jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.map((certi) => (
            <div key={`${id}${certi}`} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
                    ...(jobForm
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
        <p css={cssObj.inputTitle(false)}>기타 우대 사항(선택)</p>
        <div css={cssObj.inputContainerWithGuide}>
          {preferredEtcArr.fields.map((item, index) => (
            <div key={`preferredEtcArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`preferredEtcArr${item.id}`}>
                <input
                  id={`preferredEtcArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="기타 우대 사항"
                  onFocus={() => {
                    setPreferredEtcIsFocusedArr((prev) =>
                      prev.map((stateItem, stateIndex) => {
                        if (stateIndex === index) {
                          return true;
                        }
                        return stateItem;
                      })
                    );
                  }}
                  {...jobForm.register(`position_arr.${positionIndex}.preferred_etc_arr.${index}.value`, {
                    maxLength: 70,
                    onBlur: () => {
                      setPreferredEtcIsFocusedArr((prev) =>
                        prev.map((stateItem, stateIndex) => {
                          if (stateIndex === index) {
                            return false;
                          }
                          return stateItem;
                        })
                      );
                    },
                  })}
                />
                <button
                  type="button"
                  css={cssObj.deleteInputButton}
                  onClick={() => {
                    preferredEtcArr.remove(positionIndex);
                    setPreferredEtcIsFocusedArr((prev) => prev.filter((_, stateIndex) => stateIndex !== index));
                  }}
                >
                  <FiMinus />
                </button>
              </label>
              <div css={cssObj.guideChipContainer}>
                {preferredEtcIsFocusedArr[index] &&
                  randomPreferredEtcGuideArr.map((preferredEtcGuide) => (
                    <GuideChip
                      key={`${preferredEtcGuide}${item.id}`}
                      text={preferredEtcGuide}
                      onClickHandler={() => {
                        jobForm.setValue(
                          `position_arr.${positionIndex}.preferred_etc_arr.${index}.value`,
                          preferredEtcGuide
                        );
                        const filteredArr = preferredEtcGuideArr.filter(
                          (element) =>
                            !randomPreferredEtcGuideArr.includes(element) &&
                            !jobForm
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
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY10}`}
            backgroundColor={`${COLORS.GRAY100}`}
            borderColor={`${COLORS.GRAY70}`}
            size="medium"
            iconObj={{ icon: FiPlus, location: "left" }}
            text="입력칸 추가"
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
