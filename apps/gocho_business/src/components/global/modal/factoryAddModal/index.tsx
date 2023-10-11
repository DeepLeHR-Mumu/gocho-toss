import { ChangeEvent, FunctionComponent, useRef } from "react";
import { useForm } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiX } from "react-icons/fi";

import { useFocusTrap } from "shared-hooks";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton";
import { SharedButton } from "shared-ui/common/sharedButton";
import { useModal } from "@/globalStates";
import { useAddFactory } from "@/apis";
import { commonCssObj } from "@/styles";

import { factoryUploadConfirmEvent, factoryUploadDoneEvent } from "@/ga";
import { ModalComponent } from "../modalBackground";

import { cssObj } from "./style";
import { FactoryRegisterFormValues } from "./type";

export const FactoryAddModal: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isLoading = useRef(false);
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FactoryRegisterFormValues>({ mode: "onTouched", reValidateMode: "onChange" });

  useFocusTrap(modalRef);

  const { mutate: addFactoryMutation } = useAddFactory();
  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("address", addressObj.address, { shouldDirty: true });
        clearErrors("address");
      },
    });
  };

  const addFactoryHandler = (factoryRequestObj: FactoryRegisterFormValues) => {
    if (isLoading.current) {
      return;
    }
    isLoading.current = true;
    factoryUploadConfirmEvent();
    addFactoryMutation(
      {
        ...factoryRequestObj,
        bus_bool: factoryRequestObj.bus_bool === "true",
        bus_etc: factoryRequestObj.bus_etc === "" ? null : factoryRequestObj.bus_etc,
        dormitory_bool: factoryRequestObj.dormitory_bool === "true",
        dormitory_etc: factoryRequestObj.dormitory_etc === "" ? null : factoryRequestObj.dormitory_etc,
      },
      {
        onSuccess: () => {
          factoryUploadDoneEvent();
          closeModal();
        },
        onSettled: () => {
          isLoading.current = false;
        },
      }
    );
    isLoading.current = false;
  };

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>공장 등록</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <form onSubmit={handleSubmit(addFactoryHandler)}>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 명칭</strong>
            <div css={cssObj.errorWrapper}>
              <input
                css={commonCssObj.input(37.5, !!errors.factory_name)}
                maxLength={10}
                {...register("factory_name", {
                  maxLength: 10,
                  required: { value: true, message: "* 공장 명칭을 입력해 주세요." },
                })}
                placeholder="고초대졸 제1공장 (최대 10자)"
              />
              {errors.factory_name && <p css={cssObj.errorMessageBottom}>{errors.factory_name.message}</p>}
            </div>
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>생산품</strong>
            <div css={cssObj.errorWrapper}>
              <input
                css={commonCssObj.input(37.5, !!errors.product)}
                maxLength={30}
                {...register("product", {
                  maxLength: 30,
                  required: { value: true, message: "* 생산품 항목을 입력해 주세요." },
                })}
                placeholder="공장 주 생산품 (최대 30자)"
              />
              {errors.product && <p css={cssObj.errorMessageBottom}>{errors.product.message}</p>}
            </div>
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 주소</strong>
            <div css={cssObj.errorWrapper}>
              <input
                css={commonCssObj.input(30.5, !!errors.address)}
                disabled
                {...register("address", { required: { value: true, message: "* 공장 주소를 입력해 주세요." } })}
              />
              {errors.address && <p css={cssObj.errorMessageBottom}>{errors.address.message}</p>}
            </div>
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
                css={commonCssObj.input(5.5, !!errors.male_number)}
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
                css={commonCssObj.input(5.5, !!errors.female_number)}
              />
              <p>명</p>
              {(!!errors.female_number || !!errors.male_number) && (
                <p css={cssObj.errorMessageRight}>* 임직원 수를 입력해 주세요.</p>
              )}
            </div>
          </div>
          <div css={commonCssObj.longContainer}>
            <strong css={commonCssObj.inputTitle(false)}>통근버스</strong>
            <div>
              <div css={cssObj.labelContainer}>
                <SharedRadioButton
                  id="busTrue"
                  value="true"
                  registerObj={register("bus_bool", {
                    required: { value: true, message: "* 통근 버스 유무를 입력해 주세요." },
                  })}
                  additionalStyle={errors.bus_bool ? cssObj.errorRadioButton : ""}
                >
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton
                  id="busFalse"
                  value="false"
                  registerObj={register("bus_bool", {
                    required: { value: true, message: "* 통근 버스 유무를 입력해 주세요." },
                  })}
                  additionalStyle={errors.bus_bool ? cssObj.errorRadioButton : ""}
                >
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
                {errors.bus_bool && <p css={cssObj.errorMessageRight}>{errors.bus_bool.message}</p>}
              </div>
              <input
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택, 최대 50자)"
                maxLength={50}
                {...register("bus_etc", {
                  maxLength: 50,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                })}
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
                  registerObj={register("dormitory_bool", {
                    required: { value: true, message: "* 기숙사 유무를 입력해 주세요." },
                  })}
                  additionalStyle={errors.dormitory_bool ? cssObj.errorRadioButton : ""}
                >
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton
                  id="dormitoryFalse"
                  value="false"
                  registerObj={register("dormitory_bool", {
                    required: { value: true, message: "* 기숙사 유무를 입력해 주세요." },
                  })}
                  additionalStyle={errors.dormitory_bool ? cssObj.errorRadioButton : ""}
                >
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
                {errors.dormitory_bool && <p css={cssObj.errorMessageRight}>{errors.dormitory_bool.message}</p>}
              </div>
              <input
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택, 최대 50자)"
                maxLength={50}
                {...register("dormitory_etc", {
                  maxLength: 50,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                })}
              />
            </div>
          </div>
          <div css={cssObj.buttonContainer}>
            <SharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <SharedButton onClickHandler="submit" buttonType="fillBlue" text="등록하기" width={8.75} />
          </div>
        </form>
      </div>
    </ModalComponent>
  );
};
