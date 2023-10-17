import { ChangeEvent, FunctionComponent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiX } from "react-icons/fi";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton";
import { SharedButton } from "shared-ui/common/sharedButton";
import { useFocusTrap } from "shared-hook";

import { commonCssObj } from "@/styles";
import { ModalComponent } from "@/components/global/modal/modalBackground";

import { cssObj } from "./style";
import { FactoryModalProps, FactoryRegisterFormValues } from "./type";

export const FactoryModal: FunctionComponent<FactoryModalProps> = ({
  factory,
  addFactoryArr,
  modifyFactoryArr,
  closeModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { watch, register, handleSubmit, setValue, reset } = useForm<FactoryRegisterFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  useFocusTrap(modalRef);

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("address", addressObj.address, { shouldDirty: true });
      },
    });
  };

  const addFactoryHandler = (factoryRequestObj: FactoryRegisterFormValues) => {
    const newFactory: FactoryRegisterFormValues = {
      ...factoryRequestObj,
      bus_etc: factoryRequestObj.bus_etc?.length === 0 ? null : factoryRequestObj.bus_etc,
      dormitory_etc: factoryRequestObj.dormitory_etc?.length === 0 ? null : factoryRequestObj.dormitory_etc,
    };
    if (factory) {
      modifyFactoryArr(newFactory);
    } else addFactoryArr(newFactory);
    closeModal();
  };

  useEffect(() => {
    if (factory) reset({ ...factory });
  }, [reset, factory]);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>공장 등록</h3>
          <button type="button" css={cssObj.closeButton} onClick={closeModal}>
            <FiX />
          </button>
        </div>
        <form onSubmit={handleSubmit(addFactoryHandler)}>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 명칭</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              {...register("factory_name", { maxLength: 50, required: true })}
              placeholder="고초대졸 제1공장 (최대 50자)"
            />
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>생산품</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              {...register("product", { maxLength: 50, required: true })}
              placeholder="공장 주 생산품 (최대 50자)"
            />
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 주소</strong>
            <input css={commonCssObj.input(30.5, false)} disabled {...register("address", { required: true })} />
            <button css={cssObj.addAddressButton} type="button" onClick={onClickAddress}>
              주소찾기
            </button>
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>임직원</strong>
            <div css={cssObj.inputWrapper}>
              <input
                {...register("male_number", {
                  required: true,
                  valueAsNumber: true,
                  onChange: (value: ChangeEvent<HTMLInputElement>) => {
                    if (Number(value?.target?.value) > 100000) setValue("male_number", 99999);
                  },
                })}
                type="number"
                min="0"
                placeholder="남성"
                css={commonCssObj.input(5.5, false)}
              />
              <p>명</p>
            </div>
            <div css={cssObj.inputWrapper}>
              <input
                {...register("female_number", {
                  required: true,
                  valueAsNumber: true,
                  onChange: (value: ChangeEvent<HTMLInputElement>) => {
                    if (Number(value?.target?.value) > 100000) setValue("female_number", 99999);
                  },
                })}
                type="number"
                min="0"
                placeholder="여성"
                css={commonCssObj.input(5.5, false)}
              />
              <p>명</p>
            </div>
          </div>
          <div css={commonCssObj.longContainer}>
            <strong css={commonCssObj.inputTitle(false)}>통근버스</strong>
            <div>
              <div css={cssObj.labelContainer}>
                <SharedRadioButton id="busTrue" value="true" registerObj={register("bus_bool", { required: true })}>
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton id="busFalse" value="false" registerObj={register("bus_bool", { required: true })}>
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
              </div>
              <input
                {...register("bus_etc", {
                  maxLength: 70,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                  onBlur: (blurEvent) => {
                    if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                      setValue("bus_etc", "");
                    }
                  },
                })}
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택)"
                maxLength={70}
              />
            </div>
          </div>
          <div css={commonCssObj.longContainer}>
            <strong css={commonCssObj.inputTitle(false)}>기숙사</strong>
            <div>
              <div css={cssObj.labelContainer}>
                <SharedRadioButton
                  id="dormitoryTrue"
                  value="true"
                  registerObj={register("dormitory_bool", { required: true })}
                >
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton
                  id="dormitoryFalse"
                  value="false"
                  registerObj={register("dormitory_bool", { required: true })}
                >
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
              </div>
              <input
                {...register("dormitory_etc", {
                  maxLength: 70,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                  onBlur: (blurEvent) => {
                    if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                      setValue("dormitory_etc", "");
                    }
                  },
                })}
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택)"
                maxLength={70}
              />
            </div>
          </div>
          <div css={cssObj.buttonContainer}>
            <SharedButton onClickHandler={closeModal} buttonType="outLineGray" text="취소" width={8.75} />
            <SharedButton
              onClickHandler={() => addFactoryHandler(watch())}
              buttonType="fillBlue"
              text="등록하기"
              width={8.75}
            />
          </div>
        </form>
      </div>
    </ModalComponent>
  );
};
