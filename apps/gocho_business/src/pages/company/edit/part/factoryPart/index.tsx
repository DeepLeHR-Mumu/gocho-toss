import { FunctionComponent, useEffect, useState } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";

import { commonCssObj } from "@/styles";

import { FactoryModal } from "../../component";
import { FactoryPartProps, FactoryDef } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ companyForm }) => {
  const { watch, setValue } = companyForm;

  const [modal, setModal] = useState<{ state: boolean; modifyIndex: number | null }>({
    state: false,
    modifyIndex: null,
  });
  const [factories, setFactories] = useState<FactoryDef[]>([]);

  const deleteFactoryHandler = (index: number) => {
    const newFactories = [...factories];
    newFactories.splice(index, 1);
    setFactories(newFactories);
  };

  useEffect(() => {
    setValue("factory_arr", factories);
  }, [setValue, factories]);

  return (
    <section css={commonCssObj.partContainer}>
      <h3 css={commonCssObj.partTitle}>공장 등록</h3>
      <button
        type="button"
        css={cssObj.addFactoryButton}
        onClick={() => {
          setModal((prev) => ({ ...prev, state: true }));
        }}
      >
        <FiPlus />
        공장 추가
      </button>
      <div css={cssObj.factoryList}>
        {watch("factory_arr")?.map((factory, index) => (
          <div key={`companyEditFactory${factory.id}`} css={cssObj.factoryBox}>
            <div css={cssObj.factoryInfoWrapper}>
              {factory.factory_name}
              <p css={cssObj.factoryAddress}>{factory.address}</p>
            </div>
            <div css={cssObj.buttonContainer}>
              <button
                type="button"
                css={cssObj.editButton}
                onClick={() => {
                  setModal({ state: true, modifyIndex: index });
                }}
              >
                <FiEdit3 />
              </button>
              <button
                type="button"
                aria-label={`공장${factory.factory_name}삭제하기`}
                css={cssObj.deleteButton}
                onClick={() => deleteFactoryHandler(index)}
              >
                <FiMinus />
              </button>
            </div>
          </div>
        ))}
      </div>
      {modal.state && (
        <FactoryModal
          defaultFactory={modal.modifyIndex !== null ? factories[modal.modifyIndex] : null}
          cancel={() => setModal({ state: false, modifyIndex: null })}
          add={(newFactory) => {
            setValue("factory_arr", [
              ...watch("factory_arr"),
              {
                ...newFactory,
              },
            ]);
          }}
          modify={(newFactory) => {
            if (modal.modifyIndex !== null) {
              const newFactories = [...factories];
              newFactories[modal.modifyIndex] = { ...newFactory };
              setFactories(newFactories);
            }
          }}
        />
      )}
    </section>
  );
};
