import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiX, FiRotateCw, FiChevronDown } from "react-icons/fi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { useQueryClient } from "@tanstack/react-query";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { SharedTextLink } from "shared-ui/business/sharedTextLink";

import { useFactoryArr, factoryArrKeyObj } from "@/apis";
import { INTERNAL_URL } from "@/constants";

import { AddFieldButton, DeleteInputButton } from "../../component";
import { PositionWorkInfoPartProps } from "./type";
import { PLACE_TYPE_ARR } from "./constant";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const PlacePart: FunctionComponent<PositionWorkInfoPartProps> = ({ jobForm }) => {
  const [isFactoryListOpen, setIsFactoryListOpen] = useState<boolean>(false);

  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
    register,
    setError,
  } = jobForm;

  const queryClient = useQueryClient();
  const openPostCodePopup = useDaumPostcodePopup();

  // TODO: factories/find로 변경하기, params 추가
  const { data: factoryDataObj } = useFactoryArr();

  const factoryClickHandler = (factory: number) => {
    const totalNumber = (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0);
    const isInList = watch("place").factory_arr?.includes(factory);
    clearErrors(`place`);

    if (totalNumber < 10) {
      if (isInList) {
        setValue(`place.factory_arr`, [
          ...(watch("place").factory_arr?.filter((element) => element !== factory) || []),
        ]);
      } else {
        setValue(`place.factory_arr`, [...(watch("place").factory_arr || []), factory]);
      }
    }
  };

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>근무지</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>상세근무지</p>
        <div>
          <div css={cssObj.labelContainer}>
            {PLACE_TYPE_ARR.map((placeType) => (
              <div key={placeType.name}>
                <label key={placeType.name} htmlFor={placeType.name} css={cssObj.label}>
                  <input
                    type="radio"
                    id={placeType.name}
                    css={cssObj.radio}
                    {...register(`place.type`, {
                      required: true,
                    })}
                    value={placeType.data}
                    onClick={() => {
                      if (watch("place").type !== placeType.data) {
                        setValue(`place.etc`, null);
                        clearErrors(`place`);
                        clearErrors(`place.etc`);
                      }
                    }}
                  />
                  <div css={cssObj.radioBox} />
                  <p css={cssObj.placeTypeLabelData(placeType.data === watch("place").type)}>{placeType.name}</p>
                </label>
              </div>
            ))}
          </div>
          <div css={cssObj.placeInputContainer}>
            {watch("place").type === "일반" && (
              <>
                <input
                  css={cssObj.hiddenInput}
                  {...register(`place.factory_arr`, {
                    validate: (value) =>
                      (value?.length || 0) + (watch("place").address_arr?.length || 0) !== 0 ||
                      "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                  })}
                />
                <input css={cssObj.hiddenInput} {...register(`place.address_arr`)} />
                <div css={cssObj.factoryInputWrapper}>
                  <div css={cssObj.optionContainer}>
                    <button
                      css={cssObj.input(20)}
                      type="button"
                      disabled={factoryDataObj?.pageResult.totalElements === 0}
                      onClick={() => {
                        if (
                          isFactoryListOpen &&
                          (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0) === 0
                        ) {
                          setError(`place.factory_arr`, {
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
                      {factoryDataObj?.pageResult.totalElements === 0
                        ? "등록된 공장이 없습니다"
                        : "해당하는 공장을 모두 선택해주세요"}
                      {isFactoryListOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    <div css={cssObj.optionList(isFactoryListOpen)}>
                      {factoryDataObj?.factoryDataArr?.map((factory) => (
                        <button
                          type="button"
                          css={cssObj.option}
                          key={factory.id}
                          value={factory.id}
                          onMouseDown={(event) => {
                            event.preventDefault();
                            factoryClickHandler(factory.id);
                          }}
                        >
                          <CheckBox isChecked={watch("place").factory_arr?.includes(factory.id) || false} />
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
                  <p css={cssObj.uploadFactoryDesc}>잠깐, 미등록 공장이 있나요?</p>
                  <SharedTextLink externalUrl={INTERNAL_URL.FACTORY_LIST} fontColor="blue" text="공장 등록하러 가기" />
                </div>
                <div css={cssObj.placeContainer}>
                  {watch("place").factory_arr?.map((factory) => (
                    <div key={factory} css={cssObj.factoryBox}>
                      <TbBuildingFactory2 />
                      {factoryDataObj?.factoryDataArr?.find((factoryObj) => factoryObj.id === factory)?.name}
                      <button
                        type="button"
                        css={cssObj.smallDeleteButton}
                        onClick={() => {
                          const totalNumber =
                            (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0);
                          if (totalNumber === 1)
                            setError(`place.factory_arr`, {
                              type: "required",
                              message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                            });
                          setValue(`place.factory_arr`, [
                            ...(jobForm.watch("place").factory_arr?.filter((element) => element !== factory) || []),
                          ]);
                        }}
                      >
                        <FiX />
                      </button>
                    </div>
                  ))}
                </div>
                <AddFieldButton
                  text="공장 외 일반 근무지 추가"
                  onClickHandler={() =>
                    openPostCodePopup({
                      onComplete: (addressObj: Address) => {
                        clearErrors(`place.factory_arr`);
                        setValue(`place.address_arr`, [...(watch("place").address_arr || []), addressObj.address]);
                      },

                      onClose: () => {
                        const totalNumber =
                          (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0);
                        if (totalNumber === 0)
                          setError(`place.factory_arr`, {
                            type: "required",
                            message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                          });
                      },
                    })
                  }
                />
                <br />
                {watch("place").address_arr?.length !== 0 && (
                  <div css={cssObj.placeContainer}>
                    {watch("place").address_arr?.map((address) => (
                      <div key={address}>
                        <div css={cssObj.addressBox}>
                          {address}
                          <DeleteInputButton
                            onClickHandler={() => {
                              const totalNumber =
                                (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0);
                              if (totalNumber === 1)
                                setError(`place.factory_arr`, {
                                  type: "required",
                                  message: "공장과 일반 근무지 중 적어도 하나 이상의 근무지를 입력해야 합니다",
                                });
                              setValue(`place.address_arr`, [
                                ...(jobForm.watch("place").address_arr?.filter((element) => element !== address) || []),
                              ]);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <p css={cssObj.errorMessage}>{errors.place?.factory_arr && errors.place?.factory_arr?.message}</p>
              </>
            )}
            {watch("place").type === "해외" && (
              <>
                <p css={commonCssObj.inputTitle(false)}>해외 근무지</p>
                <input
                  css={cssObj.input(47)}
                  maxLength={100}
                  placeholder="근무지를 작성해주세요"
                  {...register(`place.etc`, {
                    required: "근무지는 필수 입력 사항입니다",
                    validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                  })}
                />
                <p css={cssObj.errorMessage}>{errors.place?.etc && errors.place?.etc?.message}</p>
              </>
            )}
            {watch("place").type === "기타" && (
              <>
                <p css={commonCssObj.inputTitle(false)}>기타 근무지</p>
                <input
                  css={cssObj.input(47)}
                  maxLength={100}
                  placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                  {...register(`place.etc`, {
                    required: "근무지는 필수 입력 사항입니다",
                    validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                  })}
                />
                <p css={cssObj.errorMessage}>{errors.place?.etc && errors.place?.etc?.message}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
