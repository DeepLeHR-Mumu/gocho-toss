import { FunctionComponent, useState, useEffect } from "react";
import { FiEdit3, FiMinus, FiPlus, FiHelpCircle } from "react-icons/fi";

import { FactoryModal, Tooltip } from "../../../component";
import { AuthFactoryPartProps, FactoryDef } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<AuthFactoryPartProps> = ({ companyAuthForm }) => {
  const [tooltip, setTooltip] = useState(false);
  const [modal, setModal] = useState<{ state: boolean; modifyIndex: number | null }>({
    state: false,
    modifyIndex: null,
  });
  const [factoryArr, setFactoryArr] = useState<FactoryDef[]>([]);

  const { setValue } = companyAuthForm;

  const deleteFactoryHandler = (index: number) => {
    const newFactoryArr = [...factoryArr];
    newFactoryArr.splice(index, 1);
    setFactoryArr(newFactoryArr);
  };

  useEffect(() => {
    setValue("factory_arr", factoryArr);
  }, [setValue, factoryArr]);

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
          {factoryArr.map((factory, index) => (
            <div key={`companyEditFactory${factory.address}`} css={cssObj.factoryBox}>
              <div css={cssObj.factoryInfoWrapper}>
                {factory.factory_name}
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
      </section>
      {modal.state && (
        <FactoryModal
          defaultFactory={modal.modifyIndex !== null ? factoryArr[modal.modifyIndex] : null}
          cancel={() => setModal({ state: false, modifyIndex: null })}
          add={(newFactory) => {
            setFactoryArr((prev) => [{ ...newFactory }, ...prev]);
          }}
          modify={(newFactory) => {
            if (modal.modifyIndex !== null) {
              const newFactoryArr = [...factoryArr];
              newFactoryArr[modal.modifyIndex] = { ...newFactory };
              setFactoryArr(newFactoryArr);
            }
          }}
        />
      )}
    </>
  );
};
