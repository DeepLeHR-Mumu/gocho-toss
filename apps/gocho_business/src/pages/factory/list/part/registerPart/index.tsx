import { FunctionComponent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FiEdit, FiPlus, FiX } from "react-icons/fi";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { usePreventRouting } from "shared-hooks";

import { useAddFactory, useFactoryArr } from "@/apis";
import {
  factoryEditConfirmEvent,
  factoryEditDoneEvent,
  factoryEditFailEvent,
  factoryUploadConfirmEvent,
  factoryUploadDoneEvent,
  factoryUploadFailEvent,
} from "@/ga";

import { cssObj } from "./style";
import { FactoryRegisterDef, RegisterPartProps } from "./type";
import { FactoryBaseInfo } from "../../component/factoryBaseInfo";
import { FactoryDetailInfo } from "../../component/factoryDetailInfo";
import { defaultInput, FACTORY_MESSAGE_OBJ } from "./constant";

export const RegisterPart: FunctionComponent<RegisterPartProps> = ({ editingIndex, setEditingIndex }) => {
  const isLoading = useRef(false);

  const formObj = useForm<FactoryRegisterDef>();
  const { handleSubmit, watch, reset, formState } = formObj;

  usePreventRouting(Boolean(Object.keys(formState.dirtyFields).length));

  const { data: factoryDataArr } = useFactoryArr();
  const { mutate: addFactoryMutation } = useAddFactory();

  const factoryPostSubmitHandler = (factoryRequestObj: FactoryRegisterDef) => {
    if (isLoading.current) {
      return;
    }
    isLoading.current = true;
    if (editingIndex === null) {
      factoryUploadConfirmEvent();
    }
    factoryEditConfirmEvent();
    if (window.confirm(FACTORY_MESSAGE_OBJ.REGISTER)) {
      addFactoryMutation(
        {
          ...factoryRequestObj,
          bus_bool: factoryRequestObj.bus_bool === "true",
          bus_etc: factoryRequestObj.bus_etc === "" ? null : factoryRequestObj.bus_etc,
          dormitory_etc: factoryRequestObj.dormitory_etc === "" ? null : factoryRequestObj.dormitory_etc,
          dormitory_bool: factoryRequestObj.dormitory_bool === "true",
          id: editingIndex === null ? undefined : factoryDataArr?.[Number(editingIndex)]?.id,
        },
        {
          onSuccess: () => {
            if (editingIndex === null) {
              factoryUploadDoneEvent();
              return;
            }
            factoryEditDoneEvent();
          },
          onSettled: () => {
            isLoading.current = false;
          },
        }
      );
      setEditingIndex(null);
    }
    isLoading.current = false;
  };

  useEffect(() => {
    if (formState.submitCount === 0) return;
    if (editingIndex === null) {
      factoryUploadFailEvent(formState.submitCount);
      return;
    }
    factoryEditFailEvent(formState.submitCount);
    // submitCount의 이전 값 비교하여 submitCount만 바뀔 때 리렌더링하는 로직이 오히려 더 복잡하므로 라인 추가
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  useEffect(() => {
    if (editingIndex === null) {
      reset(defaultInput);
      return;
    }

    if (!factoryDataArr) {
      return;
    }

    reset(
      {
        factory_name: factoryDataArr[editingIndex].name,
        address: factoryDataArr[editingIndex].address,
        product: factoryDataArr[editingIndex].product,
        male_number: factoryDataArr[editingIndex].maleNumber,
        female_number: factoryDataArr[editingIndex].femaleNumber,
        bus_bool: factoryDataArr[editingIndex].bus.exists ? "true" : "false",
        bus_etc: factoryDataArr[editingIndex].bus.desc || "",
        dormitory_bool: factoryDataArr[editingIndex].dormitory.exists ? "true" : "false",
        dormitory_etc: factoryDataArr[editingIndex].dormitory.desc || "",
      },
      { keepDirtyValues: true }
    );
  }, [factoryDataArr, editingIndex, reset]);

  const totalWorkerNumber = Number(watch("male_number") || 0) + Number(watch("female_number") || 0);

  return (
    <section data-testid="factory/list/RegisterPart">
      <form onSubmit={handleSubmit(factoryPostSubmitHandler)}>
        <div css={cssObj.container}>
          <section css={cssObj.wrapper}>
            <FactoryBaseInfo
              formObj={formObj}
              requestStatus={editingIndex !== null ? factoryDataArr?.[editingIndex].status.name : undefined}
            />
            <FactoryDetailInfo formObj={formObj} totalWorkerNumber={totalWorkerNumber} />
          </section>
        </div>
        <div css={cssObj.buttonCenterContainer}>
          {editingIndex === null ? (
            <div css={cssObj.submitButtonContainer} key="factoryRegisterContainer">
              <SharedButton
                radius="round"
                fontColor={COLORS.GRAY100}
                backgroundColor={COLORS.BLUE_FIRST40}
                size="xLarge"
                text="공장 등록"
                onClickHandler="submit"
                iconObj={{ icon: FiPlus, location: "left" }}
              />
            </div>
          ) : (
            <div css={cssObj.editButtonContainer} key="factoryEditContainer">
              <SharedButton
                radius="round"
                fontColor={COLORS.GRAY10}
                backgroundColor={COLORS.GRAY80}
                size="xLarge"
                text="수정 취소"
                onClickHandler={() => {
                  setEditingIndex(null);
                }}
                iconObj={{ icon: FiX, location: "left" }}
              />
              <SharedButton
                radius="round"
                fontColor={COLORS.GRAY100}
                backgroundColor={COLORS.BLUE_FIRST40}
                size="xLarge"
                text="공장 수정"
                onClickHandler="submit"
                iconObj={{ icon: FiEdit, location: "left" }}
              />
            </div>
          )}
        </div>
      </form>
    </section>
  );
};
