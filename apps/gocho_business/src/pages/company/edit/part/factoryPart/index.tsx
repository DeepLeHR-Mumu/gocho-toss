import { FunctionComponent } from "react";
import { FiEdit3, FiMinus, FiPlus } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import { useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";
import { factoryArrKeyObj, useDeleteFactory } from "@/apis";
import { factoryDeleteConfirmEvent, factoryDeleteDoneEvent } from "@/ga";

import { FactoryPartProps } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ companyData }) => {
  const queryClient = useQueryClient();

  const { setModal } = useModal();
  const { mutate: deleteFactoryMutation } = useDeleteFactory();

  const deleteFactoryHandler = (factoryId: number) => {
    factoryDeleteConfirmEvent();
    if (window.confirm("공장을 삭제하시겠습니까?")) {
      deleteFactoryMutation(
        { factoryId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(factoryArrKeyObj.all);
            factoryDeleteDoneEvent();
          },
        }
      );
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
        {companyData.factory.map((factory) => (
          <div key={`companyEditFactory${factory.id}`} css={cssObj.factoryBox}>
            <div css={cssObj.factoryInfoWrapper}>
              {factory.name}
              <p css={cssObj.factoryAddress}>{factory.address}</p>
            </div>
            <div css={cssObj.buttonContainer}>
              <button
                type="button"
                css={cssObj.editButton}
                onClick={() => {
                  setModal("factoryEditModal", factory);
                }}
              >
                <FiEdit3 />
              </button>
              <button
                type="button"
                aria-label={`공장${factory.name}삭제하기`}
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
