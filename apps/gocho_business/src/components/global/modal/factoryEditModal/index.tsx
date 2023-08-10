import { ChangeEvent, FunctionComponent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { useFocusTrap } from "shared-hooks";

import { factoryObjDef, useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { ModalComponent } from "../modalBackground";
import { cssObj } from "./style";
import { FactoryEditFormValues } from "./type";

export const FactoryEditModal: FunctionComponent = () => {
  const { contentObj, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, setValue, reset } = useForm<FactoryEditFormValues>();

  const { factory: factoryObj, companyForm } = contentObj as factoryObjDef;
  const { watch, setValue: setCompanyValue } = companyForm;

  useFocusTrap(modalRef);

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("address", addressObj.address, { shouldDirty: true });
      },
    });
  };

  const replaceFactory = (factoryArr: (typeof factoryObj)[], newFactory: typeof factoryObj) => {
    const index = factoryArr.findIndex((factory) => factory.id === newFactory.id);
    if (index !== -1) {
      return [...factoryArr.slice(0, index), newFactory, ...factoryArr.slice(index + 1)];
    }
    return factoryArr;
  };

  const editFactoryHandler = (factoryRequestObj: FactoryEditFormValues) => {
    const prevFactoryArr = watch("factory_arr");
    const editFactory = {
      ...factoryRequestObj,
      id: factoryObj.id,
      bus_bool: factoryRequestObj.bus_bool === "true",
      bus_etc: factoryRequestObj.bus_etc === "" ? null : factoryRequestObj.bus_etc,
      dormitory_bool: factoryRequestObj.dormitory_bool === "true",
      dormitory_etc: factoryRequestObj.dormitory_etc === "" ? null : factoryRequestObj.dormitory_etc,
    };
    setCompanyValue("factory_arr", replaceFactory(prevFactoryArr, editFactory), { shouldDirty: true });
    closeModal();
  };

  useEffect(() => {
    if (factoryObj) {
      reset({
        factory_name: factoryObj.factory_name,
        address: factoryObj.address,
        male_number: factoryObj.male_number,
        female_number: factoryObj.female_number,
        product: factoryObj.product,
        bus_bool: factoryObj.bus_bool ? "true" : "false",
        bus_etc: factoryObj.bus_etc ? factoryObj.bus_etc : "",
        dormitory_bool: factoryObj.dormitory_bool ? "true" : "false",
        dormitory_etc: factoryObj.dormitory_etc ? factoryObj.dormitory_etc : "",
      });
    }
  }, [reset, factoryObj]);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>공장 수정</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <form onSubmit={handleSubmit(editFactoryHandler)}>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 명칭</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              maxLength={10}
              {...register("factory_name", { maxLength: 10, required: true })}
              placeholder="고초대졸 제1공장 (최대 10자)"
            />
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>생산품</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              maxLength={30}
              {...register("product", { maxLength: 30, required: true })}
              placeholder="공장 주 생산품 (최대 30자)"
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
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <NewSharedButton onClickHandler="submit" buttonType="fillBlue" text="수정하기" width={8.75} />
          </div>
        </form>
      </div>
    </ModalComponent>
  );
};
