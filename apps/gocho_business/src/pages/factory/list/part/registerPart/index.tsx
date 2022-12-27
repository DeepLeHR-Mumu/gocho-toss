import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAddFactory } from "@/apis/factory/useAddFactory";
import { useFactoryArr } from "@/apis/factory/useFactoryArr";

import { cssObj } from "./style";
import { FactoryRegisterDef, RegisterPartProps } from "./type";
import { FactoryBaseInfo } from "../../component/factoryBaseInfo";
import { FactoryDetailInfo } from "../../component/factoryDetailInfo";
import { defaultInput, FACTORY_MESSSAGE_OBJ } from "./constant";

export const RegisterPart: FunctionComponent<RegisterPartProps> = ({ isEditing, setIsEditing }) => {
  const { register, handleSubmit, watch, reset, setValue, formState } = useForm<FactoryRegisterDef>();

  const { data: factoryDataArr } = useFactoryArr();
  const { mutate: addFactoryMutation } = useAddFactory();

  const factoryPostSubmitHandler = (factoryRequestObj: FactoryRegisterDef) => {
    if (window.confirm(FACTORY_MESSSAGE_OBJ.REGISTER)) {
      addFactoryMutation({
        ...factoryRequestObj,
        bus_bool: factoryRequestObj.bus_bool === "true",
        dormitory_bool: factoryRequestObj.dormitory_bool === "true",
        id: isEditing && factoryDataArr?.[Number(isEditing)]?.id,
      });
      reset(defaultInput);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (isEditing === false) {
      reset(defaultInput);
      return;
    }
    if (!factoryDataArr) {
      return;
    }
    reset({
      factory_name: factoryDataArr[isEditing].name,
      address: factoryDataArr[isEditing].address,
      product: factoryDataArr[isEditing].product,
      male_number: factoryDataArr[isEditing].maleNumber,
      female_number: factoryDataArr[isEditing].femaleNumber,
      bus_bool: factoryDataArr[isEditing].bus.exists ? "true" : "false",
      bus_etc: factoryDataArr[isEditing].bus.desc || "",
      dormitory_bool: factoryDataArr[isEditing].dormitory.exists ? "true" : "false",
      dormitory_etc: factoryDataArr[isEditing].dormitory.desc || "",
    });
  }, [factoryDataArr, isEditing, reset]);

  const totalWorkerNumber = Number(watch("male_number") || 0) + Number(watch("female_number") || 0);

  return (
    <section data-testid="factory/list/RegisterPart">
      <form onSubmit={handleSubmit(factoryPostSubmitHandler)}>
        <div css={cssObj.container}>
          <section css={cssObj.wrapper}>
            <FactoryBaseInfo register={register} setValue={setValue} formState={formState} />
            <hr />
            <FactoryDetailInfo register={register} totalWorkerNumber={totalWorkerNumber} formState={formState} />
          </section>
        </div>
        <div css={cssObj.buttonCenterContainer}>
          {isEditing === false ? (
            <button type="submit">공장 등록</button>
          ) : (
            <div css={cssObj.buttonContainer}>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
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
