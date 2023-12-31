import { FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiPlus } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/checkbox";
import { useFactoryArr } from "@/apis";
import { commonCssObj } from "@/styles";

import { useModal } from "@/globalStates";
import { jdPlaceAddClickEvent } from "@/ga";
import { AddFieldButton, DeleteInputButton } from "../../component";
import { PositionWorkInfoPartProps } from "./type";
import { PLACE_TYPE_ARR } from "./constant";
import { cssObj } from "./style";

export const PlacePart: FunctionComponent<PositionWorkInfoPartProps> = ({ jdForm }) => {
  const { setModal } = useModal();

  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
    register,
    setError,
  } = jdForm;

  const openPostCodePopup = useDaumPostcodePopup();

  const { data: factoryDataObj } = useFactoryArr({ size: 100 });

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
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <p css={commonCssObj.inputTitle(false)}>상세근무지</p>
        </div>
        <div css={cssObj.placeWrapper}>
          <div css={commonCssObj.labelContainer}>
            {PLACE_TYPE_ARR.map((placeType) => (
              <div key={placeType.name}>
                <label key={placeType.name} htmlFor={placeType.name} css={commonCssObj.label}>
                  <input
                    type="radio"
                    id={placeType.name}
                    css={commonCssObj.radio}
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
                  <div css={commonCssObj.radioBox} />
                  <p>{placeType.name}</p>
                </label>
              </div>
            ))}
            <p css={commonCssObj.errorMessage}>{errors.place?.factory_arr && errors.place?.factory_arr?.message}</p>
            <p css={commonCssObj.errorMessage}>{errors.place?.etc && errors.place?.etc?.message}</p>
          </div>
          <div css={cssObj.placeInputWrapper}>
            {watch("place").type === "일반" && (
              <>
                <input
                  css={cssObj.hiddenInput}
                  {...register(`place.factory_arr`, {
                    validate: (value) =>
                      (value?.length || 0) + (watch("place").address_arr?.length || 0) !== 0 ||
                      "* 공장 혹은 일반 근무지를 입력해주세요",
                  })}
                />
                <input css={cssObj.hiddenInput} {...register(`place.address_arr`)} />
                {factoryDataObj?.factoryDataArr?.map((factory) => (
                  <div key={`jdUploadFactory${factory.id}`} css={cssObj.factoryBox}>
                    <div css={cssObj.factoryInfoWrapper}>
                      <button
                        type="button"
                        key={factory.id}
                        value={factory.id}
                        onMouseDown={(event) => {
                          event.preventDefault();
                          factoryClickHandler(factory.id);
                        }}
                      >
                        <CheckBox isChecked={watch("place").factory_arr?.includes(factory.id) || false} />
                      </button>
                      {factory.name}
                      <p css={cssObj.factoryAddress}>{factory.address}</p>
                    </div>
                  </div>
                ))}
                {watch("place").address_arr?.length !== 0 && (
                  <div>
                    {watch("place").address_arr?.map((address) => (
                      <div key={address}>
                        <div css={cssObj.factoryBox}>
                          <p css={cssObj.factoryAddress}>{address}</p>
                          <DeleteInputButton
                            onClickHandler={() => {
                              const totalNumber =
                                (watch("place").factory_arr?.length || 0) + (watch("place").address_arr?.length || 0);
                              if (totalNumber === 1)
                                setError(`place.factory_arr`, {
                                  type: "required",
                                  message: "* 공장 혹은 일반 근무지를 입력해주세요",
                                });
                              setValue(`place.address_arr`, [
                                ...(jdForm.watch("place").address_arr?.filter((element) => element !== address) || []),
                              ]);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div css={cssObj.addPlaceButtonContainer}>
                  <AddFieldButton
                    text="근무지 추가"
                    onClickHandler={() => {
                      jdPlaceAddClickEvent();
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
                              message: "* 공장 혹은 일반 근무지를 입력해주세요",
                            });
                        },
                      });
                    }}
                  />
                  <button
                    type="button"
                    css={cssObj.uploadFactoryButton}
                    onClick={() => {
                      setModal("factoryAddModal");
                    }}
                  >
                    <FiPlus />
                    공장 등록
                  </button>
                </div>
              </>
            )}
            {watch("place").type === "해외" && (
              <input
                css={commonCssObj.input(47, Boolean(errors.place?.etc))}
                maxLength={100}
                placeholder="근무지를 작성해주세요"
                {...register(`place.etc`, {
                  required: "* 근무지를 입력해주세요",
                  maxLength: { value: 100, message: "최대 길이는 100자입니다." },
                  validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                })}
              />
            )}
            {watch("place").type === "기타" && (
              <input
                css={commonCssObj.input(47, Boolean(errors.place?.etc))}
                maxLength={100}
                placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                {...register(`place.etc`, {
                  required: "* 근무지를 입력해주세요",
                  maxLength: { value: 100, message: "최대 길이는 100자입니다." },
                  validate: (value) => !!value?.trim() || "빈 칸을 입력할 수 없습니다",
                })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
