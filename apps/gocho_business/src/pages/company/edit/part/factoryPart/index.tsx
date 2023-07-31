import { FunctionComponent } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";

import { useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";
import { factoryDeleteConfirmEvent, factoryDeleteDoneEvent } from "@/ga";

import { FactoryPartProps } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ companyForm }) => {
  const { setModal } = useModal();
  const { watch, setValue } = companyForm;

  const deleteFactoryHandler = (factoryId: number) => {
    factoryDeleteConfirmEvent();
    if (window.confirm("공장을 삭제하시겠습니까?")) {
      const prevFactoryArr = watch("factory_arr");
      const filteredArr = prevFactoryArr ? prevFactoryArr.filter((factory) => factory.id !== factoryId) : [];
      setValue("factory_arr", filteredArr, { shouldDirty: true });
      factoryDeleteDoneEvent();
    }
  };

  return (
    <section css={commonCssObj.partContainer}>
      <h3 css={commonCssObj.partTitle}>공장 등록</h3>
      <button
        type="button"
        css={cssObj.addFactoryButton}
        onClick={() => {
          setModal("factoryAddModal");
        }}
      >
        <FiPlus />
        공장 추가
      </button>
      <div css={cssObj.factoryList}>
        {watch("factory_arr")?.map((factory) => (
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
                  const selectedFactory = watch("factory_arr").find((factoryObj) => factoryObj.id === factory.id);
                  if (selectedFactory) setModal("factoryEditModal", { factory: selectedFactory, companyForm });
                }}
              >
                <FiEdit3 />
              </button>
              <button
                type="button"
                aria-label={`공장${factory.factory_name}삭제하기`}
                css={cssObj.deleteButton}
                onClick={() => deleteFactoryHandler(factory.id)}
              >
                <FiMinus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
