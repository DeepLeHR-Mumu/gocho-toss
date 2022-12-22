import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

import { useAddFactory } from "@/apis/factory/useAddFactory";

import { cssObj } from "./style";
import { FactoryRegisterDef } from "./type";
import { FactoryBaseInfo } from "../../component/factoryBaseInfo";
import { FactoryDetailInfo } from "../../component/factoryDetailInfo";

export const RegisterPart: FunctionComponent = () => {
  const { register, handleSubmit, watch } = useForm<FactoryRegisterDef>();

  const { mutate: addFactoryMutation } = useAddFactory();

  const factorySubmitHandler = (factoryRequestObj: FactoryRegisterDef) => {
    addFactoryMutation({
      ...factoryRequestObj,
      bus_bool: factoryRequestObj.bus_bool === "true",
      dormitory_bool: factoryRequestObj.dormitory_bool === "true",
    });
  };

  const totalWorkerNumber = (watch("male_number") || 0) + (watch("female_number") || 0);

  return (
    <>
      <h1>공장 목록</h1>
      <section>
        <div>간단히 공장을 등록해보세요.</div>
        <div css={cssObj.container}>
          <form onSubmit={handleSubmit(factorySubmitHandler)}>
            <section css={cssObj.wrapper}>
              <FactoryBaseInfo register={register} />
              <hr />
              <FactoryDetailInfo register={register} totalWorkerNumber={totalWorkerNumber} />
            </section>
            <button type="submit">공장 등록</button>
          </form>
        </div>
      </section>
    </>
  );
};
