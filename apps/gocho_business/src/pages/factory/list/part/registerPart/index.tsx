import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiEdit, FiPlus, FiX } from "react-icons/fi";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { useAddFactory } from "@/apis/factory/useAddFactory";
import { useFactoryArr } from "@/apis/factory/useFactoryArr";
import {
  factoryEditConfirmEvent,
  factoryEditDoneEvent,
  factoryEditFailEvent,
  factoryUploadConfirmEvent,
  factoryUploadDoneEvent,
  factoryUploadFailEvent,
} from "@/ga/factoryList";

import { cssObj } from "./style";
import { FactoryRegisterDef, RegisterPartProps } from "./type";
import { FactoryBaseInfo } from "../../component/factoryBaseInfo";
import { FactoryDetailInfo } from "../../component/factoryDetailInfo";
import { defaultInput, FACTORY_MESSSAGE_OBJ } from "./constant";

export const RegisterPart: FunctionComponent<RegisterPartProps> = ({ editingIndex, setEditingIndex }) => {
  const formObj = useForm<FactoryRegisterDef>();
  const {
    handleSubmit,
    watch,
    reset,
    formState: { submitCount },
  } = formObj;

  const { data: factoryDataArr } = useFactoryArr();
  const { mutate: addFactoryMutation } = useAddFactory();

  const factoryPostSubmitHandler = (factoryRequestObj: FactoryRegisterDef) => {
    if (editingIndex === null) {
      factoryUploadConfirmEvent();
    }
    factoryEditConfirmEvent();
    if (window.confirm(FACTORY_MESSSAGE_OBJ.REGISTER)) {
      addFactoryMutation(
        {
          ...factoryRequestObj,
          bus_bool: factoryRequestObj.bus_bool === "true",
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
        }
      );
      setEditingIndex(null);
    }
  };

  useEffect(() => {
    if (submitCount === 0) return;
    if (editingIndex === null) {
      factoryUploadFailEvent(submitCount);
      return;
    }
    factoryEditFailEvent(submitCount);
    // submitCount의 이전 값 비교하여 submitCount만 바뀔 때 리렌더링하는 로직이 오히려 더 복잡하므로 라인 추가
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitCount]);

  useEffect(() => {
    if (editingIndex === null) {
      reset(defaultInput);
      return;
    }

    if (!factoryDataArr) {
      return;
    }

    reset({
      factory_name: factoryDataArr[editingIndex].name,
      address: factoryDataArr[editingIndex].address,
      product: factoryDataArr[editingIndex].product,
      male_number: factoryDataArr[editingIndex].maleNumber,
      female_number: factoryDataArr[editingIndex].femaleNumber,
      bus_bool: factoryDataArr[editingIndex].bus.exists ? "true" : "false",
      bus_etc: factoryDataArr[editingIndex].bus.desc || "",
      dormitory_bool: factoryDataArr[editingIndex].dormitory.exists ? "true" : "false",
      dormitory_etc: factoryDataArr[editingIndex].dormitory.desc || "",
    });
  }, [factoryDataArr, editingIndex, reset]);

  const totalWorkerNumber = Number(watch("male_number") || 0) + Number(watch("female_number") || 0);

  return (
    <section data-testid="factory/list/RegisterPart">
      <form onSubmit={handleSubmit(factoryPostSubmitHandler)}>
        <div css={cssObj.container}>
          <section css={cssObj.wrapper}>
            <FactoryBaseInfo
              formObj={formObj}
              reqeustStatus={editingIndex !== null ? factoryDataArr?.[editingIndex].status.name : undefined}
            />
            <FactoryDetailInfo formObj={formObj} totalWorkerNumber={totalWorkerNumber} />
          </section>
        </div>
        <div css={cssObj.buttonCenterContainer}>
          {editingIndex === null ? (
            <div css={cssObj.suibmitButtonContainer} key="factoryRegisterContainer">
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
