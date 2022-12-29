import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAddFactory } from "@/apis/factory/useAddFactory";
import { useFactoryArr } from "@/apis/factory/useFactoryArr";

import { cssObj } from "./style";
import { FactoryRegisterDef, RegisterPartProps } from "./type";
import { FactoryBaseInfo } from "../../component/factoryBaseInfo";
import { FactoryDetailInfo } from "../../component/factoryDetailInfo";
import { defaultInput, FACTORY_MESSSAGE_OBJ } from "./constant";

export const RegisterPart: FunctionComponent<RegisterPartProps> = ({ editingIndex, setEditingIndex }) => {
  const formObj = useForm<FactoryRegisterDef>();
  const { handleSubmit, watch, reset } = formObj;

  const { data: factoryDataArr } = useFactoryArr();
  const { mutate: addFactoryMutation } = useAddFactory();

  const factoryPostSubmitHandler = (factoryRequestObj: FactoryRegisterDef) => {
    if (window.confirm(FACTORY_MESSSAGE_OBJ.REGISTER)) {
      addFactoryMutation({
        ...factoryRequestObj,
        bus_bool: factoryRequestObj.bus_bool === "true",
        dormitory_bool: factoryRequestObj.dormitory_bool === "true",
        id: editingIndex === null ? undefined : factoryDataArr?.[Number(editingIndex)]?.id,
      });
      reset(defaultInput);
      setEditingIndex(null);
    }
  };

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
            <FactoryBaseInfo formObj={formObj} />
            <FactoryDetailInfo formObj={formObj} totalWorkerNumber={totalWorkerNumber} />
          </section>
        </div>
        <div css={cssObj.buttonCenterContainer}>
          {editingIndex === null ? (
            <button type="submit">공장 등록</button>
          ) : (
            <div css={cssObj.buttonContainer}>
              <button
                type="button"
                onClick={() => {
                  setEditingIndex(null);
                }}
              >
                수정 취소
              </button>
              <button type="submit">공장 수정</button>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};
