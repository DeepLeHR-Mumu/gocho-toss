import { FunctionComponent, useState } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";

import { commonCssObj } from "@/styles";

import { FactoryModal } from "../../component";
import { FactoryPartProps } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ companyForm }) => {
  const { watch, setValue } = companyForm;

  const [modal, setModal] = useState<{ state: boolean; modifyIndex: number | null }>({
    state: false,
    modifyIndex: null,
  });

  const deleteFactoryHandler = (index: number) => {
    const newFactories = [...watch("factory_arr")];
    newFactories.splice(index, 1);
    setValue("factory_arr", newFactories, { shouldDirty: true });
  };

  return (
    <section css={commonCssObj.partContainer}>
      <h3 css={commonCssObj.partTitle}>공장 등록</h3>
      <button
        type="button"
        css={cssObj.addFactoryButton}
        onClick={() => {
          setModal({ state: true, modifyIndex: null });
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
          factory={modal.modifyIndex !== null ? watch("factory_arr")[modal.modifyIndex] : null}
          addFactoryArr={(newFactory) => {
            setValue("factory_arr", [...watch("factory_arr"), { ...newFactory }], { shouldDirty: true });
          }}
          modifyFactoryArr={(newFactory) => {
            if (modal.modifyIndex !== null) {
              const newFactories = [...watch("factory_arr")];
              newFactories[modal.modifyIndex] = { ...newFactory };
              setValue("factory_arr", newFactories, { shouldDirty: true });
            }
          }}
          closeModal={() => setModal({ state: false, modifyIndex: null })}
        />
      )}
    </section>
  );
};
