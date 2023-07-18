import { FunctionComponent, useState, useEffect } from "react";
import { FiEdit3, FiMinus, FiPlus, FiHelpCircle } from "react-icons/fi";

// import { useDeleteFactory } from "@/apis";
// import { factoryDeleteConfirmEvent, factoryDeleteDoneEvent } from "@/ga";

import { AuthFactoryAddModal, Tooltip } from "../../../component";
import { AuthFactoryPartProps, Factory } from "./type";
import { cssObj } from "./style";

export const AuthFactoryPart: FunctionComponent<AuthFactoryPartProps> = ({ companyAuthForm }) => {
  const [tooltip, setTooltip] = useState(false);
  const [modal, setModal] = useState<{ state: boolean; modifyIndex: number | null }>({
    state: false,
    modifyIndex: null,
  });
  const [factories, setFactories] = useState<Factory[]>([]);

  const { setValue } = companyAuthForm;

  // const { mutate: deleteFactoryMutation } = useDeleteFactory();

  const deleteFactoryHandler = (index: number) => {
    const newFactories = [...factories];
    newFactories.splice(index, 1);
    setFactories(newFactories);

    // factoryDeleteConfirmEvent();
    // if (window.confirm("공장을 삭제하시겠습니까?")) {
    //   deleteFactoryMutation(
    //     { factoryId },
    //     {
    //       onSuccess: () => {
    //         factoryDeleteDoneEvent();
    //       },
    //     }
    //   );
    // }
  };

  useEffect(() => {
    setValue("factory", factories);
  }, [setValue, factories]);

  return (
    <>
      <section css={cssObj.partContainer}>
        <div css={cssObj.partTitle}>
          공장 등록
          <div css={cssObj.tooltipWrapper} onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>
            <FiHelpCircle />
            {tooltip && <Tooltip>공장 정보를 입력하면 공고 등록 시 간편하게 근무지를 선택하실 수 있습니다.</Tooltip>}
          </div>
        </div>
        <button
          type="button"
          css={cssObj.addFactoryButton}
          onClick={() => setModal((prev) => ({ ...prev, state: true }))}
        >
          <FiPlus />
          공장 추가
        </button>
        <div css={cssObj.factoryList}>
          {factories.map((factory, index) => (
            // NOTE 고유한 값 사용 전까지 index 로
            // eslint-disable-next-line
            <div key={`companyEditFactory${index}`} css={cssObj.factoryBox}>
              <div css={cssObj.factoryInfoWrapper}>
                {factory.name}
                <p css={cssObj.factoryAddress}>{factory.address}</p>
              </div>
              <div css={cssObj.buttonContainer}>
                <button
                  type="button"
                  css={cssObj.editButton}
                  onClick={() => setModal({ state: true, modifyIndex: index })}
                >
                  <FiEdit3 />
                </button>
                <button
                  type="button"
                  aria-label={`공장${factory.name}삭제하기`}
                  css={cssObj.deleteButton}
                  onClick={() => deleteFactoryHandler(index)}
                >
                  <FiMinus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {modal.state && (
        <AuthFactoryAddModal
          defaultFactory={modal.modifyIndex !== null ? factories[modal.modifyIndex] : null}
          cancel={() => setModal({ state: false, modifyIndex: null })}
          add={(newFactory) => {
            setFactories((prev) => [
              {
                ...newFactory,
                bus: { ...newFactory.bus, exists: newFactory.bus.exists === "true" },
                dormitory: { ...newFactory.dormitory, exists: newFactory.dormitory.exists === "true" },
              },
              ...prev,
            ]);
          }}
          modify={(newFactory) => {
            if (modal.modifyIndex !== null) {
              const newFactories = [...factories];
              newFactories[modal.modifyIndex] = {
                ...newFactory,
                bus: { ...newFactory.bus, exists: newFactory.bus.exists === "true" },
                dormitory: { ...newFactory.dormitory, exists: newFactory.dormitory.exists === "true" },
              };
              setFactories(newFactories);
            }
          }}
        />
      )}
    </>
  );
};
